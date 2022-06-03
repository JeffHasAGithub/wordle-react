import { screen, render } from "@testing-library/react"
import Title from "../components/header/title"

import * as Theme from "../components/theme"

describe("Title component", () => {

	const props = {
		text: "Wordle",
		textColor: Theme.PRIMARY_COLOR,
		shadowColor: Theme.SHADOW_COLOR,
		accentColors: [
			Theme.ACCENT_COLORS.RED,
			Theme.ACCENT_COLORS.BLUE,
			Theme.ACCENT_COLORS.GREEN,
		]
	}

	beforeEach(() => {
		render(<Title {...props} />);
	});

	test("Component renders in the DOM", () => {
		const comp = screen.getByRole("heading");
		expect(comp).toBeInTheDocument();
	});

	test("Component contains supplied text", () => {
		const result: string[] = [];

		const comp = screen.getByRole("heading");
		for (let i = 0; i < comp.children.length; ++i) {
			const node = comp.children[i];
			result.push((node.textContent !== null) ? node.textContent : "");
		}

		expect(result.length).toEqual(props.text.length);
		expect(result.join("")).toEqual(props.text);
	});
});
