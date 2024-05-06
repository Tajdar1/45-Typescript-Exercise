let current_users = ["Ali","Areeba","Mehak","Muskan","Sarim"]

let new_users = ["Maad", "Areeba", "Aysha","Sarim","Kamran"]
// loop through new users to check the username availablity
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
        console.log(`Sorry ${new_one_user} is already exists`);
   }else{
    console.log(`This Username ${new_one_user} is available`);
   }
} )