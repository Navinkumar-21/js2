const myString = "I Love coding";
const length = myString.length;
console.log("mystring length : "+ length);


console.log("array : "+ myString.split(" "));
console.log(myString.includes("coding"));

console.log ("character : "+myString.charAt(7));
console.log(myString.substr(2, 4));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

const myNewstring = "I Love coding";
console.log(myNewstring.replace("coding", "Programming"));
const myNewString = "I Love coding";
console.log( "index of coding : " + myNewString.indexOf("coding"));
const MyNewstring = "I Love coding";
console.log("index of javascript : " + MyNewstring.indexOf("javascript"));
console.log("index of Coding : " + MyNewstring.search("coding"));
console.log("begins with letter I : "+myNewstring.startsWith("I"))
console.log("ends with coding : "+myNewstring.endsWith("coding"))


const string="I Love Coding";
const newString = " & designing";
console.log("Merge : "+string.concat(" ",newString));
const myStringWithSpaces  = "  I Love Coding  ";
console.log("remove whitespace at the beginning and end : "+myStringWithSpaces.trim());


