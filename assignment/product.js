var calculateTotalPrice = function (products) {
    return products.reduce(function (acc, product) { return acc + product.price; }, 0);
};
// Example 
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 2.0 },
    { name: "Orange", price: 2.5 },
    { name: "Kiwi", price: 3.0 }
];
console.log(calculateTotalPrice(products));
// Instructions: 
// Compile this file using TypeScript (`tsc product.ts`) 
// and run the resulting JavaScript file using Node.js (`node product.js`).
