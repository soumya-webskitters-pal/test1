// set google map style
var mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#011b33",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#011b33",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        color: "#f40272",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ff1e8d",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#011b33",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        color: "#000000",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#5ff7ff",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f40272",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#001924",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "red",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        color: "#652dff",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#652dff",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#02101e",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3C7680",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#080808",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#011b33",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#5ff7ff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#5ff7ff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ff1e8d",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#5ff7ff",
      },
      {
        weight: 3.5,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ff1e8d",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#5ff7ff",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#5ff7ff",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f59563",
      },
    ],
  },
];
var locationData = [
  {
    id: 0,
    title: "CRESCENDO - Web Design & Intelligent Business Automation",
    button: "Making an appointment here",
    lat: 40.709996097891846,
    lng: -74.00794833224923,
    zoom: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt interdum vestibulum. Integer nec nisl neque. Proin venenatis facilisis metus, sed semper augue blandit in.",
    img: "https://picsum.photos/200/200",
  },
];
function initMap() {
  // marker
  var map, marker;
  const marker_icon = {
    url: "map.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0), // anchor
  };

  locationData.forEach((data, index) => {
    // console.log(data);

    // init Map
    if (index == 0) {
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: data.zoom,
        center: {
          lat: data.lat,
          lng: data.lng,
        },
        styles: mapStyle,
        // disableDefaultUI: true,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: false,
        // mapTypeControlOptions: {
        //   style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        //   mapTypeIds: ["roadmap", "terrain"],
        // },
        streetViewControl: false,
        // fullscreenControl: false,
      });
    }

    // open info window
    let contentString = `
    <div id="map_popup_${data.id}" class="map_popup">
      <div class="map_content_inner">
      <h3 class="map_title">${data.title}</h3>
        <div class="app_btn_wrp">
          <a href="#" class="page_btn map_btn">${data.button}</a>
        </div>
      </div>
    </div>
    `;
    let infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "CRESCENDO",
    });

    // set marker with infow window
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(data.lat, data.lng),
      map: map,
      icon: marker_icon,
      title: "CRESCENDO",
      class: "custom_marker",
      id: data.id,
      //label: "CRESCENDO",
      animation: google.maps.Animation.DROP,
    });

    infowindow.open({
      anchor: marker,
      map,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
    infowindow.addListener("closeclick", () => {
      infowindow.close({
        anchor: marker,
        map,
      });
    });
  });
  /*$.getJSON("location.json", function (data) {
    // init Map
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: data[0].zoom,
      center: {
        lat: data[0].lat,
        lng: data[0].lng,
      },
      styles: mapStyle,
    });

    $.each(data, function (key, locations) {
      // set marker with infow window
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations.lat, locations.lng),
        map: map,
        icon: marker_icon,
        title: locations.title,
        id: locations.id,
      });
      // open info window
      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, count) {
          return function () {
            var getImgNumber = locations.id;
            //get location
            console.log(getImgNumber);
          };
        })(marker, count)
      );
    });
  });*/
}

setTimeout(() => {
  initMap();
}, 1000);
