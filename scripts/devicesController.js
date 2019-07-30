
var app = angular.module("dashboardApp", []);

app.controller("devicesController", function ($scope, $http) {
    $http.get("http://92.100.36.182:8084/json.htm?type=devices").then(function (response) {
        $scope.devices = response.data.result;
    });
});
