angular.module('appLlibres').controller("LlibresController", function($scope,LlibresFactory) {
    $scope.llibres= [];
    
    LlibresFactory.query(function(llibres) {
            $scope.llibres = llibres;
        });
        
// http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
        
        
    $scope.afegirLlibre = function() {
        if ($scope.titol && $scope.isbn) {
            LlibresFactory.save({
                isbn : $scope.isbn,
                titol: $scope.titol,
                autors: ["Xaviii"]
            }, function(llibre) {
                $scope.llibres.unshift(llibre);
                $scope.isbn = null;
                $scope.titol = null;
            });
        }
    };
    $scope.esborrarLlibre= function(llibre) {
        console.log(llibre.isbn);
        LlibresFactory.delete({id:llibre.isbn},function(l){
            console.log($scope.llibres.indexOf(llibre));
            $scope.llibres.splice($scope.llibres.indexOf(llibre),1);
        });
        console.log(llibre);
    };
    
    $scope.editarLlibre = function(llibre) {
        $scope.editTitol = llibre.titol;
        $scope.editIsbn = llibre.isbn;
        $scope.llibreAEditar = llibre;
    };
    $scope.updateLlibre = function() {
        if ($scope.editTitol && $scope.editIsbn) {
            LlibresFactory.update({ titol: $scope.editTitol, isbn: $scope.editIsbn, _id: $scope.llibreAEditar._id},function(llibre){
                     $scope.llibreAEditar.isbn =$scope.editIsbn;
                    $scope.llibreAEditar.titol = $scope.editTitol;
                    $scope.editTitol = null;
                    $scope.editIsbn = null;
                });
            
        }
    };
});