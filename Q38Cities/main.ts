function describe_city (city : string, Country: string = "Pakistan"){
    console.log(`${city} is in ${Country}`)
}
// calling function
describe_city("karachi");
describe_city("Lahore");
describe_city("Chicago","USA");