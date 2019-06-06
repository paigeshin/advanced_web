function specialMultiply(a, b){
    //하나의 parameter만 넘어간 경우.
    if(arguments.length === 1){
        return function(b){
            return a * b;
        }
    }
    return a * b;
}

function guessingGame(amount){
    var answer = Math.floor(Math.random() * 11);
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed){
            guesses++;
            if(guess === answer){
                completed = true;
                return "You got it!";
            }
            else if(guess > answer) return "Your guess is too high!";
            else if(guess < answer) return "Your guess is too low!";
            else if(guesses === amount){
                completed = true;
                return "No more guesses thew answer was " + answer;
            }
        }
        return "All done playing!";
    }
}