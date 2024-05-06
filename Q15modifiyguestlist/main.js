var guestList = ["Tajdar", "Arif", "Shoaib", "Saad"];
var dontCome = guestList[0];
console.log(dontCome, "Not willing for Dinner wiht you");
guestList.splice(0, 1, "Kamran");
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, ",would you like to dinner wiht me")); });
