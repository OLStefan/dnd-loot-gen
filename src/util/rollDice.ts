export default function (diceSize: number, number = 1) {
	let result = 0;
	for (let i = 0; i < number; i++) {
		result += rollDie(diceSize);
	}
	return result;
}

function rollDie(size: number) {
	// generates numbers from 1 to size
	return Math.floor(Math.random() * size) + 1;
}
