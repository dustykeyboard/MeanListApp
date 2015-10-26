'use strict';

angular.module('app', []);

angular.module('app')
.controller('ListCtrl', function ($scope, ListSvc) {
	$scope.title = 'Loading';
	$scope.id = null;
	$scope.items = [];
	
	$scope.refresh = function () {
		ListSvc.fetchList( $scope.id )
		.then( function( list ) {
			console.log(list.data);
			console.log('List Title is', list.data.title);
			$scope.title = list.data.title;
			$scope.items = list.data.items;
		});
	}
	
	$scope.addItem = function () {
		ListSvc.add( $scope.newItem );
		$scope.newItem = {};
		$scope.refresh();
	}
	
	$scope.done = function ( idx ) {
		var item = $scope.items[idx];
		ListSvc.done(item._id);
		$scope.refresh();
	}
	
	$scope.undone = function ( idx ) {
		var item = $scope.items[idx];
		ListSvc.undone(item._id);
		$scope.refresh();
	}
	
	$scope.deleteItem = function ( idx ) {
		var item = $scope.items[idx];
		ListSvc.delete(item._id);
		$scope.refresh();
	}
	
	$scope.init = function( id ) {
		$scope.id = id;
		$scope.refresh();
	}
});

angular.module('app')
.service('ListSvc', function ($http) {
	this.fetchList = function (id) {
		return $http.get('/api/list/'+id);
	};
	
	this.add = function (item) {
		return $http.post('/api/items', item)
	};
	
	this.done = function (id) {
		return $http.put(`/api/items/${id}`);
	}
	
	this.delete = function (id) {
		return $http.delete(`/api/items/${id}`);
	}
});


angular.module('app')
.controller('UserCtrl', function ($scope, UserSvc) {
	$scope.users = [];

	$scope.refresh = function () {
		UserSvc.fetch()
		.then( function( response ) {
			console.log( response );
			$scope.users = response.data;
		});
	}

	$scope.addUser = function () {
		UserSvc.add( $scope.newUser );
		$scope.newUser = {};
		$scope.refresh();
	}

	$scope.deleteUser = function ( idx ) {
		var user = $scope.users[idx];
		UserSvc.delete(user._id);
		$scope.refresh();
	}

	$scope.refresh();
});

angular.module('app')
.service('UserSvc', function ($http) {
	this.fetch = function () {
		return $http.get( '/api/users' );
	};
	
	this.add = function (user) {
		return $http.post( '/api/users', user )
	};
	
	this.update = function (id, user) {
		return $http.put( '/api/users/'+id, user );
	}
	
	this.delete = function (id) {
		return $http.delete( '/api/users/'+id );
	}
});