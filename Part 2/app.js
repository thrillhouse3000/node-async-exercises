let baseURL = 'http://deckofcardsapi.com/api/deck/'

async function drawOne() {
    let resp = await axios.get(`${baseURL}/new/draw/?count=1`)
    let card  = resp.data.cards[0]
    console.log(`${card.value} of ${card.suit}`)
}

async function drawTwo() {
    let resp = await axios.get(`${baseURL}/new/draw/?count=1`)
    let id = resp.data.deck_id
    let card  = resp.data.cards[0]
    let resp2 = await axios.get(`${baseURL}/${id}/draw/?count=1`)
    let card2 = resp2.data.cards[0]
    console.log(`${card.value} of ${card.suit}, ${card2.value} of ${card2.suit}`)
}

let id;

async function makeDeck() {
    let resp = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`)
    id = resp.data.deck_id
}

async function hitMe() {
    let resp = await axios.get(`${baseURL}/${id}/draw/?count=1`)
    let card = resp.data.cards[0]
    $('#card').attr('src', card.image)
}

makeDeck()
$('#hit-me').on('click', hitMe)