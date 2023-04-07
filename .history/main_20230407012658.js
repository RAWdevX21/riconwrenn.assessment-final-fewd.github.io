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
      // creating h3 in "Movie Details" section to replace default h2
      const parent = document.querySelector(
        "main section:not(.select-movie)+section"
      );
      const h2 = document.querySelector(
        "main section:not(.select-movie)+section h2"
      );
      let h3 = document.createElement("h3");
      h3.id = "movie-title";
      parent.replaceChild(h3, h2);

      // fetching the film of event-target's value
      getFilmData("films", ev.target.value);
    });
  },

  /*  Details Section of selected movie  
    ╚════════════════════════════════════╝*/

  displayInfo: function (d) {
    const div = document.querySelector("#display-info");

    // adding additional values to h3 element
    h3 = document.getElementById("movie-title");
    h3.innerText = d.title;
    h3.style.margin = "30px";

    // add 'p' elem onto 'div' & show film rel year
    const pY = document.createElement("p");
    pY.innerText = d.release_date;
    div.append(pY);
    pY.style.margin = "30px";
    const pD = document.createElement("p");
    pD.innerText = d.description;
    div.append(pD);
    pD.style.margin = "30px";

    //document.querySelector("select-movie").reset();
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
