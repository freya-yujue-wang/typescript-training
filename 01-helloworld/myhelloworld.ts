console.log("hello world!");
console.log("Coding Gurus! " + "Time for some fun!");

//variable
let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "pupu";
let lastName: string = 'yan';

//let's break it!
/*
found = 0;
grade = 'A';
firstName = false;
*/

console.log(found);
console.log("The grade is:" + grade);
console.log("Hi " + firstName + " " + lastName);
console.log(`Hi ${firstName} ${lastName}`);

//loops and array
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Review average = " + average);

let sportsOne: string[] = ["Golf", "Cricket","Tennis", "Swimming"];
// for (let i = 0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }

for (let tempSport of sportsOne) {
    console.log(tempSport);
}

for (let tempSport of sportsOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + " << my favoriite!");
    } else {
        console.log(tempSport);
    }
}

//growable arrays
let sportsTwo: string[] = ["Golf", "Cricket","Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Football");
for (let tempSport of sportsTwo) {
    console.log(tempSport);
}