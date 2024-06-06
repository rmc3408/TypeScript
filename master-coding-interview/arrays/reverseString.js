function reverse(str) {
  //check invalid input -> small, empty or not a string
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Invalid input';
  }
  return str.split('').reverse().join('');
}

console.log(reverse('hello')); // 'olleh'
console.log(reverse('Greetings!')); // '!sgniteerG'
