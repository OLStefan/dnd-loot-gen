import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';
import IndividualLoot from './loot/IndividualLoot';
import Statiscs from './loot/Statiscs';

function App({ ...otherProps }: BaseProps) {
	return (
		<div {...otherProps}>
			<Tabs>
				<TabList>
					<Tab>Individual</Tab>
					<Tab>Hoard</Tab>
					<Tab>Statistics</Tab>
				</TabList>

				<TabPanel>
					<IndividualLoot className="content" />
				</TabPanel>
				<TabPanel>
					<IndividualLoot className="content" />
				</TabPanel>
				<TabPanel>
					<Statiscs className="content" />
				</TabPanel>
			</Tabs>
		</div>
	);
}

export default styled(App)`
	height: 100%;
	width: 100%;
	background-color: var(--background);
	color: var(--text-on-background);
`;
