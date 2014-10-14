/**
 * Created by campitos on 13/10/14.
 */
var miModulo= angular.module("sportsStore",["customFilters"]);
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:8091/jelastic_campitos/servicios/producto")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data = data;
            })
            .error(function (error) {
                $scope.data = error;
            });
    });

