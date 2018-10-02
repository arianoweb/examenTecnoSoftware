angular.module('app')
    .factory('empServices', 
        function($http) {
         return {
	              obtenerEmpresas: function() {
	              var oPromise = $http.get('../dataJson/companies.json').then(function (response) {
	        return response.data;
	      });
	      return oPromise;
	 }
	
  }; // fin return	
}) 
