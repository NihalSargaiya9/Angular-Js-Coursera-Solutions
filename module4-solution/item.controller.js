(function () {
  angular.module("menuApp")
  .controller("itemController",itemController)
  .service("get",getMain);
  itemController.$inject=['showItem'];
  function itemController(showItem) {
    var cat = this;
    //console.log(showItem);
    cat.show = showItem.data.menu_items;


  };
  getMain.$inject=["$http"]
  function getMain($http) {
    var fetch=this;
    fetch.go= function (p) {
      var res = $http({
        method:"GET",
        url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+p)
      })
      return res;
    };
  }
})();
