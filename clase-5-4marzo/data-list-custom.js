console.log("buscaador con predicción de palabras");

const d = document;
const form = d.querySelector(".form-search");
const listPredict = d.createElement("ul");
d.body.insertAdjacentElement("beforeend", listPredict);
let fruitsMatch = [];
const fragment = d.createDocumentFragment();
let searchWord = "";

const fruits = [
  "Manzana",
  "Plátano",
  "Naranja",
  "Fresa",
  "Mango",
  "Uva",
  "Piña",
  "Kiwi",
  "Sandía",
  "Melón",
  "Pera",
  "Cereza",
  "Frambuesa",
  "Arándano",
  "Mora",
  "Higo",
  "Papaya",
  "Guayaba",
  "Lima",
  "Limón",
  "Aguacate",
  "Coco",
  "Granada",
  "Maracuyá",
  "Carambola",
  "Chirimoya",
  "Lichi",
  "Níspero",
  "Pomelo",
  "Tamarindo",
];

console.log(fruits);

form.addEventListener("input", (e) => {
  searchWord = e.target.value;
  listPredict.innerHTML = "";

  if (searchWord.toLowerCase()) {
    fruitsMatch = fruits.filter((el) => {
      const MinusEl = el.toLowerCase();
      if (MinusEl.includes(searchWord)) {
        return el;
      }
    });
  }

  let predictedFruitsHTML = "";

  fruitsMatch.forEach((fruit) => {
    predictedFruitsHTML += `
        <li>${fruit}</li>
    `;
  });

  listPredict.insertAdjacentHTML("beforeend", predictedFruitsHTML);
});
