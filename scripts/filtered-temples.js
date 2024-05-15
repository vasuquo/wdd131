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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Cedar City Utah",
    location: "Cedar City, Utah, United States",
    dedicated: "2017, December, 10",
    area: 42657,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg",
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25300,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg",
  },
  {
    area: 119619,
    dedicated: "1884, May, 17",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg",
    location: "Logan, Utah, United States",
    templeName: "Logan Utah",
  },
  {
    area: 10500,
    dedicated: "2019, September, 8",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg",
    location: "Zoetermeer, Netherlands",
    templeName: "The Hague Netherlands",
  },
  {
    area: 142000,
    dedicated: "1877, April, 6",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/1280x800/st-george-temple-lds-149536-wallpaper.jpg",
    location: "St. George, Utah, United States",
    templeName: "St. George Utah",
  },
];

const allTemples = document.querySelector(".temples");

/* reset Function */
const reset = () => {
  document.querySelector(".temples").innerHTML = "";
};

/* filterTemples Function */
const filterTemples = () => {
  reset();
  const filter = h2tag.textContent;

  switch (filter) {
    case "Old":
      displayTemples(
        temples.filter(
          (temple) => parseInt(temple.dedicated.substring(0, 4)) < 1900
        )
      );
      break;
    case "New":
      displayTemples(
        temples.filter(
          (temple) => parseInt(temple.dedicated.substring(0, 4)) > 2000
        )
      );
      break;
    case "Large":
      displayTemples(temples.filter((temple) => parseInt(temple.area) > 90000));
      break;
    case "Small":
      displayTemples(temples.filter((temple) => parseInt(temple.area) < 10000));
      break;
    case "Home":
      displayTemples(temples);
      break;
    default:
      break;
  }
};

/* displayTemples Function */
const displayTemples = (pTemples) => {
  pTemples.forEach((temple) => {
    let figure = document.createElement("figure");
    let figcap = document.createElement("figcaption");
    let caption = document.createElement("div");

    figcap.textContent = temple.templeName;

    let pName = document.createElement("h3");
    pName.textContent = temple.templeName;
    caption.appendChild(pName);

    let pLocation = document.createElement("p");
    pLocation.innerHTML = `<span>Location:</span> ${temple.location}`;
    caption.appendChild(pLocation);

    let pDedicated = document.createElement("p");
    pDedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
    caption.appendChild(pDedicated);

    let pArea = document.createElement("p");
    pArea.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;
    caption.appendChild(pArea);

    //    figure.appendChild(caption);

    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", temple.imageUrl);
    imgElement.setAttribute("alt", temple.templeName);
    imgElement.setAttribute("loading", "lazy");
    figure.appendChild(imgElement);
    figure.appendChild(figcap);

    allTemples.appendChild(figure);
  });
};

modification.innerHTML = `Last modification: ${showDateTime}`;

/* EventListener for anchor elements */
aElements.forEach((a) => {
  a.addEventListener("click", () => {
    h2tag.textContent = a.textContent;
    filterTemples();
  });
});

/* Event Listener for mobile menu  */
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

displayTemples(temples);
