import Color from 'color';
import type { FullVariant } from 'themer';
import bestForegroundFor from './bestForegroundFor';
import { source } from 'common-tags';

export type ExtendedVariant = FullVariant & {
	accent5Shade7: string;
	accent5Shade0: string;
	shade6Shade7: string;
	fgShade0: string;
	fgShade1: string;
	fgShade2: string;
	fgShade3: string;
	fgShade4: string;
	fgShade5: string;
	fgShade6: string;
	fgShade7: string;
	fgAccent0: string;
	fgAccent1: string;
	fgAccent2: string;
	fgAccent3: string;
	fgAccent4: string;
	fgAccent5: string;
	fgAccent6: string;
	fgAccent7: string;
};

function toExtendedVariant(variant: FullVariant): ExtendedVariant {
	return {
		...variant,
		accent5Shade7: Color(variant.accent5).mix(Color(variant.shade7), 0.25).hex(),
		accent5Shade0: Color(variant.accent5).mix(Color(variant.shade0), 0.25).hex(),
		shade6Shade7: Color(variant.shade6).mix(Color(variant.shade7)).hex(),
		fgShade0: variant.shade7,
		fgShade1: bestForegroundFor(variant.shade1, variant.shade0, variant.shade7),
		fgShade2: bestForegroundFor(variant.shade2, variant.shade0, variant.shade7),
		fgShade3: bestForegroundFor(variant.shade3, variant.shade0, variant.shade7),
		fgShade4: bestForegroundFor(variant.shade4, variant.shade0, variant.shade7),
		fgShade5: bestForegroundFor(variant.shade5, variant.shade0, variant.shade7),
		fgShade6: bestForegroundFor(variant.shade6, variant.shade0, variant.shade7),
		fgShade7: variant.shade0,
		fgAccent0: bestForegroundFor(variant.accent0, variant.shade0, variant.shade7),
		fgAccent1: bestForegroundFor(variant.accent1, variant.shade0, variant.shade7),
		fgAccent2: bestForegroundFor(variant.accent2, variant.shade0, variant.shade7),
		fgAccent3: bestForegroundFor(variant.accent3, variant.shade0, variant.shade7),
		fgAccent4: bestForegroundFor(variant.accent4, variant.shade0, variant.shade7),
		fgAccent5: bestForegroundFor(variant.accent5, variant.shade0, variant.shade7),
		fgAccent6: bestForegroundFor(variant.accent6, variant.shade0, variant.shade7),
		fgAccent7: bestForegroundFor(variant.accent7, variant.shade0, variant.shade7)
	};
}

export function toCustomProperties(variant: FullVariant): string {
	const extended = toExtendedVariant(variant);
	return source`
    --shade0: ${extended.shade0};
    --shade1: ${extended.shade1};
    --shade2: ${extended.shade2};
    --shade3: ${extended.shade3};
    --shade4: ${extended.shade4};
    --shade5: ${extended.shade5};
    --shade6: ${extended.shade6};
    --shade7: ${extended.shade7};
    --accent0: ${extended.accent0};
    --accent1: ${extended.accent1};
    --accent2: ${extended.accent2};
    --accent3: ${extended.accent3};
    --accent4: ${extended.accent4};
    --accent5: ${extended.accent5};
    --accent6: ${extended.accent6};
    --accent7: ${extended.accent7};
    --accent5-shade7: ${extended.accent5Shade7};
    --accent5-shade0: ${extended.accent5Shade0};
    --shade6-shade7: ${extended.shade6Shade7};
    --fg-shade0: ${extended.fgShade0};
    --fg-shade1: ${extended.fgShade1};
    --fg-shade2: ${extended.fgShade2};
    --fg-shade3: ${extended.fgShade3};
    --fg-shade4: ${extended.fgShade4};
    --fg-shade5: ${extended.fgShade5};
    --fg-shade6: ${extended.fgShade6};
    --fg-shade7: ${extended.fgShade7};
    --fg-accent0: ${extended.fgAccent0};
    --fg-accent1: ${extended.fgAccent1};
    --fg-accent2: ${extended.fgAccent2};
    --fg-accent3: ${extended.fgAccent3};
    --fg-accent4: ${extended.fgAccent4};
    --fg-accent5: ${extended.fgAccent5};
    --fg-accent6: ${extended.fgAccent6};
    --fg-accent7: ${extended.fgAccent7};
  `;
}
