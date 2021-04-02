import { Tiers } from '../types/enums';
import findEntriesInRange from '../util/findEntriesInRange';
import getParsedResult from '../util/getParsedResult';
import rollDice from '../util/rollDice';

export default function (settings: CRSettings, lootTable: LootTable): [number, number, number, number, number] {
	return Object.values(Tiers).reduce(
		(previous, current) => {
			let newCoins: [number, number, number, number, number] = [...previous];
			for (let i = 0; i < settings[current]; i++) {
				const distributions = findEntriesInRange(lootTable[current], rollDice(100));
				distributions
					.map((entry) => entry.content)
					.forEach((distribution) => {
						newCoins = [
							newCoins[0] + getParsedResult(distribution[0]),
							newCoins[1] + getParsedResult(distribution[1]),
							newCoins[2] + getParsedResult(distribution[2]),
							newCoins[3] + getParsedResult(distribution[3]),
							newCoins[4] + getParsedResult(distribution[4]),
						];
					});
			}

			return newCoins;
		},
		[0, 0, 0, 0, 0],
	);
}
