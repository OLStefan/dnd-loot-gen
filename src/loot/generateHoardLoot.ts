import { shuffle } from 'lodash';
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
	const magicItems = Object.values(Tiers).reduce((previous, current) => {
		let currentItems = [...previous];
		for (let i = 0; i < settings[current]; i++) {
			const magicTableEntries = findEntriesInRange(hoardTable[current].magicItems, rollDice(100));
			magicTableEntries.forEach((entry) => {
				const magicItemTable = magicItemTables[entry.tableIndex];
				if (magicItemTable) {
					const possibleItems = findEntriesInRange(magicItemTable, rollDice(100)).map((entry) => entry.name);
					if (possibleItems.length > 1) {
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						currentItems = [...currentItems, shuffle(possibleItems)[0]!];
					} else {
						currentItems = [...currentItems, ...possibleItems];
					}
				}
			});
		}
		return currentItems;
	}, [] as string[]);

	return magicItems
		.reduce((previous, current) => {
			const match = previous.find((item) => item.name === current);
			if (match) {
				return [...previous.filter((item) => item.name !== current), { ...match, count: match.count + 1 }];
			}
			return [...previous, { name: current, count: 1 }];
		}, [] as MagicItemLoot[])
		.sort(function (a, b) {
			const diff = b.count - a.count;
			if (diff) {
				return diff > 0 ? 1 : -1;
			}
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
}
