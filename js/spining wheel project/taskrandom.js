const randomtask = (time) => {
    let tasks = [];
    for (let i = 0; i < time; i++){
    let random = Math.random() * 100;
    if (random < 10) {
        tasks.push("Learn web development!");
    } else if (random < 20) {
        tasks.push("Meditate!");
    } else if (random < 30) {
        tasks.push("Diary!");
    } else if (random < 40) {
        tasks.push("Clean your room!");
    } else if (random < 50) {
        tasks.push("Myofunctional Therapy!");
    } else if (random < 60) {
        tasks.push("Do laundry!");
    } else if (random < 70) {
        tasks.push("Elsa speak!");
    } else if (random < 80) {
        tasks.push("Plan workout!");
    } else if (random < 90) {
        tasks.push("Make roblox game!"); //or track your progress today
    } else {
        tasks.push("Do nothing!");
    }
}
    return tasks;
}

console.log(randomtask(1));