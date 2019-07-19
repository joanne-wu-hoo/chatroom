const axios = require("axios");

async function getJoke(){
    let response = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
            Accept: "application/json",
        },
        data: {}
    })

    return response.data.joke
}

module.exports = getJoke;