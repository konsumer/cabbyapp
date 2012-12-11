$(function(){
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log('position', position);
          // setup map
          var mapOptions = {
              center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              zoom: 14,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              disableDefaultUI: true
          };
          var map = new google.maps.Map($("#map_canvas").get(0), mapOptions);

          console.log(map);

          var style = [
              {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                  { saturation: -99 }
                ]
              },
              {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                  { visibility: 'off' }
                ]
              },
              {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                    { hue: "#00ffee" },
                    { saturation: 50 },
                    { visibility: 'on' }
                  ]
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [
                      { visibility: "on" }
                    ]
                  }
          ];
          var styledMapType = new google.maps.StyledMapType(style, {
              map: map,
              name: 'Styled Map'
          });
          map.mapTypes.set('map-style', styledMapType);
          map.setMapTypeId('map-style');

          var infoWindow = new google.maps.InfoWindow();

          var trafficLayer = new google.maps.TrafficLayer();
          trafficLayer.setMap(map);

          // TODO: load drivers+customers layer from couch (possibly bi-directional?), watch _changes

          // TODO: use navigator.geolocation.watchPosition(function(position){}) to inform couch of movement

          // TODO: directions: http://goo.gl/CNQ1j
      });
  }else{
    alert("sorry: this app requires geolocation.");
  }
});
