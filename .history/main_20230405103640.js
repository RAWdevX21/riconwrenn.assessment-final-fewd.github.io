fetch("./ghibli-response.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log("data");
const movieQuery = {
  getCollection: function (data) {
    fetch("./ghibli-response.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displaySort: function (data) {
    const filmCollection = [];
    data.reduce((acc, film) => {
      const { id, title, description } = film;
      const selectMenu = document.querySelector("#titles");

      document.createElement("option");
      acc + `<option value="${film.title}">${film.title}</option>`;
    }, "");
  }.catch((error) => {
    console.error(error);
  }),

  userValues: {
    selectedTitle: document.querySelector("select"),
    userReview: document.querySelector("#review"),
    movieDetails: {},
  },
};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("click", (ev) => {
    ev.preventDefault(movieQuery);

    // Clear the form  List Elements
    form.reset();
  });
});
