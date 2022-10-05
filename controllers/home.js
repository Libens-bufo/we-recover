const axios = require("axios");
module.exports = {
  getIndex: async (req, res) => {
    const randomNum = Math.floor(Math.random() * 111);
    const response = await axios
      .get(
        "https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=motivational"
      )
      .then(function (response) {
        quote = response.data.quotes[randomNum].text;
        author = response.data.quotes[randomNum].author;
      });

    res.render("index.ejs", {
      quote: quote,
      author: author,
    });
  },
};
