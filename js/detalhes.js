import { api } from "./modules/api.mjs";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const data = api(`movie/${id}`, {
  "language": "pt-BR"
});

if(data) {
  data.then(film => {
    document.getElementById("poster").src = `https://image.tmdb.org/t/p/original${film.poster_path}`;
    document.getElementById("title").innerText = film.title;
    document.getElementById("overview").innerHTML = film.overview;
    document.getElementById("date").innerText = film.release_date.split("-").reverse().join("/")+" ";
    document.getElementById("site").href = film.homepage;
    
    let star = document.createElement("i");
    star.className = "fa-solid fa-star";
  
    let half_star = document.createElement("i");
    half_star.className = "fa-solid fa-star-half-stroke";
  
    let a = Math.round(film.vote_average * 2);

    for (let i = 0; i < a/4; i++) {
      document.getElementById("votes").appendChild(star.cloneNode());
    }
    if(a%2==1) document.getElementById("votes").appendChild(half_star);

    film.genres.forEach(genre => {
      let pill = document.createElement("div");
      pill.className = "badge text-bg-dark me-2";
      pill.innerText = genre.name;
      document.getElementById("genres").appendChild(pill);
    });
  })
}