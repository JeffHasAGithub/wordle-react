import styles from "./board.module.css"
import Row from "./row"
import { Token } from "../"

type Props = {
	guesses: Array<Array<Token>>;
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
