import styles from "./cell.module.css"
import * as Utils from "../../../utils"

export default function Cell({ letter, color }: Utils.Token) {
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
