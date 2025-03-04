console.log("buscador google");
const d = document;
const form = d.querySelector(".form");
let search = "";
let link = "https://www.google.com/search?q=";

console.log(form);

form.addEventListener("input", (e) => {
  search = e.target.value;
  console.log(search);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (search) {
    link += search;

    window.location.href = link;
  }
});
