/**
 * 
 * @param {*} film 
 * @returns 
 */
export function cardFilm(film) {
  let star = document.createElement("i");
  star.className = "fa-solid fa-star";

  let half_star = document.createElement("i");
  half_star.className = "fa-solid fa-star-half-stroke";

  let card = document.createElement("div");
  card.className = "p-3";
  card.innerHTML = `
    <div class="card col rounded-3 p-3">
      <div class="row g-0">
      <div class="col-md-4">
        <img src="https://image.tmdb.org/t/p/original${film.poster_path}" class="img-fluid rounded-start" alt="Poster de filme">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${film.title}</h5>
          <small class="text-muted fw-bold">${film.release_date.split("-").reverse().join("/")}</small>
          <div id="votes"></div>
          <div class="d-flex justify-content-end">
            <a href="detalhes.html?id=${film.id}" class="btn btn btn-dark">Detalhes</a>
          </div>
        </div>
      </div>
      </div>
    </div>
    `;

  let a = Math.round(film.vote_average * 2);

  for (let i = 0; i < a/4; i++) {
    card.querySelector("#votes").appendChild(star.cloneNode());
  }
  if(a%2==1) card.querySelector("#votes").appendChild(half_star);
  return card;
}

function createStars(votes) {
  let star = document.createElement("i");
  star.className = "fa-solid fa-star";

  let half_star = document.createElement("i");
  half_star.className = "fa-solid fa-star-half-stroke";

  let a = Math.round(film.avarege_vote * 2);
  let arr = [];
  for (let i = 0; i < film.avarege_vote%2; index++) {
    arr.push(star);
  }

}