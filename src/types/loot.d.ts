type CRSettings = Record<Tiers, number>;

type DiceString = `${number}d${number}`;

type MultipliedDiceString = `${DiceString}x${number}`;

type CoinString = DiceString | MultipliedDiceString | 0;

type CoinTuple = [CoinString, CoinString, CoinString, CoinString, CoinString];

interface TableEntry {
	range:
		| {
				min: number;
				max: number;
		  }
		| { exactly: number };
}

interface LootTableEntry extends TableEntry {
	content: CoinTuple;
}

type LootTable = Record<Tiers, LootTableEntry[]>;

interface MagicItemTableEntry extends TableEntry {
	tableIndex: number;
	numberOfRolls: DiceString | number;
}

interface HoardTableEntry {
	coins: CoinTuple;
	magicItems: MagicItemTableEntry[];
}

interface MagicItem extends TableEntry {
	name: string;
}

type MagicItemTable = MagicItem[];

type HoardTable = Record<Tiers, HoardTableEntry>;

type CoinLoot = [number, number, number, number, number];
interface MagicItemLoot {
	name: string;
	count: number;
}

interface HoardLoot {
	coins: CoinLoot;
	magicItems: MagicItemLoot[];
}
