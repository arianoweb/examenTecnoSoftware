angular.module('app')

    .controller('listaEmpresasController', ['$scope', 'empServices',

        function($scope,empServices){
    onInit();
 
    function onInit(){
        empServices.obtenerEmpresas().then(function(response) {
              $scope.listaEmpresas = response.result;
         });
      }
    }
    ])
    .directive('listaEmpresas', 
    	function () {
        return {
            restrict: 'E',
            templateUrl: 'controllers/empresas/empresa-grid-template.html'
        };
    });
