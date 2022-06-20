const apiKey = "00172a7b94f3826720f0fc873ed1e470";

document.onload = event => {
  console.log("Document loaded");
  updateFeed();
}

function appendFilms() {
  console.log("Updating feed");
  fetch("https://api.themoviedb.org/3/movie/popular", {
    api_key: apiKey,
    language: "pt-BR"
  })
    .then(response => {
      response.json().results.forEach(film => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${film.poster_path}" class="card-img-top" alt="Poster de filme">
          <div class="card-body">
            <h5 class="card-title">${film.title}</h5>
            <p class="card-text">${film.overview}</p>
            <a href="detalhes.html?id=${film.id}" class="btn btn-primary">Detalhes</a>
          </div>
        `;
        document.getElementById("feed").appendChild(film);
      });
    })
    .catch(error => console.log(error));
}