document.body.style.backgroundImage = "url('images/galaxy.gif')";
document.body.style.fontFamily = "Montserrat";

const headerElement = document.querySelector("header");
const inputContainer = document.querySelector("#inputContainer");
const massInput = document.getElementById("mass");
const planet = document.getElementById("planet");
const button = document.querySelector("button");

// document.querySelector("img").setAttribute("src", "images/mars.png");

headerElement.style.textAlign = "center";
headerElement.style.color = "white";
headerElement.style.fontSize = "25px";

inputContainer.style.display = "flex";
inputContainer.style.justifyContent = "space-around";
inputContainer.style.width = "45%";
inputContainer.style.margin = "10px auto";
inputContainer.style.boxSizing = "border-box"

massInput.style.width = "35%"
massInput.style.height = "auto"
massInput.style.fontSize = "20px"
massInput.style.padding = "10px 15px"
massInput.style.boxSizing = "border-box"
massInput.style.border = "0px"
massInput.style.borderRadius = "5px"
massInput.style.outline = "none"

planet.style.width = "35%"
planet.style.height = "auto"
planet.style.fontSize = "20px"
planet.style.padding = "10px 15px"
planet.style.boxSizing = "border-box"
planet.style.border = "0px"
planet.style.borderRadius = "5px"
planet.style.outline = "none"

button.style.width = "25%"
button.style.height = "auto"
button.style.fontSize = "25px"
button.style.padding = "10px 15px"
button.style.boxSizing = "border-box"
button.style.border = "0px"
button.style.borderRadius = "5px"
button.style.outline = "none"
button.style.color = "white"
button.style.backgroundColor = "gray"
// inputContainer.style.flexDirection = "column"
