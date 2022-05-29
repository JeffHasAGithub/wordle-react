import React from "react"

export const themeColors = {
	primary: "#FFFACD",
	secondary: "#191923",
	shadow: "#A9A9A9",
	accents: ["#F08080", "#87CEFA", "#90EE90"]
}

export const ThemeCtx = React.createContext(themeColors);
