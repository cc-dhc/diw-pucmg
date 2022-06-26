import { api } from "./modules/api.mjs";
import { cardFilm } from "./modules/components.mjs";

const data = api("movie/popular", {
  "language": "pt-BR",
  "page": 1,
  "include_adult": false
});

var cardArray = [];

if(data) {
  data.then(data => {
    data
      .results
      .filter(film => film.poster_path)
      .reverse()
      .forEach(film => cardArray.push(cardFilm(film)));
    four();
  })
}

document.getElementById("more").onclick = four;
function four() {
  for (let i = 0; i < 4; i++) {
    let card = cardArray.pop();
    if(card) {
      document.getElementById("feed").appendChild(card);
      continue;
    }
    break;
  }
  if(cardArray.length == 0) {
    document.getElementById("more").remove()
  }
}