const user = {
  selection: event => {
    //getFilmData(endpoint.allFilms, event.target.value);
    console.log(endpoint, event.target.value);
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
    return optionItems;
  },
  /* End of User Object */
};
const endpoints = {
  allFilms: "films",
  people: `people`,
};
/*╔══════════════════════════════════╗
  ║  Fetching Ghibli-Api Film Data   ║
  ╚══════════════════════════════════╝*/
function getFilmData(endpoint, id) {
  const query = !id ? endpoints.endpoint : endpoints.endpoint + id;
  fetch(`https://resource-ghibli-api.onrender.com/${query}`)
    .then(response => response.json())
    .then(d => {
      return ("allFilms" = endpoint ? console.log(d) : console.log(d));
    })
    .catch(error => {
      console.log(error);
    });
}
getFilmData("allFilms");
//user.loadDropdown(d)
