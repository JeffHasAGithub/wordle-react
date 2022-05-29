import styles from "./board.module.css"

import Row from "./row"

export default function Board() {
	return (
		<>
			<section className={styles.board}>
				<Row />
				<Row />
				<Row />
				<Row />
				<Row />
			</section>
		</>
	)
}
