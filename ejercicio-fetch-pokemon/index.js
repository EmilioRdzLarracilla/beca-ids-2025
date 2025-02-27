console.log("ejercicio de fetch pokemones ");
const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=15",
  $container = document.querySelector(".grid-container");
let template = "";

const getPokemons = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const pokemons = await data.results;

    console.log(pokemons);

    for (let i = 0; i < pokemons.length; i++) {
      try {
        const res = await fetch(pokemons[i].url);
        const data = await res.json();

        template += `
        <section class="section">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="img/contraparte.jpeg" alt="contraparte"/>
            </div>
            <div class="card-back">
            <img src = "${data.sprites.other.dream_world.front_default}">
              <p>${data.name}</p>
            </div>
          </div>
        </div>
      </section>
        `;
      } catch (error) {
        console.log("error en la peticion ");
      }
    }
  } catch (error) {
    console.log(error);
  }

  $container.insertAdjacentHTML("afterbegin", template);
  $container.addEventListener("click", async (event) => {
    const card = event.target.closest(".card");
    card.classList.toggle("flipped");
  });
};

getPokemons(url);
