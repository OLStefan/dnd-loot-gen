export default function (coins: [number, number, number, number, number]) {
	return coins[0] / 100 + coins[1] / 10 + coins[2] / 2 + coins[3] + coins[4] * 10;
}
