import styles from "./banner.module.css"

const colors = ["lightcoral", "lightskyblue", "lightgreen"];

export default function Banner() {
	return (
		<section className={styles.banner}>
			{
				colors.map((_,i) => <div className={styles.stripe} style={{backgroundColor: `${colors[i]}`}}></div>)
			}
		</section>
	)
}
