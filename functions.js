console.log('functions');

const nuggetizer = (animal) => {
    const output = `processed ${animal}`;

    return output;
};

console.log(nuggetizer ('chicken'));
console.log(nuggetizer ('fish'));
console.log(nuggetizer ('cow'));
console.log(nuggetizer ('pig'));
console.log(nuggetizer ('tire'));

const dogBreed = (dog) => {
    return `my favorite dog is ${dog}`
};

console.log(dogBreed('lab'));
console.log(dogBreed('cat'));

const fourtyTwo = (add) => {
    return add + 42;
};
console.log(fourtyTwo(4));
console.log(fourtyTwo(8));

const oldAge = (yearBorn) => {
    return 2099 - yearBorn;
};
console.log(oldAge(1954));
console.log(oldAge(2000));