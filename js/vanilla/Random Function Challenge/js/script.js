function randNumbers( lower, upper ) {
    if ( isNaN(lower)  || isNaN(upper)) {
        return 'One of your values was not a valid number.';    
    } else {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
}

console.log ( randNumbers(1,6));
console.log (randNumbers ('nine', 6));