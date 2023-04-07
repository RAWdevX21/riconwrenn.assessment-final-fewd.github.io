fetch("./ghibli-response.json")
  .then((response) => response.json())
  .then((data) => supplyData(data));
console.log("data");

let userMemory = [];

const supplyData = (data) => {
  const listOfFilms = data.reduce((acc, film) => {
    const { id, title, description } = film;
    const selectMenu = document.querySelector("#titles");
    return acc + film;
    console.log("film");
    //   document.createElement("option");
    //   acc + `<option value="${film.title}">${film.title}</option>`;
  }, "");
  console.log(listOfFilms);
};
//     .catch((error) => {
//       console.log(data);
//       console.error(error);
//     }),

//     userValues: {
//       selectedTitle: document.querySelector("select"),
//       userReview: document.querySelector("#review"),
//       movieDetails: {},
//     },
// };

// document
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
