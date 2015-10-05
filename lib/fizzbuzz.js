function FizzBuzz(num) {
  var F = [];
  for (var i = 0; i <= num; i++)
  {
    var a = '';
    if (i % 3 == 0) a += "Fizz";
    if (i % 5 == 0) a += "Buzz";
    if (a == '') a = i;
    console.log(a);
    F.push(a);
  }
  return F;
}

module.exports = FizzBuzz;
