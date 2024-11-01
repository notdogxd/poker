//deck1 je nakopirovanej deck
//deck2 je nahodne poskladanej deck

const deckRandom = () => {
  const deck = [
    "AH",
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "10H",
    "JH",
    "QH",
    "KH",
    "AC",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "JC",
    "QC",
    "KC",
    "AS",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "10S",
    "JS",
    "QS",
    "KS",
    "AD",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "JD",
    "QD",
    "KD",
  ];
  const deck1 = [...deck];
  const deck2 = [];
  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck1.length);
    const selectedCard = deck1[randomIndex];
    deck2.push(selectedCard);
    deck1.splice(randomIndex, 1);
  }
  return deck2;
};
const deck2 = deckRandom();
console.log("Random deck:", deck2);

const feroOut = (deckToShuffle) => {
  // Split the deck into two equal chunks
  const chunk1 = deckToShuffle.slice(
    deckToShuffle.length / 2,
    deckToShuffle.length
  );
  const chunk2 = deckToShuffle.slice(0, deckToShuffle.length / 2);
  const shuffledDeck = [];

  for (let i = 0; i < deckToShuffle.length / 2; i++) {
    const pushCardChunk1 = chunk1[i];
    const pushCardChunk2 = chunk2[i];
    shuffledDeck.push(pushCardChunk1);
    shuffledDeck.push(pushCardChunk2);
  }
  return shuffledDeck;
};

const shuffledDeck3 = feroOut(deck2);
console.log("After first shuffle:", shuffledDeck3);
const shuffledDeck4 = feroOut(shuffledDeck3);
console.log("After second shuffle:", shuffledDeck4);

//cuts
const cuts = (deckToCut) => {
  let rgn;

  do {
    rgn = Math.random();
  } while (rgn < 0.14 || rgn > 0.36);
  const rnd1 = Math.floor(rgn * 100);

  const chunk1 = deckToCut.slice(rnd1, deckToCut.length);
  const chunk2 = deckToCut.slice(0, rnd1);
  const deckFinal = [...chunk1, ...chunk2];
  return deckFinal;
};
const deckFinal = cuts(shuffledDeck4);
console.log("After cuts:", deckFinal);

//deal cards to players
const dealCards = (deck) => {
  const me = [];
  const player1 = [];
  const player2 = [];
  const player3 = [];
  const player4 = [];
  const player5 = [];
  const players = [me, player1, player2, player3, player4, player5];

  for (let i = 0; i < 2; i++) {
    // Loop twice to deal 2 cards per player
    for (let j = 0; j < players.length; j++) {
      // Loop through each player
      players[j].push(deck.shift()); // Deal the top card from the deck
    }
    return players;
  }
};
const dealtHands = dealCards(deckFinal);
console.log("Dealt hands:", dealtHands);

const game = () => {
  const meBet = [1000];
  const player1Bet = [1000];
  const player2Bet = [1000];
  const player3Bet = [1000];
  const player4Bet = [1000];
  const player5Bet = [1000];
};
