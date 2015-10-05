var expect = require('chai').expect;
var FizzBuzz = require('../lib/fizzbuzz.js');

describe("Fizzbuzzing", function() {
  it('Should return proper values', function(){
    var buzz = FizzBuzz(20);

    expect(buzz[15]).to.equal('FizzBuzz');
    expect(buzz[5]).to.equal('Buzz');
  });
})
