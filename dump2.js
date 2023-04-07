// fetch("https://resource-ghibli-api.onrender.com/films")
//   .then((response) => response.d())
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const supplyData = (d) => {
  console.log(d);
  const selectMenu = document.getElementById("titles");

  let optionItems = d.reduce((acc, { id, title, description, people }) => {
    option = document.createElement("option");
    option.setAttribute("value", id);
    option.innerText = title;
    selectMenu.append(option);
  });

  console.log("This is the selectMenu: " + selectMenu);
};
//  console.log(people);
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

//document.addEventListener("DOMContentLoaded", () => {

//ev.preventDefault();
// fetch("./ghibli_d/films.json/")
//   .then((response) => response.d())
//   .then((data) => supplyData(data));

// fetch("./ghibli_d/people.json")
//   .then((response) => response.d())
//   .then((data) => supplyData(data));

const endpoints = ["films", "people"];
for (let i = 0; i < 2; i++) {
  fetch("https://resource-ghibli-api.onrender.com/" + endpoints[i])
    .then((response) => response.json())
    .then((d) => {
      i === 1
        ? supplyData(([{ id, title, description, people }, ...d] = d))
        : supplyData(([{ id, name }, ...d] = d));
    })
    .catch((error) => {
      console.log(error);
    });
}
// ? supplyData(([{ id, name }, ...d] = d))
//         : supplyData(([{ id, title, description, people }, ...d] = d));
//});
//   });
// });
// document
//   .querySelector("#search-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     weather.search();
//apiURL + (!id) ? endpoint : endpoint"/"

let apiURL = "https://resource-ghibli-api.onrender.com/";
let endpoint = "films";
function getFilmData(apiURL, endpoint, id) {
  //let query = !id ? endpoint : `${endpoint}/${id}`;
  fetch(apiURL + `${!id ? endpoint : endpoint + "/" + id}`)
    .then((response) => response.json())
    .then((d) => {
      return !id ? user.loadDropdown(d) : console.log(d);
    })
    .catch((err) => {
      console.error("Using alternative fetch source due to an Error: " + err);
      apiURL = "./ghibli_d/";
      endpoint = "film.json";
    });
}
