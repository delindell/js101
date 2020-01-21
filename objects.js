console.log('objects')

//returns length of word

const wordLength = (word) => {
    return word.length;
};

console.log('num of letters ', wordLength('cat'));
console.log(wordLength('helloworld'));


//cehck your age
const ageCheck = (age) => {
    if  (age >= 21) {
        console.log('PARTY!!!!');
    } else {
        console.log('no drinks for you');
    
    }
};

ageCheck(12); //no drinks
ageCheck(24); //PARTY!!!!