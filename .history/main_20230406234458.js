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
    const parent = document.querySelector(
      "main section:not(.select-movie)+section"
    );
    const h2 = document.querySelector("h2{Movie Details}");
    //div.parentNode.outerHTML */
    /* pNode ---> <section>
                    <h2>Movie Details</h2>
                    <div id="display-info"></div>
                  </section>   <------- */
    const h3 = document.createElement("h3");
    h3.id = "movie-title";
    const h3_content = document.createTextNode(d.title);
    h3.appendChild(h3_content);
    //const h2 = div.previousElementSibling;
    //pNode.replaceChild(h3, h2);
    const el = document.querySelector(
      "div.user-panel.main input[name='login']"
    );

    //let rmNode = sect.removeCh
    console.log(h2);
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
