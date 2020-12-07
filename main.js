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
