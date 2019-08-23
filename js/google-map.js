
var google;

function init() {

    // Coordinates
    var weddingCerimony = new google.maps.LatLng(41.571119, 14.765825);
    var weddingParty = new google.maps.LatLng(41.5124118, 14.8231058);
    
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(41.5418578, 14.79548),
        scrollwheel: false,
        // styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#b1b881"},{"lightness":100}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#b1b881"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#b1b881"},{"lightness":90}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#b1b881"},{"lightness":50},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":25}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#b1b881"},{"lightness":7}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#b1b881"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":17}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Create Markers
    let markerWeddingCerimony = new google.maps.Marker({
        position: weddingCerimony,
        map: map,
        icon: 'img/loc.png'
    });

    new google.maps.Marker({
        position: weddingParty,
        map: map,
        icon: 'img/loc.png'
    });

    var infowindow = new google.maps.InfoWindow({
        content:"Hello World!"
    });

    google.maps.event.addListener(markerWeddingCerimony, 'click', function() {
        infowindow.open(map,markerWeddingCerimony);
    });
    
}
google.maps.event.addDomListener(window, 'load', init);
