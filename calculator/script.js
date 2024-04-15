document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.getElementById('result').innerText = 'Error: Cannot divide by zero.';
                return;
            }
            break;
        default:
            document.getElementById('result').innerText = 'Error: Invalid operation.';
            return;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}