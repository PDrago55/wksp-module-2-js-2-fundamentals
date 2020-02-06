// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)


function calculateAverage(grades){
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grades; 
    });
    return Math.round(sum/ grades.length);
    
console.log(calculateAverage([76, 60, 83, 100, 78]));




// function calculateAverage(grades) {
// let average = ((a + b + c + d + e)/ 5);
// return Math.round(grades);
//     }
// failure lol
// for (i =0; i < grades; i++); 
//         sum += grades[i];
//     }
// return math.Round (sum / grades.length);

