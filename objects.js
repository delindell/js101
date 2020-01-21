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

const expense = {
    dateCreated: '01/17/2020',
    location: "Baja Burrito",
    cost: 12.57,
    isGood: true

};

//dot notation
console.log(expense.cost); //12.57

//bracket notation (use if string is key)
console.log(expense['cost']);

const employee = {
    firstName: 'Daniel',
    lastName: 'Rose',
    age: 34,
    marriageStatus: 'Married',
    isIdiot: false
}

console.log(employee.firstName.charAt(0))

const statusMaker = (employee) => {
    if (employee.firstName.charAt(0) === 'M') {
        employee.status = 'vip';
    } else {
        employee.status = 'peasant';
    }
    return employee;
}
console.log(statusMaker(employee));