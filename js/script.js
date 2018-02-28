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
