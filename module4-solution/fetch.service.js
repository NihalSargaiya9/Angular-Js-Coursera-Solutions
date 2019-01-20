(function () {
  angular.module('menuApp')
  .service("fetch",fetchMain);
  
  fetchMain.$inject=["$http"]
  function fetchMain($http) {
    var fetch=this;
    fetch.go=function () {
      var res = $http({
        method:"GET",
        url:("https://davids-restaurant.herokuapp.com/categories.json")
      })
      return res;
    };

  }
})();
