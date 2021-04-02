import { useState } from 'react';
import styled from 'styled-components';
import lootTable from '../data/individual';
import roundToDecimals from '../util/roundToDecimals';
import toGold from '../util/toGold';
import CRSettings from './CRSettings';
import generateLoot from './generateIndividualLoot';

function LootByCR({ ...otherProps }: BaseProps) {
	const [settings, setSettings] = useState<CRSettings>({ low: 0, medium: 0, high: 0, end: 0 });
	const [coins, setCoins] = useState<[number, number, number, number, number]>([0, 0, 0, 0, 0]);

	return (
		<div {...otherProps}>
			<CRSettings settings={settings} setSettings={setSettings} />
			<div className="loot-log">
				<span>{`${coins[0]} CP, ${coins[1]} SP, ${coins[2]} EP, ${coins[3]} GP, ${coins[4]} PP`}</span>
				<span>Worth: {roundToDecimals(toGold(coins), 2)} GP</span>
			</div>
			<div className="button-container">
				<button type="button" onClick={() => setCoins(generateLoot(settings, lootTable))}>
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
	}
`;
