const app = {
  init: () => {
    //based on the current page...
    let page = document.body.id;

    switch (page) {
      case "Home":
        app.showPage();
        app.toggleMenu();
        break;
      case "products":
        break;
      case "about":
        break;
      case "contact":
        break;
      case "Account":
        app.toggleForm();
        app.toggleMenu();
        break;
      default:
    }
    app.getCopyRight();
    app.getDateModified();
  },
  getData: (ptype) => {
    let products = [
      {
        id: "product-1",
        description: "Pattern Print T-Shirt",
        category: "Men",
        SrcImage: "images/d1.webp",
        thumbNails: [
          "images/tnail1-prod-1.webp",
          "images/tnail2-prod-1.webp",
          "images/tnail3-prod-1.webp",
          "images/tnail4-prod-1.webp",
        ],
        price: 150.0,
        ratings: 2.3,
        productType: "featured",
      },
      {
        id: "product-2",
        description: "Tribal Graphic Patchwork",
        category: "Men",
        SrcImage: "images/d2.webp",
        thumbNails: [
          "images/tnail1-prod-2.webp",
          "images/tnail2-prod-2.webp",
          "images/tnail3-prod-2.webp",
          "images/tnail4-prod-2.webp",
        ],
        price: 250.0,
        ratings: 4.5,
        productType: "featured",
      },
      {
        id: "product-3",
        description: "Dashiki Knee-Length Dress",
        category: "Women",
        SrcImage: "images/d3.webp",
        thumbNails: [
          "images/tnail1-prod-3.webp",
          "images/tnail2-prod-3.webp",
          "images/tnail3-prod-3.webp",
          "images/tnail4-prod-3.webp",
        ],
        price: 750.0,
        ratings: 6.5,
        productType: "featured",
      },
      {
        id: "product-4",
        description: "Ankara Pearls Dress",
        category: "Women",
        SrcImage: "images/d4.webp",
        thumbNails: [
          "images/tnail1-prod-4.webp",
          "images/tnail2-prod-4.webp",
          "images/tnail3-prod-4.webp",
          "images/tnail4-prod-4.webp",
        ],
        price: 350.0,
        ratings: 4.8,
        productType: "featured",
      },
      {
        id: "product-5",
        description: "Dashiki  Dress",
        category: "Women",
        SrcImage: "images/d5.webp",
        thumbNails: [
          "images/tnail1-prod-4.webp",
          "images/tnail2-prod-4.webp",
          "images/tnail3-prod-4.webp",
          "images/tnail4-prod-4.webp",
        ],
        price: 600.0,
        ratings: 3.8,
        productType: "latest",
      },
      {
        id: "product-6",
        description: "Dashiki Pearls Dress",
        category: "Women",
        SrcImage: "images/d6.webp",
        thumbNails: [
          "images/tnail1-prod-4.webp",
          "images/tnail2-prod-4.webp",
          "images/tnail3-prod-4.webp",
          "images/tnail4-prod-4.webp",
        ],
        price: 550.0,
        ratings: 2.8,
        productType: "latest",
      },
    ];

    if (ptype == "all") {
      return products;
    } else {
      return products.filter((product) => product.productType == ptype);
    }
  },

  toggleMenu: () => {
    let navigation = document.querySelector(".navigation");
    let menuButton = document.querySelector("#menu");
    let caption = document.querySelector(".caption");

    /* Event Listener for mobile menu  */
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      caption.classList.toggle("open");
    });
  },

  displayProducts: (nodeElement, ptype) => {
    let products = app.getData(ptype);

    products.forEach((product) => {
      let ratings = app.starRatings(parseInt(product.ratings));
      let card = document.createElement("div");
      card.classList.add("card");
      let cardTag = `
        <a href="product.html">     
        <img class="medium" src="${product.SrcImage}" alt="${
        product.id
      }" loading="lazy" />
        </a>
        <div class="card-body">
        <a href="product.html">
        <h2>${product.description}</h2>
        </a>
        <div class="rating">${ratings}</div>
        <div class="price">${app.formatCurrency(product.price)}</div>
        </div>
      `;
      card.innerHTML = cardTag;
      nodeElement.appendChild(card);
    });
  },

  showPage: () => {
    let fProducts = document.querySelector(".f-products");
    let lProducts = document.querySelector(".l-products");
    app.displayProducts(fProducts, "featured");
    app.displayProducts(lProducts, "latest");
  },

  starRatings: (rating) => {
    let ratingString = "";
    let full_stars = Math.floor(rating / 2);
    let half_star = rating % 2;
    let empty_stars = 5 - full_stars - half_star;

    for (let i = 0; i < full_stars; i++) {
      ratingString += `<span class="fa fa-star checked"></span>`;
    }

    for (let i = 0; i < half_star; i++) {
      ratingString += `<span class="fa fa-star-half-alt checked"></span>`;
    }

    for (let i = 0; i < empty_stars; i++) {
      ratingString += `<span class="fa fa-star"></span>`;
    }

    return ratingString;
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
  /* Currency format function to format item price */
  formatCurrency: (num) => {
    const convNum = Number(num.toFixed(2)).toLocaleString();
    return `$${convNum} `;
  },

  /* Function to toggle Login / Registration form  */
  toggleForm: () => {
    let loginForm = document.querySelector("#LoginForm");
    let regForm = document.querySelector("#RegForm");
    let indicator = document.querySelector("#indicator");

    let login = document.querySelector("#login");
    let register = document.querySelector("#register");

    login.addEventListener("click", () => {
      regForm.style.transform = "translateX(300px)";
      loginForm.style.transform = "translateX(300px)";
      indicator.style.transform = "translateX(0px)";
    });

    register.addEventListener("click", () => {
      regForm.style.transform = "translateX(0px)";
      loginForm.style.transform = "translateX(0px)";
      indicator.style.transform = "translateX(130px)";
    });
  },
};

app.init();
