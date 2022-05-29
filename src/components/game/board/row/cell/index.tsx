import styles from "./cell.module.css"

export default function Cell() {
	return (
		<>
			<div
				className={`${styles.cell} ${styles["cell-up"]}`}>
			</div>
		</>
	)
}
