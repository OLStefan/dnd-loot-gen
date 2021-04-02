import checkDiceString from './checkDiceString';
import rollParsedDice from './rollParsedDice';

export default function (multDiceString: MultipliedDiceString) {
	const [diceString, multString] = multDiceString.split('x');
	if (!diceString || !checkDiceString(diceString) || !multString) {
		return 0;
	}

	const mult = parseInt(multString);

	return rollParsedDice(diceString) * mult;
}
