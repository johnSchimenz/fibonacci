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
*/

/*
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
*/

let fire = [1, 2, 3, 4, 5];
let ice = [1, 2, 3, 4];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    if (array.length % 2 === 0) {
        
        // Sort left side
        let leftArray = array.slice(0, array.length / 2 - 1);
        let sortedLeftArray = mergeSort(leftArray);

        // Sort right side
        let rightArray = array.slice(array.length / 2 - 1);
        let sortedRightArray = mergeSort(rightArray);

        // Merge left and right sides
        let newArray = leftArray.concat(rightArray);

        return newArray;
    }
    if (array.length % 2 === 1 && array.length !== 1) {

            // Sort left side
            let leftArray = array.slice(0, array.length / 2 - 1);
            let sortedLeftArray = mergeSort(leftArray);
    
            // Sort right side
            let rightArray = array.slice(array.length / 2 - 1);
            let sortedRightArray = mergeSort(rightArray);
    
            // Merge left and right sides
            let newArray = leftArray.concat(rightArray);
    
            return newArray;
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));