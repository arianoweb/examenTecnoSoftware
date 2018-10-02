angular.module('app')

    .controller('infoProductosController', ['$scope', 'productoServices',

        function(){

    }
    ])
    .directive('infoProductos', [ 'productoServices', function (productoServices) {
    		var emp = null;
        return {
            restrict: 'E',
            scope: {
              empresa: '='
                    },
             link: function(scope){
             		productoServices.obtenerProductos(scope.empresa).then(function(response) {
              scope.productos = response.result;
             	 });
             },
        
      
            templateUrl: 'controllers/empresas/productos/productos-info-template.html'
        };
    }]);
