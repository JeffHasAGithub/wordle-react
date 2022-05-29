import "./App.css"

import Header from "./components/header"
import Game from "./components/game"
import Footer from "./components/footer"
import { ThemeCtx, themeColors } from "./components/theme"

export default function App() {
	return <>
		<ThemeCtx.Provider value={themeColors}>
			<Header />
			<Game />
			<Footer />
		</ThemeCtx.Provider>
	</>
}

