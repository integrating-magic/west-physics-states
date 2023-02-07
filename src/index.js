import {cities}from './cities.js';
import {states}from './states.js';
import { statesColors } from './statesColor.js';

window.loadBubbleMap = function (json) {
cities.forEach(function (city) {
return delete city.size
})
const obj = JSON.parse(json);
const data = obj.data;

  //Get unique states from FM data
const uniqueZips = [...new Set(data.map(item => item.fieldData.PostalCode))];

  //count the unique states in data set
const groupByZip = uniqueZips.map((code) => {
    const group = data.filter((item) => item.fieldData.PostalCode === code);
    const lat = group[0].fieldData.Latitude;
    const long = group[0].fieldData.Longitude;
    const facility = group.map((item) => item.fieldData.FacilityName).join('\n');
    // console.log(lat, long, stateName);
    const groupCount = group.length;
    const codeObj = {lat, long, facility,  name:code, size:groupCount};
    // console.log(stateObj);
    return codeObj;
    // console.log(`${state} has ${stateCount} records`);
})
console.log(groupByZip)

  //create new array with unique states count and lat / long

const colorRanges = {few: 'gray', some: '#FBB342', many: '#1C70A3'}
groupByZip.forEach(function (d) {
if (d.size < 2) {
d.fill = colorRanges.few
} else if (d.size < 4) {
d.fill = colorRanges.some
} else {
d.fill = colorRanges.many
}

})
anychart.onDocumentReady(function () {
const map = anychart.map()
map.geoData('anychart.maps.united_states_of_america')
map.title('Facility Count by State & Zip Code')
map.minBubbleSize('1%').maxBubbleSize('5%')
map.container('container');
map.contextMenu().enabled(false);
var zoomController = anychart.ui.zoom();

zoomController.target(map);
zoomController.render();

// map.bubble(groupByZip);
let series = map.bubble(groupByZip);

  //set series geo id field settings
// series.labels().format("{%name}");
series.labels(true);

series.tooltip().format("{%size} facilities \n {%facility}");
series
.labels()
.enabled(true)
.anchor('left-center')
.position('right')
.fontSize(11)
.offsetX(13);
series.tooltip().titleFormat("{%name}")
series.stroke("1 #fff")
series.fill('#faea5a')
series.selectionMode('none')

//This added the city labels
let citiesSeries=map.bubble(cities)
citiesSeries
.labels(true)
.enabled(true);
citiesSeries.fill('none')
citiesSeries.hovered().fill('none')
citiesSeries.hovered().stroke('none')
citiesSeries.stroke('none')
var citiesTooltip = citiesSeries.tooltip()
const citiesLabels = citiesSeries.labels().fontColor('black')
citiesLabels.fontSize(12)
citiesTooltip.enabled(false)
//This added the city labels

//This added the states labels
let statesSeries=map.bubble(states)
statesSeries
.labels(true)
.enabled(true);
statesSeries.fill('none')
statesSeries.hovered().fill('none')
statesSeries.hovered().stroke('none')
statesSeries.stroke('none')
var statesTooltip = statesSeries.tooltip()
const statesLabels = statesSeries.labels().fontColor('black')
statesLabels.fontSize(14.5)
statesLabels.fontWeight('bold')
statesTooltip.enabled(false)
//This added the states labels

map.draw()
}
)},
window.loadBubbleMapWorkLoad = function (json) {
  cities.forEach(function (city) {
  return delete city.size
  })
  const obj = JSON.parse(json);
  const data = obj.data;
  console.log(data);
  
    //Get unique states from FM data
  const uniqueZips = [...new Set(data.map(item => item.fieldData["Mobile Facilities::PostalCode"]))];
  
    //count the unique states in data set
  const groupByZip = uniqueZips.map((code) => {
      const group = data.filter((item) => item.fieldData["Mobile Facilities::PostalCode"] === code);
      const lat = group[0].fieldData["Mobile Facilities::Latitude"];
      const long = group[0].fieldData["Mobile Facilities::Longitude"];
      const uniquePhysicists = [...new Set(group.map(item => item.fieldData.PhysicistNameList))];
      const physicist = uniquePhysicists.join('\n');
      console.log(physicist);
      // console.log(lat, long, stateName);
      const groupCount = group.length;
      const codeObj = {lat, long, physicist,  name:code, size:groupCount};
      // console.log(stateObj);
      return codeObj;
      // console.log(`${state} has ${stateCount} records`);
  })
  console.log(groupByZip)
 
  
    //create new array with unique states count and lat / long
  
  const colorRanges = {few: 'gray', some: '#FBB342', many: '#1C70A3'}
  groupByZip.forEach(function (d) {
  if (d.size < 2) {
  d.fill = colorRanges.few
  } else if (d.size < 4) {
  d.fill = colorRanges.some
  } else {
  d.fill = colorRanges.many
  }
  
  })
  anychart.onDocumentReady(function () {
  const map = anychart.map()
  map.geoData('anychart.maps.united_states_of_america')
  map.title('Workload Count by State & Zip Code')
  map.minBubbleSize('1%').maxBubbleSize('5%')
  map.container('container');
  map.contextMenu().enabled(false);
  var zoomController = anychart.ui.zoom();
  
  zoomController.target(map);
  zoomController.render();
  
  // map.bubble(groupByZip);
  let series = map.bubble(groupByZip);
  
    //set series geo id field settings
  // series.labels().format("{%name}");
  series.labels(true);
  
  series.tooltip().format("{%size} Appointments \n {%physicist}");
  series
  .labels()
  .enabled(true)
  .anchor('left-center')
  .position('right')
  .fontSize(11)
  .offsetX(13);
  series.tooltip().titleFormat("{%name}")
  series.stroke("1 #fff")
  series.fill('#faea5a')
  series.selectionMode('none')
  
  //Need diffrent tool tip for workload
  //show grouped workload by physicist
  
  
  //This added the city labels
  let citiesSeries=map.bubble(cities)
  citiesSeries
  .labels(true)
  .enabled(true);
  citiesSeries.fill('none')
  citiesSeries.hovered().fill('none')
  citiesSeries.hovered().stroke('none')
  citiesSeries.stroke('none')
  var citiesTooltip = citiesSeries.tooltip()
  const citiesLabels = citiesSeries.labels().fontColor('black')
  citiesLabels.fontSize(12)
  citiesTooltip.enabled(false)
  //This added the city labels
  
  //This added the states labels
  let statesSeries=map.bubble(states)
  statesSeries
  .labels(true)
  .enabled(true);
  statesSeries.fill('none')
  statesSeries.hovered().fill('none')
  statesSeries.hovered().stroke('none')
  statesSeries.stroke('none')
  var statesTooltip = statesSeries.tooltip()
  const statesLabels = statesSeries.labels().fontColor('black')
  statesLabels.fontSize(14.5)
  statesLabels.fontWeight('bold')
  statesTooltip.enabled(false)
  //This added the states labels

  // color map
const colorScale = anychart.scales.ordinalColor()
colorScale.colors(['#FBB342', '#1C70A3']);
colorScale.ranges([
  {from: 1, to: 45},
  {from: 45, to: 90}
]);

const stateColorSeries = map.choropleth(statesColors);
stateColorSeries.colorScale(colorScale);

map.colorRange(true);
  map.draw()
  }
  )}