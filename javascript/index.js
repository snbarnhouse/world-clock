function updateTime() {
  //Honolulu date and time
  let honoluluElement = document.querySelector("#honolulu");
  let honoluluDateElement = honoluluElement.querySelector(".date");
  let honoluluTimeElement = honoluluElement.querySelector(".time");
  let honoluluTime = moment().tz("Pacific/Honolulu");

  honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do, YYYY");
  honoluluTimeElement.innerHTML = honoluluTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Bangkok date and time
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia/Bangkok");

  bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do, YYYY");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Melbourne date and time
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneTime = moment().tz("Australia/Melbourne");

  melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do, YYYY");
  melbourneTimeElement.innerHTML = melbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Puerto Rico date and time
  let puertoRicoElement = document.querySelector("#puertoRico");
  let puertoRicoDateElement = puertoRicoElement.querySelector(".date");
  let puertoRicoTimeElement = puertoRicoElement.querySelector(".time");
  let puertoRicoTime = moment().tz("America/Puerto_Rico");

  puertoRicoDateElement.innerHTML = puertoRicoTime.format("MMMM Do, YYYY");
  puertoRicoTimeElement.innerHTML = puertoRicoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
let intervalID= 0;

//Update clock to show the city the user selected
function updateCity(event) {
  clearInterval(intervalID);
  intervalID = setInterval(() => {

  let cityTimeZone = event.target.value;
  //If the user chooses their current location
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  //Replace any _ with space in city name
  //Split the string in an array at the / then show value with index of 1(the city name)
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    " A"
  )}</small></div>
    </div>
    <a href="/" class="resetLink">🔁Reset World Clock</a>
    `}, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
