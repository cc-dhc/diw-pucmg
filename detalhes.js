const apiKey = "00172a7b94f3826720f0fc873ed1e470";

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+apiKey+"&language=pt-BR";

  const genresResponse = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey+"&language=pt-BR");
  const genres = await genresResponse.json();

  fetch(url)
  .then(response => {
    if(response.ok) {
      console.log(response);
      response.json()
      .then(jsonResponse => {
        console.log(jsonResponse);
        document.getElementById("poster").src = "https://image.tmdb.org/t/p/original"+jsonResponse.poster_path;
        document.getElementById("title").innerText = jsonResponse.title;
        document.getElementById("overview").innerText = jsonResponse.overview;
        let date = jsonResponse.release_date.split("-");
        date = date.reverse();
        document.getElementById("info").innerText = date.join("/") + " - " + jsonResponse.vote_average.toString()+"/10";
      })
      .catch(err => console.log(err));
    }
  })
  .catch(err => console.log(err));
}