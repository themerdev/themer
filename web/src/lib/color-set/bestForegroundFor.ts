import Color from 'color';
import memoize from 'lodash/memoize.js';

export default memoize(
	(background: string, option1: string, option2: string) => {
		const bg = Color(background);
		return Color(option1).contrast(bg) > Color(option2).contrast(bg) ? option1 : option2;
	},
	(...colors) => colors.join(':')
);
