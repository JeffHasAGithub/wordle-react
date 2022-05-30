import { screen, render } from "@testing-library/react"
import Banner from "../components/header/banner"

import styles from "../components/header/banner/banner.module.css"
import { themeColors } from "../components/theme"

describe("Banner component", () => {
	const props = {
		stripeColors: [
			themeColors.accents.red,
			themeColors.accents.blue,
			themeColors.accents.green,
		]
	}

	beforeEach(() => {
		render(<Banner {...props} />);
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
