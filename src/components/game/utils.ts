export interface Token {
	letter: string;
	color: string;	
}

export function newToken(letter?: string, color?: string): Token {
	return {
		letter: (letter) ? letter : "",
		color: (color) ? color : "",
	}
}

export function newGuess(len: number, letter?: string, color?: string): Token[] {
	const guess: Token[] = [];

	for (let i = 0; i < len; ++i) {
		guess.push(newToken(letter, color));
	}

	return guess;
}

export function checkGuess(word: string, guess: Token[]): [number, string[]] {
	let nmatched = 0;
	const colors: string[] = [];

	word.split("").forEach((_, i) => {
		if (word[i] === "") {
			colors.push("lightcoral");
			return;
		}

		if (word[i] === guess[i].letter) {
			colors.push("lightgreen");
			nmatched++;	
		} else {
			const wordi = word.indexOf(guess[i].letter)
			if (wordi === -1)
				colors.push("lightcoral");
			else
				colors.push("yellow");
		}
	});	

	return [nmatched, colors];
}
