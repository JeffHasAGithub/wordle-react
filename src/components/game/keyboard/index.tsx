import styles from "./keyboard.module.css"

const cmds = ["Enter", "Clear"];
const keys = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M"]
]

type Props = {
	keyHandler: (l: string) => void;
	enterHandler: () => void;
}

export default function Keyboard({ keyHandler, enterHandler }: Props) {
	return (
		<>
			<section className={styles.keyboard}>
				{
					keys.map((row, i) => {
						return (
							<div key={i}>
								{
									row.map((key, j) => {
										return (
											<button
												key={j}
												className={styles.key}
												onClick={() => {
													keyHandler(row[j])
												}}
											>
												{key}
											</button>
										)
									})
								}
							</div>
						)
					})
				}
				<div className={styles.cmds}>
					<button
						className={styles.cmd}
						onClick={enterHandler}
					>
						{cmds[0]}
					</button>
					<button
						className={styles.cmd}
					>
						{cmds[1]}
					</button>
				</div>
			</section>
		</>
	)
}
