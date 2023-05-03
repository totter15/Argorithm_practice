var fs = require('fs');
const number = fs.readFileSync('./input.txt').toString().trim().split('\n');

function solution() {
	function factorial(n) {
		if (n === 0 || n === 1) return 1;
		if (n === 2) return 2;

		return n * factorial(n - 1);
	}

	const answer = factorial(+number);
	console.log(answer);
}

solution();
