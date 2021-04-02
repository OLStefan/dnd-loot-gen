import { useState } from 'react';
import styled from 'styled-components';
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
import rollMagicItemTable from './rollMagicItemTable';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function RollMagicItemTable({ ...otherProps }: BaseProps) {
	const [settings, setSettings] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
	const [magicItems, setmagicItems] = useState<MagicItemLoot[]>([]);
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
			<div className="roll-settings">
				{magicItemTables.map((_, index) => (
					<div className="table-setting" key={index}>
						<label>Table {alphabet[index]}</label>
						<input
							type="number"
							value={settings[index]}
							onFocus={(event) => event.target.select()}
							onChange={(e) =>
								setSettings((old) => {
									const newSettings = [...old];
									let newValue = parseInt(e.target.value);
									if (Number.isNaN(newValue)) {
										newValue = 0;
									}
									newSettings[index] = Math.max(newValue, 0);
									return newSettings;
								})
							}
						/>
					</div>
				))}
			</div>

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
				<span className="left">Magic items:</span>
				<ul>
					{magicItems.map((item) => (
						<li key={item.name}>{`${item.name}${item.count > 1 ? ` (${item.count})` : ''}`}</li>
					))}
				</ul>
			</div>

			<div className="button-container">
				<button type="button" onClick={() => setmagicItems(rollMagicItemTable(settings, magicItemTables))}>
					Generate Loot
				</button>
			</div>
		</div>
	);
}

export default styled(RollMagicItemTable)`
	display: grid;
	grid-template-columns: 50% 50%;

	.roll-settings {
		display: grid;
		grid-template-columns: 10em 1fr;

		.table-setting {
			display: contents;

			label {
				padding: var(--spacing-large);
			}
		}
	}

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
