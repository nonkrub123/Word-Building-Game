const rewardpool = [
    { chance: 10, task: "Watch anime" },
    { chance: 10, task: "Play game" },
    { chance: 10, task: "Corn" },
    { chance: 10, task: "use Social media" },
    { chance: 10, task: "Money to spend" },
    { chance: 10, task: "Phone time!" },
    { chance: 10, task: "snack!" },
    { chance: 10, task: "listen to music" },
    { chance: 10, task: "spend your free time" },
    { chance: 10, task: "Nope" }
];
const rarityChances = [
    { type: "common", chance: 50, duration: 5},
    { type: "uncommon", chance: 30,duration: 10},
    { type: "rare", chance: 15, duration: 20},
    { type: "legendary", chance: 4, duration: 30},
    { type: "godly", chance: 1, duration: 60}
  ];

const getRandomReward = () => {
    const chances = Math.random() * 100;
    let accumulate = 0;
    for(let i = 0; i < rewardpool.length; i++){
        accumulate += rewardpool[i].chance;
        if (chances < accumulate) {
            return rewardpool[i].task;
        }
    }
}
const getRandomDuration = () => {
    const chances = Math.random() * 100;
    let accumulate = 0;
    for(let i = 0; i < rarityChances.length; i++){
        accumulate += rarityChances[i].chance;
        if (chances < accumulate) {
            return rarityChances[i].duration;
        }
    }
    return "common"; // Default rarity if none matched
}

console.log(`Congratulations! You get to ${getRandomReward()}! for ${getRandomDuration()} minutes`);