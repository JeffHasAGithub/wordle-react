import styles from "./game.module.css"

import React from "react"
import Board from "./board"
import Keyboard from "./keyboard"

const MATTEMPTS = 5;
const MLENGTH = 5;

export type Token = {
	letter: string,
	color: string,
}

export default function Game() {
	const [word, setWord] = React.useState("Hello");
	const [guess, setGuess] = React.useState<Array<Token>>([
		{ letter: "", color: "darkgrey"},
		{ letter: "", color: "darkgrey"},
		{ letter: "", color: "darkgrey"},
		{ letter: "", color: "darkgrey"},
		{ letter: "", color: "darkgrey"},
	]);
	const [guesses, setGuesses] = React.useState<Array<typeof guess>>([
		[...guess],
		[...guess],
		[...guess],
		[...guess],
		[...guess],
	]);

	const cell = React.useRef(0);
	const row = React.useRef(0);

	React.useEffect(() => {
		const cpGuesses = [...guesses];
		cpGuesses[row.current] = [...guess];
		setGuesses(cpGuesses);

		if (row.current === MATTEMPTS)
			console.log("done");
	}, [guess])

	const keyHandler = (l: string) => {
		const newGuess = [...guess];
		newGuess[cell.current] = {
			letter: l,
			color: "lightskyblue",
		};

		if (++cell.current === MLENGTH)
			cell.current--;

		setGuess(newGuess);
	}

	const enterHandler = () => {
		setGuess([
			{ letter: "", color: "darkgrey"},
			{ letter: "", color: "darkgrey"},
			{ letter: "", color: "darkgrey"},
			{ letter: "", color: "darkgrey"},
			{ letter: "", color: "darkgrey"},
		]);

		cell.current = 0;
		row.current++;
	}

	return (
		<>
			<main>
				<Board guesses={guesses} />
				<Keyboard
					keyHandler={keyHandler}
					enterHandler={enterHandler}
				/>
			</main>
		</>
	)
}
