/**
 * 
 * @param {*} film 
 * @returns 
 */
export function cardFilm(film) {
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
          <div class="d-flex justify-content-between mt-auto">
            <small class="text-muted">${film.release_date.split("-").reverse().join("/")} - ${film.vote_average}/10</small>
            <a href="detalhes.html?id=${film.id}" class="btn btn-dark">Detalhes</a>
          </div>
        </div>
      </div>
      </div>
    </div>
    `;
  return card;
}