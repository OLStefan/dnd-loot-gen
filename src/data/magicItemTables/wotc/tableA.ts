const table: MagicItemTable = [
	{ name: 'Potion of healing', range: { min: 1, max: 50 } },
	{ name: 'Spell scroll (cantrip)', range: { min: 51, max: 60 } },
	{ name: 'Potion of climbing', range: { min: 61, max: 70 } },
	{ name: 'Spell scroll (1st level)', range: { min: 71, max: 90 } },
	{ name: 'Spell scroll (2nd level)', range: { min: 91, max: 94 } },
	{ name: 'Potion of greater healing', range: { min: 95, max: 98 } },
	{ name: 'Bag of holding', range: { exactly: 99 } },
	{ name: 'Driftglobe', range: { exactly: 100 } },
];

export default table;
