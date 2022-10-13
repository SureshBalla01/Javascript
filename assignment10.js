var str = 'javascript';
function toUpperCase(str) {
  return str.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('Z');
}

console.log(toUpperCase(str));
