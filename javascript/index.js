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
}

updateTime();
setInterval(updateTime, 1000);

//Update clock to show the city the user selected
function updateCity(event) {
  let cityTimeZone = event.target.value;
  //Replace any _ with space in city name
  let cityName = cityTimeZone.replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
