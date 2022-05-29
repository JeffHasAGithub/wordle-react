import styles from "./keyboard.module.css"

const cmds = ["Enter", "Clear"];

const keys = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M"]
]

export default function Keyboard() {
	return (
		<>
			<section className={styles.keyboard}>
				{
					keys.map((row, i) => {
						return (
							<div key={i}>
								{
									row.map((key, j) => {
										return <button key={j} className={styles.key}>{key}</button>
									})
								}
							</div>
						)
					})
				}
				<div className={styles.cmds}>
					{
						cmds.map((cmd, i) => <button key={i} className={styles.cmd}>{cmd}</button>)
					}
				</div>
			</section>
		</>
	)
}
