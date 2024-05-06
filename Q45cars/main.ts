// car object by creating function
function create_car(manufacturer, model, ...options){

    let car = {
        manufacturer: manufacturer,
        model: model
    };

options.forEach(option => {
    let [key,value] = option.split(":");
    car[key.trim()] = value.trim();
});
return car;
}
// calling function to create object 
let my_car = create_car("Honda","Civic","color:Mettlic","model:2024","specification:sunroof");

console.log(my_car);