
anychart.onDocumentReady(function () {
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/samples/maps-choropleth/dealership-locator/data.json
  anychart.data.loadJsonFile(
    'https://cdn.anychart.com/samples/maps-choropleth/dealership-locator/data.json',
    function (data) {
      // create map chart
      var map = anychart.map();
      // The data used in this sample can be obtained from the CDN
      // https://cdn.anychart.com/samples/maps-choropleth/dealership-locator/data.js
      var dealershipData = data;

      // settings for map chart
      map
        .padding([10, 0, 10, 10])
        .tooltip(false)
        .geoData('anychart.maps.united_states_of_america')
        .interactivity({ selectionMode: 'none' });

      map
        .title()
        .enabled(true)
        .useHtml(true)
        .padding([10, 0, 10, 0])
        ;

      // create choropleth series for map chart
      var mapSeries = map.choropleth(anychart.data.set(dealershipData));
      mapSeries
        .geoIdField('code_hasc')
        .colorScale(
          anychart.scales.linearColor('green', 'red', 'blue')
        );

      

      // set container id for the chart
      map.container('container');
      // initiate chart drawing
      map.draw();
    }
  );
});