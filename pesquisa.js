const apiKey = "00172a7b94f3826720f0fc873ed1e470";

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const valueToSearch = urlParams.get("pesquisa");
  const url = "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query="+valueToSearch.replace(" ", "+")+"&language=pt-BR&page=1&include_adult=false";

  fetch(url)
  .then(response => {
    if(response.ok) {
      console.log(response);
      response.json()
      .then(jsonResponse => {
        console.log(jsonResponse);
        let main = document.getElementById("main");
        jsonResponse.results.forEach(film => {
          let imageUrl;
          if(film.poster_path == null) {
            imageUrl = "https://via.placeholder.com/500x600.png?text=Imagem%20n%C3%A3o%20encontrada";
          } else {
            imageUrl = "https://image.tmdb.org/t/p/original" + film.poster_path;
          }
          let card = document.createElement("div");
          card.className = "card rounded-3 p-3 mx-sm-5 mx-md-3 mb-sm-5";
          card.style.maxWidth = "500px";
          card.innerHTML = `
            <img src="${imageUrl}" class="card-img-top img-fluid" alt="Poster de filme" style="width: 500px; height: 600px">
            <div class="card-body" style="max-height: 200px;">
              <h5 class="card-title">${film.title}</h5>
              <p class="card-text text-truncate" style="-webkit-line-clamp: 4;">${film.overview }<p>
              <a href="detalhes.html?id=${film.id}" class="btn btn-dark">Detalhes</a>
            </div>
          `;
          main.appendChild(card);
        });
      })
      .catch(err => console.log(err));
    }
  })
  .catch(err => console.log(err));
}