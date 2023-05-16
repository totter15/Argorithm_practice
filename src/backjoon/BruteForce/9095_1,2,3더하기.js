//문제
// 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.

// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2
// 1+3
// 3+1
// 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

//입력
//첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다. n은 양수이며 11보다 작다.

//출력
//각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 출력한다.

var fs = require('fs');
const [N, ...number] = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n');

function solution() {
	const numbers = number.map((n) => +n);
	const answer = [];

	for (let i = 0; i < +N; i++) {
		answer.push(recursion(numbers[i]));
	}

	function recursion(n) {
		if (n < 0) return 0;
		if (n === 1 || n === 0) return 1;
		return recursion(n - 3) + recursion(n - 2) + recursion(n - 1);
	}

	console.log(answer.join('\n'));
}

solution();
