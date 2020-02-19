(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of prepopulated items to buy 
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "milk", quantity: 2 },
      { name: "brownies", quantity: 8 },
      { name: "coffee", quantity: 20 },
      { name: "cake", quantity: 1 },
      { name: "chips", quantity: 5 }
    ];

    // List of items already bought
    var boughtItems = [];

    service.buyItem = function (itemIndex) {
      // Array.splice returns an array of the removed items, so we need to get the 
      // first index of that array (since we are only removing one item at a time)
      boughtItems.push(toBuyItems.splice(itemIndex, 1)[0]);
    };

    service.getItemsToBuy = function () {
      return toBuyItems;
    };

    service.getItemsAlreadyBought = function () {
      return boughtItems;
    };
  }

})();
