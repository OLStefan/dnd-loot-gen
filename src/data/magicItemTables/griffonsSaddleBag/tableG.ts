const table: MagicItemTable = [
	// Option 1
	{ name: 'Acidlight Arrow', range: { min: 1, max: 5 } },
	{ name: 'Eye of Dendallen', range: { min: 6, max: 8 } },
	{ name: 'Greaves of Dendallen', range: { min: 9, max: 11 } },
	{ name: 'Aurum and Argentum', range: { min: 12, max: 14 } },
	{ name: 'Avian Circlet', range: { min: 15, max: 17 } },
	{ name: 'Basco’s Handy Bangle', range: { min: 18, max: 20 } },
	{ name: 'Basilisk Dagger', range: { min: 21, max: 23 } },
	{ name: 'Battlebrew Maul', range: { min: 24, max: 26 } },
	{ name: 'Bow of Mind Thievery', range: { min: 27, max: 29 } },
	{ name: 'Brooch of Many Sizes', range: { min: 30, max: 32 } },
	{ name: 'Cinnabar Rapier', range: { min: 33, max: 35 } },
	{ name: 'Dead Ringer', range: { min: 36, max: 38 } },
	{ name: 'Dragon Edge Weapons, +1', range: { min: 39, max: 41 } },
	{ name: 'Dragon Turtle Shield', range: { min: 42, max: 44 } },
	{ name: 'Enchantment Breaker', range: { min: 45, max: 47 } },
	{ name: 'Ferryman’s Take', range: { min: 48, max: 50 } },
	{ name: 'Festerwood Claymore', range: { min: 21, max: 53 } },
	{ name: 'Galvanic Steelsnare', range: { min: 24, max: 56 } },
	{ name: 'Gibberbox', range: { min: 27, max: 59 } },
	{ name: 'Lightning Pylons', range: { min: 60, max: 62 } },
	{ name: 'Aegis of Radiance', range: { exactly: 63 } },
	{ name: 'Band of Mirrored Essence', range: { exactly: 64 } },
	{ name: 'Belt of the Raid Leader', range: { exactly: 65 } },
	{ name: 'Boreal Pendant', range: { exactly: 66 } },
	{ name: 'Breastplate of the Morning Light', range: { exactly: 67 } },
	{ name: 'Celestial Circlet', range: { exactly: 68 } },
	{ name: 'Cloak of the Boundless Spirit', range: { exactly: 69 } },
	{ name: 'Clockwork Healerbee', range: { exactly: 70 } },
	{ name: 'Coldsnap', range: { exactly: 71 } },
	{ name: 'Couatl Herald’s Fang', range: { exactly: 72 } },
	{ name: 'Couatl Herald’s Lash', range: { exactly: 73 } },
	{ name: 'Couatl Herald’s Radiance', range: { exactly: 74 } },
	{ name: 'Couatl Herald’s Reach', range: { exactly: 75 } },
	{ name: 'Couatl Herald’s Scales', range: { exactly: 76 } },
	{ name: 'Death Knell', range: { exactly: 77 } },
	{ name: 'Direstone Dwarven Pick', range: { exactly: 78 } },
	{ name: 'Dragonkin Weapon, +1', range: { exactly: 79 } },
	{ name: 'Druidic Throwing Club', range: { exactly: 80 } },
	{ name: 'Festerwood Vizard', range: { exactly: 81 } },
	{ name: 'Fife of Dragonsong', range: { exactly: 82 } },
	{ name: 'Fire Dervish Cloak', range: { exactly: 83 } },
	{ name: 'Fire Fire!', range: { exactly: 84 } },
	{ name: 'Fire Wand of the Unbroken Circle', range: { exactly: 85 } },
	{ name: 'Force Gauntlet', range: { exactly: 86 } },
	{ name: 'Frost Giant Fork', range: { exactly: 87 } },
	{ name: 'Glove of the Aegis', range: { exactly: 88 } },
	{ name: 'Glove of the Grim Fandango', range: { exactly: 89 } },
	{ name: 'Halberd of the Peacock', range: { exactly: 90 } },
	{ name: 'Helm of Heroes', range: { exactly: 91 } },
	{ name: 'Helmsman’s Shelter', range: { exactly: 92 } },
	{ name: 'Ironleaf Maul of Entanglement', range: { exactly: 93 } },
	{ name: 'Killskull Longbow of Dread', range: { exactly: 94 } },
	{ name: 'Knight’s Standard of Valor', range: { exactly: 95 } },
	{ name: 'Knight’s Standard of Vigor', range: { exactly: 96 } },
	{ name: 'Knight’s Standard of Virtue', range: { exactly: 97 } },
	{ name: 'Leeching Quarterstaff', range: { exactly: 98 } },
	{ name: 'Mageplate Cap', range: { exactly: 99 } },
	{ name: 'Magma War Pick', range: { exactly: 100 } },

	// Option 2
	{ name: 'Phoenix Arrow', range: { min: 1, max: 4 } },
	{ name: 'Mantle of the Pack Lord', range: { min: 5, max: 6 } },
	{ name: 'Monocle of Clarity', range: { min: 7, max: 8 } },
	{ name: 'Moonswaddled Armor', range: { min: 9, max: 10 } },
	{ name: 'Plaguebane Mask', range: { min: 11, max: 12 } },
	{ name: 'Quickdraw', range: { min: 13, max: 14 } },
	{ name: 'Retaliating Bloom Shield', range: { min: 15, max: 16 } },
	{ name: 'Rings of Fire, Ice, Stone, and Wind (Fire)', range: { min: 17, max: 18 } },
	{ name: 'Rings of Fire, Ice, Stone, and Wind (Stone)', range: { min: 19, max: 20 } },
	{ name: 'Shadowshawl', range: { min: 21, max: 22 } },
	{ name: 'Shadowsmoke Dragon Pipe', range: { min: 23, max: 24 } },
	{ name: 'Sheer Cold', range: { min: 25, max: 26 } },
	{ name: 'Signet Rings of Blindness, Deafness, and Silence', range: { min: 27, max: 28 } },
	{ name: 'Spiderbite Daggers', range: { min: 29, max: 30 } },
	{ name: 'Splintershot', range: { min: 31, max: 32 } },
	{ name: 'Starmetal Ring', range: { min: 33, max: 34 } },
	{ name: 'Storm Sickle', range: { min: 35, max: 36 } },
	{ name: 'Stormstruck Staff', range: { min: 37, max: 38 } },
	{ name: 'Timeshifter’s Mantle', range: { min: 39, max: 40 } },
	{ name: 'Torrent Taiaha', range: { min: 41, max: 42 } },
	{ name: 'Trident of the Hydra', range: { min: 43, max: 44 } },
	{ name: 'Volt Gauntlets', range: { min: 45, max: 46 } },
	{ name: 'Wavebender’s Leiomano', range: { min: 47, max: 48 } },
	{ name: 'Wisplight Lantern', range: { min: 49, max: 50 } },
	{ name: 'Necrolace', range: { min: 51, max: 52 } },
	{ name: 'Ring of Eldritch Ire', range: { min: 53, max: 54 } },
	{ name: 'Shared Burden', range: { min: 55, max: 56 } },
	{ name: 'Spirit Pike', range: { min: 55, max: 58 } },
	{ name: 'Staff of the Magpie', range: { min: 59, max: 60 } },
	{ name: 'Staff of the Mirage', range: { min: 61, max: 62 } },
	{ name: 'Staff of the Reverent Warrior', range: { min: 63, max: 64 } },
	{ name: 'Sword of Resonance', range: { min: 65, max: 66 } },
	{ name: 'Wand of Whispers', range: { min: 67, max: 68 } },
	{ name: 'Warmind Wand', range: { min: 69, max: 70 } },
	{ name: 'Wooden Chain of the Unbroken Circle', range: { min: 1, max: 72 } },
	{ name: 'Zafu of the Wandering Mind', range: { min: 73, max: 74 } },
	{ name: "Master Machinist's Marvelous Mallet", range: { exactly: 75 } },
	{ name: 'Mirrorlight Edge', range: { exactly: 76 } },
	{ name: 'Pearl of Wisdom Quiver', range: { exactly: 77 } },
	{ name: 'Periapt of Reflection', range: { exactly: 78 } },
	{ name: 'Phase Axe', range: { exactly: 79 } },
	{ name: 'Quake Hammer', range: { exactly: 80 } },
	{ name: 'Radiant Defender', range: { exactly: 81 } },
	{ name: 'Reap and Sew', range: { exactly: 82 } },
	{ name: 'Ring of Anchoring', range: { exactly: 83 } },
	{ name: 'Rocborne Rod', range: { exactly: 84 } },
	{ name: 'Sandstorm Dancer', range: { exactly: 85 } },
	{ name: 'Scholar’s Cap, +2', range: { exactly: 86 } },
	{ name: 'Screaming Longbow', range: { exactly: 87 } },
	{ name: 'Sharkrazor Mantle', range: { exactly: 88 } },
	{ name: 'Sling of the Tiny Giant', range: { exactly: 89 } },
	{ name: 'Staff of the Mustang', range: { exactly: 90 } },
	{ name: 'Starbreaker', range: { exactly: 91 } },
	{ name: 'Starmetal Striker', range: { exactly: 92 } },
	{ name: 'Thunderous Flail', range: { exactly: 93 } },
	{ name: 'Vancian Helm', range: { exactly: 94 } },
	{ name: 'Vigilus', range: { exactly: 95 } },
	{ name: 'Volcanic Boots', range: { exactly: 96 } },
	{ name: 'Voltedge', range: { exactly: 97 } },
	{ name: 'Weapon of Mooring', range: { exactly: 98 } },
	{ name: 'Windswept Wyvernplate', range: { exactly: 99 } },
	{ name: 'Wyvernwing', range: { exactly: 100 } },
];

export default table;