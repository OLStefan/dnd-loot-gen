import { Tiers } from '../types/enums';

const lootTable: HoardTable = {
	[Tiers.LOW]: {
		coins: ['5d6x100', '3d6x100', '3d6x10', '1d6x10', 0],
		magicItems: [
			{ tableIndex: 0, numberOfRolls: '1d6', range: { min: 37, max: 60 } },
			{ tableIndex: 1, numberOfRolls: '1d4', range: { min: 61, max: 75 } },
			{ tableIndex: 2, numberOfRolls: '1d4', range: { min: 76, max: 85 } },
			{ tableIndex: 5, numberOfRolls: '1d4', range: { min: 86, max: 97 } },
			{ tableIndex: 6, numberOfRolls: 1, range: { min: 98, max: 100 } },
		],
	},
	[Tiers.MEDIUM]: {
		coins: ['2d6x100', '2d6x100', 0, '6d6x10', '3d6'],
		magicItems: [
			{ tableIndex: 0, numberOfRolls: '1d6', range: { min: 29, max: 44 } },
			{ tableIndex: 1, numberOfRolls: '1d4', range: { min: 45, max: 63 } },
			{ tableIndex: 2, numberOfRolls: '1d4', range: { min: 64, max: 74 } },
			{ tableIndex: 3, numberOfRolls: 1, range: { min: 75, max: 80 } },
			{ tableIndex: 5, numberOfRolls: '1d4', range: { min: 81, max: 94 } },
			{ tableIndex: 6, numberOfRolls: '1d4', range: { min: 95, max: 98 } },
			{ tableIndex: 7, numberOfRolls: 1, range: { min: 99, max: 100 } },
		],
	},
	[Tiers.HIGH]: { coins: ['6d6x500', '4d6x200', '2d6x50', '8d6x10', '6d6'], magicItems: [] },
	[Tiers.END]: { coins: [0, 0, 0, '12d6x1000', '8d6x1000'], magicItems: [] },
};

export default lootTable;
