var button = document.querySelector(".button");
var count = document.querySelector(".count");

function incrementLike() {
  button.classList.add("is-active");
  setTimeout(function () {
    button.classList.remove("is-active");
  }, 2000);

  count.textContent = parseInt(count.textContent) + 1;
}

button.addEventListener("click", incrementLike);
