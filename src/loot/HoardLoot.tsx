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
	const [coins, setCoins] = useState<[number, number, number, number, number]>([0, 0, 0, 0, 0]);
	const [magicItems, setMagicItems] = useState<MagicItemLoot[]>([]);

	return (
		<div {...otherProps}>
			<CRSettings settings={settings} setSettings={setSettings} />

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
				<button
					type="button"
					onClick={() => {
						const loot = generateHoardLoot(settings, hoardTable, [
							[...tableA, ...griffonA],
							[...tableB, ...griffonB],
							[...tableC, ...griffonC],
							[...tableD, ...griffonD],
							[...tableE, ...griffonE],
							[...tableF, ...griffonF],
							[...tableG, ...griffonG],
							[...tableH, ...griffonH],
							[...tableI, ...griffonI],
						]);
						setCoins(loot.coins);
						setMagicItems(loot.magicItems);
					}}>
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

	.loot-log {
		padding: var(--spacing-medium);
		display: flex;
		flex-direction: column;
		align-items: center;

		.left {
			align-self: flex-start;
		}
	}
`;
