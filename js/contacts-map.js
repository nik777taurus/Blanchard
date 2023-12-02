// Contacts Map

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map",
  {
    center: [55.758,37.601],
    zoom: 14,
    controls: ["geolocationControl", "zoomControl"],
  },
  {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "300px", right: "20px" },
    geolocationControlFloat: "none",
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "200px", right: "20px" }
  },
  );

  // Запрет зума карты скроллом мыши.
  myMap.behaviors.disable("scrollZoom");

  // Включение кнопок навигации при разрешении более 1280 пикселей.
  myMap.events.add("sizechange", function (e) {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    } else {
      if (!Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.add('zoomControl');
        myMap.controls.add('geolocationControl');
      }
    }
  });

  // Создание геообъекта с типом точка (метка).
  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0],
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}
