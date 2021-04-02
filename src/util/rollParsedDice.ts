import rollDice from './rollDice';

export default function (diceString: DiceString) {
	const [numberString, sizeString] = diceString.split('d');
	if (!numberString || !sizeString) {
		return 0;
	}

	const number = parseInt(numberString);
	const size = parseInt(sizeString);

	return rollDice(size, number);
}
