export default function <T extends TableEntry>(entries: T[], roll: number) {
	return entries.filter(({ range }) => {
		const exactMatch = 'exactly' in range && range.exactly === roll;
		const rangeMatch = 'min' in range && range.min <= roll && roll <= range.max;
		return exactMatch || rangeMatch;
	});
}
