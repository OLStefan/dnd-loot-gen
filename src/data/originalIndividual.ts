import { Tiers } from '../types/enums';

const lootTable: LootTable = {
	[Tiers.LOW]: [
		{ content: ['5d6', 0, 0, 0, 0], range: { min: 1, max: 30 } },
		{ content: [0, '4d6', 0, 0, 0], range: { min: 1, max: 60 } },
		{ content: [0, 0, '3d6', 0, 0], range: { min: 61, max: 70 } },
		{ content: [0, 0, 0, '3d6', 0], range: { min: 71, max: 95 } },
		{ content: [0, 0, 0, 0, '1d6'], range: { min: 96, max: 100 } },
	],
	[Tiers.MEDIUM]: [
		{ content: ['4d6x100', 0, '1d6x10', 0, 0], range: { min: 1, max: 30 } },
		{ content: [0, '6d6x10', 0, '2d6x10', 0], range: { min: 1, max: 60 } },
		{ content: [0, 0, '3d6x10', '2d6x10', 0], range: { min: 61, max: 70 } },
		{ content: [0, 0, 0, '4d6x10', 0], range: { min: 71, max: 95 } },
		{ content: [0, 0, 0, '2d6x10', '3d6'], range: { min: 96, max: 100 } },
	],
	[Tiers.HIGH]: [
		{ content: [0, '4d6x100', 0, '1d6x100', 0], range: { min: 1, max: 20 } },
		{ content: [0, 0, '1d6x100', '1d6x100', 0], range: { min: 21, max: 35 } },
		{ content: [0, 0, 0, '2d6x100', '1d6x10'], range: { min: 36, max: 75 } },
		{ content: [0, 0, 0, '2d6x100', '2d6x10'], range: { min: 76, max: 100 } },
	],
	[Tiers.END]: [
		{ content: [0, 0, '2d6x1000', '8d6x100', 0], range: { min: 1, max: 15 } },
		{ content: [0, 0, 0, '1d6x1000', '1d6x100'], range: { min: 16, max: 55 } },
		{ content: [0, 0, 0, '1d6x1000', '2d6x100'], range: { min: 56, max: 100 } },
	],
};

export default lootTable;
