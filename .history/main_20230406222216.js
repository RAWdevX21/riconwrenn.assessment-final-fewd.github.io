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
    selectMenu.addEventListener("change", function selection(ev) {
      getFilmData("films", ev.target.value);
    });
    //return selectMenu;
  },
  displayInfo: function (d) {
    const div = document.querySelector("#display-info");
    const h3 = document.createElement("h3");
    const parentNode = div.parentNode.outerHTML;
    //let rmNode = sect.removeCh
    //div.previousElementSibling.outerHTML;

    console.log(div.parentNode.outerHTML);
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
