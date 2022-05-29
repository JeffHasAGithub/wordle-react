import styles from "./divider.module.css"

const colors = ["lightcoral", "lightskyblue", "lightgreen"];

export default function Divider() {
	return (
		<>
			<div className={styles.divider}>
				{
					colors.map((_, i) => {
						return <div className={styles.stripe} style={{backgroundColor: `${colors[i]}`}}></div>
					})
				}
			</div>
		</>
	)
}
