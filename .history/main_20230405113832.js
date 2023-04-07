fetch("./ghibli-response.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log("data");

const movieQuery = {
  getCollection: function (data) {
    fetch("./ghibli-response.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(data);
  },
  displaySort: function (data) {
    const filmTitles = data.reduce((acc, film) => {
      const { id, title, description } = film;
      const selectMenu = document.querySelector("#titles");
      return acc + film;

      //   document.createElement("option");
      //   acc + `<option value="${film.title}">${film.title}</option>`;
    }, "");
    console.log("filmTitles");
  },
  //   .catch((error) => {
  //     console.log(data);
  //     console.error(error);
  //   }),

  //   userValues: {
  //     selectedTitle: document.querySelector("select"),
  //     userReview: document.querySelector("#review"),
  //     movieDetails: {},
  //   },
};
movieQuery.getCollection;
console.log(movieQuery.getCollection);

// .addEventListener("DOMContentLoaded", () => {
//   document
//   .addEventListener("", () => {})
//     .getElementByTag("form").addEventListener("click", (ev) => {
//     ev.preventDefault();
//     movieQuery.getCollection;

//     // Clear the form  List Elements
//     form.reset();
//   });
// });
// document
//   .querySelector("#search-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     weather.search();
