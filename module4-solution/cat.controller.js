(function () {
  angular.module("menuApp")
  .controller("catController",catControlleMain)
  .service("fetch",fetchMain);
  catControlleMain.$inject=['shows'];
  function catControlleMain(shows) {
    var cat = this;
    cat.show=shows.data;
    // var oo = fetch.go();
    // oo.then(function(response) {
    //   var res =response.data;
    //   cat.show=res;
    //   console.log(res);
    // });

  };
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
