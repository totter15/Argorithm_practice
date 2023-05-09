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
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다. n은 양수이며 1,000,000보다 작거나 같다.

//출력
//각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 1,000,000,009로 나눈 나머지를 출력한다.

//풀이
//이전에 풀었던 1463번 문제인 1로 만들기와 비슷한 문제이다.
//...+1, ...+2, ...+3인 경우를 수를 모두 더하면 1,2,3의 합으로 나오는 경우의 수를 구할 수 있다.
// 발화식을 구하면 dp[n] = dp[n-1] + dp[n-2] + dp[n-3]이 된다.

var fs = require('fs');
let [n, ...numbers] = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n');
const testCase = numbers.map((n) => +n);

function solution() {
	//testCase의 수중 가장 큰수를 가지고 dp배역에 저장해 주었다. 어자피 그 이하의 숫자는 배열내에 저장될 것이므로
	const max = Math.max(...testCase);
	const dp = Array(max + 1);
	dp[1] = 1;
	dp[2] = 2;
	dp[3] = 4;

	for (let i = 4; i < max + 1; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
	}

	for (let j = 0; j < testCase.length; j++) {
		console.log(dp[testCase[j]]);
	}
}
solution();
