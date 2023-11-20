const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next");
console.log(nextBtn);
const prevBtn = document.querySelectorAll("form .previous");
const submBtn = document.querySelector("form .submit");
const form = document.querySelectorAll("form");

submBtn.addEventListener("click", (e) => {
    
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
  const active = document.querySelector("form .step.active");
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
