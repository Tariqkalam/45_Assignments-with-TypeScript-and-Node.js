// Assignment# 42:  Great Magicians
// Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let arrMagicians: string[] = ['Dynamo', 'Lance Burton', 'Shin Lim', 'Derren Brown'];

function make_great(arrayMagicians: string[]) {
for(let i = 0; i < arrayMagicians.length; i++) {
    arrMagicians[i] = 'The Great ' + arrayMagicians[i]
}
}

function show_magicians(magician: string[]){
    magician.forEach(magicianNames => {
    console.log(magicianNames);
    });
}
make_great(arrMagicians);
show_magicians(arrMagicians);