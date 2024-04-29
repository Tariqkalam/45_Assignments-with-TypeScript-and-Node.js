// Assignment# 43. Unchanged Magicians
// Start with your work from Exercise 42. Call the function make_great() with a copy of the
// array of magicians’ names. Because the original array will be unchanged, return the new array
// and store it in a separate array.

let arrMagicians: string[] = ['Dynamo', 'Lance Burton', 'Shin Lim', 'Derren Brown'];

function copyArrMagicians(arr: string[]){
return [...arr]
}

function make_great(arrayMagicians: string[]) {
for(let i = 0; i < arrayMagicians.length; i++) {
    arrayMagicians[i] = 'The Great ' + arrayMagicians[i]
}
}

function show_magicians(magician: string[]){
    magician.forEach(magicianNames => {
    console.log(magicianNames);
    });
}

const copyArray = copyArrMagicians(arrMagicians)
make_great(copyArray);

// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

console.log('\n\n This is original Array');
show_magicians(arrMagicians);

console.log('\n\n This is modified copy Array');
show_magicians(copyArray);
