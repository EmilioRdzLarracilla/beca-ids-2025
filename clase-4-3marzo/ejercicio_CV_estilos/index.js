console.log("ejercicio de CV con login");

const d = document;
const modal = d.querySelector(".modal");
modal.addEventListener("click", () => {
  modal.close();
  form.reset();
  d.body.classList.remove("blurModal");
});

const userAccess = {
  user: "emilio",
  password: "lamejordetodas45",
};
let userValues = {};

const form = d.querySelector(".formLogin");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  userValues = {
    user: form.user.value,
    password: form.password.value,
  };

  console.log(userValues);

  if (
    userAccess.user === userValues.user &&
    userAccess.password === userValues.password
  ) {
    window.location.href = "/CV_emilio.html";
  } else {
    modal.showModal();
    d.body.classList.add("blurModal");
  }
});
