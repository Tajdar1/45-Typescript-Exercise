let guestList = ["Tajdar","Arif","Shoaib","Saad"];
let dontCome = guestList [0];
console.log(dontCome,"Not willing for Dinner wiht you" );
guestList.splice(0,1,"Kamran");

guestList.forEach(guest => console.log(`Hello ${guest},would you like to dinner wiht me`))