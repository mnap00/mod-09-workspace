/* eslint-disable no-console, no-redeclare */

//
// ARRAY PROPERTIES AND METHODS
//

// length
// displays number of elements of an array
var array = ['HTML', 5, 'World', 9.99, {name: 'Piotr'}, 99];
console.log(array.length);  // 6


// toString()
// returns array values as a string separated with ','
var array = ['aaa', [2.55, 'bbb', [5] ] ];
var stringWithArray = array.toString();
console.log(stringWithArray);  // "aaa,2.55,bbb,5"
//
// and if some value is an object
var array = ['aaa', [2.55, 'bbb', [5, {id: 'hello' } ] ] ];
var stringWithArray = array.toString();
console.log(stringWithArray);  // "aaa,2.55,bbb,5,[object Object]"


// join()
// returns array values as a string separated with defined string
var test = [ 'aaa', 2.55, 'bbb', 5  ];
var testToString = test.join(' | ');
console.log(testToString);  // aaa | 2.55 | bbb | 5


// push()
// adds element to the and of array
// instead of using this
var test = ['a', 'b', 'c'];
test[3] = 'd';
console.log(test);
// one can use push
var test = ['a', 'b', 'c'];
var x = test.push('d');
console.log(test);
console.log(x);


// pop()
// removes last element from array
var test = ['a', 'b', 'c'];
var x = test.pop();
console.log(test);
console.log(x);


// splice()
// add values to array before index - splice(index, removeNr, value1, ...)
var array = ['a', 'b', 'c'];
array.splice(1, 0, 'x', 'y', 'z');
console.log(array);  // ['a', 'x', 'y', 'z', 'b', 'c']
//
// remove values from index - splice(index, removeNr)
var x = array.splice(2, 2);
console.log(array);  // ['a', 'x', 'b', 'c']
console.log(x);  // ['y', 'z']


// concat ()
// return new array thet is sum of method's arguments
var test = [1, 2, 3];
var test2 = ['a', 'b', 'c'];
var test3 = ['x', 'y', 'z'];
var arr = test.concat(test2,test3);
console.log(arr);  // [1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z'];


// indexOf()
// returns index of searched parameter
var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
var indexOfOla = names.indexOf('Ola');
console.log('The search value is on ' + indexOfOla + ' position');
console.log(names[indexOfOla]);


// map()
// returns each array value modified by function(value)
var values = [1, 2, 3, 4, 5, 6];
var multipliedValues = values.map(function(value) {
    return value * 10;
});
console.log(values);
console.log(multipliedValues);


// filter()
// returns array of values for which true was returned
var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var namesWithoutOla = names.filter(function(name) {
    console.log('name in filter: ' + name);
    return name != 'Ola';
});
console.log(namesWithoutOla);


//
// STRINGS METHODS AND PROPERTIES
//

// declare new string
var str = 'test';
var newStr = (new String('test'));
//
var result1 = str.toUpperCase();
var result2 = newStr.toUpperCase();
//
console.log(result1);
console.log(result2);
// javascript treats strings as objects:
// {
//   0:"t",
//   1:"e",
//   2:"s",
//   3:"t",
//   length:4
//   }
// }
console.log(newStr[3]);

// length
// returns string's length
var txt = 'Lorem ipsum dolor sit amet';
console.log(txt.length);  // 26

// charAt()
// returns character at a given index
var txt ='Example';
//
console.log(txt.charAt(4));  // p

// indexOf()
// returns index of a given character
var txt = 'Lorem ipsum dolor sit amet';
var indexDolor = txt.indexOf('dolor');  // 12
//
if (indexDolor == -1) {
    console.log('Dolor does not appear in the txt');
} else {
    console.log(txt[indexDolor]);  // txt[12] == d
}

// slice()
// returns part of string from index (incl.) to index (excl.)
var motto = 'Good friends are loyal people';
var partOfMotto = motto.slice(5,11);
//
console.log(partOfMotto);  // friend
// or
// backwards with negative numbers
var motto = 'Good friends are loyal people';
partOfMotto = motto.slice(-12,-7);
//
console.log(partOfMotto);

// substr()
// returns part of string beginning from index through number of characters;
// negative numbers to count from right side
var motto = 'The rest is silence';
var mottoCharsAfter = motto.substr(12, 7);
//
console.log(mottoCharsAfter);

// replace()
// replace one string with another
var motto = 'Never give up on what you really want to do';
var mottoCharsAfter = motto.replace('do', 'have');
//
console.log(mottoCharsAfter);

// toUpperCase()
// converts all characters to upper case
var name = 'John Doe';
var nameUpperCased = name.toUpperCase();
//
console.log(nameUpperCased);

// toLowerCase()
// converts all characters to lower case
// both methods are useful for searching words in text
var text = 'BeTTer lATe THAN neveR';
//
if ( text.toLowerCase().indexOf('late') != -1  ) {
    console.log('Sentence contains word - late');
}

// split()
// converts string to array on given separator
var keywords = 'red, green, blue, yellow, pink, orange, white';
//
var keywordsArray = keywords.split(', ');
//
keywordsArray.map(function(element) {
    console.log('#tag-' + element);
});


//
// LOOPS
//

// 'for' loop
// for ( initial_value ; condition ; value_modification ) {
//     // code included in the loop block
// }
for ( var k = 0 ; k < 10 ; k++ ) {
    console.log('The value of k is now: ' + k);
}

// 'while' loop
// while (condition) {
//     ...
// }
var i = 0;
//
while (i < 10) {
    console.log(i);
    i++;
}

// 'do while' loop
// do {
//     //loop code
// } while (condition)
var i = 0;
//
do {
    console.log(i);
    i++;
} while (i < 10);

// 'for in' loop
// for (loop_variable in indicated_object) {
//     // code in the loop block
// }
// example object:
var person = {
    name: 'Piotr',
    age: 25,
    country: 'Poland'
};
// example loop
for (var attrName in person) {
    console.log(attrName);
}

// 'break' statement
// breaks instruction execution and leaves loop or switch
for ( var k = 0 ; k < 10 ; k++ ) {
    console.log('The value of k is now: ' + k);
    if (k == 5) {
        console.log('k is equal to 5. The end');
        break;
    }
}

// 'continue' statement
// continues loop execution without executing instruction after statement
for ( var k = 0 ; k < 10 ; k++ ) {
    console.log('The value of k is now: ' + k);
    if (k > 5) {
        continue;
    }
    console.log('Instruction at the end of the loop ');
}
