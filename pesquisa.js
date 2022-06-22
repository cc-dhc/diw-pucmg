import { api } from "./modules/api.mjs";
import { cardFilm } from "./modules/components.mjs";

const urlParams = new URLSearchParams(window.location.search);
const valueToSearch = urlParams.get("pesquisa").replace(" ", "+");
const data = api("search/movie", {
  "language": "pt-BR",
  "query": valueToSearch,
  "include_adult": false
});

if(data) {
  data.then(data => {
    data.results
    .filter(film => film.poster_path)
    .forEach(film => document
      .getElementById("main")
      .appendChild(cardFilm(film)))
  })
}