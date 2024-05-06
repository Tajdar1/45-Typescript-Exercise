"use strict";
let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Equility Test
console.log("is mango is equal to mango");
console.log(mango == "mango");
// in equility test 
console.log("mango is not equal to mango");
console.log(mango != "mango");
// lowercase function
console.log("Is MANGO is equal to mango after converting to lowercasae");
console.log(uppercaseMango.toLowerCase() == "mango");
console.log("Is MANGO is not equal to mango after converting to lowercasae");
console.log(uppercaseMango.toLowerCase() !== "mango");
// numerical Tests
console.log("\n is ten is equal to twenty");
console.log(ten == twenty);
console.log("\nis ten is not equal to twenty");
console.log(ten != twenty);
console.log("\nis ten is greater than zero ");
console.log(ten > 0);
console.log("\nis 20 is less than zero");
console.log(ten < 0);
console.log("\nis 20 is greater than or equal to five");
console.log(ten >= 5);
console.log("\nis four is greater than or equal to five");
console.log(4 >= 5);
console.log("\nis four is less than or equal to five");
console.log(4 <= 5);
console.log("\nis four is less than to five");
console.log(4 < 5);
// Test for and or operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 30 && twenty > 30);
// Test by using "or"
console.log("\n20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// test whether item is inculde in array
console.log("is orange include in my fruits list");
console.log(fruits.includes("orange"));
// test not include  
console.log("is orange not include in my fruits list");
console.log(!fruits.includes("orange"));
