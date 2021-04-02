import { Tiers } from '../types/enums';

const lootTable: HoardTable = {
	[Tiers.LOW]: { coins: ['6d6x100', '3d6x100', 0, '2d6x10', 0], magicItems: [] },
	[Tiers.MEDIUM]: { coins: ['2d6x100', '2d6x1000', 0, '6d6x100', '3d6x10'], magicItems: [] },
	[Tiers.HIGH]: { coins: [0, 0, 0, '4d6x1000', '5d6x100'], magicItems: [] },
	[Tiers.END]: { coins: [0, 0, 0, '12d6x1000', '8d6x1000'], magicItems: [] },
};

export default lootTable;
