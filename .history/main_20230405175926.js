const supplyData = (d) => {
  const selectMenu = document.getElementById("titles");
  Object.keys(d[0]).includes("title")
    ? ([{ id, title, description, people }, ...d] = d)
    : ([{ id, name }, ...d] = d);

  let optionItem = d.reduce((acc, obj) => {
    option = document.createElement("option");
    option.setAttribute("value", id);
    title = option.innerHTML;
    selectMenu.appendChild(option);
  }, "");
  console.log("This is the select tag: " + selectMenu);
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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("user").addEventListener("click", (ev) => {
    ev.preventDefault();
    fetch("./ghibli_json/films-response.json")
      .then((response) => response.json())
      .then((data) => supplyData(data));

    fetch("./ghibli_json/people-response.json")
      .then((response) => response.json())
      .then((data) => supplyData(data));
  });
});
//   });
// });
// document
//   .querySelector("#search-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     weather.search();
