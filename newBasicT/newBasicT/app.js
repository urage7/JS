///////////////////////////////////////
// Lecture: Hoisting
//calcAge(1965);
//function calcAge(year) {
//    console.log(2019 - year)
//}



function getCount(objects) {
    let count = 0;
    for (let i = 0; i < objects.length; i++) {

        if (objects[i][i] - objects[i][i] === 0) {
            count++;

        }
    }
    return count;
}

function main() {
    const n = +(readLine());
    let objects = [];

    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');

        objects.push({ x: +(a), y: +(b) });
    }

    console.log(getCount(objects));
}






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}




///////////////////////////////////////
// Lecture: The this keyword
