import enums = require('../enums');
export = enums;
export as namespace enums;

declare global {
	type Tiers = enums.Tiers;
}
