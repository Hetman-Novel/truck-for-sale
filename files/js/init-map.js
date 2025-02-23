function initMap() {
   var uluru = {
      lat: 38.8936387,
      lng: -77.1793848
   };

   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: uluru
   });
   var marker = new google.maps.Marker({
      position: uluru,
      map: map
   });
}