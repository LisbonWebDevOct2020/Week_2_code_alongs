console.log('JavaScript is connected');

//1. Get the paragraph and change its text to
// "Tell me your name"
let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Tell me your name';

console.log(paragraph.getAttribute('id'));
paragraph.setAttribute('id', 'info-paragraph');

//2. Change the href of 
// the anchor tag to https://www.google.com
let a = document.querySelector('#google-link');
a.setAttribute('href', 'https://www.google.com');

let divContent = document.getElementById('content');
divContent.setAttribute('name', 'abe');
divContent.removeAttribute('name');

// Create an element
let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Elephant';
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);
//parent.prepend() // <= adds at the beginning

//3. Create a p node with 
// a text 'Hi there I'm using JavaScript'
// add it to body
let pTag = document.createElement('p');
pTag.innerHTML = "Hi there I'm using JavaScript";
parent.appendChild(pTag);

// Removing child elements
let parentContentDiv = document.getElementById('content');
let h1Tag = document.getElementById('title');
parentContentDiv.removeChild(h1Tag);

// 4. Remove the paragraph that we just added
parent.removeChild(pTag);

// Clear all html from an element
//parentContentDiv.innerHTML = '';

let button = document.getElementById('add-item-button');
let itemList = document.getElementById('item-list');
let itemNumber = 1;
button.onclick = () => {
    let newListItem = document.createElement('li');
    newListItem.innerHTML = `item number ${itemNumber}`;
    itemList.appendChild(newListItem);
    // alert('Clicking, yo!');
    // 5. Add a li to our ul (id="item-list") 
    // 6. the li should have the text: item number 1 (incrementally)
    console.log('clicking the button');
    itemNumber ++;
};

// 7. Add a click event to the send-btn and console.log the value of 
// the input of id "name" (hint: input.value)
let sendButton = document.getElementById('send-btn');
sendButton.onclick = () => {
    let inputValue = document.getElementById('username').value;
    console.log(inputValue);
}

let liTags = document.getElementsByTagName('li');
let liTagsArray = [...liTags]; //=> convert html collection to array
liTagsArray.forEach((item) => {
    item.onclick = (e) => {
        console.log('clicking on an li tag');
        e.currentTarget.remove(); //<= current target is the item itself
    };
});



