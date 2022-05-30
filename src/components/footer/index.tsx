import styles from "./footer.module.css"

import React from "react"
import Divider from "./divider"
import { ThemeCtx } from "../theme"

export default function Footer() {
	const theme = React.useContext(ThemeCtx);

	return (
		<>
			<footer>
				<Divider stripeColors={[theme.accents.red, theme.accents.blue, theme.accents.green]} />
			</footer>
		</>
	)
}
