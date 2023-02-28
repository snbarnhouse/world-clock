//Honolulu date and time
let honoluluElement = document.querySelector("#honolulu");
let honoluluDateElement = honoluluElement.querySelector(".date");
let honoluluTimeElement = honoluluElement.querySelector(".time");
let honoluluTime = moment();
honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss [<small>]A[</small>]");