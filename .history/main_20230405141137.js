[{ id, title, description }, ...data] = data;

const moviesData = {
  fdata: fetch("./films-response.json")
    .then((response) => response.json())
    .then((fdata) =>
      console.log([{ id, title, description, people }, ...fdata])
    ),

  pdata: fetch("./people-response.json")
    .then((response) => response.json())
    .then((pdata) => [{ id, name }, ...pdata]),
};
console.log(fdata);

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
