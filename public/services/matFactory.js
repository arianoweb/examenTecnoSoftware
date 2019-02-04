angular.module('app')
	.factory('materialServices', materialServices)
		function materialServices($http) {

			function obtenerMateriales() {
				var oPromise = $http.get('https://d3e6htiiul5ek9.cloudfront.net/prod/comparativa?array_sucursales=10-3-344,12-1-163,9-2-35,10-2-116&array_productos=7790199000051,7792538000340,7792540260138,7790742134608,7790742144607,7792900092898,8480017105226,7791620001173').then(function (response) {
					return response.data;
				});

				return oPromise;
			}; // fin return
			return {
				obtenerMateriales: obtenerMateriales
			};
		}	
 
