import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import generateIndividual from "./loot/individual/generateLoot";
import generateHoard from "./loot/hoard/generateLoot";
import LootByCR from "./loot/LootByCR";

function App({ ...otherProps }: BaseProps) {
  return (
    <div {...otherProps}>
      <Tabs>
        <TabList>
          <Tab>Individual</Tab>
          <Tab>Hoard</Tab>
        </TabList>

        <TabPanel>
          <LootByCR className="content" generateLoot={generateIndividual} />
        </TabPanel>
        <TabPanel>
          <LootByCR className="content" generateLoot={generateHoard} />
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
