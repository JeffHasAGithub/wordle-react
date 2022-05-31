import styles from "./status.module.css"
import { GameState } from "../utils"

type Props = {
	word: string;
	state: GameState;
	textColor: string;
	shadowColors: { red: string, blue: string, green: string };
}

export default function Status({ word, state, textColor, shadowColors }: Props) {
	return (
		<div className={styles.status}>
			{
				(state === GameState.WON)
					? <>
							<h2
								className={styles.msg}
								style={{
									color: `${textColor}`, 
									textShadow: `4px 4px ${shadowColors.green}`
								}}
							>
								You won :)
							</h2>
							<h3
								className={styles.word}
								style={{
									color: `${textColor}`,
									textShadow: `2px 2px ${shadowColors.green}`
								}}
							>
								{`The word was ${word}`}
							</h3>
						</>
					: <>
							<h2
								className={styles.msg}
								style={{
									color: `${textColor}`,
									textShadow: `4px 4px ${shadowColors.red}`
								}}
							>
								You lost :(
							</h2>
							<h3
								className={styles.word}
								style={{
									color: `${textColor}`,
									textShadow: `2px 2px ${shadowColors.red}`
								}}
							>
								{`The word was ${word}`}
							</h3>
						</>
			}
		</div>
	);
}
