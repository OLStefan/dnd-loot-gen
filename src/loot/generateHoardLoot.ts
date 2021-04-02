import { Tiers } from '../types/enums';
import findEntriesInRange from '../util/findEntriesInRange';
import getParsedResult from '../util/getParsedResult';
import rollDice from '../util/rollDice';

export default function (settings: CRSettings, hoardTable: HoardTable, magicItemTables: MagicItemTable[]) {
	return { coins: getCoins(settings, hoardTable), magicItems: getMagicItems(settings, hoardTable, magicItemTables) };
}

function getCoins(settings: CRSettings, hoardTable: HoardTable): [number, number, number, number, number] {
	return Object.values(Tiers).reduce(
		(previous, current) => {
			const distribution = hoardTable[current].coins;
			let newCoins: [number, number, number, number, number] = [...previous];
			for (let i = 0; i < settings[current]; i++) {
				newCoins = [
					newCoins[0] + getParsedResult(distribution[0]),
					newCoins[1] + getParsedResult(distribution[1]),
					newCoins[2] + getParsedResult(distribution[2]),
					newCoins[3] + getParsedResult(distribution[3]),
					newCoins[4] + getParsedResult(distribution[4]),
				];
			}

			return newCoins;
		},
		[0, 0, 0, 0, 0],
	);
}

function getMagicItems(settings: CRSettings, hoardTable: HoardTable, magicItemTables: MagicItemTable[]) {
	return Object.values(Tiers).reduce((previous, current) => {
		let magicItems = [...previous];
		for (let i = 0; i < settings[current]; i++) {
			const magicTableEntries = findEntriesInRange(hoardTable[current].magicItems, rollDice(100));
			magicTableEntries.forEach((entry) => {
				const magicItemTable = magicItemTables[entry.tableIndex];
				if (magicItemTable) {
					magicItems = [...magicItems, ...findEntriesInRange(magicItemTable, rollDice(100)).map((entry) => entry.name)];
				}
			});
		}
		return magicItems;
	}, [] as string[]);
}
