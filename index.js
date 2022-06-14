const apiKey = "00172a7b94f3826720f0fc873ed1e470";

document.getElementById("feed-dropdown").onchange = event => {
    event.preventDefault();
    const value = document.getElementById("dropdown").value;
}

document.onload = () => {
    updateFeed();
}

function updateFeed() {
    fetch("https://api.themoviedb.org/3/movie/popular", {
        api_key: apiKey,
        language: "pt-BR"
    })
    .then(response => {
        response.json().results.forEach(film => {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${film.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">${film.overview}</p>
                <a href="" class="btn btn-primary">Detalhes</a>
                </div>
            `;
            document.getElementById("feed").appendChild(film);
        });
    })
    .catch(error => console.log(error));
}