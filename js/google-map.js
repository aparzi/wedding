
var google;

function init() {

    // Coordinates
    let weddingCerimony = new google.maps.LatLng(41.571119, 14.765825);
    let weddingParty = new google.maps.LatLng(41.5124118, 14.8231058);

    let mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(41.5418578, 14.79548),
        scrollwheel: false,
        // styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#b1b881"},{"lightness":100}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#b1b881"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#b1b881"},{"lightness":90}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#b1b881"},{"lightness":50},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":25}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#b1b881"},{"lightness":7}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#b1b881"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#b1b881"},{"lightness":17}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    let mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    let map = new google.maps.Map(mapElement, mapOptions);

    // Create Markers
    let markerWeddingCerimony = new google.maps.Marker({
        position: weddingCerimony,
        map: map,
        icon: 'img/loc.png'
    });

    let markerPartyCerimony = new google.maps.Marker({
        position: weddingParty,
        map: map,
        icon: 'img/loc-2.png'
    });

    let toroWindow = new google.maps.InfoWindow({
        content: '<div>' +
            '<p>Chiesa Madre - Toro (Cb)</p>' +
            '<img style="height:100px; width: auto;" src="img/chiesa-madre-marker.jpg" alt="chiesa madre di Toro" />' +
            '</div>'
    });

    let cioccaWindow = new google.maps.InfoWindow({
        content: '<div>' +
            '<p>Sala Ricevimenti Ciocca - Riccia (Cb)</p>' +
            '<img style="height:100px;width: auto;" src="img/ciocca-marker.jpg" alt="ristorante ciocca"/>' +
            '</div>'
    });

    google.maps.event.addListener(markerWeddingCerimony, 'click', function() {
        toroWindow.open(map,markerWeddingCerimony);
    });

    google.maps.event.addListener(markerPartyCerimony, 'click', function() {
        cioccaWindow.open(map,markerPartyCerimony);
    });
    
}
google.maps.event.addDomListener(window, 'load', init);
