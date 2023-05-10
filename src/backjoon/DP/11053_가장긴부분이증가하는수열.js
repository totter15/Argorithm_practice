var fs = require('fs');
let [N, ...array] = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n');

const numbers = array[0].split(' ');

function solution() {
	const dp = Array(+N).fill(1);

	for (let i = 1; i < numbers.length; i++) {
		let max = 0;

		for (let j = 0; j < i; j++) {
			if (+numbers[j] < +numbers[i]) {
				max = Math.max(max, dp[j]);
			}
		}
		dp[i] = dp[i] + max;
	}
	console.log(Math.max(...dp));
}

solution();
