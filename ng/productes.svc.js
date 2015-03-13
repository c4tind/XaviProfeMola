angular.module('appProductes').factory("ProductesFactory", function($resource) {
    return $resource("/api/productes/:id", null,
    {
        'update': { method:'PUT' }
    });
});