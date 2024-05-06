//42.	Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var megicians_names = ["Sarim", "Qasim", "Okasha"];
var great_magicians = make_great(megicians_names);
show_magicians(great_magicians);
