// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


let num = parseFloat (prompt ( "Enter a number:"));

if (num == "1") { 
  num = "January";
}
else if (num == "2") {
    num = "February";
}
else if (num == "3") {
    num = "March";
}
else if (num == "4") {
    num = "April";
}
else if (num == "5") {
    num = "May";
}
else if (num == "6") {
    num = "June";
}
else if (num == "7") {
    num = "July";
}
else if (num == "8") {
    num = "August";
}
else if (num == "9") {
    num = "September";
}
else if (num == "10") {
    num = "October";
}
else if (num == "11") {
    num = "November";
}
else if (num == "12") {
    num = "December";
}
else {
    num = "Invalid Number"
}
console.log(num);