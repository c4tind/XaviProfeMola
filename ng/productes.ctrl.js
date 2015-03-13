angular.module('appProductes').controller("ProductesController", function($scope,ProductesFactory) {
    $scope.productes= [];
    
    ProductesFactory.query(function(productes) {
            $scope.productes = productes;
        });
        
// http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/consuming-restful-apis.html
        
        
    $scope.afegirProducte = function() {
        if ($scope.codi && $scope.nom && $scope.seccio && $scope.preu) {
            ProductesFactory.save({
                codi : $scope.codi,
                nom: $scope.nom,
                seccio: $scope.seccio,
                preu: $scope.preu
            }, function(producte) {
                $scope.productes.unshift(producte);
                $scope.codi = null;
                $scope.nom = null;
                $scope.seccio = null;
                $scope.preu = null;
            });
        }
    };
    $scope.esborrarProducte= function(producte) {
        console.log(producte.codi);
        ProductesFactory.delete({id:producte.codi},function(p){
            console.log($scope.productes.indexOf(producte));
            $scope.productes.splice($scope.productes.indexOf(producte),1);
        });
        console.log(producte);
    };
    
    $scope.editarProducte = function(producte) {
        $scope.editCodi = producte.codi;
        $scope.editNom = producte.nom;
        $scope.editSeccio = producte.seccio;
        $scope.editPreu = producte.preu;
        $scope.producteAEditar = producte;
    };
    $scope.updateProducte = function() {
        if ($scope.editCodi && $scope.editNom && $scope.editSeccio && $scope.editPreu) {
            ProductesFactory.update({ codi: $scope.editCodi, nom: $scope.editNom, seccio: $scope.editSeccio, preu: $scope.editPreu, _id: $scope.producteAEditar._id},function(producte){
                    $scope.producteAEditar.codi =$scope.editCodi;
                    $scope.producteAEditar.nom = $scope.editNom;
                    $scope.producteAEditar.seccio =$scope.editSeccio;
                    $scope.producteAEditar.preu = $scope.editPreu;
                    $scope.editCodi = null;
                    $scope.editNom = null;
                    $scope.editSeccio = null;
                    $scope.editPreu = null;
                });
            
        }
    };
    
    $scope.filtrarSeccio = function(producte) {
        console.log(producte.seccio);
        ProductesFactory.get({seccio:producte.seccio},function(p){
            console.log($scope.productes.indexOf(producte));
            $scope.productes.splice($scope.productes.indexOf(producte),1);
        });
        console.log(producte);
    };
});