//문제
// 여러 섬으로 이루어진 나라가 있다. 이 나라의 대통령은 섬을 잇는 다리를 만들겠다는 공약으로 인기몰이를 해 당선될 수 있었다.
// 하지만 막상 대통령에 취임하자, 다리를 놓는다는 것이 아깝다는 생각을 하게 되었다.
// 그래서 그는, 생색내는 식으로 한 섬과 다른 섬을 잇는 다리 하나만을 만들기로 하였고, 그 또한 다리를 가장 짧게 하여 돈을 아끼려 하였다.

// 이 나라는 N×N크기의 이차원 평면상에 존재한다. 이 나라는 여러 섬으로 이루어져 있으며, 섬이란 동서남북으로 육지가 붙어있는 덩어리를 말한다.
// 다음은 세 개의 섬으로 이루어진 나라의 지도이다.

// 위의 그림에서 색이 있는 부분이 육지이고, 색이 없는 부분이 바다이다. 이 바다에 가장 짧은 다리를 놓아 두 대륙을 연결하고자 한다.
// 가장 짧은 다리란, 다리가 격자에서 차지하는 칸의 수가 가장 작은 다리를 말한다. 다음 그림에서 두 대륙을 연결하는 다리를 볼 수 있다.
// 물론 위의 방법 외에도 다리를 놓는 방법이 여러 가지 있으나, 위의 경우가 놓는 다리의 길이가 3으로 가장 짧다(물론 길이가 3인 다른 다리를 놓을 수 있는 방법도 몇 가지 있다).
// 지도가 주어질 때, 가장 짧은 다리 하나를 놓아 두 대륙을 연결하는 방법을 찾으시오.

//입력
// 첫 줄에는 지도의 크기 N(100이하의 자연수)가 주어진다. 그 다음 N줄에는 N개의 숫자가 빈칸을 사이에 두고 주어지며, 0은 바다, 1은 육지를 나타낸다.
// 항상 두 개 이상의 섬이 있는 데이터만 입력으로 주어진다.

//출력
// 첫째 줄에 가장 짧은 다리의 길이를 출력한다.

var fs = require('fs');
const input = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.split(' ').map(Number));
const [N] = input.shift();

const map = Array.from(Array(N), () => Array(N).fill(0));
let mapIndex = 1;
let count = N * 2;

function solution() {
	//섬 지도 만들기
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (input[i][j] === 1 && !map[i][j]) {
				map_dfs([i, j]);
				mapIndex++;
			}
		}
	}

	function map_dfs(dot) {
		const [n, m] = dot;
		if (map[n][m]) return;

		map[n][m] = mapIndex;
		const directions = [
			[n, m + 1],
			[n + 1, m],
			[n, m - 1],
			[n - 1, m],
		];

		directions.map((d) => {
			const [n_, m_] = d;
			if (n_ < 0 || m_ < 0 || n_ >= N || m_ >= N) return;

			if (input[n_][m_]) {
				map_dfs([n_, m_]);
			}
		});
	}

	let name;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (input[i][j] === 1) {
				name = map[i][j];
				const road = Array.from(Array(N), () => Array(N));
				dfs([i, j], 0, road);
			}
			name = null;
		}
	}

	function dfs(dot, c, road) {
		const [n, m] = dot;
		let raod_ = road;

		//이미 지나온길이면 return
		if (raod_[n][m]) return;

		//가장 짧은 길보다 길면 return
		if (count <= c) return;

		//현재 섬의 이름과 다른 이름의 섬을 만나면 count에 저장
		if (name && map[n][m] !== name && input[n][m] === 1) {
			count = Math.min(count, c);
			return;
		}

		// 지나온 길 저장
		raod_[n][m] = 1;

		const directions = [
			[n, m + 1],
			[n + 1, m],
			[n, m - 1],
			[n - 1, m],
		];

		directions.map((d) => {
			const [n_, m_] = d;
			if (n_ < 0 || m_ < 0 || n_ >= N || m_ >= N) return;

			// 다음에 이동할 위치가 현재 있는 섬의 이름과 같지 않다면 이동
			if (map[n_][m_] !== name) {
				dfs([n_, m_], c + 1, raod_);
			}
		});
	}

	console.log(count - 1);
}
solution();
