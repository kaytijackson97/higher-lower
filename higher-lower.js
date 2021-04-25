let num = enter_max_number("What would you like your maximum number to be?");

console.log(`Max range is ${num}`);

const chosen_number = Math.floor(Math.random()*num)+1;

console.log(`The target number is ${chosen_number}`);


