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
					keys.map((row) => {
						return (
							<div>
								{
									row.map((key) => {
										return <button className={styles.key}>{key}</button>
									})
								}
							</div>
						)
					})
				}
				<div className={styles.cmds}>
					{
						cmds.map((cmd) => <button className={styles.cmd}>{cmd}</button>)
					}
				</div>
			</section>
		</>
	)
}
