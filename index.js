document.body.style.backgroundImage = "url('images/galaxy.gif')";
document.body.style.fontFamily = "Montserrat";

const headerElement = document.querySelector("header");
const inputContainer = document.querySelector("#inputContainer");
const massInput = document.getElementById("mass");
const planet = document.getElementById("planet");
const button = document.querySelector("button");
const mainSection = document.querySelector("main");
const flexContainer = document.querySelector(".flex-container");
const imgContainer = document.querySelector(".image");
const img = document.querySelector("img");
const description = document.querySelector(".description");
const desContainer = document.querySelector(".description div");
const result = document.querySelector(".description div h3");

// console.log(desContainer)
// document.querySelector("img").setAttribute("src", "images/mars.png");

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

planet.style.width = "35%";
planet.style.height = "auto";
planet.style.fontSize = "20px";
planet.style.padding = "10px 15px";
planet.style.boxSizing = "border-box";
planet.style.border = "0px";
planet.style.borderRadius = "5px";
planet.style.outline = "none";

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
description.style.display = "flex";
description.style.justifyContent = "center";
description.style.alignItems = "center";

desContainer.style.backgroundColor = "rgba(191,191,191,0.2)";
desContainer.style.width = "100%";
desContainer.style.padding = "20px 0px";
desContainer.style.borderRadius = "10px";

result.style.backgroundColor = "rgba(191,191,191,0.2)";
result.style.borderRadius = "50%";
result.style.width = "130px";
result.style.height = "130px";
result.style.textAlign = "center";
result.style.display = "flex";
result.style.justifyContent = "center";
result.style.alignItems = "center";
result.style.margin = "5px auto 20px";
