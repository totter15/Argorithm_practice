//문제
// 1부터 N까지의 수로 이루어진 순열이 있다. 이때, 사전순으로 다음에 오는 순열을 구하는 프로그램을 작성하시오.
// 사전 순으로 가장 앞서는 순열은 오름차순으로 이루어진 순열이고, 가장 마지막에 오는 순열은 내림차순으로 이루어진 순열이다.

// N = 3인 경우에 사전순으로 순열을 나열하면 다음과 같다.
// 1, 2, 3
// 1, 3, 2
// 2, 1, 3
// 2, 3, 1
// 3, 1, 2
// 3, 2, 1

//입력
// 첫째 줄에 N(1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄에 순열이 주어진다.

//출력
//첫째 줄에 입력으로 주어진 순열의 다음에 오는 순열을 출력한다. 만약, 사전순으로 마지막에 오는 순열인 경우에는 -1을 출력한다.

var fs = require('fs');
const [N, current] = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n');

function solution() {
	const permutations = current.split(' ');

	let I = -1;
	//1) 뒤에서 부터 오름차순이 멈추는 i 값 찾기 : I에 할당
	for (let i = permutations.length - 1; i > 0; i--) {
		if (+permutations[i] > +permutations[i - 1]) {
			I = i - 1;
			break;
		}
	}

	// 2) 만약 I가 -1이라면 마지막 순열이므로 -1 출력
	if (I === -1) return console.log(-1);

	let J = I + 1;
	//3) I보다 뒤에 있는 값중 permutations[I]값보다 큰것중 가장 작은 값의 index 구하기 : J에 할당
	let min = +permutations[J];
	for (let j = J + 1; j < permutations.length; j++) {
		if (+permutations[I] < +permutations[j] && min >= +permutations[j]) {
			min = +permutations[j];
			J = j;
		}
	}

	[permutations[I], permutations[J]] = [permutations[J], permutations[I]];

	const left = permutations.slice(0, I + 1);
	const right = permutations.slice(I + 1).sort((a, b) => a - b);
	const answer = [...left, ...right];
	console.log(answer.join(' '));
}

solution();
