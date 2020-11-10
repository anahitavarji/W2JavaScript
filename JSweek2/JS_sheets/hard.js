 /* HARD: Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 g
Jerry - 	height: 10in 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/

//Tom
const tomHeight = 9;
const tomMass= 8;

//Jerry
const jerryHeight = 10;
const jerryMass = 45;

let tomBMI = tomMass/(tomHeight * tomHeight)
console.log(tomBMI)

let jerryBMI = jerryMass/(jerryHeight * jerryHeight)
console.log(jerryBMI)

let biggerBMI = tomBMI < jerryBMI;


if (tomBMI < jerryBMI) {
    console.log("Tom's BMI was lower than Jerry's.");
}
else {
    console.log("Tom's BMI was higher than Jerry's.");
}
