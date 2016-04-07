'use strict';

angular.module('myNewProjectApp')
    .controller('RestroupdateCtrl',['$scope','restro',function ($scope,restroser) {
    $scope.formTitle = 'Restro update form';
    console.log($scope.tmpUpdateData);
    $scope.dataFromDB = restroser.getDataFromTemp();
    $scope.dataTobeUpdated = $scope.dataFromDB [0]
    $scope.updateMenuItem = function(hotelDetails){
    	restroser.updateHotel(hotelDetails).then(function(response){
    		console.log("response was >>>",response)
    		if(response.data._id){
    			$scope.updateResult = "Successfully updated";	
    		}else{
    			$scope.updateResult = "Verify one more time";
    		}
    		
    	},function(error){
    		console.log("error is >>>",error);
    		$scope.error = "Some thing went wrong"
    	})
    }

  }]);
