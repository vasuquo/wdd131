const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");
const modiDate = new Date(document.lastModified);
lastModified.innerHTML = `Last modification: ${modiDate}`;
