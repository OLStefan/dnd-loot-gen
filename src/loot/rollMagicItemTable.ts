import { shuffle } from 'lodash';
import findEntriesInRange from '../util/findEntriesInRange';
import rollDice from '../util/rollDice';

export default function (rolls: number[], tables: MagicItemTable[]) {
	const magicItems = rolls.flatMap((roll, index) => {
		const table = tables[index];
		if (!table) {
			return [];
		}
		let items: string[] = [];
		for (let i = 0; i < roll; i++) {
			items = [...items, ...getMagicItem(table)];
		}
		return items;
	});

	return beautifyMagicItems(magicItems);
}

export function getMagicItem(magicItemTable: MagicItemTable) {
	const possibleItems = findEntriesInRange(magicItemTable, rollDice(100)).map((entry) => entry.name);
	if (possibleItems.length > 1) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return [shuffle(possibleItems)[0]!];
	} else {
		return possibleItems;
	}
}

export function beautifyMagicItems(magicItems: string[]) {
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
