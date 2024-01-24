/*
function fibs(number) {
    if (number == 1) {
        return [0];
    } else if (number == 2) {
        return [0, 1];
    } else if (number < 1) {
        return "This number doesn't work";
    } else {
        let array = [0, 1];
        for (i = 2; i < number; i++) {
            let newNumber = array[i-2] + array[i-1];
            array.push(newNumber);
        }
        return array;
    }
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(8));

*/

function fibsRec(number) {
    if (number == 1) {
        return [0];
    } else if (number == 2) {
        return [0, 1];
    } else if (number >= 3) {
        let result = fibsRec(number - 1);
        result.push(result[result.length - 1] + result[result.length - 2]);
        return result;
    }
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));