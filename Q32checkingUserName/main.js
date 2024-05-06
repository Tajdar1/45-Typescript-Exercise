var current_users = ["Ali", "Areeba", "Mehak", "Muskan", "Sarim"];
var new_users = ["Maad", "Areeba", "Aysha", "Sarim", "Kamran"];
// loop through new users to check the username availablity
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already exists"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
