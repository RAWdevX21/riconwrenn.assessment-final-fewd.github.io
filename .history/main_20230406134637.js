const user = {
  selection: event => {
    id = event.target.value;
    this.getFilmData(endpoint.id);
    console.log(endpoint.id);
  },
  loadDropdown: function(d) {
    console.log(d);
    const selectMenu = document.getElementById("titles");

    let optionItems = d.reduce((acc, { id, title, description, people }) => {
      option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerText = title;
      selectMenu.append(option);
    });
    selectMenu.addEventListener("change", user.selection);
  },
  /* End of User Object */
};

let id;
const endpoint = {
  allFilms: "films",
  id: "films/" + id,
  people: `people/${id}`,
};
/*╔══════════════════════════════════╗
  ║  Fetching Ghibli-Api Film Data   ║
  ╚══════════════════════════════════╝*/
function getFilmData(endpoint, id) {
  let apiURL = !id
    ? `https://resource-ghibli-api.onrender.com/${endpoint}`
    : `https://resource-ghibli-api.onrender.com/${endpoint.id}`;

  fetch(apiURL)
    .then(response => response.json())
    .then(d => {
      return (allFilms = endpoint ? user.loadDropdown(d) : console.log(d));
    })
    .catch(error => {
      console.log(error);
    });
}
getFilmData(endpoint.allFilms);
