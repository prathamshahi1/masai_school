let array = [5, 3, 8, 1, 2];

console.log("Initial array:", array);


array.push(4);
console.log("After adding 4:", array);


const indexToRemove = array.indexOf(3);
if (indexToRemove > -1) {
    array.splice(indexToRemove, 1);
}
console.log("After removing 3:", array);


array.sort((a, b) => a - b);
console.log("Sorted array:", array);


const sum = array.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);


const average = sum / array.length;
console.log("Average of numbers:", average);
