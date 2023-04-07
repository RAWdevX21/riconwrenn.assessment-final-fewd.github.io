let id;
const endpoint = {
  allFilms: "films",
  id: "films/" + id,
  people: `people/${id}`,
};

const user = {
  selection: event => {
    id = event.target.value;
    //this.getFilmData(endpoint.id);
    console.log(id);
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
  /*╔══════════════════════════════════╗
  ║  Fetching Ghibli-Api Film Data   ║
  ╚══════════════════════════════════╝*/
  getFilmData: function(endpoint) {
    fetch(`https://resource-ghibli-api.onrender.com/${endpoint}`)
      .then(response => response.json())
      .then(d => {
        return (allFilms = endpoint ? this.loadDropdown(d) : console.log(d));
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
