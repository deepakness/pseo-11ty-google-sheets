// Responsible for fetching data
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    let url = `https://script.google.com/macros/s/AKfycbw70Sh3hsolluS5rPZwNolFRykXbA67llz9aT3RRL8AaZ1MbBxkOFgffdVANpD7X9Gtaw/exec`;
  
    const response = await EleventyFetch(url, {
      duration: "1d",
      type: "json"
    });
  
    return response.data;
};