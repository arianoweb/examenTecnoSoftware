angular.module('app')
    .factory('productoServices', 
        function($http) {
        	
         return {
              obtenerProductos: function(parametro) {
	            var url = '../dataJson/products'+parametro+'.json';
	            var oPromise = $http.get(url).then(function (response) {

	        return response.data;
	      });
	      return oPromise;
	 }
	
  }; // fin return	
}) 
