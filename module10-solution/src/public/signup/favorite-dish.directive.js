(function () {
  "use strict";

  angular.module('public')
    .directive('favoriteDish', FavoriteDishDirective);

  FavoriteDishDirective.$inject = ['$http', '$q', 'ApiPath'];
  function FavoriteDishDirective($http, $q, ApiPath) {

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

          var config = {
            method: "GET",
            url: (`${ApiPath}/menu_items/${shortname}.json`)
          };

          $http(config).then(function () {
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