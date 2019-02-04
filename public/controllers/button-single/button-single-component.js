angular.module('app')

    .directive('buttonSingle',
        function () {
            return {
                restrict: 'E',
                scope: {
                    "colorClass": '@color',
                    "title": '@title',
                    "accion": '@accion',
                    "icon": '@icon'
                },
                templateUrl: 'controllers/button-single/button-single-template.html',
                controller: function ($scope) {
                    var vm = $scope;


                    vm.color = 'button-single-menu button-single-' + vm.colorClass;




                },


            };
        });
