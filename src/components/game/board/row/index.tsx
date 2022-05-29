import styles from "./row.module.css"
import Cell from "./cell"

export default function Row() {
	return (
		<>
			<div className={styles.row}>
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
			</div>
		</>
	)
}
