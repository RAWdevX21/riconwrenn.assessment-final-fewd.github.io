const axios = require("axios");
const selectContainer = document.querySelector("titles");

const movieList = {
  getFilms: document.addEventListener("DOMContentLoaded", () => {
    axios
      .get("https://resource-ghibli-api.onrender.com/films")
      .then((response) => {
        console.log(response.data);
      });
    appendFilms: (function (data) {
      data.reduce((acc, curr) => {
        (acc + `<option value="${film.title}">${film.title}</option>`) = selectContainer.innerHTML;
      }, "");
    }.catch((error) => {
      console.error(error);
    }));

    // fetch("https://resource-ghibli-api.onrender.com/films")
    // .then((response) => response.json())
    // .then((data) => console.log(data))
  }),
  // appendFilms: (function(data) {
  //     data.reduce((acc, curr) => {
  //         const selectContainer = document.getElementById("titles");
  //         selectContainer.innerHTML = acc + `<option value="${film.title}">${film.title}</option>`;
  //         films
  // //     }, "")
  // })
};
