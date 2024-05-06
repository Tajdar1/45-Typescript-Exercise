// original list
let contriesTovisit: string[] = ["Tukey","China","United States of America","Afghanistan","India"];
console.log("Original Order:,contriesTovisit");
// print the Array in Alphabetical order wihtout changing original list
console.log("Alphabetical Order;",[...contriesTovisit].sort);
// showing original order
console.log("original order:",contriesTovisit);
// print in reverse order 
console.log("Reverse Order:",[...contriesTovisit].reverse())
// original order 
console.log("original order:",contriesTovisit);
// orignal list changed
console.log("Original Array Reversed", contriesTovisit.reverse());
// again reverse turns in to original order
console.log("contriesTovisit",contriesTovisit.reverse());
console.log("sorted in Alphabetical Order:",contriesTovisit.sort());
console.log("Original Array Reversed", contriesTovisit.reverse());


