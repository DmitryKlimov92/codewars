/* DESCRIPTION

Task:

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.


 */



//SOLUTION

function remainder(a, b) {
    return a > b ? (b !== 0 ? a % b : NaN) : a !== 0 ? b % a : NaN;
}