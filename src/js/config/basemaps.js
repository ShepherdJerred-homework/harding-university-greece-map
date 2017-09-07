export default [
  {
    name: 'Open Street Map',
    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxZoom: 19,
    minZoom: 3
  },
  {
    name: 'Streets',
    url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3,
    default: true
  },
  {
    name: 'Outdoors',
    url: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3
  },
  {
    name: 'Dark',
    url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3,
  },
  {
    name: 'Light',
    url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3
  },
  {
    name: 'Satellite',
    url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3
  },
  {
    name: 'Satellite Streets',
    url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3
  },
  {
    name: 'Traffic day',
    url: 'https://api.mapbox.com/styles/v1/mapbox/traffic-day-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3
  },
  {
    name: 'Traffic night',
    url: 'https://api.mapbox.com/styles/v1/mapbox/traffic-night-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlcGhlcmRqZXJyZWQiLCJhIjoiY2ozMGZ0ZnYwMDAyazJ3bnd2djlucXFvaSJ9.W_8W-wU-OqWec30PX9xbvA',
    maxZoom: 19,
    minZoom: 3
  }
];
