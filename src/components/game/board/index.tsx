import styles from "./board.module.css"
import * as Utils from "../utils"
import Row from "./row"

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
