const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const aElements = document.querySelectorAll(".navigation a");
const h2tag = document.querySelector("#h2tag");
const copyRight = document.querySelector("#copyright");
const modification = document.querySelector("#modification");
const currentYear = new Date().getFullYear();

copyRight.innerHTML = `&copy;<span>${currentYear}</span> 🌹 Victor Asuquo 🌹 Nigeria`;
const modiDate = new Date(document.lastModified);
modification.innerHTML = `Last modification: ${modiDate}`;

aElements.forEach((a) => {
  a.addEventListener("click", () => {
    h2tag.textContent = a.innerHTML;
  });
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});
