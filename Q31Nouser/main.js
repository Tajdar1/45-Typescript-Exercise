// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["kamran", "Ali", "Sami", "Tahir", "Sarah", "Ifrah", "Sarim"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is empty We need to find some users!");
}
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " would you like to see status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again"));
    }
});
