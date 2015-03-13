angular.module('appProductes').controller("SeccioController", function($scope,SeccioFactory) {
    $scope.productes= [];
    
    SeccioFactory.query(function(productes) {
            $scope.productes = productes;
        });
});