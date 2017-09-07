import leaflet from 'leaflet';

// Fix gray gaps between tiles
// https://github.com/Leaflet/Leaflet/issues/3575
(function () {
  let originalInitTile = leaflet.GridLayer.prototype._initTile;
  leaflet.GridLayer.include({
    _initTile: function (tile) {
      originalInitTile.call(this, tile);
      let tileSize = this.getTileSize();
      tile.style.width = tileSize.x + 1 + 'px';
      tile.style.height = tileSize.y + 1 + 'px';
    }
  });
})();

// Load the images with Webpack
// https://github.com/PaulLeCam/react-leaflet/issues/255
leaflet.Icon.Default.imagePath = './';

leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
