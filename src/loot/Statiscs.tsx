import styled from 'styled-components';
import individualTable from '../data/individual';
import originalIndividualTable from '../data/originalIndividual';
import hoardTable from '../data/hoard';
import originalHoardTable from '../data/originalHoard';
import { Tiers } from '../types/enums';
import roundToDecimals from '../util/roundToDecimals';
import generateHoardLoot from './generateHoardLoot';
import generateIndividual from './generateIndividualLoot';
import toGold from '../util/toGold';

const REPITITIONS = 1000000;
const baseSettings: CRSettings = { [Tiers.LOW]: 0, [Tiers.MEDIUM]: 0, [Tiers.HIGH]: 0, [Tiers.END]: 0 };

function LootByCR({ ...otherProps }: BaseProps) {
	return (
		<div {...otherProps}>
			<div className="individual">
				<span>Indivual</span>
				{Object.values(Tiers).map((tier) => {
					const coins = generateIndividual({ ...baseSettings, [tier]: REPITITIONS }, individualTable);
					return (
						<div key={tier}>
							<span>{tier}: </span>
							<span>
								{`${roundToDecimals(coins[0] / REPITITIONS, 2)} CP, ${roundToDecimals(
									coins[1] / REPITITIONS,
									2,
								)} SP, ${roundToDecimals(coins[2] / REPITITIONS, 2)} EP, ${roundToDecimals(
									coins[3] / REPITITIONS,
									2,
								)} GP, ${roundToDecimals(coins[4] / REPITITIONS, 2)} PP, Total: ${roundToDecimals(
									toGold(coins) / REPITITIONS,
									2,
								)}`}
							</span>
						</div>
					);
				})}
			</div>
			<div className="orig-individual">
				<span>Original</span>
				{Object.values(Tiers).map((tier) => {
					const coins = generateIndividual({ ...baseSettings, [tier]: REPITITIONS }, originalIndividualTable);
					return (
						<div key={tier}>
							<span>{tier}: </span>
							<span>
								{`${roundToDecimals(coins[0] / REPITITIONS, 2)} CP, ${roundToDecimals(
									coins[1] / REPITITIONS,
									2,
								)} SP, ${roundToDecimals(coins[2] / REPITITIONS, 2)} EP, ${roundToDecimals(
									coins[3] / REPITITIONS,
									2,
								)} GP, ${roundToDecimals(coins[4] / REPITITIONS, 2)} PP, Total: ${roundToDecimals(
									toGold(coins) / REPITITIONS,
									2,
								)}`}
							</span>
						</div>
					);
				})}
			</div>
			<div className="hoard-coins">
				<span>Hoard</span>
				{Object.values(Tiers).map((tier) => {
					const { coins } = generateHoardLoot({ ...baseSettings, [tier]: REPITITIONS }, hoardTable, []);
					return (
						<div key={tier}>
							<span>{tier}: </span>
							<span>
								{`${roundToDecimals(coins[0] / REPITITIONS, 2)} CP, ${roundToDecimals(
									coins[1] / REPITITIONS,
									2,
								)} SP, ${roundToDecimals(coins[2] / REPITITIONS, 2)} EP, ${roundToDecimals(
									coins[3] / REPITITIONS,
									2,
								)} GP, ${roundToDecimals(coins[4] / REPITITIONS, 2)} PP, Total: ${roundToDecimals(
									toGold(coins) / REPITITIONS,
									2,
								)}`}
							</span>
						</div>
					);
				})}
			</div>
			<div className="orig-hoard-coins">
				<span>Original Hoard</span>
				{Object.values(Tiers).map((tier) => {
					const { coins } = generateHoardLoot({ ...baseSettings, [tier]: REPITITIONS }, originalHoardTable, []);
					return (
						<div key={tier}>
							<span>{tier}: </span>
							<span>
								{`${roundToDecimals(coins[0] / REPITITIONS, 2)} CP, ${roundToDecimals(
									coins[1] / REPITITIONS,
									2,
								)} SP, ${roundToDecimals(coins[2] / REPITITIONS, 2)} EP, ${roundToDecimals(
									coins[3] / REPITITIONS,
									2,
								)} GP, ${roundToDecimals(coins[4] / REPITITIONS, 2)} PP, Total: ${roundToDecimals(
									toGold(coins) / REPITITIONS,
									2,
								)}`}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default styled(LootByCR)`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;
