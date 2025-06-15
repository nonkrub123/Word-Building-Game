const rewardpool = [
    { chance: 3.33, task: "Do 10 push-ups" },
    { chance: 3.33, task: "Do 20 crunches" },
    { chance: 3.33, task: "Do 15 squats" },
    { chance: 3.33, task: "Hold a 30s plank" },
    { chance: 3.33, task: "Do 5 burpees" },
    { chance: 3.33, task: "Stretch your hamstrings for 1 minute" },
    { chance: 3.33, task: "Practice nasal breathing + tongue posture" },
    { chance: 3.33, task: "Sit still and meditate for 2 minutes" },
    { chance: 3.33, task: "Stare at a wall and clear your mind (1 min)" },
    { chance: 3.33, task: "Fold a lucky star or paper shape" },
    { chance: 3.33, task: "Draw something random for 2 minutes" },
    { chance: 3.33, task: "Do blind contour drawing (no looking!)" },
    { chance: 3.33, task: "Organize 1 drawer or desk area" },
    { chance: 3.33, task: "Throw away 3 useless things" },
    { chance: 3.33, task: "Clean your table surface" },
    { chance: 3.33, task: "Make your bed (or remake it better)" },
    { chance: 3.33, task: "Write 1 sentence about your day" },
    { chance: 3.33, task: "Think of 3 things you’re grateful for" },
    { chance: 3.33, task: "Do 5 rep of (myo exercise)" },
    { chance: 3.33, task: "Work on your coding project for 5 minutes" },
    { chance: 3.33, task: "Read 1 paragraph from a dev article/book" },
    { chance: 3.33, task: "Pretend you’re a robot and move like one" },
    { chance: 3.33, task: "Do a silly dance for 1 minute" },
    { chance: 3.33, task: "Try to balance on one foot for 30s each" },
    { chance: 3.33, task: "Do 10 calf raises" },
    { chance: 3.33, task: "Try to do a pistol squat (use support if needed)" },
    { chance: 3.33, task: "Stack or sort some items neatly" },
    { chance: 3.33, task: "Make a tiny origami from scrap paper" },
    { chance: 3.33, task: "Look outside your window and describe the scene" },
    { chance: 3.33, task: "Fake laugh until you start actually laughing" }
];
const getRandomthingtodo = () => {
    const chances = Math.random() * 100;
    let accumulate = 0;
    for(let i = 0; i < rewardpool.length; i++){
        accumulate += rewardpool[i].chance;
        if (chances < accumulate) {
            return rewardpool[i].task;
        }
    }
}

console.log(getRandomthingtodo());