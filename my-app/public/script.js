const steps = Array.from(document.querySelectorAll(".step"));
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".previous");
const submBtn = document.querySelectorAll(".submit");


const Categories = ["Balyuvak", "yuvak"];
const BloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+", "None"];

// const common = require("./css/common");
// console.log(common);
// const Categories = common.costants.Categories;
// const BloodGroup = common.costants.BloodGroup;

// Function for dropdown in form
const DropDown = (ValueList, FieldId) => {
  const options = ValueList.map(Name => `<option value="${Name}">`);
  document.getElementById(FieldId).innerHTML = options.join('');
};


// Dropdown for categories
DropDown(Categories, "Browser");

// Dropdown for bloodgroup
DropDown(BloodGroup, "bloodgroups");


// const axios = require("axios/dist/axios");
// // import axios from "axios/dist/browser/axios.cjs";
// const url = "http://localhost:3000/mandals";
const getMandalName = async () => {
  const response = await fetch('http://localhost:3000/mandals');
  const MandalName = await response.json();
  const nameList = MandalName.map(obj => obj.name)
  console.log(nameList);
  DropDown(nameList, "mandals");
}


getMandalName();

const form = document.querySelectorAll("form");

const signup_in = document.querySelector('.img__btn');




signup_in.addEventListener('click', function () {
  document.querySelector('.cont').classList.toggle('s--signup');
  console.log("signup---to login")
});

submBtn.forEach(async (button) => {
  button.addEventListener("click", async (e) => {
    console.log();
      // await getMandalName());
  });
});

nextBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeStep("previous");
  });
});

function changeStep(direction) {
  let index = 0;
  const active = document.querySelector(".step.active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");

  if (direction === "next") {
    index++;
  } else if (direction === "previous") {
    index--;
  }

  steps[index].classList.add("active");
  console.log(index);
}
