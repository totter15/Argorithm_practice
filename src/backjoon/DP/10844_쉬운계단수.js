//문제
// 45656이란 수를 보자.

// 이 수는 인접한 모든 자리의 차이가 1이다. 이런 수를 계단 수라고 한다.

// N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구해보자. 0으로 시작하는 수는 계단수가 아니다.

//입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 100보다 작거나 같은 자연수이다.

//출력
//첫째 줄에 정답을 1,000,000,000으로 나눈 나머지를 출력한다.

var fs = require('fs');
let N = +fs.readFileSync('./input.txt').toString().trim();

function solution() {
	const dp = Array.from(new Array(N + 1), () => new Array(10));
	dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

	for (let i = 2; i <= N; i++) {
		for (let j = 0; j <= 9; j++) {
			if (j === 0) {
				dp[i][j] = dp[i - 1][j + 1] % 1000000000;
			} else if (j === 9) {
				dp[i][j] = dp[i - 1][j - 1] % 1000000000;
			} else {
				dp[i][j] = (dp[i - 1][j + 1] + dp[i - 1][j - 1]) % 1000000000;
			}
		}
	}

	let answer = 0;
	dp[N].forEach((n) => (answer += n));

	console.log(answer % 1000000000);
}

solution();
