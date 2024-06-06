

// Variable array is somewhere in memory and the computer knows it.
const numbers = [1, 2, 3, 4, 5];
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

const strings = ['a', 'b', 'c', 'd'];

//End of array - O(1)
// Insert
strings.push('e');
//remove
strings.pop();
strings.pop();

//Start of array - O(n)
//insert
strings.unshift('x')
//deletion
strings.shift()

// Middle of array - O(n)
strings.splice(2, 0, 'alien');

console.log(strings)