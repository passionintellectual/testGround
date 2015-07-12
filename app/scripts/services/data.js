/**
 * Created by nemade_g on 12-07-2015.
 */
angular.module('testApp')
.factory('data',['$http', function($http){
    return {

      getData:function(){
        var responsePromise = $http(
        {
          method: 'GET',
          url: 'scripts/testdata/smaller.json',
          headers: {
          'Content-Type': 'application/json'
        },
          data: { test: 'test' }
        });
        return responsePromise;
      }
    }
  }]);
