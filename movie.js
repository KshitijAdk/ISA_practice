const btn = document.getElementById("btn");
const movieContainer = document.getElementById("movie-container");

async function loadMovieData() {
  const inputMovie = document.getElementById("search").value;
  const url = await fetch(
    `http://www.omdbapi.com/?s=${inputMovie}&apikey=e8e7c3d0`
  );
  const data = await url.json();
  console.log(data);
  for (let i = 0; i < data.Search.length; i++) {
    const movie = data.Search[i];
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h1");
    title.className = "movieTitle";
    title.innerHTML = movie.Title;
    card.appendChild(title);

    const year = document.createElement("h2");
    year.className = "movieYear";
    year.innerHTML = movie.Year;
    card.appendChild(year);

    const image = document.createElement("img");
    image.className = "img";
    image.src = movie.Poster;
    card.append(image);

    movieContainer.appendChild(card);
  }
}

btn.addEventListener("click", () => {
  loadMovieData();
});
