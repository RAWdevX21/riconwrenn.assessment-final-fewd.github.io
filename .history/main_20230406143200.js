const user = {
  selection: event => {
    getFilmData("films", event.target.value);
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

/*╔══════════════════════════════════╗
  ║  Fetching Ghibli-Api Film Data   ║
  ╚══════════════════════════════════╝*/
function getFilmData(endpoint, id) {
  let query = !id ? endpoint : `${endpoint}/${id}`;
  fetch(`https://resource-ghibli-api.onrender.com/${query}`)
    .then(response => response.json())
    .then(d => {
      return !id ? user.loadDropdown(d) : console.log(query);
    })
    .catch(error => {
      console.log(error);
    });
}
getFilmData("films", "");
