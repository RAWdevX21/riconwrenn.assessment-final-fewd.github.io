const axios = require("axios");

axios
  .get("https://resource-ghibli-api.onrender.com/films")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
