import styles from "./game.module.css"
import * as Utils from "./utils"
import * as Theme from "../theme"

import React from "react"
import Board from "./board"
import Keyboard from "./keyboard"
import Status from "./status"

const MATTEMPTS = 5;
const MLENGTH = 5;

export default function Game() {
	const [gameState, setGameState] = React.useState<Utils.GameState>(Utils.GameState.PLAYING);
	const [word, getWord] = useFetch("words.txt");
	const [guesses, setGuesses] = React.useState<Utils.Token[][]>([
		Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
		Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
		Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
		Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
		Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
	]);

	const cell = React.useRef(0);
	const row = React.useRef(0);

	React.useEffect(() => {
		getWord();
	}, [])

	const keyHandler = (key: string) => {
		if (cell.current === MLENGTH)
			return;

		const cpGuess = [...guesses[row.current]];
		cpGuess[cell.current++] = {
			letter: key,
			color: Theme.ACCENT_COLORS.BLUE,
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
		cpGuesses[row.current] = Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR);
		setGuesses(cpGuesses);

		cell.current = 0;
	}

	const resetHandler = () => {
		setGuesses([
			Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
			Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
			Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
			Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
			Utils.newGuess(MLENGTH, "", Theme.SHADOW_COLOR),
		]);

		cell.current = 0;
		row.current = 0;

		getWord();
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
								textColor={Theme.PRIMARY_COLOR}
								shadowColors={{
									red: Theme.ACCENT_COLORS.RED,
									blue: Theme.ACCENT_COLORS.BLUE,
									green: Theme.ACCENT_COLORS.GREEN
								}}
								resetHandler={resetHandler}
							/> 
						</>
				}
			</main>
		</>
	)
}

function useFetch(path: string): [string, () => void] {
	const [data, setData] = React.useState("");
	return [data, () => {
		fetch(path)
			.then(resp => resp.text())
			.then(text=> {
				const newWord = Utils.getRandWord(text.split("\n"));
				setData(newWord);
			})
			.catch(err => {
				console.log(err);
				setData("ERROR")
			});
	}];
}
