// Creating Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " Prints on shirt"));
}
// calling a function
make_shirt();
// calling a function wiht medium size with default message
make_shirt("Medium");
// calling function wiht small size wiht other print message
make_shirt("small", "I am Generative AI Engineer");
