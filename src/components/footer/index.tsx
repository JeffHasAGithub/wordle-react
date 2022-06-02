import styles from "./footer.module.css"

import Divider from "./divider"
import * as Theme from "../theme"

export default function Footer() {
	return (
		<>
			<footer>
				<Divider
					stripeColors={[
						Theme.ACCENT_COLORS.RED,
						Theme.ACCENT_COLORS.BLUE,
						Theme.ACCENT_COLORS.GREEN
					]}
				/>
			</footer>
		</>
	)
}
