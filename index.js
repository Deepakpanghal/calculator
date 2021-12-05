

    var number1 = prompt('Enter first number: ');
    number1 = parseFloat(number1);
    var number2 = prompt('Enter second number: ');
    number2 = parseFloat(number2);
    var operator = prompt('Enter operator ( either +, -, * or / ) ');
    var result;


             if (operator == '+') {
             result = number1 + number2;
            }
            else if (operator == '-') {
                result = number1 - number2;
            }
                else if (operator == '*') {
                result = number1 * number2;
            }
                else {
            result = number1 / number2;
            }


        console.log(`${number1} ${operator} ${number2} = ${result}`);
        document.write(`${number1} ${operator} ${number2} = ${result}`);