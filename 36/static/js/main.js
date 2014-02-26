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
      13,
      15,
      15
    ]
    , mapStyles = [
      [
        {
          'stylers': [
            { 'visibility': 'off' }
          ]
        }, {
          'featureType': 'transit',
          'stylers': [
            { 'visibility': 'off' }
          ]
        }, {
          'elementType': 'labels.text.fill',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#ffffff' },
            { 'weight': 1.5 }
          ]
        }, {
          'elementType': 'labels.text.stroke',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#C02942' },
            { 'weight': 3 }
          ]
        }, {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#D95B43' },
            { 'lightness': 5 }
          ]
        }, {
          'featureType': 'water',
          'elementType': 'geometry.fill',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#C02942' }
          ]
        }, {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'simplified' },
            { 'color': '#ECD078' }
          ]
        }, {
          'featureType': 'administrative.country',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#D95B43' },
            { 'weight': 1.6 }
          ]
        }
      ],
      [
        {
          'stylers': [
            { 'visibility': 'off' }
          ]
        },
        {
          'featureType': 'transit',
          'stylers': [
            { 'visibility': 'off' }
          ]
        }, {
          'elementType': 'labels.text.fill',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#ffffff' },
            { 'weight': 1.5 }
          ]
        }, {
          'elementType': 'labels.text.stroke',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#68B3AF' },
            { 'weight': 3 }
          ]
        }, {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#D3E2B6' },
            { 'lightness': 5 }
          ]
        }, {
          'featureType': 'water',
          'elementType': 'geometry.fill',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#68B3AF' }
          ]
        }, {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'simplified' },
            { 'color': '#87BDB1' }
          ]
        }, {
          'featureType': 'administrative.country',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#C3DBB4' },
            { 'weight': 1.6 }
          ]
        }
      ],
      [
        {
          'stylers': [
            { 'visibility': 'off' }
          ]
        }, {
          'featureType': 'transit',
          'stylers': [
            { 'visibility': 'off' }
          ]
        }, {
          'elementType': 'labels.text.fill',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#ffffff' },
            { 'weight': 1.5 }
          ]
        }, {
          'elementType': 'labels.text.stroke',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#355C7D' },
            { 'weight': 3 }
          ]
        }, {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#C06C84' },
            { 'lightness': 5 }
          ]
        }, {
          'featureType': 'water',
          'elementType': 'geometry.fill',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#355C7D' }
          ]
        }, {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'simplified' },
            { 'color': '#F8B195' }
          ]
        }, {
          'featureType': 'administrative.country',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#D95B43' },
            { 'weight': 1.6 }
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
        draggable: false,
        keyboardShortcuts: false,
        //styles: i === 1 ? mapStyles[1] : mapStyles[0]
        styles: mapStyles[i]
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

  _.each(document.querySelectorAll('#maps .places'), function (pl) {
    _.each(pl.querySelectorAll('span'), function (sp, i) {
      sp.classList.add('place-' + (i % 5));

    });
  });

});