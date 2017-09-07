import omnivore from 'leaflet-omnivore';
import leaflet from 'leaflet';
import 'leaflet.markercluster';

import './hacks';

import basemaps from './config/basemaps';
import overlays from './config/overlays';

let layers = [];

initMap();

function initMap () {
  createBasemaps();
  createOverlays();

  // Create the map object
  let map = leaflet.map('mapid', {
    center: [37.89, 23.99],
    zoom: 3,
    worldCopyJump: true,
    layers: layers
  });

  createTooltips(map);
  createLayerControls(map);
}

function createBasemaps () {
  basemaps.forEach(function (map) {
    map.layer = leaflet.tileLayer(map.url, {
      maxZoom: map.maxZoom,
      minZoom: map.minZoom
    });
    if (map.default) {
      layers.push(map.layer);
    }
  });
}

function createOverlays () {
  overlays.forEach(function (overlay) {
    overlay.layer = omnivore.geojson(overlay.path);
    layers.push(overlay.layer);
  });
}

function createTooltips (map) {
  // Add tooltips for overlays
  overlays.forEach(function (overlay) {
    overlay.layer.on('ready', function () {
      overlay.layer.eachLayer(function (layer) {
        layer.bindPopup(layer.feature.properties.place_name);
      });
    }).addTo(map);
  });
}

function createLayerControls (map) {
  // Create basemap controls
  let basemapNames = {};
  basemaps.forEach(function (basemap) {
    basemapNames[basemap.name] = basemap.layer;
  });

  // Create overlay controls
  let overlayNames = {};
  overlays.forEach(function (overlay) {
    overlayNames[overlay.name] = overlay.layer;
  });

  // Add layers to map
  leaflet.control.layers(basemapNames, overlayNames).addTo(map);
}
