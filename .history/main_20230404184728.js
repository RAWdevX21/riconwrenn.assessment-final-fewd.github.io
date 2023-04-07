const axios = require("axios");
const selectContainer = document.querySelector("titles");

const movieList = {
  getFilms: document.addEventListener("DOMContentLoaded", () => {
    axios
      .get("https://resource-ghibli-api.onrender.com/films")
      .then((response) => {
        this.addFilms(response.data);
      });
    addFilms: (function (data) {
      data.reduce((acc, curr) => {
        (acc + `<option value="${film.title}">${film.title}</option>`) = selectContainer.innerHTML;
      }, ""); console.log(this)
    }.catch((error) => {
      console.error(error);
    }));
  }),
};
