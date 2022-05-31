import styles from "./game.module.css"
import * as Utils from "./utils"

import React from "react"
import Board from "./board"
import Keyboard from "./keyboard"
import Status from "./status"
import { ThemeCtx } from "../theme"
const MATTEMPTS = 5;
const MLENGTH = 5;

export default function Game() {
	const theme = React.useContext(ThemeCtx);

	const [gameState, setGameState] = React.useState<Utils.GameState>(Utils.GameState.PLAYING);
	const [word, setWord] = React.useState("Hello".toUpperCase());
	const [guesses, setGuesses] = React.useState<Utils.Token[][]>([
		Utils.newGuess(MLENGTH, "", theme.shadow),
		Utils.newGuess(MLENGTH, "", theme.shadow),
		Utils.newGuess(MLENGTH, "", theme.shadow),
		Utils.newGuess(MLENGTH, "", theme.shadow),
		Utils.newGuess(MLENGTH, "", theme.shadow),
	]);

	const cell = React.useRef(0);
	const row = React.useRef(0);

	const keyHandler = (key: string) => {
		if (cell.current === MLENGTH)
			return;

		const cpGuess = [...guesses[row.current]];
		cpGuess[cell.current++] = {
			letter: key,
			color: theme.accents.blue,
		};

		const cpGuesses = [...guesses];
		cpGuesses[row.current] = cpGuess;
		setGuesses(cpGuesses);
	}

	const enterHandler = () => {
		if (cell.current !== MLENGTH)
			return;

		const [nmatched, colors] = Utils.checkGuess(word, guesses[row.current]);
		const cpGuess = colors.map((color, i) => { return { letter: guesses[row.current][i].letter, color } });

		const cpGuesses = [...guesses];
		cpGuesses[row.current] = cpGuess;
		setGuesses(cpGuesses);

		cell.current = 0;
		row.current++;
		
		if (nmatched === word.length) {
			setGameState(Utils.GameState.WON)
			return;
		}

		if (row.current === MATTEMPTS) {
			setGameState(Utils.GameState.LOST);
			return;
		}
	}

	const clearHandler = () => {
		const cpGuesses = [...guesses];
		cpGuesses[row.current] = Utils.newGuess(MLENGTH, "", theme.shadow);
		setGuesses(cpGuesses);

		cell.current = 0;
	}

	const resetHandler = () => {
		setGuesses([
			Utils.newGuess(MLENGTH, "", theme.shadow),
			Utils.newGuess(MLENGTH, "", theme.shadow),
			Utils.newGuess(MLENGTH, "", theme.shadow),
			Utils.newGuess(MLENGTH, "", theme.shadow),
			Utils.newGuess(MLENGTH, "", theme.shadow),
		]);

		cell.current = 0;
		row.current = 0;

		setGameState(Utils.GameState.PLAYING);
	}

	return (
		<>
			<main className={styles.game}>
				<Board guesses={guesses} />
				{ gameState === Utils.GameState.PLAYING
					? <>
							<Keyboard
								keyHandler={keyHandler}
								enterHandler={enterHandler}
								clearHandler={clearHandler}
							/>
						</>
					: <>
							<Status
								state={gameState}
								word={word}
								textColor={theme.primary}
								shadowColors={{
									red: theme.accents.red,
									blue: theme.accents.blue,
									green: theme.accents.green
								}}
								resetHandler={resetHandler}
							/> 
						</>
				}
			</main>
		</>
	)
}
