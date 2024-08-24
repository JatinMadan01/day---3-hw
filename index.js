function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
  
function clearDuplicates(arr) {
    return [...new Set(arr)];
}
  
function maxArray(arr) {
    return Math.max(...arr);
}
  
function minArray(arr) {
    return Math.min(...arr);
}
  
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
  
function containsElement(arr, element) {
    return arr.includes(element);
}
  
function reverseArray(arr) {
    return arr.slice().reverse();
}
  
function flattenArray(arr) {
    return arr.flat();
}
  
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
}
  
function isEmptyArray(arr) {
    return arr.length === 0;
}
  
module.exports = {
    sumArray,
    clearDuplicates,
    maxArray,
    minArray,
    averageArray,
    containsElement,
    reverseArray,
    flattenArray,
    chunkArray,
    isEmptyArray
};
  