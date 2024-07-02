function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

let number1 = 5;
let number2 = 10;
let sum = addTwoNumbers(number1, number2);
console.log("The sumis:"+sum);

const array =["a","b","c","d",5,6,7,8,9,10];

for (i of array){
    console.log(i);
}
console.log(array[5]);

const nestedArray=[
    1,
    2,
    3,
    ["a","b","c"],
    [4,5,6],
    "d",
    "e",
    "f",
    [7,8,9,["g","h","i"]],


];
for(i of nestedArray){
   console.log("each nestedArray")
}