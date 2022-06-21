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
        jsonResponse.results.filter(film => film.poster_path != null).forEach(film => {
          
          let card = document.createElement("div");
          card.className = "p-3";
          card.innerHTML = `
            <div class="card col rounded-3 p-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${imageUrl}" class="img-fluid rounded-start" alt="Poster de filme">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${film.title}</h5>
                    
                    
                    <div class="d-flex justify-content-end mt-auto">
                      <a href="detalhes.html?id=${film.id}" class="btn btn-dark">Detalhes</a>
                    </div>
                  </div>
                </div>
              </div>
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