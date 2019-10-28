var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 to 4 and get 5', function(){

    calculator.previousTotal = 1;
    calculator.add(4);

    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })

  it('can subtract 4 from 7 and get 3', function(){

    calculator.previousTotal = 7;
    calculator.subtract(4);

    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('can multiply 3 by 5 and get 15', function(){

    calculator.previousTotal = 3;
    calculator.multiply(5);

    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })

  it('can divide 21 by 7 and get 3', function(){

    calculator.previousTotal = 21;
    calculator.divide(7);

    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('can concatenate multiple number button clicks', function(){

    calculator.numberClick(4);
    calculator.numberClick(2);
    calculator.numberClick(0);

    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 420);
  })

  it('can chain multiple operations together', function(){

    calculator.numberClick(2); // 21
    calculator.numberClick(1); // 21
    calculator.operatorClick('/');
    calculator.numberClick(7); // 21 /7 = 3
    calculator.operatorClick('+');
    calculator.operatorClick(3); // 3 + 3 = 6


    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 6);
  })

  it('can clear the runningTotal', function(){

    calculator.previousTotal = 5;
    calculator.multiply(10);
    calculator.clearClick();

    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0);
  })








});
