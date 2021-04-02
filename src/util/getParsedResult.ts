import checkDiceString from './checkDiceString';
import rollParsedDice from './rollParsedDice';
import rollParsedMultipliedDice from './rollParsedMultipliedDice';

export default function (coinString: CoinString) {
	if (!coinString) {
		return 0;
	}
	if (checkDiceString(coinString)) {
		return rollParsedDice(coinString);
	}
	return rollParsedMultipliedDice(coinString);
}
