const app = {

  /*  Build the Dropdown Select List  
  ╚═══════════════════════════════════╝*/
  loadDropdown: function (d) {
    console.log(d);
    const selectMenu = document.getElementById("titles");
    // adding each film to dropdown list
    for (const { id, title } of d) {
      option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerText = title;
      selectMenu.append(option);
    }
    // 🔔 eventListener 𒈯 dropdown list
    selectMenu.addEventListener("change", function selection(ev) {
      getFilmData("films", ev.target.value);
    });
  },

  /*  Details Section of selected movie  
    ╚════════════════════════════════════╝*/
  displayInfo: function (d) {
    const div = document.querySelector("#display-info");
    const parent = document.querySelector(
      "main section:not(.select-movie)+section"
    );
    const h2 = document.querySelector(
      "main section:not(.select-movie)+section h2"
    );
    // creating h3 to replace default h2
    const h3 = document.createElement("h3");
    h3.id = "movie-title";
    const contentOfH3 = document.createTextNode(d.title);
    h3.appendChild(contentOfH3);
    parent.replaceChild(h3, h2);
    document.getElementById("movie-title").style.margin-left = "30px";
    // add 'p' elem onto 'div' & show film rel year
    const pYear = document.createElement("p");
    const pDesc = document.createElement("p");


    console.log(parent.outerHTML);
  },
  //   End of the 'app' object
  /*𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳𒈳*/
};
/*----------------------╗
║ Fetch Api CallBack Fn ║
╚═══════════════════════*/
function getFilmData(endpoint, id) {
  fetch(
    `https://resource-ghibli-api.onrender.com/` +
      `${!id ? endpoint : `${endpoint}/${id}`}`
  )
    .then((response) => response.json())
    .then((d) => {
      return !id ? app.loadDropdown(d) : app.displayInfo(d);
    })
    .catch((error) => {
      console.log(error);
    });
}
getFilmData("films", "");
