// Assignment# 44. Sandwiches

// Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. 

function Sandwiches(items: string[]){
console.log('\n Sandwich Ingredients are:');

items.forEach(element => console.log('- '+ element));

console.log('\n Have a yummy sandwitch!')
}
// Call the function three times, using a different number of arguments each time.
Sandwiches(['Toasted Bread', 'meat (cold cut)', 'vegetable fillings']);
Sandwiches(['Ham', 'Cheese']);
Sandwiches(['Mayonnaise', 'Mustard', 'bacon']);


