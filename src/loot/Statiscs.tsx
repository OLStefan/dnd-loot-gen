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
import { useEffect, useState } from 'react';

const REPITITIONS = 250000;
const baseSettings: CRSettings = { [Tiers.LOW]: 0, [Tiers.MEDIUM]: 0, [Tiers.HIGH]: 0, [Tiers.END]: 0 };

function Statistics({ ...otherProps }: BaseProps) {
	const [allCoins, setAllCoins] = useState<{
		origIndi?: Record<Tiers, CoinLoot>;
		indi?: Record<Tiers, CoinLoot>;
		origHoard?: Record<Tiers, CoinLoot>;
		hoard?: Record<Tiers, CoinLoot>;
	}>({});

	useEffect(() => {
		async function getIndi() {
			setAllCoins((allCoins) => ({
				...allCoins,
				indi: {
					[Tiers.LOW]: generateIndividual({ ...baseSettings, [Tiers.LOW]: REPITITIONS }, individualTable),
					[Tiers.MEDIUM]: generateIndividual({ ...baseSettings, [Tiers.MEDIUM]: REPITITIONS }, individualTable),
					[Tiers.HIGH]: generateIndividual({ ...baseSettings, [Tiers.HIGH]: REPITITIONS }, individualTable),
					[Tiers.END]: generateIndividual({ ...baseSettings, [Tiers.END]: REPITITIONS }, individualTable),
				},
			}));
		}
		async function getOrigIndi() {
			setAllCoins((allCoins) => ({
				...allCoins,
				origIndi: {
					[Tiers.LOW]: generateIndividual({ ...baseSettings, [Tiers.LOW]: REPITITIONS }, originalIndividualTable),
					[Tiers.MEDIUM]: generateIndividual({ ...baseSettings, [Tiers.MEDIUM]: REPITITIONS }, originalIndividualTable),
					[Tiers.HIGH]: generateIndividual({ ...baseSettings, [Tiers.HIGH]: REPITITIONS }, originalIndividualTable),
					[Tiers.END]: generateIndividual({ ...baseSettings, [Tiers.END]: REPITITIONS }, originalIndividualTable),
				},
			}));
		}
		async function getHoard() {
			setAllCoins((allCoins) => ({
				...allCoins,
				hoard: {
					[Tiers.LOW]: generateHoardLoot({ ...baseSettings, [Tiers.LOW]: REPITITIONS }, hoardTable, []).coins,
					[Tiers.MEDIUM]: generateHoardLoot({ ...baseSettings, [Tiers.MEDIUM]: REPITITIONS }, hoardTable, []).coins,
					[Tiers.HIGH]: generateHoardLoot({ ...baseSettings, [Tiers.HIGH]: REPITITIONS }, hoardTable, []).coins,
					[Tiers.END]: generateHoardLoot({ ...baseSettings, [Tiers.END]: REPITITIONS }, hoardTable, []).coins,
				},
			}));
		}
		async function getOrigHoard() {
			setAllCoins((allCoins) => ({
				...allCoins,
				origHoard: {
					[Tiers.LOW]: generateHoardLoot({ ...baseSettings, [Tiers.LOW]: REPITITIONS }, originalHoardTable, []).coins,
					[Tiers.MEDIUM]: generateHoardLoot({ ...baseSettings, [Tiers.MEDIUM]: REPITITIONS }, originalHoardTable, [])
						.coins,
					[Tiers.HIGH]: generateHoardLoot({ ...baseSettings, [Tiers.HIGH]: REPITITIONS }, originalHoardTable, []).coins,
					[Tiers.END]: generateHoardLoot({ ...baseSettings, [Tiers.END]: REPITITIONS }, originalHoardTable, []).coins,
				},
			}));
		}

		getIndi();
		getOrigIndi();
		getHoard();
		getOrigHoard();
	}, []);

	return (
		<div {...otherProps}>
			<div className="individual">
				<span>Indivual</span>
				{Object.values(Tiers).map((tier) => {
					const coins = allCoins.indi ? allCoins.indi[tier] : undefined;
					if (!coins) {
						return null;
					}
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
					// const coins = generateIndividual({ ...baseSettings, [tier]: REPITITIONS }, originalIndividualTable);
					const coins = allCoins.origIndi ? allCoins.origIndi[tier] : undefined;
					if (!coins) {
						return null;
					}
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
					// const { coins } = generateHoardLoot({ ...baseSettings, [tier]: REPITITIONS }, hoardTable, []);
					const coins = allCoins.hoard ? allCoins.hoard[tier] : undefined;
					if (!coins) {
						return null;
					}
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
					// const { coins } = generateHoardLoot({ ...baseSettings, [tier]: REPITITIONS }, originalHoardTable, []);
					const coins = allCoins.origHoard ? allCoins.origHoard[tier] : undefined;
					if (!coins) {
						return null;
					}
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

export default styled(Statistics)`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;
