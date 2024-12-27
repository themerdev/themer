import { describe, it, expect } from 'vitest';
import {
	colorSetToState,
	customColorSetName as name,
	stateToColorSetIdentifier,
	stateToInputValues,
	stateToThemerInputColorSet,
	stateToUiColors
} from './transform';

describe('state to color set', () => {
	it('returns null on empty input state', () => {
		expect(stateToThemerInputColorSet({})).toBeNull();
	});

	it('returns only the variants that should be rendered by themer', () => {
		expect(
			stateToThemerInputColorSet({
				colors: {
					dark: {
						shade0: '#333333'
					}
				}
			})
		).toEqual({
			name,
			variants: {
				dark: {
					shade0: '#333333',
					shade7: '#FFFFFF',
					accent0: '#FFFFFF',
					accent1: '#FFFFFF',
					accent2: '#FFFFFF',
					accent3: '#FFFFFF',
					accent4: '#FFFFFF',
					accent5: '#FFFFFF',
					accent6: '#FFFFFF',
					accent7: '#FFFFFF'
				}
			}
		});
		expect(
			stateToThemerInputColorSet({
				colors: {
					light: {
						shade0: '#EEEEEE'
					}
				}
			})
		).toEqual({
			name,
			variants: {
				light: {
					shade0: '#EEEEEE',
					shade7: '#000000',
					accent0: '#000000',
					accent1: '#000000',
					accent2: '#000000',
					accent3: '#000000',
					accent4: '#000000',
					accent5: '#000000',
					accent6: '#000000',
					accent7: '#000000'
				}
			}
		});
	});

	describe('color conversion', () => {
		it('converts CSS colors to hex format', () => {
			expect(
				stateToThemerInputColorSet({
					colors: {
						dark: {
							shade0: 'darkgray'
						}
					}
				})
			).toEqual({
				name,
				variants: {
					dark: {
						shade0: '#A9A9A9',
						shade7: '#FFFFFF',
						accent0: '#FFFFFF',
						accent1: '#FFFFFF',
						accent2: '#FFFFFF',
						accent3: '#FFFFFF',
						accent4: '#FFFFFF',
						accent5: '#FFFFFF',
						accent6: '#FFFFFF',
						accent7: '#FFFFFF'
					}
				}
			});
		});
		it('falls back to defaults if parsing fails', () => {
			expect(
				stateToThemerInputColorSet({
					colors: {
						dark: {
							shade0: 'foobar'
						}
					}
				})
			).toEqual({
				name,
				variants: {
					dark: {
						shade0: '#000000',
						shade7: '#FFFFFF',
						accent0: '#FFFFFF',
						accent1: '#FFFFFF',
						accent2: '#FFFFFF',
						accent3: '#FFFFFF',
						accent4: '#FFFFFF',
						accent5: '#FFFFFF',
						accent6: '#FFFFFF',
						accent7: '#FFFFFF'
					}
				}
			});
		});
	});

	it('respects shade calculation settings', () => {
		expect(
			stateToThemerInputColorSet({
				colors: {
					dark: {
						accent0: '#C65967',
						accent1: '#D3873B',
						accent2: '#E5BE31',
						accent3: '#97B55A',
						accent4: '#76A377',
						accent5: '#6484B5',
						accent6: '#995785',
						accent7: '#AC7155',
						shade0: '#2A2021',
						shade1: '#000000',
						shade2: '#000000',
						shade3: '#000000',
						shade7: '#EDEBEE'
					},
					light: {
						accent0: '#BA394A',
						accent1: '#D3833F',
						accent2: '#BA991A',
						accent3: '#78992A',
						accent4: '#509B6B',
						accent5: '#485A9F',
						accent6: '#813D72',
						accent7: '#A1684F',
						shade0: '#EDEBEE',
						shade7: '#2A2021'
					}
				},
				calculateIntermediaryShades: {
					dark: true,
					light: false
				}
			})
		).toEqual({
			name,
			variants: {
				dark: {
					accent0: '#C65967',
					accent1: '#D3873B',
					accent2: '#E5BE31',
					accent3: '#97B55A',
					accent4: '#76A377',
					accent5: '#6484B5',
					accent6: '#995785',
					accent7: '#AC7155',
					shade0: '#2A2021',
					shade7: '#EDEBEE'
				},
				light: {
					accent0: '#BA394A',
					accent1: '#D3833F',
					accent2: '#BA991A',
					accent3: '#78992A',
					accent4: '#509B6B',
					accent5: '#485A9F',
					accent6: '#813D72',
					accent7: '#A1684F',
					shade0: '#EDEBEE',
					shade1: '#000000',
					shade2: '#000000',
					shade3: '#000000',
					shade4: '#000000',
					shade5: '#000000',
					shade6: '#000000',
					shade7: '#2A2021'
				}
			}
		});
	});

	it('should properly match existing color sets', () => {
		expect(
			stateToThemerInputColorSet({
				colors: {
					dark: {
						accent0: '#FF4050',
						accent1: '#F28144',
						accent2: '#FFD24A',
						accent3: '#A4CC35',
						accent4: '#26C99E',
						accent5: '#66BFFF',
						accent6: '#CC78FA',
						accent7: '#F553BF',

						shade0: '#282629',
						shade1: '#474247',
						shade2: '#656066',
						shade3: '#847E85',
						shade4: '#A29DA3',
						shade5: '#C1BCC2',
						shade6: '#E0DCE0',
						shade7: '#FFFCFF'
					},
					light: {
						accent0: '#F03E4D',
						accent1: '#F37735',
						accent2: '#EEBA21',
						accent3: '#97BD2D',
						accent4: '#1FC598',
						accent5: '#53A6E1',
						accent6: '#BF65F0',
						accent7: '#EE4EB8',

						shade0: '#FFFCFF',
						shade1: '#E0DCE0',
						shade2: '#C1BCC2',
						shade3: '#A29DA3',
						shade4: '#847E85',
						shade5: '#656066',
						shade6: '#474247',
						shade7: '#282629'
					}
				},
				activeColorSet: 'light',
				calculateIntermediaryShades: {
					dark: false,
					light: false
				}
			})?.name
		).toBe('Default');
		expect(
			stateToThemerInputColorSet({
				colors: {
					dark: {
						shade0: '#242225',
						shade7: '#D9D7DA',
						accent0: '#C25B5B',
						accent1: '#B06E4A',
						accent2: '#C19944',
						accent3: '#59A257',
						accent4: '#41A48B',
						accent5: '#5B91B3',
						accent6: '#9467AD',
						accent7: '#BB5D88'
					},
					light: {
						shade0: '#E4E4E7',
						shade7: '#333135',
						accent0: '#A54A4A',
						accent1: '#B06740',
						accent2: '#9A7932',
						accent3: '#448943',
						accent4: '#3B7D6C',
						accent5: '#407596',
						accent6: '#6A4D7A',
						accent7: '#904C6A'
					}
				},
				activeColorSet: 'dark',
				calculateIntermediaryShades: {
					dark: true,
					light: true
				}
			})?.name
		).toBe('Future Pro');
		expect(
			stateToThemerInputColorSet({
				colors: {
					dark: {
						accent0: '#EF4E7C',
						accent1: '#F37055',
						accent2: '#F79532',
						accent3: '#6EBB82',
						accent4: '#09B399',
						accent5: '#1299AD',
						accent6: '#5073B8',
						accent7: '#A067AB',
						shade0: '#23292D',
						shade7: '#FDFDFD'
					}
				},
				activeColorSet: 'dark',
				calculateIntermediaryShades: {
					dark: true,
					light: true
				}
			})?.name
		).toBe('GitHub Universe');
	});
});

describe('state to UI colors', () => {
	it('should return the default dark full variant with no input', () => {
		expect(stateToUiColors({})).toEqual({
			shade0: '#000000',
			shade1: '#242424',
			shade2: '#494949',
			shade3: '#6D6D6D',
			shade4: '#929292',
			shade5: '#B6B6B6',
			shade6: '#DBDBDB',
			shade7: '#FFFFFF',
			accent0: '#FFFFFF',
			accent1: '#FFFFFF',
			accent2: '#FFFFFF',
			accent3: '#FFFFFF',
			accent4: '#FFFFFF',
			accent5: '#FFFFFF',
			accent6: '#FFFFFF',
			accent7: '#FFFFFF'
		});
	});
	it('should return the default light full variant when set to light', () => {
		expect(stateToUiColors({ activeColorSet: 'light' })).toEqual({
			shade0: '#FFFFFF',
			shade1: '#DBDBDB',
			shade2: '#B6B6B6',
			shade3: '#929292',
			shade4: '#6D6D6D',
			shade5: '#494949',
			shade6: '#242424',
			shade7: '#000000',
			accent0: '#000000',
			accent1: '#000000',
			accent2: '#000000',
			accent3: '#000000',
			accent4: '#000000',
			accent5: '#000000',
			accent6: '#000000',
			accent7: '#000000'
		});
	});
	it('should properly fill in fallback values as needed', () => {
		expect(
			stateToUiColors({
				colors: { dark: { shade0: '#333', shade1: '#000', shade7: '#aaa', accent0: 'red' } }
			})
		).toEqual({
			shade0: '#333333',
			shade1: '#444444',
			shade2: '#555555',
			shade3: '#666666',
			shade4: '#777777',
			shade5: '#888888',
			shade6: '#999999',
			shade7: '#AAAAAA',
			accent0: '#FF0000',
			accent1: '#FFFFFF',
			accent2: '#FFFFFF',
			accent3: '#FFFFFF',
			accent4: '#FFFFFF',
			accent5: '#FFFFFF',
			accent6: '#FFFFFF',
			accent7: '#FFFFFF'
		});
	});
	it('should provide fallback values if opposite variant has values but not current variant', () => {
		expect(
			stateToUiColors({
				colors: { dark: { shade0: '#333', shade7: '#aaa' } },
				activeColorSet: 'light'
			})
		).toEqual({
			shade0: '#FFFFFF',
			shade1: '#DBDBDB',
			shade2: '#B6B6B6',
			shade3: '#929292',
			shade4: '#6D6D6D',
			shade5: '#494949',
			shade6: '#242424',
			shade7: '#000000',
			accent0: '#000000',
			accent1: '#000000',
			accent2: '#000000',
			accent3: '#000000',
			accent4: '#000000',
			accent5: '#000000',
			accent6: '#000000',
			accent7: '#000000'
		});
	});
});

describe('color set to state', () => {
	it('should properly transform a color set into UI state', () => {
		expect(
			colorSetToState(
				{
					name: 'Test',
					variants: {
						light: {
							shade0: '#FFFFFF',
							shade7: '#000000',
							accent0: '#000000',
							accent1: '#000000',
							accent2: '#000000',
							accent3: '#000000',
							accent4: '#000000',
							accent5: '#000000',
							accent6: '#000000',
							accent7: '#000000'
						},
						dark: {
							shade0: '#000000',
							shade7: '#FFFFFF',
							accent0: '#FFFFFF',
							accent1: '#FFFFFF',
							accent2: '#FFFFFF',
							accent3: '#FFFFFF',
							accent4: '#FFFFFF',
							accent5: '#FFFFFF',
							accent6: '#FFFFFF',
							accent7: '#FFFFFF'
						}
					}
				},
				'dark'
			)
		).toEqual({
			colors: {
				light: {
					shade0: '#FFFFFF',
					shade7: '#000000',
					accent0: '#000000',
					accent1: '#000000',
					accent2: '#000000',
					accent3: '#000000',
					accent4: '#000000',
					accent5: '#000000',
					accent6: '#000000',
					accent7: '#000000'
				},
				dark: {
					shade0: '#000000',
					shade7: '#FFFFFF',
					accent0: '#FFFFFF',
					accent1: '#FFFFFF',
					accent2: '#FFFFFF',
					accent3: '#FFFFFF',
					accent4: '#FFFFFF',
					accent5: '#FFFFFF',
					accent6: '#FFFFFF',
					accent7: '#FFFFFF'
				}
			},
			activeColorSet: 'dark',
			calculateIntermediaryShades: {
				dark: true,
				light: true
			}
		});
	});

	it('should switch active variants if the currently active variant is not available', () => {
		expect(
			colorSetToState(
				{
					name: 'Test',
					variants: {
						dark: {
							shade0: '#000000',
							shade7: '#FFFFFF',
							accent0: '#FFFFFF',
							accent1: '#FFFFFF',
							accent2: '#FFFFFF',
							accent3: '#FFFFFF',
							accent4: '#FFFFFF',
							accent5: '#FFFFFF',
							accent6: '#FFFFFF',
							accent7: '#FFFFFF'
						}
					}
				},
				'light'
			)
		).toEqual({
			colors: {
				dark: {
					shade0: '#000000',
					shade7: '#FFFFFF',
					accent0: '#FFFFFF',
					accent1: '#FFFFFF',
					accent2: '#FFFFFF',
					accent3: '#FFFFFF',
					accent4: '#FFFFFF',
					accent5: '#FFFFFF',
					accent6: '#FFFFFF',
					accent7: '#FFFFFF'
				}
			},
			activeColorSet: 'dark',
			calculateIntermediaryShades: {
				dark: true,
				light: true
			}
		});
	});
});

describe('state to input values', () => {
	it('should correctly convert URL state to strings appropriate for text inputs', () => {
		expect(
			stateToInputValues({
				colors: {
					dark: {
						shade0: '#000',
						shade1: 'foobar',
						accent0: 'red'
					}
				},
				calculateIntermediaryShades: {
					dark: true
				}
			})
		).toEqual({
			shade0: '#000',
			shade1: 'foobar',
			shade2: '',
			shade3: '',
			shade4: '',
			shade5: '',
			shade6: '',
			shade7: '',
			accent0: 'red',
			accent1: '',
			accent2: '',
			accent3: '',
			accent4: '',
			accent5: '',
			accent6: '',
			accent7: ''
		});
	});
});

describe('state to color set identifier', () => {
	it('should correctly identify web color sets', () => {
		expect(
			stateToColorSetIdentifier({
				colors: {
					dark: {
						shade0: '#242225',
						shade7: '#D9D7DA',
						accent0: '#C25B5B',
						accent1: '#B06E4A',
						accent2: '#C19944',
						accent3: '#59A257',
						accent4: '#41A48B',
						accent5: '#5B91B3',
						accent6: '#9467AD',
						accent7: '#BB5D88'
					},
					light: {
						shade0: '#E4E4E7',
						shade7: '#333135',
						accent0: '#A54A4A',
						accent1: '#B06740',
						accent2: '#9A7932',
						accent3: '#448943',
						accent4: '#3B7D6C',
						accent5: '#407596',
						accent6: '#6A4D7A',
						accent7: '#904C6A'
					}
				},
				activeColorSet: 'dark',
				calculateIntermediaryShades: {
					dark: true,
					light: true
				}
			})
		).toBe('future-pro');
	});
	it('should correctly identify built-in color sets', () => {
		expect(
			stateToColorSetIdentifier({
				colors: {
					dark: {
						accent0: '#FF4050',
						accent1: '#F28144',
						accent2: '#FFD24A',
						accent3: '#A4CC35',
						accent4: '#26C99E',
						accent5: '#66BFFF',
						accent6: '#CC78FA',
						accent7: '#F553BF',
						shade0: '#282629',
						shade1: '#474247',
						shade2: '#656066',
						shade3: '#847E85',
						shade4: '#A29DA3',
						shade5: '#C1BCC2',
						shade6: '#E0DCE0',
						shade7: '#FFFCFF'
					},
					light: {
						accent0: '#F03E4D',
						accent1: '#F37735',
						accent2: '#EEBA21',
						accent3: '#97BD2D',
						accent4: '#1FC598',
						accent5: '#53A6E1',
						accent6: '#BF65F0',
						accent7: '#EE4EB8',
						shade0: '#FFFCFF',
						shade1: '#E0DCE0',
						shade2: '#C1BCC2',
						shade3: '#A29DA3',
						shade4: '#847E85',
						shade5: '#656066',
						shade6: '#474247',
						shade7: '#282629'
					}
				},
				activeColorSet: 'dark',
				calculateIntermediaryShades: {
					dark: false,
					light: false
				}
			})
		).toBe('default');
		expect(
			stateToColorSetIdentifier({
				colors: {
					dark: {
						accent0: '#EF4E7C',
						accent1: '#F37055',
						accent2: '#F79532',
						accent3: '#6EBB82',
						accent4: '#09B399',
						accent5: '#1299AD',
						accent6: '#5073B8',
						accent7: '#A067AB',
						shade0: '#23292D',
						shade7: '#FDFDFD'
					}
				},
				activeColorSet: 'dark',
				calculateIntermediaryShades: {
					dark: true,
					light: true
				}
			})
		).toBe('github-universe');
		expect(
			stateToColorSetIdentifier({
				colors: {
					dark: {
						shade0: '#1F1913',
						shade7: '#FEFEDD',
						accent0: '#994643',
						accent1: '#F2AB71',
						accent2: '#FFCF86',
						accent3: '#4B8075',
						accent4: '#639587',
						accent5: '#517665',
						accent6: '#8B596A',
						accent7: '#8E5252'
					},
					light: {
						shade0: '#FCFAF1',
						shade7: '#19201D',
						accent0: '#8F4053',
						accent1: '#D8965D',
						accent2: '#CFA253',
						accent3: '#4E8579',
						accent4: '#8CB3A0',
						accent5: '#4D7260',
						accent6: '#786366',
						accent7: '#9F5E58'
					}
				},
				activeColorSet: 'dark',
				calculateIntermediaryShades: {
					dark: true,
					light: true
				}
			})
		).toBe('green-as-a-whistle');
	});
	it('should correctly identify the default color set', () => {
		expect(
			stateToColorSetIdentifier({
				colors: {
					dark: {
						accent0: '#FF4050',
						accent1: '#F28144',
						accent2: '#FFD24A',
						accent3: '#A4CC35',
						accent4: '#26C99E',
						accent5: '#66BFFF',
						accent6: '#CC78FA',
						accent7: '#F553BF',

						shade0: '#282629',
						shade1: '#474247',
						shade2: '#656066',
						shade3: '#847E85',
						shade4: '#A29DA3',
						shade5: '#C1BCC2',
						shade6: '#E0DCE0',
						shade7: '#FFFCFF'
					},
					light: {
						accent0: '#F03E4D',
						accent1: '#F37735',
						accent2: '#EEBA21',
						accent3: '#97BD2D',
						accent4: '#1FC598',
						accent5: '#53A6E1',
						accent6: '#BF65F0',
						accent7: '#EE4EB8',

						shade0: '#FFFCFF',
						shade1: '#E0DCE0',
						shade2: '#C1BCC2',
						shade3: '#A29DA3',
						shade4: '#847E85',
						shade5: '#656066',
						shade6: '#474247',
						shade7: '#282629'
					}
				},
				activeColorSet: 'light',
				calculateIntermediaryShades: {
					dark: false,
					light: false
				}
			})
		).toBe('default');
	});
	it('is case-insensitive when determining color set identity', () => {
		expect(
			stateToColorSetIdentifier({
				colors: {
					dark: {
						accent0: '#e06c75',
						accent1: '#d19a66',
						accent2: '#e5c07b',
						accent3: '#98c379',
						accent4: '#56b6c2',
						accent5: '#61afef',
						accent6: '#c678dd',
						accent7: '#be5046',
						shade0: '#282c34',
						shade1: '#393e48',
						shade2: '#4b515c',
						shade3: '#5c6370',
						shade4: '#636d83',
						shade5: '#828997',
						shade6: '#979eab',
						shade7: '#abb2bf'
					},
					light: {
						accent0: '#e45649',
						accent1: '#986801',
						accent2: '#c18401',
						accent3: '#50a14f',
						accent4: '#0184bc',
						accent5: '#4078f2',
						accent6: '#a626a4',
						accent7: '#ca1243',
						shade0: '#fafafa',
						shade1: '#CDCED1',
						shade2: '#a0a1a7',
						shade3: '#9d9d9f',
						shade4: '#83858B',
						shade5: '#696c77',
						shade6: '#51535D',
						shade7: '#383a42'
					}
				},
				activeColorSet: 'dark',
				calculateIntermediaryShades: {
					dark: false,
					light: false
				}
			})
		).toBe('one');
	});
	it('should correctly identify fully custom color sets', () => {
		expect(
			stateToColorSetIdentifier({
				colors: {
					dark: {
						shade0: '#333',
						shade7: 'lightgray',
						accent0: 'red',
						accent1: 'orange',
						accent2: 'gold',
						accent3: 'lightgreen',
						accent4: '#26a6a6',
						accent5: '#5b76c8',
						accent6: 'violet',
						accent7: 'hotpink'
					}
				}
			})
		).toBeNull();
	});
});
