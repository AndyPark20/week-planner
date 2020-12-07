var $addEntryBtn = document.querySelector(".button");
var $userSubmit = document.querySelector("form");
var $modal = document.querySelector(".modal");

function hideModal(e) {
  if (e.target.className === "button") {
    $modal.classList.remove("hidden");
  }
}

$addEntryBtn.addEventListener("click", hideModal);

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
