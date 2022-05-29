import styles from "./divider.module.css"

const colors = ["lightcoral", "lightskyblue", "lightgreen"];

export default function Divider() {
	return (
		<section className={styles.container}>
			{
				colors.map((_,i) => <div className={styles.bar} style={{backgroundColor: `${colors[i]}`}}></div>)
			}
		</section>
	)
}
