import styles from "./cell.module.css"
import { Token } from "../../../"

export default function Cell({ letter, color }: Token) {
	return (
		<>
			<div
				className={`${styles.cell} ${styles["cell-up"]}`}
				style={{boxShadow: `0 6px 0 ${color}`}}
			>
				{letter}
			</div>
		</>
	)
}
