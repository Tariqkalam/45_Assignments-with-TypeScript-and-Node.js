// Assignment# 37. Large Shirts

// Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love TypeScript.
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'){
    console.log(`This is a ${size} Shirt with message: ${message}`);
}
make_shirt();

// Make a large shirt and a medium shirt with the default message.
make_shirt('Medium');

// A shirt of any size with a different message.
make_shirt('Small', 'Dil Dil Pakistan');
