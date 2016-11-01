(function(){
angular.module('user', [])
  .controller('LoginController',
  ['$state', '$timeout', function($state, $timeout){
    var vm = this;
    vm.sumbitted = false;

    vm.submitLogin = submitLogin;
    vm.goToItemList = goToItemList;

    function submitLogin() {
      vm.sumbitted = true;
      $timeout( function(){ goToItemList(); }, 1000);
      console.log('hejx');
    }

    function goToItemList(){
      $state.go('item-list');
    }
  }]);
})();
