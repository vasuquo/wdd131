const temp = document.querySelector("#temp");
const cond = document.querySelector("#cond");
const wind = document.querySelector("#wind");
const wchill = document.querySelector("#wchill");
const windValue = 21;
const condition = "Mostly Cloudy";
const tempValue = 34;

const windChill = () => {
  const windChillValue =
    13.12 +
    0.6215 * tempValue -
    11.37 * windValue +
    0.3965 * tempValue * windValue;
  return windChillValue;
};

temp.innerHTML = `<strong>Temperature:  </strong>${tempValue}<span>&#8451;</span>`;
cond.innerHTML = `<strong>Conditions: </strong>${condition}`;
wind.innerHTML = `<strong>Wind:  </strong>${windValue}Km/h`;

if (tempValue <= 10 && windValue > 4.8) {
  wchill.innerHTML = `<strong>Wind Chill:  </strong>${windChill()}<span>&#8451;</span>`;
} else {
  wchill.innerHTML = "<strong>Wind Chill:  N/A</strong>";
}

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
