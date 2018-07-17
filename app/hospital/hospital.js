'use strict';

angular.module('myApp.hospital', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hospital', {
    templateUrl: 'hospital/hospital.html',
    controller: 'hospitalCtrl'
  });
}])

.controller('hospitalCtrl', ['$scope','$http','$timeout',function ($scope,$http,$timeout) {
  $scope.Create = function(){
    $scope.message = "Product have been created sucessfully";
  $scope.uuid_1=$scope.uuid;
  $scope.setValue();
  }
  $scope.setValue=function() {
   
   
     
      
    var uuid =  $scope.uuid;
    var material = $scope.material;
    var make = $scope.make;
    var batchCode =  $scope.batch_code;
    var rawMat = $scope.material_location
    var  prod=$scope.product;
    var shipment=$scope.shipment;
    var request={"$class": "com.cts.ipm.track.CreateProduct",
                  "uuid": uuid,
                  "product": {
                    "$class": "com.cts.ipm.track.Product",
                    "material": material,
                    "make": make,
                    "rawMaterialLocation": rawMat,
                    "productStatus": prod,
                    "shipmentStatus": shipment,
                    "batchCode": batchCode
                  }
                  };
       var requestInfo = Request();
     
       data : requestInfo
    console.log(uuid);
   
    var res = $http.post('https://track-and-trace-network.mybluemix.net/api/CreateProduct',request).then(function successCallback(response){
             alert("Successfully created product");
             $scope.update_response=response;
            
         }, function errorCallback(response){
             console.log("POST-ing of data failed");
         });
  }
   
  function Request() {
   
    return {
      "Request" : {
        "$class": "com.cts.ipm.track.CreateProduct",
        "uuid": "",
        "product": {
          "$class": "com.cts.ipm.track.Product",
          "material": "",
          "make": "",
          "rawMaterialLocation": "",
          "productStatus": "",
          "shipmentStatus": "",
          "batchCode": ""
       }
     }
      }
    };
   
}]);