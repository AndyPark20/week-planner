var weekday = {
  monday: { entries: []},
  tuesday: { entries: []},
  wednesday: {entries: []},
  thursday: { entries: []},
  friday: { entries: []},
  saturday: {entries: []},
  sunday: { entries: []}
};




window.addEventListener('beforeunload',function(e){
  var stringData = JSON.stringify(weekday);
  localStorage.setItem('user-data',stringData);
})


var getData = localStorage.getItem('user-data')
var parseData = JSON.parse(getData);
if (parseData !== null) {
  weekday = parseData;
}
