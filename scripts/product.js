const app = {
  init: () => {
    let page = document.body.id;
    switch (page) {
      case "main":
        app.getOptions();
        break;
      case "second":
        app.getReviews();
        break;
      default:
    }
    app.getCopyRight();
    app.getDateModified();
  },
  /* getOptions function to populate select options */
  getOptions: () => {
    let products = [
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

    let pname = document.getElementById("pname");
    products.forEach((product) => {
      let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      pname.appendChild(option);
    });
  },

  /* Copyright function */
  getCopyRight: () => {
    let copyRight = document.querySelector("#copyright");
    let currentYear = new Date().getFullYear();
    copyRight.innerHTML = `&copy;<span>${currentYear}</span> 🌹 Victor Asuquo 🌹 Nigeria`;
  },

  /* Last modification function    */
  getDateModified: () => {
    let = modification = document.querySelector("#modification");
    let modiDate = new Date(document.lastModified);
    let Seconds;

    if (modiDate.getSeconds() < 10) {
      Seconds = `0${modiDate.getSeconds()}`;
    } else {
      Seconds = modiDate.getSeconds();
    }

    let CurTime = `${modiDate.getHours()}:
          ${modiDate.getMinutes()}:${Seconds}`;

    let showDateTime = `${modiDate.getDate()}/
       ${modiDate.getMonth() + 1}/
       ${modiDate.getFullYear()} ${CurTime}`;

    modification.innerHTML = `Last modification: ${showDateTime}`;
  },

  /*Review count function */
  getReviews: () => {
    let responseCount = document.querySelector("#rescount");
    let reviewCount = localStorage.getItem("reviews")
      ? JSON.parse(localStorage.getItem("reviews"))
      : 0;

    reviewCount++;
    responseCount.innerHTML = `We have ${reviewCount} ${
      reviewCount > 1 ? "reviews 👍" : "review"
    }`;
    localStorage.setItem("reviews", JSON.stringify(reviewCount));
  },
};

app.init();
