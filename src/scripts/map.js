let placemarks = [
  {
    latitude: 52.98633318,
    longitude: 158.69695168,
    hintContent: "хинт",
    balloonContent: "Балун"
  },
  {
    latitude: 52.96643863,
    longitude: 158.65025979,
    hintContent: "хинт",
    balloonContent: "Балун"
  },
  {
    latitude: 53.06664659,
    longitude: 158.6475132,
    hintContent: "хинт",
    balloonContent: "Балун"
  },
  {
    latitude: 52.9987626,
    longitude: 158.82192116,
    hintContent: "хинт",
    balloonContent: "Балун"
  }
];

let geoObjects = [];

ymaps.ready(init);
function init() {
  var map = new ymaps.Map("our-map", {
    center: [52.98633318, 158.69695168],
    zoom: 11,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  for (let i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark(
      [placemarks[i].latitude, placemarks[i].longitude],
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent
      },
      {
        iconLayout: "default#image",
        iconImageHref: "./images/pic/marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      }
    );
  }

  let clusterer = new ymaps.Clusterer({
    clusterIcons:[{
      href:'./images/pic/marker.png',
      size:[70,80],
      offset:[-35,-80]
    }],
    clusterIconContentLayout: null
  });

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}
