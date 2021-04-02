export default function roundNumber(num: number, scale: number) {
	return Math.round((num + Number.EPSILON) * 10 ** scale) / 10 ** scale;
}
