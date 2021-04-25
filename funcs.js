let input;
let valid_max_number;
let valid_input = false;
let welcome_message = document.getElementById("welcome_message");

function enter_max_number(prompt){
    while(!valid_input){
        input = window.prompt(prompt)
        valid_max_number = Number(input);
        valid_max_number = Math.round(valid_max_number);

        if(valid_max_number != NaN && valid_max_number > 0){
            valid_input = true;
        }
    }
    welcome_message.innerText =`Guess a number between 1 and ${valid_max_number}`;
    return valid_max_number;
}

let message = document.getElementById("message");
let guess_array = [];
let check;

function guess_number(generated_number, max_number){
    let guess = document.getElementById("guess_input").value;
    if(guess < 1 || guess > max_number){
        message.innerText = "That number is not in range, try again."
        check_duplicate(guess_array, guess);
    }else if(guess > generated_number){
        message.innerText = "No, try a lower number.";
        check = check_duplicate(guess_array, guess);
        if(!check){
            guess_array.push(guess);
        }
    }else if(guess < generated_number){
        message.innerText = "No, try a higher number.";
        check = check_duplicate(guess_array, guess);
        if(!check){
            guess_array.push(guess);
        }
    }else if( guess == generated_number){
        check = check_duplicate(guess_array, guess);
        if(!check){
            guess_array.push(guess);
        }
        guess_string = guess_array.toString();
        guess_string = guess_string.replaceAll(",", ", ");
        message.innerHTML = `<p>You got it!<br>It took you ${guess_array.length} tries and your guesses were ${guess_string}</p>`;
    }else{
        message.innerText = "That is not a number!";
        check = check_duplicate(guess_array, guess);
    }
    return guess_array;
}

function check_duplicate(array,entry){
    let duplicate_found=false;
    let duplicate_message = document.getElementById("duplicate_message");
    for(let i=0; i<array.length; i++){
        x = array[i];
        if(entry == x){
            duplicate_found=true;
            duplicate_message.innerText = "(You've already tried this number)";
            break;
        }else{
            duplicate_message.innerText = "";
        }
    }
    return duplicate_found;
}