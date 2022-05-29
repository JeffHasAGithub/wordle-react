import './App.css'

import Header from "./components/header"
import Banner from "./components/banner"
import Board from "./components/board"
import Keyboard from "./components/keyboard"
import Divider from "./components/divider"

function App() {
	return <>
		<Header
			text="Wordle"
			textColor="lemonchiffon"
			shadowColors={["lightcoral", "lightskyblue", "lightgreen"]}
		/>
		<Banner />
		<Board />
		<Keyboard />
		<Divider />
	</>
}

export default App;
