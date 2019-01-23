(function () {
  angular.module("menuApp",[])
  .controller("myController",myControllerMain)
  .service("fetchService",fetchServiceMain)
  .directive("menuItem",menuItems);
  function menuItems() {
    var ddo={
      templateUrl:"items.html"
    }
    return ddo;
  }
  myControllerMain.$inject=['fetchService'];
  function myControllerMain(fetchService) {
    var x;
    x= this;
    x.inp="";
    x.fetch = function() {
      if(x.inp!==""){
      x.show=[];
      var promise = fetchService.getItems();
      promise.then(function (response) {
        x.error="";
        x.data = response.data.menu_items;
        console.log(x.inp);

          console.log("in");
          console.log(x.data);
          for(var it=0;it<x.data.length;it++)
              {
                var name =x.data[it].description;
                if(name.indexOf(x.inp) !=-1)
                {
                  x.show.push(x.data[it]);
                }
              }
          console.log(x.show.length);
          if(x.show.length===0)
          {
            x.error="Nothing found";
            
          }
          })
            .catch(function(error) {
          console.log("Some Thing Went Worng!");
        });

    }
    else {
        x.error="Nothing found";
    }
  };

  x.remove=function (index) {
    x.show.splice(index,1);
  }
  };
  fetchServiceMain.$inject=['$http']
  function fetchServiceMain($http) {
    var fetch=this;
    fetch.getItems=function () {
      var result=$http({
        mehtod:"GET",
        url:("https://davids-restaurant.herokuapp.com/menu_items.json")
      });
      return result;
    };

  };
})();
