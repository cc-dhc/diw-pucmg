import { api } from "./modules/api.mjs";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const data = api(`movie/${id}`, {
  "language": "pt-BR"
});

if(data) {
  data.then(film => {
    console.log(film);
    let card = document.createElement("div");
    card.className = "card p-3 border-3 rounded-3";
    card.innerHTML = `
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://image.tmdb.org/t/p/original${film.poster_path}" class="img-fluid rounded-start" alt="Poster de filme">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${film.title}</h5>
            <p class="card-text">${film.overview}</p>
            <p class="card-text"><small class="text-muted">${film.release_date.split("-").reverse().join("/")} - ${film.vote_average}/10</small></p>
            <div id="genres" class="d-flex"></div>
            <div class="d-flex justify-content-end">
              <a href="${film.homepage}" class="btn btn-dark">Site do filme</a>
            </div>
          </div>
        </div>
      </div>
    `;
    film.genres.forEach(genre => {
      let pill = document.createElement("div");
      pill.className = "badge text-bg-primary m-2";
      pill.innerText = genre.name;
      card.querySelector("#genres").appendChild(pill);
    });
    document.getElementById("main").appendChild(card);
  })
}