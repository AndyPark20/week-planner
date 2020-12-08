var $addEntryBtn = document.querySelector(".button");
var $userSubmit = document.querySelector("form");
var $modal = document.querySelector(".modal");
var $spanDays = document.querySelector(".weekday-btn");
var $h2Days = document.querySelector("#h2Days");

function hideModal(e) {
  if (e.target.className === "button") {
    $modal.classList.remove("hidden");
  }
}



$addEntryBtn.addEventListener("click", hideModal);

document.addEventListener("click", function (event) {
  if (event.target.className === "weekday-btn") {
    console.log(event.target.getAttribute("data-view"));
    $h2Days.textContent =
      "Scheduled event for " + event.target.getAttribute("data-view");
  }
});

$userSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  var $userWeekday = $userSubmit.elements.days.value;
  var time = $userSubmit.elements.time.value;
  var description = $userSubmit.elements.description.value;
  var entry = {time,description};
  weekday[$userWeekday].entries.push(entry);
  // renderElements(entry);
  $modal.classList.add('hidden');
  $userSubmit.reset();
});


function renderElements(object) {
  var $row = document.createElement("tr");
  var $tableData = document.createElement("td");
  var $tableDataTwo = document.createElement("td");
  var $tablePosition = document.querySelector(".dataRow");
  $tableData.textContent = object.time;
  $row.appendChild($tableData);
  $tableDataTwo.textContent= object.description;
  $row.appendChild($tableDataTwo);
  return $row;
}

function appendElements(array) {
  for(var i = 0; i < array.length; i++ ) {
    var position
    array[i].
  }
}
