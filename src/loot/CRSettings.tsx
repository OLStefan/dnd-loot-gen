import styled from 'styled-components';

interface Props extends BaseProps {
	settings: CRSettings;
	setSettings: (current: CRSettings) => void;
}

function CRSettings({ settings, setSettings, ...otherProps }: Props) {
	return (
		<div {...otherProps}>
			<div className="cr-setting">
				<label>CR 0-4</label>
				<input
					type="number"
					value={settings.low}
					onFocus={(event) => event.target.select()}
					onChange={(e) => setSettings({ ...settings, low: Math.max(0, parseInt(e.target.value)) })}
				/>
			</div>
			<div className="cr-setting">
				<label>CR 5-10</label>
				<input
					type="number"
					value={settings.medium}
					onFocus={(event) => event.target.select()}
					onChange={(e) => setSettings({ ...settings, medium: Math.max(0, parseInt(e.target.value)) })}
				/>
			</div>
			<div className="cr-setting">
				<label>CR 11-16</label>
				<input
					type="number"
					value={settings.high}
					onFocus={(event) => event.target.select()}
					onChange={(e) => setSettings({ ...settings, high: Math.max(0, parseInt(e.target.value)) })}
				/>
			</div>
			<div className="cr-setting">
				<label>CR 17+</label>
				<input
					type="number"
					value={settings.end}
					onFocus={(event) => event.target.select()}
					onChange={(e) => setSettings({ ...settings, end: Math.max(0, parseInt(e.target.value)) })}
				/>
			</div>
		</div>
	);
}

export default styled(CRSettings)`
	display: grid;
	grid-template-columns: 10em 1fr;

	.cr-setting {
		display: contents;

		label {
			padding: var(--spacing-large);
		}
	}
`;
