function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
let firstName = prompt("What's your first name?");
let lastName = prompt("What's your last name?");
console.log(sayHello(firstName, lastName));