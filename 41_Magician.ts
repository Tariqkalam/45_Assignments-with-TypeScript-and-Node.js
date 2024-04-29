// Assignment# 41:  Magicians

// Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

let arrMagicians: string[] = ['Dynamo', 'Lance Burton', 'Shin Lim', 'Derren Brown'];

function show_magicians(magician: string[]){
    magician.forEach(magicianNames => {
    console.log(magicianNames);
    });

}

show_magicians(arrMagicians);
