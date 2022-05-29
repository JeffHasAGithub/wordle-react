import styles from "./header.module.css"

import Title from "./title"
import Banner from "./banner"

export default function Header() {
	return (
		<>
			<header>
				<Title 
					text="Wordle"
					textColor="lemonchiffon"
					shadowColors={["lightcoral", "lightskyblue", "lightgreen"]}
				/>
				<Banner />
			</header>
		</>
	)
}
