// myMap function
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// myFilter function
function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// myReduce function
function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

// Export the functions as named exports using ESM syntax
export { myMap, myFilter, myReduce };

// Example usage
console.log(myMap([1, 2, 3, 4, 5], (x) => x * 2));
console.log(myFilter([1, 2, 3, 4, 5], (n) => n % 2 === 0));
console.log(myReduce([1, 2, 3, 4, 5], (x, y) => x + y, 0));
