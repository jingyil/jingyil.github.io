angular.module('starter.controllers', ['ngMaterial'])

.controller('LoginCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HomeaddressController', function($scope) {
  var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
})

.controller('FavorParkingController', function($scope) {
  $scope.showImage = false;

  $scope.activeButton1 = false;
  $scope.activeButton2 = false;
  $scope.activeButton3 = false;
  $scope.activeButton4 = false;
  $scope.activeButton5 = false;
  $scope.activeButton6 = false;
  $scope.activeButton7 = false;

})

.controller('bottomSheetController', function($scope, $mdBottomSheet) {
  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet>Learn <b>Angular Material</b> @ TutorialsPoint.com!</md-bottom-sheet>'
    });
  };
})
.controller('DialogController', function($scope, $mdDialog) {
  $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
})
.controller('MapCtrl', function($scope, $mdDialog, $interval, $ionicLoading) {
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: 'DialogController',
      templateUrl: 'templates/direction-map-template.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  $scope.showAdvancedTwo = function(ev) {
    $mdDialog.show({
      controller: 'DialogController',
      templateUrl: 'templates/direction-map-template-two.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  $scope.showAdvancedTwoHalf = function(ev) {
    $mdDialog.show({
      controller: 'DialogController',
      templateUrl: 'templates/direction-map-template-two-half.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  $scope.showAdvancedThree = function(ev) {
    $mdDialog.show({
      controller: 'DialogController',
      templateUrl: 'templates/templates/direction-map-template-three.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };


  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
