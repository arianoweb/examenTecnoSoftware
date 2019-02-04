angular.module('app')

    .controller('listaDivinaController', ['$scope', 'materialServices', 'presupuestoServices',

        function ($scope, empServices, presupuestoServices) {
            
            $scope.empresa = {
                altura: 20,
                diametro: 20,
                presupuesto: 0,
            }
            onInit();
            function onInit() {
                $scope.empresa.presupuesto = presupuestoServices.calcularPresupuesto(0, 0);
                empServices.obtenerMateriales().then(function (response) {
                    $scope.listaMaterial = response;
                });
            }
            $scope.actualizarPresupuesto = function (){
                $scope.empresa.presupuesto = presupuestoServices.calcularPresupuesto($scope.empresa.altura, $scope.empresa.diametro);
            }
        }
    ])
    .directive('listaMateriales',
        function () {
            return {
                restrict: 'E',
                templateUrl: 'controllers/empresas/empresa-grid-template.html'
            };
        });
