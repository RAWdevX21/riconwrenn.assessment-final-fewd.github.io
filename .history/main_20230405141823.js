[{ id, title, description }, ...data] = data;

const moviesData = function () {
  const fData = fetch("./films-response.json")
    .then((response) => response.json())
    .then((data) => console.log([{ id, title, description, people }, ...data]));

  const pdata = fetch("./people-response.json")
    .then((response) => response.json())
    .then((data) => [{ id, name }, ...data]);
  console.log("This is fData:" + fData);
  console.log("This is pData:" + pData);
};
console.log(moviesData());
const supplyData = (data) => {
  const selectList = data.reduce((acc, movie) => {
    const selectMenu = document.getElementById("titles");
    selectMenu.appendChild(
      document
        .createElement("option")
        .setAttribute("value", id)
        .insertAdjacentText("afterbegin", title)
    );
  }, "");
};

let userReviews = [];
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

document.addEventListener("DOMContentLoaded", (ev) => {
  document.getElementById("user").addEventListener("click", (ev) => {
    ev.preventDefault();
  });
});
//     // Clear the form  List Elements
//     form.reset();
//   });
// });
// document
//   .querySelector("#search-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     weather.search();
