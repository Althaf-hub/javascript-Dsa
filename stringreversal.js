function reverse(string){
  let str = '';
  for (let char = string.length - 1; char >= 0; char--) {
    str = str + string[char];
  }
  return str;
}

console.log(reverse("hello")); // "olleh"
