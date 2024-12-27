import { error, type Actions } from '@sveltejs/kit';
import { allWebTemplateIdentifiers, type WebTemplate } from '$lib/template/all';
import {
	allBuiltInTemplateIdentifiers,
	type BuiltInTemplate,
	type ColorSet,
	type RenderOptions
} from 'themer';
import { parseUserState, stateToThemerInputColorSet } from '$lib/color-set/transform';

type DownloadConfiguration = {
	colorSet: ColorSet;
	selectedTemplates: (BuiltInTemplate | WebTemplate)[];
	renderOptions: RenderOptions;
};

function isTemplateIdentifier(v: string): v is BuiltInTemplate | WebTemplate {
	return (
		allBuiltInTemplateIdentifiers.includes(v as BuiltInTemplate) ||
		allWebTemplateIdentifiers.includes(v as WebTemplate)
	);
}

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const state = parseUserState(event.url.search);
		const colorSet = stateToThemerInputColorSet(state);
		if (!colorSet) error(400, 'missing color set data');

		const selectedTemplates: (BuiltInTemplate | WebTemplate)[] = data
			.getAll('template')
			.map((v) => v.toString())
			.filter(isTemplateIdentifier);
		if (!selectedTemplates.length) error(400, 'missing template selections');

		const config: DownloadConfiguration = {
			colorSet,
			selectedTemplates,
			renderOptions: {
				wallpaperSizes: [
					{
						w: parseInt(data.get('width')?.toString() || '4096', 10),
						h: parseInt(data.get('height')?.toString() || '2160', 10)
					}
				]
			}
		};

		return config;
	}
} satisfies Actions;
