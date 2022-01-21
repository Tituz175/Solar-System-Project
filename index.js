document.body.style.backgroundImage = "url('images/galaxy.gif')";
document.body.style.fontFamily = "Montserrat";

const headerElement = document.querySelector("header");
const inputContainer = document.querySelector("#inputContainer");
const massInput = document.getElementById("mass");
const planetInput = document.getElementById("planet");
const button = document.querySelector("button");
const mainSection = document.querySelector("main");
const flexContainer = document.querySelector(".flex-container");
const imgContainer = document.querySelector(".image");
const img = document.querySelector("img");
const description = document.querySelector(".description");
const desContainer = document.querySelector(".description div");
const resultTitle = document.querySelector(".description div h2");
const result = document.querySelector(".description div h3");

headerElement.style.textAlign = "center";
headerElement.style.color = "white";
headerElement.style.fontSize = "25px";

inputContainer.style.display = "flex";
inputContainer.style.justifyContent = "space-around";
inputContainer.style.width = "45%";
inputContainer.style.margin = "10px auto";
inputContainer.style.boxSizing = "border-box";

massInput.style.width = "35%";
massInput.style.height = "auto";
massInput.style.fontSize = "20px";
massInput.style.padding = "10px 15px";
massInput.style.boxSizing = "border-box";
massInput.style.border = "0px";
massInput.style.borderRadius = "5px";
massInput.style.outline = "none";

planetInput.style.width = "35%";
planetInput.style.height = "auto";
planetInput.style.fontSize = "20px";
planetInput.style.padding = "10px 15px";
planetInput.style.boxSizing = "border-box";
planetInput.style.border = "0px";
planetInput.style.borderRadius = "5px";
planetInput.style.outline = "none";

button.style.width = "25%";
button.style.height = "auto";
button.style.fontSize = "25px";
button.style.padding = "10px 15px";
button.style.boxSizing = "border-box";
button.style.border = "0px";
button.style.borderRadius = "5px";
button.style.outline = "none";
button.style.color = "white";
button.style.backgroundColor = "gray";

mainSection.style.textAlign = "center";
mainSection.style.border = "1px solid red";

flexContainer.style.borderRadius = "10px";
flexContainer.style.backgroundColor = "rgba(191,191,191,0.2)";
flexContainer.style.display = "flex";
flexContainer.style.width = "70%";
flexContainer.style.justifyContent = "space-evenly";
flexContainer.style.margin = "2% auto";
flexContainer.style.padding = "30px 15px";
flexContainer.style.boxSizing = "border-box";

imgContainer.style.width = "35%";

img.style.width = "100%";

description.style.color = "white";
description.style.width = "50%";
description.style.display = "none";
description.style.justifyContent = "center";
description.style.alignItems = "center";

desContainer.style.backgroundColor = "rgba(191,191,191,0.2)";
desContainer.style.width = "100%";
desContainer.style.padding = "20px 0px";
desContainer.style.borderRadius = "10px";

resultTitle.style.fontWeight = "300";

result.style.backgroundColor = "rgba(191,191,191,0.2)";
result.style.borderRadius = "50%";
result.style.width = "130px";
result.style.height = "130px";
result.style.display = "flex";
result.style.justifyContent = "center";
result.style.alignItems = "center";
result.style.margin = "5px auto 20px";
result.style.fontSize = "20px";

let mass;
let checkNumeric = () => {
  mass = parseInt(massInput.value);
  if (isNaN(mass) == true) {
    return false;
  } else {
    return true;
  }
};

const gravities = [3.6, 8.9, 10, 3.8, 26, 11.1, 10.7, 14.1, 0.42, 1.7];
let gravity;

let planet;
let checkPlanet = () => {
  planet = planetInput.value;
  switch (planet) {
    case "Mercury":
      gravity = gravities[0];
      return true;
    case "Venus":
      gravity = gravities[1];
      return true;
    case "Earth":
      gravity = gravities[2];
      return true;
    case "Mars":
      gravity = gravities[3];
      return true;
    case "Jupiter":
      gravity = gravities[4];
      return true;
    case "Saturn":
      gravity = gravities[5];
      return true;
    case "Uranus":
      gravity = gravities[6];
      return true;
    case "Neptune":
      gravity = gravities[7];
      return true;
    case "Pluto":
      gravity = gravities[8];
      return true;
    case "Moon":
      gravity = gravities[9];
      return true;
    default:
      return false;
  }
};

let errorMessagestatus = false;
let errorElement;
let errorMessage = (type) => {
  errorElement = document.createElement("h2");
  errorElement.setAttribute("id", "errorMessage");
  errorElement.textContent = type;
  errorElement.style.boxSizing = "border-box";
  errorElement.style.width = "50%";
  errorElement.style.padding = "10px 0px";
  errorElement.style.color = "white";
  errorElement.style.fontWeight = "400";
  errorElement.style.backgroundColor = "rgba(191,191,191,0.2)";
  flexContainer.appendChild(errorElement);
  errorMessagestatus = true;
};

let planetName;
let namePlanet = (image) => {
  planetName = document.createElement("span");
  planetName.textContent = `${image}`;
  planetName.style.fontWeight = "600";
  resultTitle.appendChild(planetName);
};

let planetImage;
let imagePath;
let imagePlanet = (image) => {
  planetImage = `${image.toLowerCase()}.png`;
  imagePath = `images/${planetImage}`;
  img.setAttribute("src", imagePath);
};

let calculatedMass;
let massCal = (gravityValue) => {
  calculatedMass = Math.ceil(mass * parseFloat(gravityValue));
};

let resultTitlestatus = false;
let totalResult = (image) => {
  imagePlanet(image);
  if (resultTitlestatus == true) {
    resultTitle.removeChild(planetName);
  }
  namePlanet(image);
  resultTitlestatus = true;
  massCal(gravity);
  result.textContent = `${calculatedMass} N`;
  imgContainer.style.display = "block";
  description.style.display = "flex";
};

button.addEventListener("click", () => {
  if (checkNumeric()) {
    if (checkPlanet()) {
      if (errorMessagestatus) {
        flexContainer.removeChild(errorElement);
        totalResult(planet);
        errorMessagestatus = false;
      } else {
        totalResult(planet);
      }
    } else {
      imgContainer.style.display = "none";
      description.style.display = "none";
      if (errorMessagestatus == true) {
        flexContainer.removeChild(errorElement);
        errorMessage("You did not choose a planet yet");
      } else {
        errorMessage("You did not choose a planet yet");
      }
    }
  } else {
    imgContainer.style.display = "none";
    description.style.display = "none";
    if (errorMessagestatus == true) {
      flexContainer.removeChild(errorElement);
      errorMessage("Mass is required");
    } else {
      errorMessage("Mass is required");
    }
  }
});
