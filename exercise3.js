const month = Number(prompt("Enter a number of month"));
if ((month === 1) || (month === 3) || (month === 5) || (month === 7) || (month === 8) || (month === 10) || (month === 12)) {
  console.log("There are 31 days in that month.");
} else if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
  console.log("There are 30 days in that month.");
} else if (month === 2) {
  console.log("There are 28 days in that month.");
} else {
  console.log("Not a valid month number!");
}