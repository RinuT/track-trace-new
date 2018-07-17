'use strict';

angular.module('myApp.wholesaler', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wholesaler', {
    templateUrl: 'wholesaler/wholesaler.html',
    controller: 'wholesalerCtrl'
  });
}])

.controller('wholesalerCtrl', ['$scope','$http','$timeout',function ($scope,$http,$timeout) {
    $scope.uuid_search=""
 
    $scope.barcode=" "
     
    $scope.material=" "
     
    $scope.make=" "
     
    $scope.productStatus=" "
     
    $scope.show=false
     
    function
    Request_search() {
     
    return {
     
    "Request" : {
     
    "$class":"com.cts.ipm.track.CreateProduct",
     
    "uuid":""
     
    }
     
    }
     
    };
     
    function
    init(){
     
    var websocket =new
    WebSocket("ws://track-and-trace-network.mybluemix.net");
     
    websocket.addEventListener('open',
    evt =>
    doSocketOpen(evt));
     
    websocket.addEventListener('close',
    evt =>
    doSocketClose(evt));
     
    websocket.addEventListener('message',
    evt =>
    doSocketMessage(evt));
     
     
    }
     
     
     
    function
    doSocketClose(evt) {
     
    console.log('Close.');
     
    }
     
    // Transaction has taken place
     
    // Update table and chart
     
    function
    doSocketMessage(evt) {
     
    let data =
    JSON.parse(evt.data);
     
    $scope.show=true;
     
    $scope.uuid_search=data.uuid
     
    $scope.shipmentStatus=data.product.shipmentStatus
     
    $scope.material=data.product.material
     
    $scope.make=data.product.make
     
     
     
     
     
    $scope.barcode=data.product.batchCode
    $scope.productStatus=data.product.productStatus
     
    }
     
    // FYI
     
    function
    doSocketOpen(evt) {
     
    console.log('Open.');
     
    }
     
    $scope.search=function(){
     
    init();
     
    var uuid =$scope.uuid;
     
    var search_payload={"$class":"com.cts.ipm.track.searchProduct","uuid":uuid};
     
    var requestInfo =Request_search();
     
     
     
    $http.post("https://track-and-trace-network.mybluemix.net/api/searchProduct",search_payload).then((function(data,status,
    headers,config) {
     
     
    console.log("success");
     
     
     
    }),(function(data,status,
    headers,config) {
     
    alert( "No product with specified UUID");
     
    }));
     
    }
     
     
   
}]);