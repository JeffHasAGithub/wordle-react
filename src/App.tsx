import './App.css'

import Header from "./components/header"
import Divider from "./components/divider"

function App() {
	return <>
		<Header
			text="Wordle"
			textColor="lemonchiffon"
			shadowColors={["lightcoral", "lightskyblue", "lightgreen"]}
		/>
		<Divider />
	</>
}

export default App;
