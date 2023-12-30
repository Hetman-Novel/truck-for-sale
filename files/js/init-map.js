function initMap() {
   var uluru = {
      lat: 42.1202475,
      lng: -88.4220205
   };

   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
   });
   var marker = new google.maps.Marker({
      position: uluru,
      map: map
   });
}