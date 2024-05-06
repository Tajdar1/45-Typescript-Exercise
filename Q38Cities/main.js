function describe_city(city, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(Country));
}
// calling function
describe_city("karachi");
describe_city("Lahore");
describe_city("Chicago", "USA");
