// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

const duplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); 
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
    }
    return results;
}
let idkDuplicates = [1,2,3,3,4,5,6,7,7,8];
console.log(`The duplicates in ${duplicates} are ${duplicates(idkDuplicates)}`);


//.sort(); 




function filterNonUnique(array) {

}

console.log(findDuplicates([1,2,3,3,4,5,6,7,7,8]));
