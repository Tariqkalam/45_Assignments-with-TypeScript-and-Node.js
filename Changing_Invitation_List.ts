
let guestNames: string[] = ['Zia Khan', 'Daniyal Nagori', 'Ameen Alam', 'Mubashir'];

for(let i = 0; i<guestNames.length; i++)
 {
    console.log('Respected Sir, '+guestNames[i], '\n\nI would like to invite you in a dinner, It would be honor for us\n\nWarm Regards\nThank You\n\nTariq Kalam')
}

let absentGuest: string = guestNames[3];
guestNames[3] = 'Anas'
for(let i = 0; i<guestNames.length; i++)
{
    console.log('Respected Sir, '+guestNames[i], '\n\nI would like to invite you in a dinner, It would be honor for us\n\nWarm Regards\nThank You\n\nTariq Kalam')
}

console.log(`Sir ${absentGuest}, is not available and can,t make it.`)