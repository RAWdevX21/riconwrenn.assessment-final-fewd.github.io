fetch("./ghibli-response.json")
  .then((response) => response.json())
  .then((data) => supplyData(data));

let userMemory = [];

const supplyData = (data) => {
  [{ id, title, description }, ...data] = data;
  const moviesList = data.reduce((acc, movie) => {
    const selectMenu = document.getElementById("titles");
    return selectMenu.appendChild(
      document
        .createElement("option")
        .setAttribute("value", id)
        .insertAdjacentText("afterbegin", title)
    );
  }, "");
  console.log(moviesList);
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
