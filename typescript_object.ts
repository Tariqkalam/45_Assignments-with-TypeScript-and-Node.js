//Excercise# 21

// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface country {
continent : string,
language : string,
muslim : boolean,
population : number,
}

let country : country = {
continent : 'Asia' ,
language : 'Urdu' ,
muslim : true ,
population : 240000000 , 
}
// print country object
console.log(country);

interface vehicle {
    type : string,
    model : number,
    color : string,
    auto : boolean ,
}

let vehicle : vehicle = {
type : 'car' ,
model : 2024 ,
color : 'white' ,
auto : true ,
}
// print vehicle object
console.log(vehicle);