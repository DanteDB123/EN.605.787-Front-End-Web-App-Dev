describe('menu service', function () {

  var menuService;
  var $httpBackend;
  var ApiBasePath;
  var shortname = 'A1';
  var a2Data = { "id": 1, "short_name": "A1", "name": "Won Ton Soup with Chicken", "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions", "price_small": 2.55, "price_large": 5.0, "small_portion_name": "pint", "large_portion_name": "quart", "created_at": "2020-05-06T19:09:34.146Z", "updated_at": "2020-05-06T19:09:34.146Z", "category_short_name": "A", "image_present": true };

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiPath');
    });
  });

  it('should return the menu item', function () {
    $httpBackend.whenGET(`${ApiBasePath}/menu_items/${shortname}.json`).respond(a2Data);
    menuService.getMenuItemPromise(shortname).then(function (response) {
      expect(response.data).toEqual(a2Data);
    });
    $httpBackend.flush();
  });

});