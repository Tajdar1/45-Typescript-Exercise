// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function 
// call provides, and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]){
    console.log("Making Sandwich wiht following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Enjoy Your Meal\n");

}

// call Function 3 times as requried
makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Chicken", "Cheese","Tometo","Mayo","Iceberg","Butter");

makeSandwich("Chadder", "Bread");
