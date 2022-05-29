let baseURL = `http://numbersapi.com`

async function getFact() {
    let resp = await axios.get(`${baseURL}/6/?json`)
    let fact = resp.data.text
    $('#num-fact').append(`<li>${fact}</li>`)
}

async function getFacts() {
    let resp = await axios.get(`${baseURL}/6,13,42/?json`)
    let facts = resp.data
    let keys = Object.keys(facts)
    for (let key of keys) {
        $('#nums-fact').append(`<li>${facts[key]}</li>`)
    }
}

async function getFourFacts() {
    let resp = await Promise.all([
        axios.get(`${baseURL}/6/?json`),
        axios.get(`${baseURL}/6/?json`),
        axios.get(`${baseURL}/6/?json`),
        axios.get(`${baseURL}/6/?json`)
    ]);

    for (let res of resp) {
        $('#num-facts').append(`<li>${res.data.text}</li>`)
    }
}