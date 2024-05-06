// creating guest list arry 
var guestList = ["Tajdar", "Arif", "Shoaib", "Saad"];
var dontCome = guestList[0];
// replace person not willing to join 
console.log(dontCome, "not willing to join");
// add and remove form list 
guestList.splice(0, 1, "Kamran");
// message print for bigger table 
console.log("Good News! we have we have found bigger table for Dinner");
// adding new value in starting index of array
guestList.unshift("Ali");
// adding ending of array new valcue
guestList.push("Hayat Khan");
// add new guest name in middile index by using function and length divide by 2
var middleindex = Math.floor(guestList.length / 2);
// now we are adding in the the middile 
guestList.splice(middleindex, 0, "usman");
console.log("Updated list of our Guests");
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, " would you like to dinner with me")); });
// Question 17 start from here 
console.log("Unfortunately, due to abnoxious issues only two people are invited");
// aplology messge till 2 are remaining using while loop to remove guest 
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Apologise, ".concat(removeGuest, " You are not invited"));
}
// adding comments for invited persons
console.log("Invitation for last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Congratulations ".concat(lasttwo, ", You are invited for Dinner")); });
// removing last 2 guests as well from list
guestList.pop();
guestList.pop();
console.log("EmptyList", guestList);
