angular.module('starter.directives', [])

.directive('map', function($mdBottomSheet) {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var myLatLng = {lat: 37.231213, lng: -80.426263};
        var locations = [
          ['Basketball Practice Extension Lot', 37.232213, -80.425263, 4],
          ['Davidson Lot', 37.231213, -80.426263, 5],
          ['Derring Hall', 37.233213, -80.424263, 3],
          ['Derring Lot', 37.234213, -80.426263, 2],
          ['Dietrick Lot', 37.235213, -80.426263, 1],
          ['Hahn Lot', 37.230213, -80.427263, 4],
          ['Perry Street', 37.232213, -80.427263, 4]
        ];

        var images = [
          {
              url: 'img/bg_basketball.png',
              anchor: new google.maps.Point(0, 32)
          },
          {
              url: 'img/bg_davidson.png',
              anchor: new google.maps.Point(0, 32)
          },
          {
              url: 'img/bg_derringH.png',
              anchor: new google.maps.Point(0, 32)
          },
          {
              url: 'img/bg_derringL.png',
              anchor: new google.maps.Point(0, 32)
          },
          {
              url: 'img/bg_dietrick.png',
              anchor: new google.maps.Point(0, 32)
          },
          {
              url: 'img/bg_hahn.png',
              anchor: new google.maps.Point(0, 32)
          },
          {
              url: 'img/bg_perryStreet.png',
              anchor: new google.maps.Point(0, 32)
          }
        ];
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Parking Structure Perry Street Lot</h1>'+
            '<div id="bodyContent">'+
            '<p><button>Favorited</button> <button>Directions 7 min</button>' +
            'random words random words random words random words.</p>'+
            '<p>random link, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'Random link</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var mapOptions = {
          center: new google.maps.LatLng(37.231213, -80.426263),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map($element[0], mapOptions);

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: images[i]
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              showMapPopWindow();
            }
          })(marker, i));
        }

        // marker.addListener('click', function() {
        //   infowindow.open(map, marker);
        // });

        function showMapPopWindow () {
          $mdBottomSheet.show({
            templateUrl: 'templates/map-pop-up-window-template.html',
            controller: 'MapCtrl'
          });
        }

        $scope.calculateAndDisplayRoute = function (directionsService, directionsDisplay) {
          var start = '37.231213, -80.426263';
          var end = '37.232213, -80.427263';
          directionsService.route({
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        };

        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
