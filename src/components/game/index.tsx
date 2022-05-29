import styles from "./game.module.css"

import Board from "./board"
import Keyboard from "./keyboard"

export default function Game() {
	return (
		<>
			<main>
				<Board />
				<Keyboard />
			</main>
		</>
	)
}
