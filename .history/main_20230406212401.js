const app = {
  /* this populates the select list menu */
  loadDropdown: function (d) {
    console.log(d);
    const selectMenu = document.getElementById("titles");
    //adding each film from json to dropdown list
    for (const { id, title } of d) {
      option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerText = title;
      selectMenu.append(option);
    }
    /*  eventListener 𒈯 dropdown menu  
    ╚════════════════════════════════════╝*/
    selectMenu.addEventListener("click", function selection(ev) {
      getFilmData("films", ev.target.value);
    });
    return selectMenu;
  },
  displayInfo: function (d) {
    let info = document.getElementById("display-info").previousElementSibling;
    console.log(d);
    //console.log(info);
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
