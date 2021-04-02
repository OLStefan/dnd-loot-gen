import { useState } from "react";
import styled from "styled-components";

interface Props extends BaseProps {
  generateLoot: (setting: CRSetting) => string;
}

function LootByCR({ generateLoot, ...otherProps }: Props) {
  const [state, setState] = useState<CRSetting>({ low: 0, medium: 0, high: 0, end: 0 });
  const [loot, setLoot] = useState("");
  console.log(state.low);

  return (
    <div {...otherProps}>
      <div className="cr-setting-container">
        <div className="cr-setting">
          <label>CR 0-4</label>
          <input
            type="number"
            value={state.low}
            onFocus={(event) => event.target.select()}
            onChange={(e) =>
              setState((current) => {
                console.log(parseInt(e.target.value));
                return { ...current, low: Math.max(0, parseInt(e.target.value)) };
              })
            }
          />
        </div>
        <div className="cr-setting">
          <label>CR 5-10</label>
          <input
            type="number"
            value={state.medium}
            onFocus={(event) => event.target.select()}
            onChange={(e) => setState((current) => ({ ...current, medium: Math.max(0, parseInt(e.target.value)) }))}
          />
        </div>
        <div className="cr-setting">
          <label>CR 11-16</label>
          <input
            type="number"
            value={state.high}
            onFocus={(event) => event.target.select()}
            onChange={(e) => setState((current) => ({ ...current, high: Math.max(0, parseInt(e.target.value)) }))}
          />
        </div>
        <div className="cr-setting">
          <label>CR 17+</label>
          <input
            type="number"
            value={state.end}
            onFocus={(event) => event.target.select()}
            onChange={(e) => setState((current) => ({ ...current, end: Math.max(0, parseInt(e.target.value)) }))}
          />
        </div>

        <div className="button-container">
          <button type="button" onClick={() => setLoot(generateLoot(state))}>
            Generate Loot
          </button>
        </div>
      </div>

      <div className="loot-log">{loot}</div>
    </div>
  );
}

export default styled(LootByCR)`
  display: grid;
  grid-template-columns: 50% 50%;

  .cr-setting-container {
    display: grid;
    grid-template-columns: 10em 1fr;

    .cr-setting {
      display: contents;

      label {
        padding: var(--spacing-large);
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
  }

  .loot-log {
    padding: var(--spacing-medium);
  }
`;
