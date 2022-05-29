import './App.css'

import Header from "./components/header"


function App() {
	return <>
		<Header
			text="Wordle"
			textColor="lemonchiffon"
			shadowColors={["lightcoral", "lightskyblue", "lightgreen"]}
		/>
	</>
}

export default App;
