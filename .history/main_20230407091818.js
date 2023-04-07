const selectMenu = document.getElementById("titles");
const reviewForm = document.getElementById("review-form");
const fieldset = document.querySelector("fieldset");
const submitBtn = document.querySelector(`input[type="submit"]`);
const pplBtn = document.getElementById("show-people");
const resetBtn = document.getElementById("reset-reviews");
const constraintA = [reviewForm, fieldset, pplBtn];
const constraintB = [submitBtn, resetBtn];

const app = {
  //addReview: function (d) {},

  /*   🔔 EventHandlers
  ╚═════════════════════════════╝*/
  onFormSub: reviewForm.addEventListener("submit", (e) => {
    // e.preventDefault();
    userInput = document.getElementById("review");

    !e.target.title
      ? userInput.setCustomValidity("This field requires a movie selection")
      : !userInput.value
      ? userInput.setCustomValidity("Fields can not be empty")
      : null;
    let userEntries = document.getElementById("results");
    console.log(userEntries);
  }),

  userSelectHandler: selectMenu.addEventListener(
    "change",
    function selection(ev) {
      try {
        // creating h3 in "Movie Details" section to replace default h2
        const parent = document.querySelector(
          "main section:not(.select-movie)+section"
        );
        const h2 = document.querySelector(
          "main section:not(.select-movie)+section h2"
        );
        let h3 = document.createElement("h3");
        h3.id = "movie-title";
        parent.replaceChild(h3, h2);
      } catch (error) {
        console.log("Replaced child node no longer exists: ", error);
      } finally {
        // fetch film of event-target's value
        getFilmData("films", ev.target.value);
      }
    }
  ),
  /*  Details Section of selected movie  
  ╚════════════════════════════════════╝*/
  displayInfo: function (d) {
    const div = document.querySelector("#display-info");
    div.innerHTML = "";

    // adding additional values to h3 element

    h3 = document.getElementById("movie-title");
    h3.innerText = d.title;
    h3.style.margin = "30px";

    // add 'p' elem onto 'div' & show film rel year
    const pY = document.createElement("p");
    pY.innerText = d.release_date;
    const pD = document.createElement("p");
    pD.innerText = d.description;
    div.append(pY, pD);
    pY.style.margin = "30px";
    pD.style.margin = "30px";

    /*when selected, the film's title 𒄟 "title" attribute of disabled_elements*/
    allDisabled.forEach((el) => {
      el.setAttribute("title", d.title);
      el.disabled = !el.disabled;
      console.log(el);
    });
  },
  /*  Build the Dropdown Select List  
  ╚═══════════════════════════════════╝*/
  loadDropdown: function (d) {
    // adding each film to dropdown list
    for (const { id, title } of d) {
      option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerText = title;
      selectMenu.append(option);
    }
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
