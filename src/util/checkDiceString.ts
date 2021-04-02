export default function checkDiceString(string: string): string is DiceString {
	return !!string && /^\d+d\d+$/.test(string);
}
