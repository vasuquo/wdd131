const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

/* Event Listener for mobile menu  */
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  //  menuButton.classList.toggle("open");
});
