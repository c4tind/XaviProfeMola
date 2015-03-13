angular.module('appProductes').factory("SeccioFactory", function($resource) {
    return $resource("/api/productes/seccio/Carnisseria", null,
    {
        'update': { method:'PUT' }
    });
});