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
            let newNumber = array[i-2] + array [i-1];
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