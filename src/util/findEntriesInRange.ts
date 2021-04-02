export default function <T extends TableEntry>(entries: T[], roll: number) {
	return entries.filter(({ range }) => range.min <= roll && roll <= range.max);
}
