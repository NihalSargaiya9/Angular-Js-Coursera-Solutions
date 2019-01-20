
(function () {


  angular.module('menuApp',["ui.router"])
  angular.module('menuApp')
  .config(RoutesConfig);
  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider']
  function RoutesConfig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('Home',{
      url:'/',
      template:'<div class="px-5"><h1>Welcome to our Restaurant</h1><br><h3 class="btn btn-primary" ui-sref="Categories">Categories</div>'
    })

    .state('Categories',{
      url:'/Categories',
      templateUrl:'items.html',
      controller: 'catController as a',
      resolve:{
        shows:['fetch',function (fetch) {

            return fetch.go();
        }]

      }
    })
    .state("items",{
      url:"/items/{short}",
      templateUrl:"itemsShow.html",
      controller:"itemController as a",
      resolve:{
        showItem:['$stateParams','get',
        function ($stateParams,get) {
            return get.go($stateParams.short).
            then(function (abc) {
              return  abc;
            });
        }]

      }
    })


  };
})();
