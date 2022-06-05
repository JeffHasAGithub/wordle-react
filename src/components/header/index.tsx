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
					textColor="var(--primary-color)"
					shadowColor="var(--shadow-color)"
					accentColors={[
						"var(--accent-color-red)",
						"var(--accent-color-blue)",
						"var(--accent-color-green)"
					]}
				/>
				<Banner
					stripeColors={[
						"var(--accent-color-red)",
						"var(--accent-color-blue)",
						"var(--accent-color-green)"
					]}
				/>
			</header>
		</>
	)
}
