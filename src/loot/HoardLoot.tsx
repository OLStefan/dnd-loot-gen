import { useState } from 'react';
import styled from 'styled-components';
import hoardTable from '../data/hoard';
import {
	tableA as griffonA,
	tableB as griffonB,
	tableC as griffonC,
	tableD as griffonD,
	tableE as griffonE,
	tableF as griffonF,
	tableG as griffonG,
	tableH as griffonH,
	tableI as griffonI,
} from '../data/magicItemTables/griffonsSaddleBag';
import { tableA, tableB, tableC, tableD, tableE, tableF, tableG, tableH, tableI } from '../data/magicItemTables/wotc';
import roundToDecimals from '../util/roundToDecimals';
import toGold from '../util/toGold';
import CRSettings from './CRSettings';
import generateHoardLoot from './generateHoardLoot';

function LootByCR({ ...otherProps }: BaseProps) {
	const [settings, setSettings] = useState<CRSettings>({ low: 0, medium: 0, high: 0, end: 0 });
	const [{ coins, magicItems }, setLoot] = useState<HoardLoot>({ coins: [0, 0, 0, 0, 0], magicItems: [] });
	const [options, setOptions] = useState({ dmg: true, gsb: true });

	const magicItemTables = [
		[...(options.dmg ? tableA : []), ...(options.gsb ? griffonA : [])],
		[...(options.dmg ? tableB : []), ...(options.gsb ? griffonB : [])],
		[...(options.dmg ? tableC : []), ...(options.gsb ? griffonC : [])],
		[...(options.dmg ? tableD : []), ...(options.gsb ? griffonD : [])],
		[...(options.dmg ? tableE : []), ...(options.gsb ? griffonE : [])],
		[...(options.dmg ? tableF : []), ...(options.gsb ? griffonF : [])],
		[...(options.dmg ? tableG : []), ...(options.gsb ? griffonG : [])],
		[...(options.dmg ? tableH : []), ...(options.gsb ? griffonH : [])],
		[...(options.dmg ? tableI : []), ...(options.gsb ? griffonI : [])],
	];

	return (
		<div {...otherProps}>
			<CRSettings settings={settings} setSettings={setSettings} />

			<div className="magic-tables-options">
				<span>Magic Item Tables:</span>
				<input
					type="checkbox"
					name="dmg"
					checked={options.dmg}
					onChange={() => setOptions((options) => ({ ...options, dmg: !options.dmg }))}
				/>
				<label htmlFor="dmg">Dungeon Master{"'"}s Guide</label>

				<input
					type="checkbox"
					name="gsb"
					checked={options.gsb}
					onChange={() => setOptions((options) => ({ ...options, gsb: !options.gsb }))}
				/>
				<label htmlFor="gsb">Griffon{"'"}s Saddlebag</label>
			</div>

			<div className="loot-log">
				<span>{`${coins[0]} CP, ${coins[1]} SP, ${coins[2]} EP, ${coins[3]} GP, ${coins[4]} PP`}</span>
				<span>Worth: {roundToDecimals(toGold(coins), 2)} GP</span>
				<span className="left">Magic items:</span>
				<ul>
					{magicItems.map((item) => (
						<li key={item.name}>{`${item.name}${item.count > 1 ? ` (${item.count})` : ''}`}</li>
					))}
				</ul>
			</div>

			<div className="button-container">
				<button type="button" onClick={() => setLoot(generateHoardLoot(settings, hoardTable, magicItemTables))}>
					Generate Loot
				</button>
			</div>
		</div>
	);
}

export default styled(LootByCR)`
	display: grid;
	grid-template-columns: 50% 50%;

	.button-container {
		grid-column: 1/3;
		display: grid;
		padding: var(--spacing-large);

		button {
			height: 3em;
		}
	}

	.magic-tables-options {
		padding: var(--spacing-large);
		display: flex;
		grid-column: 1/3;
	}

	.loot-log {
		padding: var(--spacing-medium);
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-area: 1/2/3;

		.left {
			align-self: flex-start;
		}
	}
`;
