import styles from "./banner.module.css"

type Props = {
	stripeColors: Array<string>;
}

export default function Banner({ stripeColors }: Props) {
	return (
		<section className={styles.banner}>
			{
				stripeColors.map((_, i) => {
					return (
						<div 
							key={i}
							className={styles.stripe}
							style={{backgroundColor: `${stripeColors[i]}`}}
						>
						</div>
					)}
				)	
			}
		</section>
	)
}
