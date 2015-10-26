'use strict';

angular.module('app', []);


angular.module('app')
.controller('ItemCtrl', function ($scope, ItemSvc) {
	$scope.items = [];

	$scope.refresh = function () {
		ItemSvc.list()
		.then( function( response ) {
			console.log( response );
			$scope.items = response.data;
		});
	}

	$scope.addItem = function () {
		ItemSvc.add( $scope.newItem );
		$scope.newItem = {};
		$scope.refresh();
	}

	$scope.deleteItem = function ( idx ) {
		var item = $scope.items[idx];
		ItemsSvc.delete(item._id);
		$scope.refresh();
	}

	$scope.refresh();
});

angular.module('app')
.service('ItemSvc', function ($http) {
	this.list = function() {
		return $http.get( '/api/items' );
	};

	this.get = function( id ) {
		return $http.get( '/api/items/'+id );
	};

	this.add = function( item ) {
		return $http.post( '/api/items', item )
	};
	
	this.update = function( id, item ) {
		return $http.put( '/api/items/'+id, item );
	}
	
	this.delete = function( id ) {
		return $http.delete( '/api/items/'+id );
	}
});

angular.module('app')
.controller('ListCtrl', function ($scope, ListSvc) {
	$scope.lists = [];
	
	$scope.refresh = function () {
		ListSvc.list()
		.then( function( response ) {
			console.log( response.data );
			$scope.items = response.data;
		});
	}
	
	$scope.addList = function () {
		ListSvc.add( $scope.newList );
		$scope.newList = {};
		$scope.refresh();
	}
	
	$scope.deleteList = function ( idx ) {
		var list = $scope.lists[idx];
		ListSvc.delete(list._id);
		$scope.refresh();
	}

	$scope.refresh();
});

angular.module('app')
.service('ListSvc', function ($http) {
	this.list = function() {
		return $http.get( '/api/lists' );
	};
	
	this.get = function( id ) {
		return $http.get( '/api/lists/'+id );
	};
	
	this.add = function( list ) {
		return $http.post( '/api/lists', list )
	};
	
	this.update = function( id, update) {
		return $http.put( '/api/lists/'+id, list );
	}
	
	this.delete = function( id ) {
		return $http.delete( '/api/lists/'+id ); 
	}
});


angular.module('app')
.controller('UserCtrl', function ($scope, UserSvc) {
	$scope.users = [];

	$scope.refresh = function () {
		UserSvc.list()
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
	this.list = function() {
		return $http.get( '/api/users' );
	};

	this.get = function( id ) {
		return $http.get( '/api/users/'+id );
	};

	this.add = function( user ) {
		return $http.post( '/api/users', user )
	};
	
	this.update = function( id, user ) {
		return $http.put( '/api/users/'+id, user );
	}
	
	this.delete = function( id ) {
		return $http.delete( '/api/users/'+id );
	}
});