var map = function(arr, fn) {
    let array = [];
    for (let i = 0; i<arr.length; i++){
        array[i] = fn(arr[i], i)
    }
    return array;
};

/*
var map = function(arr, fn) {
    const array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(fn(arr[i], i));
    }
    return array;
}
*/