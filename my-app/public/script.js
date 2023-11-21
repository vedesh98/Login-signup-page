const steps = Array.from(document.querySelectorAll(".step"));
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".previous");
const submBtn = document.querySelectorAll(".submit");


// const Categories = ["Balyuvak", "yuvak"];
// const BloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+", "None"];

const common = require("../common");
const Categories = common.costants.Categories;
const BloodGroup = common.costants.BloodGroup;

// Function for dropdown in form
const DropDown = (ValueList, FieldId) => {
  const options = ValueList.map(Name => `<option value="${Name}">`);
  document.getElementById(FieldId).innerHTML = options.join('');
};

// Dropdown for categories
DropDown(Categories, "Browser");

// Dropdown for bloodgroup
DropDown(BloodGroup, "bloodgroups");


// const axios = require("axios");
const url = "http://localhost:5000/candidate/updatecandidatevotes";

// const body = {};
const form = document.querySelectorAll("form");

const signup_in = document.querySelector('.img__btn');

signup_in.addEventListener('click', function () {
  document.querySelector('.cont').classList.toggle('s--signup');
  console.log("signup---to login")
});

submBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(`submit button:${button}`);
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
