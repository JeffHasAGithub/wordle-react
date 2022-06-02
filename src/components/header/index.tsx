import styles from "./header.module.css"

import Title from "./title"
import Banner from "./banner"
import * as Theme from "../theme"

export default function Header() {
	return (
		<>
			<header>
				<Title 
					text="Wordle"
					textColor={Theme.PRIMARY_COLOR}
					shadowColor={Theme.SHADOW_COLOR}
					accentColors={[
						Theme.ACCENT_COLORS.RED,
						Theme.ACCENT_COLORS.BLUE,
						Theme.ACCENT_COLORS.GREEN]}
				/>
				<Banner
					stripeColors={[
						Theme.ACCENT_COLORS.RED,
						Theme.ACCENT_COLORS.BLUE,
						Theme.ACCENT_COLORS.GREEN,
					]}
				/>
			</header>
		</>
	)
}
