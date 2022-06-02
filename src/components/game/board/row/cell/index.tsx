import styles from "./cell.module.css"

import React from "react"
import * as Utils from "../../../utils"

export default function Cell({ letter, color }: Utils.Token) {
	const [isUp, setIsUp] = React.useState(true);

	React.useEffect(() => {
		if (letter === "") return;
		
		setIsUp(false);
		setTimeout(() => setIsUp(true), 100);
	}, [letter])

	return (
		<>
			{ isUp
					? <>
							<div
								className={`${styles.cell}`}
								style={{boxShadow: `0 6px 0 ${color}`}}
							>
								{letter}
							</div>
						</>
					: <>
							<div
								className={`${styles.cell} ${styles["cell-down"]}`}
							>
								{letter}
							</div>
						</>
			}
		</>
	)
}
