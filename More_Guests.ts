
let guestNames: string[] = ['Zia Khan', 'Daniyal Nagori', 'Ameen Alam', 'Mubashir'];

// for(let i = 0; i<guestNames.length; i++)
//  {
//     console.log('Respected Sir, '+guestNames[i], '\n\nI would like to invite you in a dinner, It would be honor for us\n\nWarm Regards\nThank You\n\nTariq Kalam')
// }

let absentGuest: string = guestNames[3];
guestNames[3] = 'Anas'
// for(let i = 0; i<guestNames.length; i++)
// {
//     console.log('Respected Sir, '+guestNames[i], '\n\nI would like to invite you in a dinner, It would be honor for us\n\nWarm Regards\nThank You\n\nTariq Kalam')
// }

console.log(`Sir ${absentGuest}, is not available and can,t make it.`)

console.log('Good News! We have a big table and inviting three more guests now\n');
 
guestNames.unshift('Allama Bashire Farooqi');
guestNames.splice(3, 0, 'Wajid Hussain');
guestNames.push('Basit Hussain');

for(let i = 0; i<guestNames.length; i++)
{
    console.log('Respected Sir, '+guestNames[i], '\n\nI would like to invite you in a dinner, It would be honor for us\n\nWarm Regards\nThank You\n\nTariq Kalam')
}
console.log('\nSorry right now we dont have big table, only two people will be invited');
while(guestNames.length > 2){
let removedGuest = guestNames.pop()
console.log(`Sorry Sir, ${removedGuest}, currently you are not invited`);

}
for(let i = 0; i<guestNames.length; i++)
{
    console.log('Respected Sir, '+guestNames[i], '\n\nYou are still invited with us in a dinner, It would be honor for us\n\nWarm Regards\nThank You\n\nTariq Kalam')
}
guestNames.splice(0, 3);
console.log(guestNames);

