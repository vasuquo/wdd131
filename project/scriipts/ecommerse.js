const caption = document.querySelector(".caption");
const navigation = document.querySelector(".navigation");
const menuButton = document.querySelector("#menu");
const allProducts = document.querySelector(".f-products");

const products = [
  {
    id: "product-1",
    description: "Pattern Print T-Shirt",
    category: "Men",
    SrcImage: "images/product-1.webp",
    thumbNails: [
      "images/tnail1-prod-1.webp",
      "images/tnail2-prod-1.webp",
      "images/tnail3-prod-1.webp",
      "images/tnail4-prod-1.webp",
    ],
    price: 150.0,
    ratings: 4,
  },
  {
    id: "product-2",
    description: "Tribal Graphic Patchwork",
    category: "Men",
    SrcImage: "images/product-2.webp",
    thumbNails: [
      "images/tnail1-prod-2.webp",
      "images/tnail2-prod-2.webp",
      "images/tnail3-prod-2.webp",
      "images/tnail4-prod-2.webp",
    ],
    price: 250.0,
    ratings: 6,
  },
  {
    id: "product-3",
    description: "Dashiki Wax Print Knee-Length Dress",
    category: "Women",
    SrcImage: "images/product-3.webp",
    thumbNails: [
      "images/tnail1-prod-3.webp",
      "images/tnail2-prod-3.webp",
      "images/tnail3-prod-3.webp",
      "images/tnail4-prod-3.webp",
    ],
    price: 850.0,
    ratings: 4,
  },
  {
    id: "product-4",
    description: "Dashiki Wax Ankara Pearls Dress",
    category: "Women",
    SrcImage: "images/product-4.webp",
    thumbNails: [
      "images/tnail1-prod-4.webp",
      "images/tnail2-prod-4.webp",
      "images/tnail3-prod-4.webp",
      "images/tnail4-prod-4.webp",
    ],
    price: 850.0,
    ratings: 5.8,
  },
];

/* Event Listener for mobile menu  */
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  caption.classList.toggle("open");
});

/* displayProducts Function */
const displayProducts = (fProducts) => {
  fProducts.forEach((product) => {
    let ratings = starRatings(parseInt(product.ratings));
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `
     ${product.description} <br>
      ${ratings} <br>
      ${formatCurrency(product.price)} <br>
    `;

    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", product.SrcImage);
    imgElement.setAttribute("alt", product.id);
    imgElement.setAttribute("loading", "lazy");
    figure.appendChild(imgElement);
    figure.appendChild(figcaption);

    allProducts.appendChild(figure);
  });
};

/* StartRating function to generate rating for products */
const starRatings = (rating) => {
  let ratingString = "";

  let full_stars = Math.floor(rating / 2);

  let half_star = rating % 2;

  let empty_stars = 5 - full_stars - half_star;

  for (let i = 0; i < full_stars; i++) {
    ratingString += `<span class="fa fa-star checked"></span>`;
  }

  if (half_star) {
    ratingString += `<span class="fa fa-star-half-alt checked"></span>`;
  }

  for (let i = 0; i < empty_stars; i++) {
    ratingString += `<span class="fa fa-star"></span>`;
  }

  return ratingString;
};

/* Currency format function to format item price */
const formatCurrency = (num) => {
  const convNum = Number(num.toFixed(2)).toLocaleString();
  return `$${convNum} `;
};

displayProducts(products);
