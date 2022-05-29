import styles from "./header.module.css"

import React from "react"
import Title from "./title"
import Banner from "./banner"
import { ThemeCtx } from "../theme"

export default function Header() {
	const theme = React.useContext(ThemeCtx);
	return (
		<>
			<header>
				<Title 
					text="Wordle"
					textColor={theme.primary}
					accentColors={theme.accents}
				/>
				<Banner stripeColors={theme.accents} />
			</header>
		</>
	)
}
