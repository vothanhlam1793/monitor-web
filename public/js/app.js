var mainApp = angular.module("mainapp", []);
mainApp.controller('appController', function($scope, $interval) {
    $scope.pers = 0;
    $scope.total = 0;
    $scope.free = 0;
    $interval(function(){
        getToServer('/system', 'GET', function(data){
            try{
                var oD = JSON.parse(data);
            } catch(err){
                console.log(err);
                return;
            }
            var sys = oD.system;           
            console.log(sys)
            $scope.free = Math.round(sys.freemem/1024./10.24)/100.;
            $scope.total = Math.round(sys.totalmem/1024./10.24)/100.;
            $scope.pers = Math.round((1 - ($scope.free/$scope.total))*10000) / 100.;
        });
    }, 1000);
});