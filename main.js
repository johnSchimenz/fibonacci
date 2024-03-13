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


// have to figure out what types the inputs are
let fire = [1, 2, 3, 4, 5];
let ice = [1, 2, 3, 4];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // How can I make this so it fits both conditions (% 2 === 0 and % 2 === 1)
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
    /*
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
    */
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([5, 9.6, 21, 21.2, 3.14]));
console.log(mergeSort([-1, -5, 8, 9, 100]));
console.log(mergeSort([-1000, -3.4, -5.6, 2, -10000]));
console.log(mergeSort([7, 1, 3, -5, -6]));
console.log(mergeSort([8, 21, -8.2, 5, 9]));
console.log(mergeSort(1000, 100, -20000, -2, -9, 5, 3.14));
console.log(mergeSort(8, 9. -3, 4));
console.log(mergeSort([7, 3.4, 5000]));
console.log(mergeSort([-8, -20, -1]));
console.log(mergeSort([-2, 9, -10]));
console.log(mergeSort[9, 0, -9]);
console.log(mergeSort([22, 2, -34]));
console.log(mergeSort([5, -7, 0]));
console.log(mergeSort([9, -1, -3, 4]));
console.log(mergeSort([6, -4, 5]));
console.log(mergeSort(9, 0, 1000));
console.log(mergeSort([2, 6, -8]));
console.log(mergeSort[9, 2, -3, -1.1]);
console.log(mergeSort([-1, -100, 1]));
console.log(mergeSort([5, -7, -2]));
console.log(mergeSort(5, -10, 2, 65.7));
console.log(mergeSort([9, -5, 14]));
console.log(mergeSort[9, -1, 5]);
console.log(mergeSort[11, 2000, 3]);
console.log(mergeSort(-5, 1, 10));
console.log(mergeSort([-6, 7, 1]));
console.log(mergeSort([-9, -81, 6]));
console.log(mergeSort([9, -1, 8]));
console.log(mergeSort([-5, -20, 2]));
console.log(mergeSort[8, -1, 2]);
console.log(mergeSort[9, -5, 2]);
console.log(mergeSort([55, 88, -101]));
console.log(mergeSort([-9. -81, -5]));
console.log(mergeSort([5, -1, -20]));
console.log(mergeSort([5, -2, 10]));