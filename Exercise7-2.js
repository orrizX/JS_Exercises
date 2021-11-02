const values = [3, 11, 7, 2, 9, 10];
for (var i = 0, sum = 0; i < values.length; sum += values[i++]);
console.log(sum);