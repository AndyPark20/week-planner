var $addEntryBtn = document.querySelector(".button");
var $userSubmit = document.querySelector("form");
var $modal = document.querySelector(".modal");
var $spanDays = document.querySelector('.weekday-btn');
var $h2Days = document.querySelector('#h2Days');



function hideModal(e) {
  if (e.target.className === "button") {
    $modal.classList.remove("hidden");
  }
}

$addEntryBtn.addEventListener("click", hideModal);


document.addEventListener('click',function(event){
if(event.target.className === 'weekday-btn') {
  console.log(event.target.getAttribute('data-view'));
  $h2Days.textContent = ('Scheduled event for ' + event.target.getAttribute('data-view'));
}
})



$userSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

});


function renderElements(object){

var $row =document.createElement('tr');
var $tableData =document.createElement('td');
var $tableDataTwo =document.createElement('td');
var $tablePosition = document.querySelector('.dataRow')
// $tableData.textContent = 'Hello Cohort';
$row.appendChild($tableData);
// $tableDataTwo.textContent=""
$row.appendChild($tableDataTwo);
$tablePosition.appendChild($row);

return $tableData;
}
