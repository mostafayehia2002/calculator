let btn = document.querySelectorAll(".btn"); //button numbers
let del = document.getElementById("del"); //button delete
let rem = document.getElementById("rem"); //button remove last value
let result = document.getElementById("result"); //button to show result
let input = document.querySelector(".input"); //screen  to show result
let re = document.querySelector("#re");    // final value
let icon = document.querySelector("i");    // icon theme
let section = document.querySelector("section"); //section 
let sp = document.querySelectorAll("span"); //number from 0 to 9
let button = document.querySelectorAll("button"); //all buttons
let x = 0; // valiable to save length of result
let array = ["%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, `+`, 0, "."];
//array to select value to button

//function buttons number to write the value in screen
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    input.textContent = input.textContent + array[i];
  };
}

//function  button = to show result
result.onclick = function () {
  re.textContent = `=${eval(input.textContent)}`;
};

//function button Ac to delete all value
del.onclick = function () {
  input.textContent = "";
  re.textContent = "";
};

//function button x to remove last value
rem.onclick = function () {
  x = input.textContent.trim().length - 1;
  input.textContent = input.textContent.trim().slice(0, x);
};

//function button icon to change background
icon.onclick = function () {
  if (icon.getAttribute("class") == "fas fa-moon") {
    icon.setAttribute("class", "fas fa-sun");
    icon.style.color = "orange";
    section.style.backgroundColor = "black";
    input.style.color = "white";
    for (let x = 0; x < sp.length; x++) {
      sp[x].style.color = "white";
    }
    for (let s = 0; s < button.length - 1; s++) {
      button[s].style.backgroundColor = "black";
    }
  } else {
    icon.setAttribute("class", "fas fa-moon");
    icon.style.color = "black";
    section.style.backgroundColor = "white";
    input.style.color = "black";
    for (let x = 0; x < sp.length; x++) {
      sp[x].style.color = "black";
    }
    for (let s = 0; s < button.length - 1; s++) {
      button[s].style.backgroundColor = "white";
    }
  }
};
