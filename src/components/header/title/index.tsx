import React from "react"
import styles from "./title.module.css"

type Props = {
	text: string;
	textColor: string;
	accentColors: Array<string>
}

export default function Header({ text, accentColors, textColor }: Props) {
	const [color, setColor] = React.useState(0);
	const [position, setPosition] = React.useState(0);
	
	const word = React.useMemo(() => text.split(""), [text]);
	const shadows = React.useMemo(() => word.map((_) => "darkgray"), [textColor]);
	
	React.useEffect(() => {
			shadows[position] = accentColors[color];
			const timerId = setTimeout(() => {
				if (position === word.length)
					return;

				if (color === accentColors.length - 1)
					setColor(0);
				else
					setColor(color + 1);
				
				setPosition(position + 1);
			}, 200);

			return () => clearTimeout(timerId);
	}, [position])

	return (
		<>
			<h1 className={styles.title}>
			{
				word.map((letter, i) => {
					return <span key={i} className={styles.text} style={{color: `${textColor}`, textShadow: `5px 5px ${shadows[i]}`}}>{letter}</span>
				})
			}
			</h1>
		</>
	)
}
