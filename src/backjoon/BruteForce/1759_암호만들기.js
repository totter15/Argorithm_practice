var fs = require('fs');
const [LC, letter] = fs
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split('\n');
const [L, C] = LC.split(' ');
const letters = letter.split(' ').sort();

function solution() {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const answers = [];

	for (let j = 0; j < +C; j++) {
		bt(j, [letters[j]], j);
	}

	function bt(index, passwords, currentIndex) {
		if (passwords.length === +L) {
			let count = { vowels: 0, consonant: 0 };
			passwords.forEach((password) =>
				vowels.includes(password) ? count.vowels++ : count.consonant++
			);

			if (count.vowels >= 1 && count.consonant >= 2)
				answers.push(passwords.join(''));
			return;
		}

		for (let i = currentIndex + 1; i < letters.length; i++) {
			const password = letters[i];
			bt(index + 1, [...passwords, password], i);
		}
	}

	console.log(answers.join('\n'));
}

solution();
