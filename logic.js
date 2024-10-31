

//create deck
//originalni deck
const deck = ["AH", "2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
              "AC", "2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC",
              "AS", "2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS",
              "AD", "2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
]
//deck1 je nakopirovanej deck
//deck2 je nahodne poskladanej deck
const deck1 = [...deck];
const deck2 = [];
//make position of cards random v array 
const deckRandom = () => {
    for (let i = 0; i < deck.length; i++) {
    
        const randomIndex = Math.floor(Math.random() * deck1.length);
                 const selectedCard = deck1[randomIndex];
                    deck2.push(selectedCard);
                    deck1.splice(randomIndex, 1);
                    
                    
        }
        return deck2;
    }
    deckRandom();
    
const deck_2 = [...deck2];
//shafle in fero and out fero shaffle, cuts, i normakni shafl
//out fero 
const chunk1 = deck_2.slice(deck_2.length / 2, deck_2.length);
const chunk2 = deck_2.slice(0, deck_2.length / 2);
//deck3 vznikne z zamichani chunku
const deck3 = [];



const feroOut = () => {
    for (let i = 0; i < deck2.length / 2; i++) {
        const pushCardChunk1 = chunk1[i];
        const pushCardChunk2 = chunk2[i];
        deck3.push(pushCardChunk1);
        deck3.push(pushCardChunk2);
        
        
    }
    return deck3;
}
feroOut();

const deck4 = [];


const feroIn = () => {
    for (let i = 0; i < deck2.length / 2; i++) {
        const pushCardChunk1 = chunk1[i];
        const pushCardChunk2 = chunk2[i];
        deck4.push(pushCardChunk2);
        deck4.push(pushCardChunk1);   
    }
    return deck4;
}
feroIn();

//cuts
const cuts = () => {
    let rnd;
    
    do {
        rnd = Math.random();
    } while (rnd < 0.14 && rnd > 0.36);
    const rnd1 = Math.floor(rnd * 100);

    const deck4_1 = [...deck3]; 
    const chunk21 = deck4_1.slice(rnd1, deck4_1.length);
    const chunk22 = deck4_1.slice(0 , rnd1);
    const deck5 =  [...chunk21, ...chunk22]
    return deck5;
   

}
cuts();

//deal cards to players
const dealCards = (deck5) => {
    const me = [];
    const player1 = [];
    const player2 = [];
    const player3 = [];
    const player4 = [];
    const player5 = [];
    const players = [me, player1, player2, player3, player4, player5];
    
    for (let i = 0; i < 2; i++) {  // Loop twice to deal 2 cards per player
        for (let j = 0; j < players.length; j++) {  // Loop through each player
            players[j].push(deck5.pop());  // Deal the top card from the deck
        }

    


    }
    
}
dealCards(cuts());

const game = () => {
    const meBet = [1000];
    const player1Bet = [1000];
    const player2Bet = [1000];
    const player3Bet = [1000];
    const player4Bet = [1000];
    const player5Bet = [1000];
    
}