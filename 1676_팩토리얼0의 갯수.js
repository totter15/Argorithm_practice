var fs = require('fs');
const number = fs.readFileSync('./input.txt').toString().trim().split('\n');

function solution() {
	function factorial(n) {
		if (n === 0 || n === 1) return 1;
		if (n === 2) return 2;

		return BigInt(n) * BigInt(factorial(n - 1));
	}

	let answerArray = [...BigInt(factorial(number)).toString()];
	let count = 0;

	while (answerArray.length > 0) {
		if (answerArray.pop() !== '0') break;
		count++;
	}

	console.log(count);
}

solution();
