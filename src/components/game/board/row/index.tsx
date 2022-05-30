import styles from "./row.module.css"
import * as Utils from "../../utils"

import Cell from "./cell"

type Props = {
	guess: Array<Utils.Token>;
}

export default function Row({ guess }: Props) {
	return (
		<>
			<div className={styles.row}>
				<Cell letter={guess[0].letter} color={guess[0].color}/>
				<Cell letter={guess[1].letter} color={guess[1].color}/>
				<Cell letter={guess[2].letter} color={guess[2].color}/>
				<Cell letter={guess[3].letter} color={guess[3].color}/>
				<Cell letter={guess[4].letter} color={guess[4].color}/>
			</div>
		</>
	)
}
