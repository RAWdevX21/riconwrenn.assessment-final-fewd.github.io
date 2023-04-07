const user = {
  loadDropdown: function (d) {
    console.log(d);
    const selectMenu = document.getElementById("titles");

    let optionItems = d.reduce((acc, { id, title, description, people }) => {
      option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerText = title;
      selectMenu.append(option);
    });
    selectMenu.addEventListener("click", function selection(ev) {
      getFilmData("films", ev.target.value);
    });
    return optionItems;
  },
  /* End of User Object */
};
/*╔══════════════════════════════════╗
  ║  Fetching Ghibli-Api Film Data   ║
  ╚══════════════════════════════════╝*/
function getFilmData(endpoint, id) {
  fetch(
    `https://resource-ghibli-api.onrender.com/${
      !id ? endpoint : `${endpoint}/${id}`
    }`
  )
    .then((response) => response.json())
    .then((d) => {
      return !id ? user.loadDropdown(d) : console.log(d);
    })
    .catch((error) => {
      console.log(error);
    });
}
getFilmData("films", "");
