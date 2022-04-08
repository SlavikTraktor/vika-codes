/*let result;
result = "Jack";
result = 'Jack' + ' ' + 'Brown';*/

let result;
const firstName = "Jask";
const lastName = "Brown";
const spase = " ";
const age = 25;
const greeting = "Hey there!";

result = firstName + spase + lastName;
result =
  greeting +
  spase +
  "My name is" +
  spase +
  firstName +
  " " +
  lastName +
  ". I'm" +
  spase +
  age +
  " years old.";

//Escaping
result = "I'm 34 years old";
result = 'i like "Star wars" movie';
//Properties and methods свойства и методы. Методы указывают в скобках()
//lenght
result = "Hello !".length;
result = firstName.length;
//
result = firstName.concat(" ", lastName);
result = greeting.concat(spase, "My name is ", firstName, spase, lastName);
result = result.toUpperCase();
//(вся строка бб )
result = result.toLowerCase();

result = firstName[0];
result = "hello".indexOf("l");
//первый встречающийся
result = "hello lol".lastIndexOf("l");
result = firstName.indexOf("a");
result = "hello lol".indexOf("lo");
result = firstName.indexOf("z");
//значение -1
result = firstName.charAt(1);
const longString = 'Hi, I"m a long string';
result = longString.charAt(longString.length - 1);
//substring()
result = greeting.substring(4, 9);
//slise() извлечь то же самое. легко добыть последние символы при помощи -(цифра с конца сколько)
result = greeting.slice(4, 9);
result = greeting.slice(-5);
//split
result = longString.split(" ");
const colors = "red, orange, green, blue, blue";
result = colors.split(",");
//replace() заменить
result = colors.replace("blue", "yellow");
console.log(result)
//includes
result=  colors.includes('blue');
// true содержит голубой
result=  colors.includes('indigo')
//false строка colors не содержит цвет индиго
