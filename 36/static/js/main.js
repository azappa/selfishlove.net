/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals NodeList, HTMLCollection, google*/

window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;


  //  function for using smoothscrolling vanilla script
  function _smoothScrollTo (idTarget) {
    window.smoothScroll(document.getElementById(idTarget), 500);
  }
  /*
    action for clickable smoothscrolling elements

    example use (using jade, obv):

      % clickable element   >   a.link-scroll(href, data-where-to='unique id without hash')
      | scrolling element   >   #data-where-id (same as before!)

  */
  document.querySelectorAll('.link-scroll').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();   // prevent default action if el is a link
      _smoothScrollTo(this.getAttribute('data-where-to'));
      return false;
    });
  });


  var mapIDs = [
        document.getElementById('paris-map'),
        document.getElementById('venezia-map'),
        document.getElementById('rovinj-map')
      ]
    , mapCoords = [
        new google.maps.LatLng(48.85837, 2.294481),
        new google.maps.LatLng(45.434282, 12.323639),
        new google.maps.LatLng(45.081166, 13.638707)
      ]
    , mapPinImg = [
      'img/map-pin.png',
      'img/map-pin.png',
      'img/map-pin.png'
      ]
    ;

  function initializeMap (i) {
    var pin = mapPinImg[i]
      , mapOptions = {
          zoom: 14,
          center: mapCoords[i],
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true,
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          keyboardShortcuts: false
        }
      , mapPin
      , map
      ;
    
    map = new google.maps.Map(mapIDs[i], mapOptions);

    mapPin = new google.maps.Marker({
      position: mapCoords[i],
      map: map/*,
      icon: mapPinImg[i]*/
    });
    
  }

  for (var i=0; i<3; i++) {
    initializeMap(i);  
  }
  

  window.google.maps.event.addDomListener(window, 'resize', function () {
    map.setCenter(mapCoords);
  });

});