import styles from "./divider.module.css"

type Props = {
	stripeColors: Array<string>;
}

export default function Divider({ stripeColors }: Props) {
	return (
		<>
			<div className={styles.divider} role="separator">
				{
					stripeColors.map((_, i) => {
						return (
							<div 
								key={i}
								className={styles.stripe}
								style={{backgroundColor: `${stripeColors[i]}`}}
							>
							</div>
						)
					})
				}
			</div>
		</>
	)
}
