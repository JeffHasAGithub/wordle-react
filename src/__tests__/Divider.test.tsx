import { screen, render } from "@testing-library/react"
import Divider from "../components/footer/divider"

import styles from "../components/footer/divider/divider.module.css"
import * as Theme from "../components/theme"

describe("Divider component", () => {
	const props = {
		stripeColors: [
			Theme.ACCENT_COLORS.RED,
			Theme.ACCENT_COLORS.BLUE,
			Theme.ACCENT_COLORS.GREEN,
		]
	}

	beforeEach(() => {
		render(<Divider {...props} />);
	});

	test("Component renders in the DOM", () => {
		const comp = screen.getByRole("separator");
		expect(comp).toBeInTheDocument();
	});

	test("Component children have correct class", () => {
		const comp = screen.getByRole("separator");
		Array.from(comp.children).map((child) => {
			expect(child).toHaveClass(`${styles.stripe}`);
		});
	});

	test("Component children have correct inline style", () => {
		const comp = screen.getByRole("separator");	
		Array.from(comp.children).map((child, i) => {
			expect(child).toHaveStyle(
				`background-color: ${props.stripeColors[i]}`,
			);
		});
	});
});
