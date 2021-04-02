const table: MagicItemTable = [
	{ name: 'Weapon, +2', range: { min: 1, max: 11 } },
	{ name: 'Figurine of wondrous power (Bronze griffon)', range: { min: 12, max: 14 } },
	{ name: 'Figurine of wondrous power (Ebony fly)', range: { min: 12, max: 14 } },
	{ name: 'Figurine of wondrous power (Golden lions)', range: { min: 12, max: 14 } },
	{ name: 'Figurine of wondrous power (Ivory goats)', range: { min: 12, max: 14 } },
	{ name: 'Figurine of wondrous power (Marble elephant)', range: { min: 12, max: 14 } },
	{ name: 'Figurine of wondrous power (Onyx dog)', range: { min: 12, max: 14 } },
	{ name: 'Figurine of wondrous power (Onyx dog)', range: { min: 12, max: 14 } },
	{ name: 'Figurine of wondrous power (Serpentine owl)', range: { min: 12, max: 14 } },
	{ name: 'Adamantine armor (breastplate)', range: { exactly: 15 } },
	{ name: 'Adamantine armor (breastplate)', range: { exactly: 15 } },
	{ name: 'Adamantine armor (splint)', range: { exactly: 16 } },
	{ name: 'Amulet of health', range: { exactly: 17 } },
	{ name: 'Armor of vulnerability', range: { exactly: 18 } },
	{ name: 'Arrow-catching shield', range: { exactly: 19 } },
	{ name: 'Belt of dwarvenkind', range: { exactly: 20 } },
	{ name: 'Belt of hill giant st rength', range: { exactly: 21 } },
	{ name: 'Berserker axe', range: { exactly: 22 } },
	{ name: 'Boots of levitation', range: { exactly: 23 } },
	{ name: 'Boots of speed', range: { exactly: 24 } },
	{ name: 'Bowl of commanding water elementals', range: { exactly: 25 } },
	{ name: 'Bracers of defense', range: { exactly: 26 } },
	{ name: 'Brazier of commanding fire elementals', range: { exactly: 27 } },
	{ name: 'Cape of the mountebank', range: { exactly: 28 } },
	{ name: 'Censer of controlling air elementals', range: { exactly: 29 } },
	{ name: 'Armor, +1 chain mail', range: { exactly: 30 } },
	{ name: 'Armor of resistance (chain mail)', range: { exactly: 31 } },
	{ name: 'Armor, +1 chain shirt', range: { exactly: 32 } },
	{ name: 'Armor of resistance (chain shirt)', range: { exactly: 33 } },
	{ name: 'Cloak of displacement', range: { exactly: 34 } },
	{ name: 'Cloak of the bat', range: { exactly: 35 } },
	{ name: 'Cube afforce', range: { exactly: 36 } },
	{ name: "Daern's instant fortress", range: { exactly: 37 } },
	{ name: 'Dagger of venom', range: { exactly: 38 } },
	{ name: 'Dimensional shackles', range: { exactly: 39 } },
	{ name: 'Dragon slayer', range: { exactly: 40 } },
	{ name: 'Elven chain', range: { exactly: 41 } },
	{ name: 'Flame tongue', range: { exactly: 42 } },
	{ name: 'Gem of seeing', range: { exactly: 43 } },
	{ name: 'Giant slayer', range: { exactly: 44 } },
	{ name: 'Clamoured studded leather', range: { exactly: 45 } },
	{ name: 'Helm of teleportation', range: { exactly: 46 } },
	{ name: 'Horn of blasting', range: { exactly: 47 } },
	{ name: 'Horn of Valhalla (silver or brass)', range: { exactly: 48 } },
	{ name: 'Instrument of the bards (Canaith mandolin)', range: { exactly: 49 } },
	{ name: 'Instrument of the bards (Cli lyre)', range: { exactly: 50 } },
	{ name: 'Ioun stone (awareness)', range: { exactly: 51 } },
	{ name: 'Ioun stone (protection)', range: { exactly: 52 } },
	{ name: 'Ioun stone (reserve)', range: { exactly: 53 } },
	{ name: 'loun stone (sustenance)', range: { exactly: 54 } },
	{ name: 'Iron bands of Bilarro', range: { exactly: 55 } },
	{ name: 'Armor, +1 leather', range: { exactly: 56 } },
	{ name: 'Armor of resistance (leather)', range: { exactly: 57 } },
	{ name: 'Mace of disruption', range: { exactly: 58 } },
	{ name: 'Mace of smiting', range: { exactly: 59 } },
	{ name: 'Mace of terror', range: { exactly: 60 } },
	{ name: 'Mantle of spell resistance', range: { exactly: 61 } },
	{ name: 'Necklace of prayer beads', range: { exactly: 62 } },
	{ name: 'Peri apt of proof against poison', range: { exactly: 63 } },
	{ name: 'Ring of animal influence', range: { exactly: 64 } },
	{ name: 'Ring of evasion', range: { exactly: 65 } },
	{ name: 'Ring of feather falling', range: { exactly: 66 } },
	{ name: 'Ring of free action', range: { exactly: 67 } },
	{ name: 'Ring of protection', range: { exactly: 68 } },
	{ name: 'Ring of resistance', range: { exactly: 69 } },
	{ name: 'Ring of spell storing', range: { exactly: 70 } },
	{ name: 'Ring of the ram', range: { exactly: 71 } },
	{ name: 'Ring of X-ray vision', range: { exactly: 72 } },
	{ name: 'Robe of eyes', range: { exactly: 73 } },
	{ name: 'Rod of rulership', range: { exactly: 74 } },
	{ name: 'Rod of the pact keeper, +2', range: { exactly: 75 } },
	{ name: 'Rope of entanglement', range: { exactly: 76 } },
	{ name: 'Armor, +1 scale mail', range: { exactly: 77 } },
	{ name: 'Armor of resistance (scale mail)', range: { exactly: 78 } },
	{ name: 'Shield, +2', range: { exactly: 79 } },
	{ name: 'Shield of missile attraction', range: { exactly: 80 } },
	{ name: 'Staff of charming', range: { exactly: 81 } },
	{ name: 'Staff of healing', range: { exactly: 82 } },
	{ name: 'Staff of swarming insects', range: { exactly: 83 } },
	{ name: 'Staff of the woodlands', range: { exactly: 84 } },
	{ name: 'Staff of withering', range: { exactly: 85 } },
	{ name: 'Stone of controlling earth elementals', range: { exactly: 86 } },
	{ name: 'Sun blade', range: { exactly: 87 } },
	{ name: 'Sword of life stealing', range: { exactly: 88 } },
	{ name: 'Sword of wounding', range: { exactly: 89 } },
	{ name: 'Tentacle rod', range: { exactly: 90 } },
	{ name: 'Vicious weapon', range: { exactly: 91 } },
	{ name: 'Wand of binding', range: { exactly: 92 } },
	{ name: 'Wand of enemy detection', range: { exactly: 93 } },
	{ name: 'Wand of fear', range: { exactly: 94 } },
	{ name: 'Wand of fireballs', range: { exactly: 95 } },
	{ name: 'Wand of lightning bolts', range: { exactly: 96 } },
	{ name: 'Wand of paralys is', range: { exactly: 97 } },
	{ name: 'Wand of the war mage, +2', range: { exactly: 98 } },
	{ name: 'Wand of wonder', range: { exactly: 99 } },
	{ name: 'Wings of flying', range: { exactly: 100 } },
];

export default table;
