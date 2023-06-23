var fs = require('fs');
const input = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.split(' ').map(Number));
const [M, N] = input.shift();
let unripe_tomato_count = 0; //처음에 익지 않은 토마토
let tomato_count = 0; //익어갈 토마토
let day_answer = 0;

let queue = [];
let index = 0;

function solution() {
	// 익은 토마토의 위치와 안익은 토마토의 갯수 얻기
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (input[i][j] === 0) unripe_tomato_count++;
			if (input[i][j] === 1) queue.push([[i, j], 0]);
		}
	}

	//저장될 때부터 모든 토마토가 익어있는 상태
	if (unripe_tomato_count === tomato_count) return console.log(0);

	while (queue.length > index) {
		const [[n, m], day] = queue[index];

		const locations = [
			[n - 1, m], //top
			[n + 1, m], //bottom
			[n, m - 1], //left
			[n, m + 1], //right
		];

		locations.forEach(([n_, m_]) => {
			if (n_ < 0 || m_ < 0 || n_ >= N || m_ >= M) return;

			if (input[n_][m_] === 0) {
				input[n_][m_] = 1;
				tomato_count++;
				queue.push([[n_, m_], day + 1]);
			}
		});

		day_answer = day;
		index++;
	}

	//토마토가 모두 익지는 못하는 상황
	if (tomato_count !== unripe_tomato_count) return console.log(-1);

	//토마토가 모두 익을 때까지의 최소 날짜
	console.log(day_answer);
}

solution();
