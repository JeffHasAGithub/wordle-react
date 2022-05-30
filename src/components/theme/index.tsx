import React from "react"

export const themeColors = {
	primary: "#FFFACD",
	secondary: "#191923",
	shadow: "#A9A9A9",
	accents: { red: "#F08080", blue: "#87CEFA", green: "#90EE90" },
}

export const ThemeCtx = React.createContext(themeColors);
