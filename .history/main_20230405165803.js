//[{ id, title, description }, ...data] = data;

// const getData = function () {
//   const fData = fetch("./films-response.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//   const pData = fetch("./people-response.json")
//     .then((response) => response.json())
//     .then((data) => console.log("This is pData: " + data));
//   return [fData, pData];
// };
const supplyData = (d) => {
  const selectMenu = document.getElementById("titles");

  Object.keys(d[0]).includes("title")
    ? ([{ id, title, description, people }, ...d] = d)
    : ([{ id, name }, ...d] = d);

  const selectList = d.reduce((acc, curr) => {
    console.log(people);
    selectMenu.appendChild(
      document
        .createElement("option")
        .setAttribute("value", id)
        .insertAdjacentText("afterbegin", title)
    );
    console.log("This is the option tag: " + selectList);
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
