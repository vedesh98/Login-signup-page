const steps = Array.from(document.querySelectorAll(".step"));
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".previous");
const submBtn = document.querySelectorAll(".submit");

const Categories = ["Balyuvak", "yuvak"];
const BloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+", "None"];



// Function for dropdown in form
const DropDown = (ValueList, FieldId) => {
  const options = ValueList.map(Name => `<option value="${Name}">`);
  document.getElementById(FieldId).innerHTML = options.join('');
};


// Dropdown for categories
DropDown(Categories, "Browser");

// Dropdown for bloodgroup
DropDown(BloodGroup, "bloodgroups");


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
  // button.addEventListener("click", async (e) => {
  //   const body = {
  //     email: document.getElementById("email").value,
  //     password: document.getElementById("password").value
  //   }
  //   console.log(body);
  //   const response = await fetch('http://localhost:3000/login', {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     body: JSON.stringify(body)
  //   }
  //   );
  //   console.log(await response.json());


  button.addEventListener("click", async (e) => {
    const body = {
      email: document.getElementById("email01").value,
      password: document.getElementById("password01").value
    }
    console.log("sign");
    console.log(body);
    const response = await fetch('http://localhost:3000/user/signup', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin 
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     
      body: JSON.stringify(body)
    }
    );
    console.log(await response.json());
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
