// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

//입력
// 첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

//출력
//첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

//최대공약수
//두 자연수의 공통된 약수 중 가장 큰 수

//최소공배수
//두 자연수의 공통된 배수 중 가장 작은 수
//최소공배수 = 두 자연수의 곱 / 최대공약수

//유클리드 호제법
// a,b (a>b)가 있을때 r = a%b, b와 r의 최대공약수는 a와 b의 최대공약수와 같다

var fs = require('fs');
const [A, B] = fs.readFileSync('./input.txt').toString().split(' ');

function solution() {
	let a = Math.max(Number(A), Number(B));
	let b = Math.min(Number(A), Number(B));

	let r;

	while (r !== 0) {
		r = a % b;

		if (r === 0) break;

		a = b;
		b = r;
	}
	console.log(b);
	console.log((Number(A) * Number(B)) / b);
}

solution();
