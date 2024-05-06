// Creating Function
function make_shirt (size:string = "Large", printMessage: string = "I love Typescript"){
console.log(`Creating a ${size} shirt with the ${printMessage} Prints on shirt`)
}
// calling a function
make_shirt();
// calling a function wiht medium size with default message
make_shirt("Medium");
// calling function wiht small size wiht other print message
make_shirt("small", "I am Generative AI Engineer");