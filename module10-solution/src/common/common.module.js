(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://dantedb123-en605787.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
