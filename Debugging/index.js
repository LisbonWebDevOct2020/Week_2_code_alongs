function calculations() {
    let total = 0;
    let a = 1;
    let b = 2;
    let c = 3;
    total = a + b + c;
    return total;
}

function powerOf3(num) {
    return number ** 3;
}

try {
    //calling an external 
    //let valueFromAPI = getValueFromAPI()
    powerOfThree(9);    
} catch(e) {
    alert(`Some error occurred, continue as is: ${e}`);
} finally {
    //get executed no matter what
}

alert('Welcome to my website');

//calculations();

function getUserName(user) {
    if (!user.name === undefined) {
        throw new SyntaxError('Incomplete data.');
    }

    return user.name;
}

getUserName({ name: 'John'}); // works
getUserName(); //this will not work

try {
    getUserName();
} catch(e) {
    //present some nice message to the user
}
