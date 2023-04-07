





// To ensure Cypress tests work as expected, add any code/functions that you would like to run on page load inside this function

const filmSelect = document.getElementById("titles");
const movieList ={
    getMovies: document.addEventListener("DOMContentLoaded", () => {
        fetch("https://resource-ghibli-api.onrender.com/films")
        .then((response) => response.json())
        .then((data) => this.appendFilms(data));
    }),
    appendFilms: function(data) {
        this.reduce((acc, curr) => {
            acc + `<option value="${film.title}">${film.title}</option>`
        }, "") += filmSelect.innerHTML;
    }
};

        


/*         const options = 
            // Append the options to the select field
            document.getElementById("filmSelect").innerHTML += options;
        });
  });
document.getElementById("titles").addEventListener("click", addmovie);
let movies = [];
// example {id: 1592304983049, title: 'Deadpool', year: 2015)
const addMovie = (ev)=>{
    ev.preventDefault(); //to stop the form submitting
    let movie = {
        id: Date. now() ,
        title: document.getElementById('title'). value, year: document.getElementById('yr'). value
    }
    movies.push(movie);
    document.forms[0].reset(); // to clear the form for the next entries

    //for display purposes only 
    console.warn('added' , {movies});
    let pre = document. querySelector ('#msg pre');
    pre.textContent = '\n' + JSON. stringify(movies, '\t', 2);

    //saving to localStorage
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('titles').addEventListener('click', addmovie);
});

fetch("https://resource-ghibli-api.onrender.com/films")
  .then((response) => response.json())
  .then((data) => {
    // Get the list of films and generate the HTML options
    const options = data.reduce(
      (html, film) =>
        html + `<option value="${film.title}">${film.title}</option>`,
      ""
    );

    // Append the options to the select field
    document.getElementById("filmSelect").innerHTML += options;
  });


function run() {
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const results = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = input.value;
  fetch(`https://resource-ghibli-api.onrender.com/films?title=${query}`)
    .then((response) => response.json())
    .then((data) => {
      results.innerHTML = "";

      if (data.length > 0) {
        data.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.title;
          results.appendChild(li);
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "No results found.";
        results.appendChild(li);
      }
    })
    .catch((error) => {
      console.error(error);
      const li = document.createElement("li");
      li.textContent = "An error occurred. Please try again later.";
      results.appendChild(li);
    });
});
}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

setTimeout(run, 1000);
 */