const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const aElements = document.querySelectorAll(".navigation a");
const h2tag = document.querySelector("#h2tag");
const copyRight = document.querySelector("#copyright");
const modification = document.querySelector("#modification");
const currentYear = new Date().getFullYear();

copyRight.innerHTML = `&copy;<span>${currentYear}</span> 🌹 Victor Asuquo 🌹 Nigeria`;
const modiDate = new Date(document.lastModified);
let Seconds;

if (modiDate.getSeconds() < 10) {
  Seconds = `0${modiDate.getSeconds()}`;
} else {
  Seconds = modiDate.getSeconds();
}

const CurTime = `${modiDate.getHours()}:${modiDate.getMinutes()}:${Seconds}`;
const showDateTime = `${modiDate.getDate()}/${
  modiDate.getMonth() + 1
}/${modiDate.getFullYear()} ${CurTime}`;

modification.innerHTML = `Last modification: ${showDateTime}`;

aElements.forEach((a) => {
  a.addEventListener("click", () => {
    h2tag.textContent = a.innerHTML;
  });
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});
