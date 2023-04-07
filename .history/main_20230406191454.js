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
    selectMenu.addEventListener("click", function selecton(ev) {
      getFilmData("films", ev.target.value);
    });
    return optionItems;
  },
  /* End of 'user' object */
};
/*╔══════════════════════════════════╗
  ║  Fetching Ghibli-Api Film Data   ║
  ╚══════════════════════════════════╝*/
let apiURL = "https://resource-ghibli-api.onrender.com/";
let endpoint = "films";
function getFilmData(apiURL, endpoint, id) {
  //let query = !id ? endpoint : `${endpoint}/${id}`;
  fetch(apiURL + `${!id ? endpoint : endpoint + "/" + id}`)
    .then((response) => response.json())
    .then((d) => {
      return !id ? user.loadDropdown(d) : console.log(d);
    })
    .catch((err) => {
      if (err instanceof NetworkError) {
        console.error(
          "Using alternative fetch source due to a Network Error: " + err
        );
        apiURL = "./ghibli_d/";
        endpoint = "film.json";
      }
    });
}
/*╔══════════════════════════════════════════════════╗
  ║  The eXecutor: this call initiates the process   ║
  ╚══════════════════════════════════════════════════╝*/
getFilmData(endpoint, "");
