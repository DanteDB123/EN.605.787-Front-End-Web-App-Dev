(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService'];
function SignUpController(UserService) {
  var signUpCtr = this;

  signUpCtr.user = UserService.getUserDetails();
  signUpCtr.submit = function(){
    UserService.setUserDetails(signUpCtr.user);
    signUpCtr.saved = true;
  }
}

})();
