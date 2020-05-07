(function () {
  "use strict";

  angular.module('public')
    .directive('favoriteDish', FavoriteDishDirective);

  FavoriteDishDirective.$inject = ['$q', 'MenuService'];
  function FavoriteDishDirective($q, MenuService) {

    // code modified from https://code.angularjs.org/1.5.8/docs/guide/forms#custom-validation
    var favoriteDishDirective = {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {

        ctrl.$asyncValidators.favoriteDish = function (shortname) {

          if (ctrl.$isEmpty(shortname)) {
            // consider empty model valid
            return $q.when();
          }

          var def = $q.defer();

          MenuService.getMenuItemPromise(shortname).then(function () {
            def.resolve();
          }).catch(function () {
            def.reject();
          });

          return def.promise;
        };
      }
    };

    return favoriteDishDirective;
  }
})();