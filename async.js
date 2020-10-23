// Synchronicity & Asynchronicty
// Single thread language - Sychcronous executes code
// from left to right, top to bottom

let a = 1; //1
let b = 2; //2
console.log(a); //3
console.log(b); //4

//JavaScript is a synchronous single threaded language
//it can have asynchronous behaviour
function callback() {
 console.log('Retrieved users');
}
console.log('Load header');
setTimeout(callback, 1000);
console.log('Load main content');
console.log('Load footer');

let i = 0;
const intervalId = setInterval(() => {
    console.log(i);
    i++;

    if (i === 5) {
        clearInterval(intervalId)
    }
}, 1000);



