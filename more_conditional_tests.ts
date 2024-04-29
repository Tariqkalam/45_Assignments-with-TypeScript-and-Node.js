// Assignment# 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
console.log('Tests for equality with strings:', 'AI' === 'AI');
console.log('Tests for inequality with strings:', ('AI' as string) != 'Blochchain');

// • Tests using the lower case function
console.log('Tests using the lower case function:', 'TARIQ'.toLowerCase() === 'tariq');

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log('Numerical test involving equality: ', 11 === 11);
console.log('Numerical test involving inequality: ', 11 != 11);
console.log('Numerical test involving greater than: ', 11 > 11);
console.log('Numerical test involving less than: ', 11 < 11);
console.log('Numerical test involving greater than or equal to: ', 11 >= 11);
console.log('Numerical test involving less than or equal to: ', 11 <= 11);

// • Tests using "and" and "or" operators
console.log('Numerical test involving "and" operator: ', 11 === 11 && 27 === 27);
console.log('Numerical test involving "or" operator: ', 11 === 11 || (27 as number) === 7);

// • Test whether an item is in a array
let brotherNames: string[] = ['Asif', 'Kashif', 'Sajjad'];
console.log('Test "Kashif" is in array: ', brotherNames.includes('Kashif'));

// • Test whether an item is not in a array
console.log('Test "Tariq" is not in array: ', brotherNames.includes('Tariq'));
console.log('Test "Tariq" is not in array: ', !brotherNames.includes('Tariq'));
