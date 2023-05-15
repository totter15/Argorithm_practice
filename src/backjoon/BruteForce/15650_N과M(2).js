//문제
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.

//입력
// 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

//출력
// 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
// 수열은 사전 순으로 증가하는 순서로 출력해야 한다.

var fs = require('fs');
const [N, M] = fs.readFileSync('./input.txt').toString().trim().split(' ');
const NArray = Array(+N)
	.fill(0)
	.map((_, i) => i + 1);

function solution() {
	const answer = [];
	for (let j = 0; j < NArray.length; j++) {
		BT(j, [NArray[j]]);
	}

	function BT(index, numbers) {
		if (numbers.length === +M) return answer.push(numbers.join(' '));

		for (let i = 0; i < NArray.length; i++) {
			number = NArray[i];

			if (numbers.includes(number)) continue;
			if (numbers[numbers.length - 1] > number) continue;

			BT(index + 1, [...numbers, number]);
		}
	}
	console.log(answer.join('\n'));
}

solution();
