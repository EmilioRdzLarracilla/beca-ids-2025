console.log("estructura generica  de pub sub");
const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", () => {
  const caja = document.querySelector(".caja");
  caja.classList.toggle("caja-verde");
});
