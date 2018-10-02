angular.module('app')
    .factory('clienteServices', 
        function($http) {
         return {
	              obtenerClientes: function(parametro) {
									var url = '../dataJson/clients' + parametro + '.json';
									var oPromise = $http.get(url).then(function (response) {
	        return response.data;
	      });
	      return oPromise;
	 }
	
  }; // fin return	
}) 
