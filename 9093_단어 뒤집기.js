// 문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

// 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 문장이 하나 주어진다. 단어의 길이는 최대 20, 문장의 길이는 최대 1000이다. 단어와 단어 사이에는 공백이 하나 있다.

//입력
// 2
// I am happy today
// We want to win the first prize

// 출력
// I ma yppah yadot
// eW tnaw ot niw eht tsrif ezirp

var fs = require('fs');
const [N, ...array] = fs.readFileSync('./input.txt').toString().split('\n');

// 내장함수 이용(reverse, split, join)
function solution1() {
	let answer = '';
	// array = ['I am happy today', ']We want to win the first prize']

	for (let i = 0; i < N; i++) {
		answer = array[i]
			.split(' ') //['I', 'am', 'happy', 'today']
			.map(
				(item) =>
					item
						.split('') //[I] [a,m] [h,a,p,p,y] [t,o,d,a,y]
						.reverse() //[I] [m,a] [y,p,p,a,h] [y,a,d,o,t]
						.join('') //I ma yppah yadot
			) //['I', 'ma', 'yppah', 'yadot']
			.join(' '); //I ma yppah yadot

		console.log(answer);
	}
}

solution1();

// 17772KB
// 804ms
