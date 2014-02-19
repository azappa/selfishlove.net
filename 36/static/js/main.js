/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals _, google*/

window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';


  var mapIDs = [
      document.getElementById('paris-map'),
      document.getElementById('venezia-map'),
      document.getElementById('rovinj-map')
    ]
    , mapCoords = [
      new google.maps.LatLng(48.861111, 2.336389),
      new google.maps.LatLng(45.434282, 12.323639),
      new google.maps.LatLng(45.081166, 13.638707)
    ]
    , mapZoom = [
      14,
      15,
      15
    ]
    , mapStyles = [
      [
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#547980" }
          ]
        },{
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#45ADA8" }
          ]
        },{
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#9DE0AD" }
          ]
        },{
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#E5FCC2" }
          ]
        },{
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#D4EE5E" }
          ]
        },{
        },{
          "elementType": "labels.text.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#424254" }
          ]
        },{
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#64908A" }
          ]
        },{
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ],
      [
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [
            { "visibility": "on" },
            { "color": "#36987b" }
          ]
        }, {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#90ca80" }
          ]
        }, {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#41bfcc" }
          ]
        }, {
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#effbbb" }
          ]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
            { "visibility": "on" },
            { "color": "#8bc89f" }
          ]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#7ca690" }
          ]
        }, {
          "featureType": "poi.school",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#86b8a6" }
          ]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#cce29f" }
          ]
        }, {
          "featureType": "poi.government",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#b4ccaa" }
          ]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [
            { "visibility": "on" },
            { "color": "#60825d" },
            { "weight": 3 }
          ]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#ffffff" },
            { "weight": 1.2 }
          ]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#6bb08b" }
          ]
        }, {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#639766" }
          ]
        }
      ]
    ]
    ;

  function initializeMap (i) {
    var mapOptions = {
        zoom: mapZoom[i],
        center: mapCoords[i],
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        keyboardShortcuts: false,
        styles: i === 1 ? mapStyles[1] : mapStyles[0]
      }
      , map
      ;
    
    map = new google.maps.Map(mapIDs[i], mapOptions);

    window.google.maps.event.addDomListener(window, 'resize', function () {
      map.setCenter(mapCoords[i]);
    });
  }

  _.each(mapIDs, function (el, i) {
    initializeMap(i);
  });

});