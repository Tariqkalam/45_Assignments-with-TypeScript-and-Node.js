// Assignment# 45. Cars
// Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

function cars(manufacturer: string, modelName: string, ...otheroptions: {[key: string] :any}[]):object {
    const carinfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...otheroptions)
    }
return carinfo;
};

let descrpt = cars('Toyota', 'Accord', {color: 'White'}, {features: ['Automatic', 'Power Window']})
console.log(descrpt);
