(function () {
  angular.module("a1",[])
  .controller("myController",myControllerM);
  myControllerM.$inject=['$scope'];
  function myControllerM($scope) {

    $scope.er="";
    $scope.check=function () {
      $scope.er="";
      if($scope.inp="")
        $scope.er="Please enter data first";
      else{
        var words = $scope.inp.split(",");
        if(words.length>3)
            $scope.er="Too much!";
        else {
          $scope.er="Enjoy!";

        }
      }

    };
  }
})()
