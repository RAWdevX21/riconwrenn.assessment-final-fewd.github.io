let id;

const endpoint = {
  allFilms: "films",
  id: `films/${id}`,
  people: `people/${id}`,
};
const user = {
  selection: event => {
    id = event.target.value;
    getFilmData(endpoint.id);
    console.log(event.target.value);
  },

  loadDropdown: d => {
    console.log(d);
    const selectMenu = document.getElementById("titles");

    let optionItems = d.reduce((acc, { id, title, description, people }) => {
      option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerText = title;
      selectMenu.append(option);
    });
    return selectMenu;
  },
  /*╔══════════════════════════════════╗
  ║  Fetching Ghibli-Api Film Data   ║
  ╚══════════════════════════════════╝*/
  getFilmData: endpoint => {
    fetch(`https://resource-ghibli-api.onrender.com/${endpoint}`)
      .then(response => response.json())
      .then(d => {
        allFilms = endpoint
          ? loadDropdown(d).addEventListener("change", user.selection)
          : console.log(d);
      })
      .catch(error => {
        console.log(error);
      });
  },
  /*╔═══════════════════════╗
  ║  End of USER object   ║
  ╚═══════════════════════╝*/
};
user.getFilmData(endpoint.allFilms);
