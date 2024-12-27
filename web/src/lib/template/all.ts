import type { BuiltInTemplate, Template } from 'themer';
import exhibit from './wallpaper-exhibit';
import logos from './wallpaper-logos';
import skyline from './wallpaper-skyline';

const WEB_TEMPLATE_IDENTIFIERS = [
	'wallpaper-exhibit',
	'wallpaper-logos',
	'wallpaper-skyline'
] as const;

export type WebTemplate = (typeof WEB_TEMPLATE_IDENTIFIERS)[number];
export const allWebTemplateIdentifiers: WebTemplate[] = [...WEB_TEMPLATE_IDENTIFIERS];

export function resolveWebTemplate(template: WebTemplate): Template {
	switch (template) {
		case 'wallpaper-exhibit':
			return exhibit;
		case 'wallpaper-logos':
			return logos;
		case 'wallpaper-skyline':
			return skyline;
	}
}

export const allWebTemplates: Map<WebTemplate, Template> = new Map(
	allWebTemplateIdentifiers.map((id) => [id, resolveWebTemplate(id)])
);

export function isWebTemplate(v: WebTemplate | BuiltInTemplate | Template): v is WebTemplate {
	return allWebTemplateIdentifiers.includes(v as WebTemplate);
}
