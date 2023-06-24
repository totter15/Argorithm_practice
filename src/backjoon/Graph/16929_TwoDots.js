var fs = require('fs');
const input = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n')
	.map((v, index) => (index === 0 ? v.split(' ') : v.split('')));
const [N, M] = input.shift().map(Number);

let memory = Array.from(Array(N), () => Array(M).fill(0));
let answer = 'No';

function solution() {
	function dfs(dot, array, direction, charactor) {
		const [n, m] = dot;
		if (array.length > 3 && array.includes(`${n} ${m}`)) {
			answer = 'Yes';
			return;
		}

		//지나온길 기록하기
		memory[n][m] = 1;

		//현재 기준점을 배열에 추가
		array.push(`${n} ${m}`);

		const directions = {
			right: [n, m + 1],
			bottom: [n + 1, m],
			left: [n, m - 1],
			top: [n - 1, m],
		};

		Object.keys(directions).map((d) => {
			const [n_, m_] = directions[d];
			if (n_ < 0 || m_ < 0 || n_ >= N || m_ >= M) return;

			//같은 알파벳이 아닐시에 return
			if (input[n_][m_] !== charactor) return;

			//이전방향의 반대로 가면 제자리로 가므로 반대방향을 제외
			if (direction === 'right' && d !== 'left') {
				dfs([n_, m_], array, d, charactor);
			}
			if (direction === 'left' && d !== 'right') {
				dfs([n_, m_], array, d, charactor);
			}
			if (direction === 'top' && d !== 'bottom') {
				dfs([n_, m_], array, d, charactor);
			}
			if (direction === 'bottom' && d !== 'top') {
				dfs([n_, m_], array, d, charactor);
			}
		});
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			//답이 나왔다면 break
			if (answer === 'Yes') break;
			//이미 지나왔던 길이면 continue
			if (memory[i][j] === 1) continue;

			const c = input[i][j]; //기준점의 알파벳
			dfs([i, j], [], 'right', c);
		}
	}
	console.log(answer);
}

solution();
