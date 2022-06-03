import * as Utils from "../components/game/utils"

describe("newToken", () => {
	describe("newToken handles defined input", () => {
		test("letter is empty string, color is empty string", () => {
			expect(Utils.newToken("", "")).toEqual({ letter: "", color: "" });	
		});

		test("letter is 'T', color is empty string", () => {
			expect(Utils.newToken("T", "")).toEqual({ letter: "T", color: "" });
		});

		test("letter is empty string, color is 'red'", () => {
			expect(Utils.newToken("", "red")).toEqual({ letter: "", color: "red" });
		});

		test("letter is 'h', returned as 'H'", () => {
			const result = Utils.newToken("h", "");
			expect(result.letter).toEqual("H");
		});

		test("letter is 'hello', returned as 'H'", () => {
			const result = Utils.newToken("hello", "");
			expect(result.letter).toEqual("H");
		});
	});

	describe("newToken handles undefined input", () => {
		test("letter is undefined, color is undefined", () => {
			expect(Utils.newToken(undefined, undefined)).toEqual({ letter: "", color: "" });
		});

		test("letter is defined, color is undefined", () => {
			expect(Utils.newToken("H", undefined)).toEqual({ letter: "H", color: "" });
		});

		test("letter is undefined, color is defined", () => {
			expect(Utils.newToken(undefined, "red")).toEqual({ letter: "", color: "red" });
		});
	});
});

describe("newGuess", () => {
	describe("newGuess returns Token[] of valid length", () => {
		test("Length of return is >= 0 when len >= 0", () => {
			expect(Utils.newGuess(0, "", "")).toHaveLength(0);
			expect(Utils.newGuess(5, "", "")).toHaveLength(5);
		});

		test("Length of return is == 0 when len < 0", () => {
			expect(Utils.newGuess(-1, "", "")).toHaveLength(0);
		});
	});
});
