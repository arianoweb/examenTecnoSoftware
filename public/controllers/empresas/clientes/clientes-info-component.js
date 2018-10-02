angular.module('app')

    .controller('clienteController', ['$scope', 'clienteServices',

        function(){

    }
    ])
    .directive('listaClientes', ['clienteServices', 
    function (clienteServices) {
        return {
            restrict: 'E',
            scope: {
            empresa: '='
            },
            link: function (scope) {
                clienteServices.obtenerClientes(scope.empresa).then(function (response) {
                    scope.clientes = response.result;
                });
            },
            templateUrl: 'controllers/empresas/clientes/clientes-info-template.html'
        };
    }
]);
