//문제
// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
// 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다.
// 정점 번호는 1번부터 N번까지이다.

//입력
// 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
// 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

//출력
// 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

var fs = require('fs');
const [n, ...line] = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n');
const [N, M, V] = n.split(' ');

function solution() {
	const dfs = [];
	const bfs = [];

	//그래프 테이블 만들기
	const graph = Array.from(Array(+N + 1), () => new Array(+N + 1).fill(0));
	line.forEach((l) => {
		const [a, b] = l.split(' ');
		graph[a][b] = 1;
		graph[b][a] = 1;
	});

	function DFS(n) {
		dfs.push(n);

		for (let i = 1; i < +N + 1; i++) {
			//연결되어 있지 않거나 이미 방문했던 경우 넘어가기
			if (graph[n][i] === 0 || dfs.includes(i)) continue;
			DFS(i);
		}
	}

	const queue = [];
	function BFS(n) {
		bfs.push(n);
		for (let i = 1; i < +N + 1; i++) {
			if (graph[n][i] === 0 || bfs.includes(i)) continue;
			!queue.includes(i) && queue.push(i);
		}
		queue.length > 0 && BFS(queue.shift());
	}

	DFS(+V);
	BFS(+V);

	console.log(dfs.join(' '));
	console.log(bfs.join(' '));
}

solution();
