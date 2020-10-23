console.log('JavaScript is connected');
//Get get div cat 

// 1. getElementById
let theCatDiv = document.getElementById('cat');
console.log(theCatDiv);
theCatDiv.innerHTML = "I'm a cat.";

theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '50px';
theCatDiv.style.marginTop = '30px';
theCatDiv.style.paddingBottom = '30px';

// 2. getElementsByClassName
let mice = document.getElementsByClassName('mouse');
mice[0].innerHTML = 'mouse';
let miceArray = [...mice]; // <= convert the html collection 
// into an array
miceArray.forEach((item) => {
    item.innerHTML = 'mouse';
});
console.log(mice);

// 3. getElementsByTagName
let divs = document.getElementsByTagName('div');
console.log(divs);

// 4. querySelector <= Just gets the first occurrence
let firstMouse = document.querySelector('.mouse');
let firstCat = document.querySelector('#cat');
let firstDiv = document.querySelector('div');

// 5. querySelectorAll <= Gets all the occurrences
let allMice = document.querySelectorAll('.mouse');

console.log(firstMouse.className);
firstMouse.id = '12345';