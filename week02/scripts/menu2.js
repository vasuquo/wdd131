const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const aTags = document.querySelectorAll(".navigation a");
const dtag = document.querySelector("#dtag");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

aTags.forEach((a) => {
  a.addEventListener("click", () => (dtag.textContent = a.innerHTML));
});
