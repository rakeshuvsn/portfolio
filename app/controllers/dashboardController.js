angular.module('health').controller('DashboardController',['$scope','UserService','ModalService', function($scope, UserService, ModalService) {

	$scope.init = function () {
		$scope.user = UserService.getUserData();
	};

	$scope.openEditProfile = function () {
		ModalService.closeModal();
		ModalService.openModal('/app/views/editProfileTemplate.html','md', '', '', $scope);
	};

	$scope.openWeightComponent = function () {
		ModalService.closeModal();
		ModalService.openModal('/app/views/weightModalTemplate.html','md', '', 'WeightController', $scope);
	};

	$scope.closeModal = function () {
		ModalService.closeModal();
	};

	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	
	$scope.series = ['Series A', 'Series B'];
	$scope.data = [
	[65, 59, 80, 81, 56, 55, 40],
	[28, 48, 40, 19, 86, 27, 90]
	];
	$scope.onClick = function (points, evt) {
	console.log(points, evt);
	};
	$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	$scope.options = {
	scales: {
	  yAxes: [
	    {
	      id: 'y-axis-1',
	      type: 'linear',
	      display: true,
	      position: 'left'
	    },
	    {
	      id: 'y-axis-2',
	      type: 'linear',
	      display: true,
	      position: 'right'
	    }
	  ]
	}
	};


	$scope.init();
}]);