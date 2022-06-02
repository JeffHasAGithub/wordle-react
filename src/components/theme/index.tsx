const root = document.querySelector(":root")!;
const css = getComputedStyle(root);

export const PRIMARY_COLOR		= css.getPropertyValue("--primary-color");
export const SECONDARY_COLOR	= css.getPropertyValue("--secondary-color");
export const SHADOW_COLOR			= css.getPropertyValue("--shadow-color");
export const ACCENT_COLORS		= {
	RED: css.getPropertyValue("--accent-color-red"),
	BLUE: css.getPropertyValue("--accent-color-blue"),
	GREEN: css.getPropertyValue("--accent-color-green"),
}
