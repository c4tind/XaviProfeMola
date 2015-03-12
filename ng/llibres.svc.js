angular.module('appLlibres').factory("LlibresFactory", function($resource) {
    return $resource("/api/llibres/:id", null,
    {
        'update': { method:'PUT' }
    });
});