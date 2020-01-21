console.log('combo');

// Challenge #1
// Create a function called evenOdd that takes an integer 
// as an argument and returns "Even" for even numbers or 
// "Odd" for odd numbers.
const evenOdd = (integer) =>{
    if (integer % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }

}

console.log(evenOdd(3));
console.log(evenOdd(4));

// Challenge #2
// given a number, find its opposite. 2 = -2

const oppNum = (num) => {
    return num *-1;
}    
console.log(oppNum(1))
console.log(oppNum(-1))


// Challenge #3
// A palindrome is a word or sentence that's spelled the same
//  way both forward and backward, 
// ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. 
// Otherwise, console false.
const checkPalindrom = (string) => {
    let stringLength = string.length;
    if (stringLength === 0 || stringLength === 1){
        return true;
    }

if (string[0] === string[stringLength -1]) {
    return checkPalindrom(string.slice(1, stringLength -1));
}
    return false;
}

console.log(checkPalindrom("yes"));
console.log(checkPalindrom("mom"));

// Challenge #4
// Lawrence the wide mouth frog is particularly interested
// in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters
// what they like to eat. But then he meet the
// alligator who just LOVES to eat the lips
// of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence
// encounters, output small if the animal is an alligator
// (case insensitive) otherwise return wide.
const mouthSize = (animal) => {
    if (animal === 'alligator') {
        return 'small';
    } else {
        return 'wide';
    }

}

console.log(mouthSize('alligator'));
console.log(mouthSize('cat'));
