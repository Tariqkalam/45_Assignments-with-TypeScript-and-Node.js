// Assignment# 32

// Checking Usernames: Do the following to create a program that simulates how websites 
// ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ['Asif', 'Tariq', 'Kashif', 'Sajjad', 'Kalam'];

// • Make another list of five usernames called new_users. Make sure one or two of the 
// new usernames are also in the current_users list.
let new_users: string[] = ['Waniya', 'Vareesha', 'Tariq', 'Ahmer', 'Sajjad'];

// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username. If a username
// has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(newUser => {
    let lowercase: string = newUser.toLowerCase();

    if (current_users.map(c_User => c_User.toLowerCase()).includes(lowercase)) {
        console.log(`${newUser} already exist, please enter new name`)
    } else {
        console.log(`The user name ${newUser} is Available`)
    };
})