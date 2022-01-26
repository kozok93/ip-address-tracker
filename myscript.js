const map = L.map('map').setView([0, 0], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);
L.Control.geocoder().addTo(map);

  L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
