//문제
//2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

//입력
//첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

//출력
//첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

var fs = require('fs');
let n = +fs.readFileSync('./input.txt').toString().trim();

const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

function solution() {
	for (let i = 3; i < dp.length; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
	}
	console.log(dp[n]);
}

solution();
