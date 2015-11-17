'use strict';

angular.module('app', []);


angular.module('app')
.controller('AppCtrl', function ($scope, ListSvc, ItemSvc) {
	$scope.username = null;
	$scope.lists = [];
	$scope.listID = null;
	$scope.list = [];
	$scope.items = [];
	$scope.username = null;
	$scope.lists = [];

	$scope.refreshLists = function () {
		ListSvc.list( $scope.username )
		.then( function( response ) {
			console.log( response.data );
			$scope.lists = response.data;
		});
	}

	$scope.addList = function () {
		ListSvc.add( $scope.newList, $scope.username );
		$scope.newList = {};
		$scope.refreshLists();
	}

	$scope.deleteList = function ( idx ) {
		var list = $scope.lists[idx];
		ListSvc.delete(list._id);
		$scope.refreshLists();
	}

	$scope.initApp = function( username ){
		console.log('initialising with user: ', username);
		$scope.username = username;
		$scope.refreshLists();
	}

	$scope.refreshItems = function(){
		ItemSvc.list( $scope.listID )
		.then( function( response ) {
			console.log( response );
			$scope.items = response.data;
		});
	}

	$scope.meta = function(){
		ListSvc.get( $scope.listID )
		.then( function( response ) {
			console.log( response );
			$scope.list = response.data;
		});
	}

	$scope.addItem = function(){
		ItemSvc.add( $scope.newItem, $scope.listID );
		$scope.newItem = {};
		$scope.refreshItems();
	}

	$scope.deleteItem = function( idx ){
		var item = $scope.items[idx];
		ItemSvc.delete(item._id);
		$scope.refreshItems();
	}
	$scope.completeItem = function( idx ){
		$scope.items[ idx ].completed = true;
	}

	$scope.loadList = function( listID ){
		console.log('initialising with listID: ', listID);
		$scope.listID = listID;
		$scope.refreshItems();
		$scope.meta();
	}
});

angular.module('app')
.service('ItemSvc', function ($http) {
	this.list = function( list ) {
		return $http.get( '/api/lists/'+list+'/items' );
	};

	this.get = function( id ) {
		return $http.get( '/api/items/'+id );
	};

	this.add = function( item, list ) {
		item.list = list;
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
.service('ListSvc', function ($http) {
	this.list = function( username ) {
		return $http.get( '/api/users/'+username+'/lists' );
	};

	this.get = function( id ) {
		return $http.get( '/api/lists/'+id );
	};

	this.add = function( list, username ) {
		list.user = username;
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