const pname = document.getElementById("pname");
const ratingLabels = document.querySelectorAll("#rating");
const copyRight = document.querySelector("#copyright");
const modification = document.querySelector("#modification");

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0,
  },
];

/* getOptions function to populate select options */
const getOptions = () => {
  products.forEach((product) => {
    let option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    pname.appendChild(option);
  });
};

/* Copy right function */
const getCopyRight = () => {
  const currentYear = new Date().getFullYear();
  return `&copy;<span>${currentYear}</span> 🌹 Victor Asuquo 🌹 Nigeria`;
};

/* Last modification function    */
const getDateModified = () => {
  const modiDate = new Date(document.lastModified);
  let Seconds;

  if (modiDate.getSeconds() < 10) {
    Seconds = `0${modiDate.getSeconds()}`;
  } else {
    Seconds = modiDate.getSeconds();
  }

  const CurTime = `${modiDate.getHours()}:
          ${modiDate.getMinutes()}:${Seconds}`;

  const showDateTime = `${modiDate.getDate()}/
       ${modiDate.getMonth() + 1}/
       ${modiDate.getFullYear()} ${CurTime}`;

  return showDateTime;
};

getOptions();
modification.innerHTML = `Last modification: ${getDateModified()}`;
copyRight.innerHTML = getCopyRight();
