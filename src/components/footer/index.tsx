import styles from "./footer.module.css"

import Divider from "./divider"
import * as Theme from "../theme"

export default function Footer() {
	return (
		<>
			<footer>
				<Divider
					stripeColors={[
						"var(--accent-color-red)",
						"var(--accent-color-blue)",
						"var(--accent-color-green)"
					]}
				/>
				<div className={styles.footer}>
					<h2>Developed by <a
							className={styles.link}
							href="https://jeffmadethiswebsite.com">
								Jeff Moore
						</a>
					</h2>
					<h2>Source code available <a
							className={styles.link}
							href="https://github.com/JeffHasAGithub">
							here
						</a>
					</h2>
				</div>
			</footer>
		</>
	)
}
