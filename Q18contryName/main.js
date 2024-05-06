var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// original list
var contriesTovisit = ["Tukey", "China", "United States of America", "Afghanistan", "India"];
console.log("Original Order:,contriesTovisit");
// print the Array in Alphabetical order wihtout changing original list
console.log("Alphabetical Order;", __spreadArray([], contriesTovisit, true).sort);
// showing original order
console.log("original order:", contriesTovisit);
// print in reverse order 
console.log("Reverse Order:", __spreadArray([], contriesTovisit, true).reverse());
// original order 
console.log("original order:", contriesTovisit);
// orignal list changed
console.log("Original Array Reversed", contriesTovisit.reverse());
// again reverse turns in to original order
console.log("contriesTovisit", contriesTovisit.reverse());
console.log("sorted in Alphabetical Order:", contriesTovisit.sort());
console.log("Original Array Reversed", contriesTovisit.reverse());
