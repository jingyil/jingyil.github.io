angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'ngMaterial'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);

    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  /*
  最开始建立的基准的state,是一个会随着其他dot之后的内容一起走的.
   */

    /*
     #1: log-in
     */
    $stateProvider
      .state('login', {
        url: '/1-log-in',
        templateUrl: 'templates/1-log-in.html',
        controller: 'LoginCtrl'
      });
    /*
     #2: home-page
     */
    $stateProvider
      .state('homepage', {
        url: '/2-home-page',
        templateUrl: 'templates/2-home-page.html',
        controller: 'bottomSheetController'
      });

    /*
     #3: system-setting
     */
    $stateProvider
      .state('systemsetting', {
        url: '/3-system-setting',
        templateUrl: 'templates/3-system-setting.html'
      });

    /*
     #4: home-address
     */
    $stateProvider
      .state('homeaddress', {
        url: '/4-home-address',
        templateUrl: 'templates/4-home-address.html',
        controller: 'HomeaddressController'
      });

    /*
     #5: favor-parking
     */
    $stateProvider
      .state('favorparking', {
        url: '/5-favor-parking',
        templateUrl: 'templates/5-favor-parking.html',
        controller: 'FavorParkingController'
      });

    /*
    一个state对应着一个路径, 也对应着一个页面
    #6: personal settings
     */
    $stateProvider
      .state('congratulations', {
      url: '/6-personal-setting',
      templateUrl: 'templates/6-personal-setting.html'
    });

    /*
     #7: parking-map
     */
    $stateProvider
      .state('parkingmap', {
        url: '/7-parking-map',
        templateUrl: 'templates/7-parking-map.html',
        controller: 'MapCtrl'
      });

    /*
     #8: your-location
     */
    $stateProvider
      .state('yourlocation', {
        url: '/8-your-location',
        templateUrl: 'templates/8-your-location.html',
        controller: 'HomeaddressController'
      });

  /*
  定义默认的路径
   */
  $urlRouterProvider.otherwise('/1-log-in');

});
