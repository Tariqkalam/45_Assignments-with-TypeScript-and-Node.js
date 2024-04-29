// Assignment# 3. Name Cases: 

// Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.

let personName :String= '';
personName = prompt('Enter Your Name :') ||'';

let lowercase :String = personName.toLowerCase();
let uppercase :String = personName.toUpperCase();
let titlecase :String = personName.split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

if(personName !==null && personName !=="") {
    alert(`Hello ${personName}, Your Name In:
    LowerCase: ${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`)
} 
else{
    alert('Please Enter Your Name Must!')
}
