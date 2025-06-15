// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//   };
  
//   // Add a Method
//   person.name = function() {
//     return (this.firstName + " " + this.lastName).toUpperCase();
//   };
// console.log("My father is " + person.name());

// const sumPositiveNumbers = (arr) => (arr.filter((num) => num > 0).reduce((total,index) => total += index));
// let numberarray = [-9,-4,0,1,4,9];
// // console.log(sumPositiveNumbers(numberarray));

// const findLongestWord = (arr) => {
//   return arr.reduce((longest,current) => {
//       if(current.length > longest.length){
//           longest = current;
//       }
//       return longest;
//   },"");
// }

// wordlist = ["ben","Gwen","Gojo","CJ","Donald","Kim jomu"];
// console.log(findLongestWord(wordlist));

// const newnpcpool = npcpool.map(npc => ({...npc}));
// newnpcpool[0].name = "Natsuki subaru";
// console.log(npcpool[0]);
// console.log(newnpcpool[0]);
// let newnpcpool = [];
// newnpcpool.push(...npcpool)
// newnpcpool.pop()

// console.log(npcpool);
// console.log(newnpcpool);

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 1, "Feb");
// console.log(months);
// Inserts at index 1

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
// items.sort((a, b) => a.value - b.value);
// console.log(items);

const cardpool = [
    {chance: 6, type: "postivehours", value: 1},
    {chance: 6, type: "postivehours", value: 2},
    {chance: 6, type: "postivehours", value: 3},
    {chance: 6, type: "postivehours", value: 4},
    {chance: 6, type: "postivehours", value: 5},
    {chance: 6, type: "negativehours", value: -1},
    {chance: 6, type: "negativehours", value: -2},
    {chance: 6, type: "negativehours", value: -3},
    {chance: 6, type: "negativehours", value: -4},
    {chance: 6, type: "negativehours", value: -5},
    {chance: 10, type: "block", value: 0},
    {chance: 10, type: "blockbreak", value: 0},
    {chance: 10, type: "theif", value: 0},
    {chance: 9, type: "swap", value: 0},
    {chance: 1, type: "lucky", value: 100},
]// array containing objects with chance and type properties
const npcpool = [
    {name: "Oraphan", age:0, agetext:"11 months old",RequiredSleep: 12,  description: "Infants aged 4 - 11 months need 12 - 15 hours of sleep per day."},
    {name: "Don", age: 1, agetext:"1 year old",RequiredSleep: 12, description: "Toddlers aged 1 - 2 years need 11 - 14 hours of sleep per day."},
    {name: "Miguel", age: 1, agetext:"1 year 8 months old",RequiredSleep: 11, description: "Toddlers aged 1 - 2 years need 11 - 14 hours of sleep per day."},
    {name: "Anthony", age: 3, agetext:"3 years old",RequiredSleep: 10, description: "Preschoolers aged 3 - 5 years need 10 - 13 hours of sleep per day."},
    {name: "Hana", age: 4, agetext:"4 years old",RequiredSleep: 10, description: "Preschoolers aged 3 - 5 years need 10 - 13 hours of sleep per day."},
    {name: "Richie", age: 4, agetext:"5 years old",RequiredSleep: 12, description: "Preschoolers aged 3 - 5 years need 10 - 13 hours of sleep per day."},
    {name: "Bay", age: 6, agetext:"6 years old",RequiredSleep: 9, description: "Children aged 6 - 13 years need 9 - 11 hours of sleep per day."},
    {name: "Martin", age: 8, agetext:"8 years old",RequiredSleep: 9, description: "Children aged 6 - 13 years need 9 - 11 hours of sleep per day."},
    {name: "Miwa", age: 10, agetext:"10 years old",RequiredSleep: 9, description :"Children aged 6 - 13 years need 9 - 11 hours of sleep per day."},
    {name: "Rid-chan", age: 11, agetext:"11 years old",RequiredSleep: 9, description:"Children aged 6 - 13 years need 9 - 11 hours of sleep per day."},
    {name: "Rid-Austin", age: 14, agetext:"14 years old",RequiredSleep: 10, description:"Teenagers aged 14 - 17 years need 8 - 10 hours of sleep per day."},
];
let npccard = npcpool.map(npc => ({...npc}));
class Player {
    constructor(name, sleep, card) {
        this.name = name;
        this.npc = [];
        this.hand = [];
        this.sleep = sleep;
        this.card = card;
    }
    drawNpc(npc){
        let drawNpcCards = []
        for(let i = 0; i < npc; i++){
            let chance = Math.random() * npccard.length;
            let accumulate = 0;
            for(let j = 0; j < npccard.length; j++){
                accumulate += 1;
                if(chance<= accumulate){
                    drawNpcCards.push(...npccard.splice(j, 1));
                    break;
                }
            }
        }
        return drawNpcCards;
    }
    addNpc(numcards){
        this.npc.push(...this.drawNpc(numcards));
    }
    drawCard(numCards) {
        let drawnCards = [];
        for (let i = 0; i< numCards; i++){
            let chance = Math.random() * 100;
            let accumulate = 0;
            for(let j = 0; j < cardpool.length; j++){
                accumulate += cardpool[j].chance;
                if (chance < accumulate) {
                    drawnCards.push(cardpool[j]);
                    break; // Exit the loop once a card is drawn
                }
            }
        }
        return drawnCards;
    }

    addCard(numCards) {
        this.hand.push(...this.drawCard(numCards));
    }
    
}
const player1 = new Player("Emilia",3, 5);
const player2 = new Player("Natsuki subaru", 3, 5);

player1.addCard(5);
player2.addCard(5);
player1.addNpc(3);
player2.addNpc(3);

let player1_turn = true;
console.log(player1);

let temp = [];
let best_result = [];
let mostnpcsleep = 0;
let npcsleep = 0;
let test_card = [];
let test_npc = [];
for(card of player1.hand){
    test_card.push(card.value);
}
for(npc of player1.npc){
    test_npc.push(npc.RequiredSleep)
}

for(let card1 = 0; card1 < 3; card1++){
    temp[0] = card1;
    test_npc[card1] = player1.npc[card1].RequiredSleep;
    test_npc[card1] += test_card[card1]

    for(let card2 = 0; card2 < 3; card2++){
        temp[1] = card2;
        test_npc[card2] = player1.npc[card2].RequiredSleep;
        test_npc[card2] += test_card[card2]

        for(let card3 = 0; card3 < 3; card3++){
                temp[2] = card3;
                test_npc[card3] = player1.npc[card3].RequiredSleep;
                test_npc[card3] += test_card[card3]

                for(let card4 = 0; card4 < 3; card4++){
                    temp[3] = card4;
                    test_npc[card4] = player1.npc[card4].RequiredSleep;
                    test_npc[card4] += test_card[card4]
                    
                    for(let card5 = 0; card5 < 3; card5++){
                        temp[4] = card5;
                        test_npc[card5] = player1.npc[card5].RequiredSleep;
                        test_npc[card5] += test_card[card5]

                        let npcsleep = 0;
                        for(let i = 0; i<3; i++){
                            if(test_npc[i] === 0){
                                npcsleep += 1;
                            }
                        }
                        if(npcsleep > mostnpcsleep){
                            best_result = temp;
                        }
                    }
                }
            }
        }
    }
console.log(temp);