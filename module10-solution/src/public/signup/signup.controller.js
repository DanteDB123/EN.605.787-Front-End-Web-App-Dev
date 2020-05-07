(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['user', 'saveUser'];
function SignUpController(user, saveUser) {
  var signUpCtr = this;

  signUpCtr.user = user;

  signUpCtr.submit = function(){
    saveUser(signUpCtr.user);
    signUpCtr.saved = true;
  }
}

})();
