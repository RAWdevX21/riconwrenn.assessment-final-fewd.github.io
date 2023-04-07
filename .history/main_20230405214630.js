// fetch("https://resource-ghibli-api.onrender.com/films")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const supplyData = (d) => {
  console.log(d);
  const selectMenu = document.getElementById("titles");
  Object.keys(d[0]).includes("title")
    ? ([{ id, title, description, people }, ...d] = d)
    : ([{ id, name }, ...d] = d);

  let optionItems = d.forEach((item) => {
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
document.getElementById("user").addEventListener("click", (ev) => {
  ev.preventDefault();
  // fetch("./ghibli_json/films-response.json")
  //   .then((response) => response.json())
  //   .then((data) => supplyData(data));

  // fetch("./ghibli_json/people-response.json")
  //   .then((response) => response.json())
  //   .then((data) => supplyData(data));
  fetch("https://resource-ghibli-api.onrender.com/films")
    .then((response) => response.json())
    .then((json) => {
      supplyData(json);
    })
    .catch((error) => {
      console.log(error);
    });
});
//});
//   });
// });
// document
//   .querySelector("#search-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     weather.search();
