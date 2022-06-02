import styles from "./board.module.css"

import Row from "./row"
import * as Utils from "../utils"

type Props = {
	guesses: Array<Array<Utils.Token>>;
}

export default function Board({ guesses }: Props) {
	return (
		<>
			<section className={styles.board}>
				<Row guess={guesses[0]}/>
				<Row guess={guesses[1]}/>
				<Row guess={guesses[2]}/>
				<Row guess={guesses[3]}/>
				<Row guess={guesses[4]}/>
			</section>
		</>
	)
}
