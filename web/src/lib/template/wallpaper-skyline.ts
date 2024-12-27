import { source } from 'common-tags';
import { colorSetToVariants, listOutputFiles, type Template } from 'themer';
import Color from 'color';

function calculateViewBox(
	outputWidth: number,
	outputHeight: number,
	limit = 3840
): [number, number, number, number] {
	const aspectRatio = outputWidth / outputHeight;
	if (aspectRatio >= 1) {
		const w = limit;
		const h = w / aspectRatio;
		return [0, (limit - h) / 2, w, h];
	} else {
		const h = limit;
		const w = h * aspectRatio;
		return [(limit - w) / 2, 0, w, h];
	}
}

const template: Template = {
	name: 'Skyline wallpaper',
	render: async function* (colorSet, options) {
		const variants = colorSetToVariants(colorSet);
		for (const variant of variants) {
			const {
				shade0,
				shade1,
				shade2,
				shade3,
				shade4,
				shade5,
				shade6,
				shade7,
				accent0,
				accent2,
				accent3,
				accent4,
				accent5,
				accent6,
				accent7
			} = variant.colors;
			const shade2shade3 = Color(shade2).mix(Color(shade3), 0.5).hex();
			const shade5shade6 = Color(shade5).mix(Color(shade6), 0.5).hex();
			const accent0shade0 = Color(accent0).mix(Color(shade0), 0.5).hex();
			const accent5shade2 = Color(accent5).mix(Color(shade2), 0.5).hex();
			const accent2shade1 = Color(accent2).mix(Color(shade1), 0.5).hex();
			for (const size of options.wallpaperSizes) {
				const originalSize = 3840;
				const viewBox = calculateViewBox(size.w, size.h, originalSize).join(' ');
				const svg =
					variant.name === 'dark'
						? source`
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="${size.w}" height="${size.h}" viewBox="${viewBox}">
                  <g clip-path="url(#a)">
                    <path fill="url(#b)" d="M0 0h3840v3840H0z"/>
                    <path fill="${shade7}" d="M2982 1045h4v4h-4z"/>
                    <path fill="${shade6}" d="M1992 1135h4v4h-4z"/>
                    <path fill="${shade5}" d="M1366 1365h4v4h-4zM3726 1461h4v4h-4z"/>
                    <path fill="${shade7}" d="M1692 975h4v4h-4z"/>
                    <path fill="${shade6}" d="M702 1065h4v4h-4z"/>
                    <path fill="${shade5}" d="M76 1295h4v4h-4zM2436 1391h4v4h-4z"/>
                    <path fill="${shade7}" d="M2614 1196h2v2h-2z"/>
                    <path fill="${shade6}" d="M1624 1286h2v2h-2z"/>
                    <path fill="${shade5}" d="M998 1516h2v2h-2zM3358 1612h2v2h-2z"/>
                    <path fill="${shade7}" d="M2044 1386h2v2h-2z"/>
                    <path fill="${shade6}" d="M1054 1476h2v2h-2z"/>
                    <path fill="${shade5}" d="M428 1706h2v2h-2zM2788 1802h2v2h-2z"/>
                    <path fill="${shade7}" d="M2286 991h1v1h-1z"/>
                    <path fill="${shade6}" d="M1296 1081h1v1h-1z"/>
                    <path fill="${shade5}" d="M670 1311h1v1h-1zM3030 1407h1v1h-1z"/>
                    <path fill="${shade7}" d="M824 82h-4v4h4z"/>
                    <path fill="${shade6}" d="M1814 172h-4v4h4z"/>
                    <path fill="${shade5}" d="M2440 402h-4v4h4zM80 498h-4v4h4z"/>
                    <path fill="${shade7}" d="M2114 12h-4v4h4z"/>
                    <path fill="${shade6}" d="M3104 102h-4v4h4z"/>
                    <path fill="${shade5}" d="M3730 332h-4v4h4zM1370 428h-4v4h4z"/>
                    <path fill="${shade7}" d="M1192 233h-2v2h2z"/>
                    <path fill="${shade6}" d="M2182 323h-2v2h2z"/>
                    <path fill="${shade5}" d="M2808 553h-2v2h2zM448 649h-2v2h2z"/>
                    <path fill="${shade7}" d="M1762 423h-2v2h2z"/>
                    <path fill="${shade6}" d="M2752 513h-2v2h2z"/>
                    <path fill="${shade5}" d="M3378 743h-2v2h2zM1018 839h-2v2h2z"/>
                    <path fill="${shade7}" d="M1520 28h-1v1h1z"/>
                    <path fill="${shade6}" d="M2510 118h-1v1h1z"/>
                    <path fill="${shade5}" d="M3136 348h-1v1h1zM776 444h-1v1h1z"/>
                    <path fill="url(#c)" fill-opacity=".5" d="M0 0h3840v3840H0z"/>
                    <path fill="url(#d)" fill-opacity=".7" d="M0 0h3840v3840H0z"/>
                    <path fill="url(#e)" fill-opacity=".4" d="M0 0h3840v3840H0z"/>
                    <path fill="${shade0}" fill-rule="evenodd" d="M2245 1468h-180v30h-99v422h378v-422h-99v-30Z" clip-rule="evenodd"/>
                    <path fill="url(#f)" fill-rule="evenodd" d="M2245 1468h-180v30h-99v422h378v-422h-99v-30Z" clip-rule="evenodd"/>
                    <path fill="${accent4}" fill-opacity=".66" d="M2065 1495h180v3h-180z"/>
                    <path fill="${shade0}" d="M1832 1532h283v388h-283z"/>
                    <path fill="${accent4}" fill-opacity=".5" d="M1832 1532h283v388h-283z"/>
                    <path fill="${shade0}" d="M1842 1542h263v10h-263z"/>
                    <path fill="${accent4}" d="M1842 1562h263v10h-263zM1842 1582h263v10h-263z"/>
                    <path fill="${shade0}" d="M1842 1602h263v10h-263zM1842 1622h263v10h-263zM1842 1642h263v10h-263z"/>
                    <path fill="${accent4}" d="M2078 1642h27v10h-27z"/>
                    <path fill="${shade0}" d="M1842 1662h263v10h-263zM1842 1682h263v10h-263zM1842 1702h263v10h-263zM1842 1722h263v10h-263zM1842 1742h263v10h-263zM1842 1762h263v10h-263zM1842 1782h263v10h-263z"/>
                    <path fill="${accent4}" d="M1842 1802h263v10h-263z"/>
                    <path fill="${shade0}" d="M1842 1822h263v10h-263zM1842 1842h263v10h-263zM1842 1862h263v10h-263zM1842 1882h263v10h-263z"/>
                    <path fill="${accent4}" d="M2051 1762h27v10h-27z"/>
                    <path fill="${shade0}" d="M1842 1902h263v10h-263z"/>
                    <path fill="${accent4}" d="M1869 1682h27v10h-27z"/>
                    <path fill="${shade0}" d="M2478 1920h-283v-388h283z"/>
                    <path fill="${accent4}" fill-opacity=".5" d="M2478 1920h-283v-388h283z"/>
                    <path fill="${shade0}" d="M2468 1910h-263v-10h263z"/>
                    <path fill="${accent4}" d="M2468 1890h-263v-10h263zM2468 1870h-263v-10h263z"/>
                    <path fill="${shade0}" d="M2468 1850h-263v-10h263zM2468 1830h-263v-10h263zM2468 1810h-263v-10h263z"/>
                    <path fill="${accent4}" d="M2232 1810h-27v-10h27z"/>
                    <path fill="${shade0}" d="M2468 1790h-263v-10h263zM2468 1770h-263v-10h263zM2468 1750h-263v-10h263zM2468 1730h-263v-10h263zM2468 1710h-263v-10h263zM2468 1690h-263v-10h263zM2468 1670h-263v-10h263z"/>
                    <path fill="${accent4}" d="M2468 1650h-263v-10h263z"/>
                    <path fill="${shade0}" d="M2468 1630h-263v-10h263zM2468 1610h-263v-10h263zM2468 1590h-263v-10h263zM2468 1570h-263v-10h263z"/>
                    <path fill="${accent4}" d="M2259 1690h-27v-10h27z"/>
                    <path fill="${shade0}" d="M2468 1550h-263v-10h263z"/>
                    <path fill="${accent4}" d="M2441 1770h-27v-10h27z"/>
                    <path fill="${shade0}" d="M2320 1775h31v145h-31z"/>
                    <path fill="${accent5}" fill-opacity=".38" d="M2320 1775h31v145h-31z"/>
                    <path fill="${shade0}" d="M2351 1775h285v145h-285z"/>
                    <path fill="${accent5}" fill-opacity=".25" d="M2351 1775h285v145h-285z"/>
                    <path fill="url(#g)" fill-opacity=".5" d="M2351 1775h285v145h-285z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M2339 1806h4v5h-4zM2328 1806h4v5h-4z"/>
                    <path fill="${shade4}" fill-opacity=".33" d="M2339 1789h4v5h-4zM2328 1789h4v5h-4zM2339 1823h4v5h-4zM2328 1823h4v5h-4zM2339 1840h4v5h-4zM2328 1840h4v5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M2339 1857h4v5h-4zM2328 1857h4v5h-4z"/>
                    <path fill="${shade4}" fill-opacity=".33" d="M2339 1874h4v5h-4zM2328 1874h4v5h-4zM2339 1891h4v5h-4zM2328 1891h4v5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M2378 1787h12v10h-12zM2358 1804h12v10h-12z"/>
                    <path fill="${shade0}" fill-opacity=".25" d="M2358 1787h12v10h-12zM2418 1787h12v10h-12zM2458 1787h12v10h-12zM2478 1787h12v10h-12zM2498 1787h12v10h-12zM2518 1787h12v10h-12zM2538 1787h12v10h-12zM2578 1787h12v10h-12zM2598 1787h12v10h-12zM2618 1787h12v10h-12zM2378 1804h12v10h-12zM2398 1804h12v10h-12zM2418 1804h12v10h-12zM2438 1804h12v10h-12zM2458 1804h12v10h-12zM2478 1804h12v10h-12zM2498 1804h12v10h-12zM2518 1804h12v10h-12zM2538 1804h12v10h-12zM2558 1804h12v10h-12zM2578 1804h12v10h-12zM2598 1804h12v10h-12zM2358 1821h12v10h-12zM2378 1821h12v10h-12zM2398 1821h12v10h-12zM2418 1821h12v10h-12zM2438 1821h12v10h-12zM2458 1821h12v10h-12zM2478 1821h12v10h-12zM2498 1821h12v10h-12zM2518 1821h12v10h-12zM2538 1821h12v10h-12zM2558 1821h12v10h-12zM2578 1821h12v10h-12zM2598 1821h12v10h-12zM2358 1838h12v10h-12zM2378 1838h12v10h-12zM2398 1838h12v10h-12zM2418 1838h12v10h-12zM2438 1838h12v10h-12zM2478 1838h12v10h-12zM2498 1838h12v10h-12zM2538 1838h12v10h-12zM2558 1838h12v10h-12zM2618 1838h12v10h-12zM2378 1855h12v10h-12zM2438 1855h12v10h-12zM2458 1855h12v10h-12zM2478 1855h12v10h-12zM2498 1855h12v10h-12zM2518 1855h12v10h-12zM2538 1855h12v10h-12zM2558 1855h12v10h-12zM2578 1855h12v10h-12zM2598 1855h12v10h-12zM2618 1855h12v10h-12zM2358 1872h12v10h-12zM2398 1872h12v10h-12zM2418 1872h12v10h-12zM2438 1872h12v10h-12zM2498 1872h12v10h-12zM2518 1872h12v10h-12zM2538 1872h12v10h-12zM2558 1872h12v10h-12zM2578 1872h12v10h-12zM2598 1872h12v10h-12zM2618 1872h12v10h-12zM2358 1889h12v10h-12zM2378 1889h12v10h-12zM2398 1889h12v10h-12zM2418 1889h12v10h-12zM2438 1889h12v10h-12zM2458 1889h12v10h-12zM2478 1889h12v10h-12zM2518 1889h12v10h-12zM2538 1889h12v10h-12zM2558 1889h12v10h-12zM2598 1889h12v10h-12zM2618 1889h12v10h-12z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M2358 1855h12v10h-12zM2398 1787h12v10h-12zM2438 1787h12v10h-12zM2558 1787h12v10h-12zM2618 1804h12v10h-12zM2618 1821h12v10h-12zM2598 1838h12v10h-12zM2578 1838h12v10h-12zM2518 1838h12v10h-12zM2458 1838h12v10h-12zM2398 1855h12v10h-12zM2418 1855h12v10h-12zM2458 1872h12v10h-12zM2498 1889h12v10h-12zM2578 1889h12v10h-12zM2478 1872h12v10h-12zM2378 1872h12v10h-12z"/>
                    <path fill="${shade7}" fill-opacity=".2" d="M2356 1792h16v6h-16zM2356 1809h16v6h-16zM2356 1826h16v6h-16zM2356 1843h16v6h-16zM2356 1860h16v6h-16zM2356 1877h16v6h-16zM2356 1894h16v6h-16zM2376 1792h16v6h-16zM2376 1809h16v6h-16zM2376 1826h16v6h-16zM2376 1843h16v6h-16zM2376 1860h16v6h-16zM2376 1877h16v6h-16zM2376 1894h16v6h-16zM2396 1792h16v6h-16zM2396 1809h16v6h-16zM2396 1826h16v6h-16zM2396 1843h16v6h-16zM2396 1860h16v6h-16zM2396 1877h16v6h-16zM2396 1894h16v6h-16zM2416 1792h16v6h-16zM2416 1809h16v6h-16zM2416 1826h16v6h-16zM2416 1843h16v6h-16zM2416 1860h16v6h-16zM2416 1877h16v6h-16zM2416 1894h16v6h-16zM2436 1792h16v6h-16zM2436 1809h16v6h-16zM2436 1826h16v6h-16zM2436 1843h16v6h-16zM2436 1860h16v6h-16zM2436 1877h16v6h-16zM2436 1894h16v6h-16zM2456 1792h16v6h-16zM2456 1809h16v6h-16zM2456 1826h16v6h-16zM2456 1843h16v6h-16zM2456 1860h16v6h-16zM2456 1877h16v6h-16zM2456 1894h16v6h-16zM2476 1792h16v6h-16zM2476 1809h16v6h-16zM2476 1826h16v6h-16zM2476 1843h16v6h-16zM2476 1860h16v6h-16zM2476 1877h16v6h-16zM2476 1894h16v6h-16zM2496 1792h16v6h-16zM2496 1809h16v6h-16zM2496 1826h16v6h-16zM2496 1843h16v6h-16zM2496 1860h16v6h-16zM2496 1877h16v6h-16zM2496 1894h16v6h-16zM2516 1792h16v6h-16zM2516 1809h16v6h-16zM2516 1826h16v6h-16zM2516 1843h16v6h-16zM2516 1860h16v6h-16zM2516 1877h16v6h-16zM2516 1894h16v6h-16zM2536 1792h16v6h-16zM2536 1809h16v6h-16zM2536 1826h16v6h-16zM2536 1843h16v6h-16zM2536 1860h16v6h-16zM2536 1877h16v6h-16zM2536 1894h16v6h-16zM2556 1792h16v6h-16zM2556 1809h16v6h-16zM2556 1826h16v6h-16zM2556 1843h16v6h-16zM2556 1860h16v6h-16zM2556 1877h16v6h-16zM2556 1894h16v6h-16zM2576 1792h16v6h-16zM2576 1809h16v6h-16zM2576 1826h16v6h-16zM2576 1843h16v6h-16zM2576 1860h16v6h-16zM2576 1877h16v6h-16zM2576 1894h16v6h-16zM2596 1792h16v6h-16zM2596 1809h16v6h-16zM2596 1826h16v6h-16zM2596 1843h16v6h-16zM2596 1860h16v6h-16zM2596 1877h16v6h-16zM2596 1894h16v6h-16zM2616 1792h16v6h-16zM2616 1809h16v6h-16zM2616 1826h16v6h-16zM2616 1843h16v6h-16zM2616 1860h16v6h-16zM2616 1877h16v6h-16zM2616 1894h16v6h-16z"/>
                    <path fill="${shade1}" d="M2368 1670h13v250h-13z"/>
                    <path fill="url(#h)" d="M2368 1670h13v250h-13z"/>
                    <path fill="${shade1}" d="M2576 1670h13v250h-13z"/>
                    <path fill="url(#i)" d="M2576 1670h13v250h-13z"/>
                    <path fill="${shade1}" d="M2795 1670h13v250h-13z"/>
                    <path fill="url(#j)" d="M2795 1670h13v250h-13z"/>
                    <mask id="k" width="428" height="203" x="2374" y="1670" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" d="M2801.5 1670v203h-427v-196.41c-.05-4.22 0-6.59 0-6.59v6.59c.39 33.95 7.12 187.41 96.5 187.41 100.5 0 111.5-194 111.5-194s-1 194 109.5 194c107.55 0 109.47-183.79 109.5-193.59v-.41Z"/>
                    </mask>
                    <g mask="url(#k)">
                      <path fill="url(#l)" d="M2374 1670h1v210h-1z"/>
                      <path fill="url(#m)" d="M2385 1670h1v210h-1z"/>
                      <path fill="url(#n)" d="M2396 1670h1v210h-1z"/>
                      <path fill="url(#o)" d="M2407 1670h1v210h-1z"/>
                      <path fill="url(#p)" d="M2418 1670h1v210h-1z"/>
                      <path fill="url(#q)" d="M2429 1670h1v210h-1z"/>
                      <path fill="url(#r)" d="M2440 1670h1v210h-1z"/>
                      <path fill="url(#s)" d="M2451 1670h1v210h-1z"/>
                      <path fill="url(#t)" d="M2462 1670h1v210h-1z"/>
                      <path fill="url(#u)" d="M2473 1670h1v210h-1z"/>
                      <path fill="url(#v)" d="M2484 1670h1v210h-1z"/>
                      <path fill="url(#w)" d="M2495 1670h1v210h-1z"/>
                      <path fill="url(#x)" d="M2506 1670h1v210h-1z"/>
                      <path fill="url(#y)" d="M2517 1670h1v210h-1z"/>
                      <path fill="url(#z)" d="M2528 1670h1v210h-1z"/>
                      <path fill="url(#A)" d="M2539 1670h1v210h-1z"/>
                      <path fill="url(#B)" d="M2550 1670h1v210h-1z"/>
                      <path fill="url(#C)" d="M2561 1670h1v210h-1z"/>
                      <path fill="url(#D)" d="M2572 1670h1v210h-1z"/>
                      <path fill="url(#E)" d="M2583 1670h1v210h-1z"/>
                      <path fill="url(#F)" d="M2594 1670h1v210h-1z"/>
                      <path fill="url(#G)" d="M2605 1670h1v210h-1z"/>
                      <path fill="url(#H)" d="M2616 1670h1v210h-1z"/>
                      <path fill="url(#I)" d="M2627 1670h1v210h-1z"/>
                      <path fill="url(#J)" d="M2638 1670h1v210h-1z"/>
                      <path fill="url(#K)" d="M2649 1670h1v210h-1z"/>
                      <path fill="url(#L)" d="M2660 1670h1v210h-1z"/>
                      <path fill="url(#M)" d="M2671 1670h1v210h-1z"/>
                      <path fill="url(#N)" d="M2682 1670h1v210h-1z"/>
                      <path fill="url(#O)" d="M2693 1670h1v210h-1z"/>
                      <path fill="url(#P)" d="M2704 1670h1v210h-1z"/>
                      <path fill="url(#Q)" d="M2715 1670h1v210h-1z"/>
                      <path fill="url(#R)" d="M2726 1670h1v210h-1z"/>
                      <path fill="url(#S)" d="M2737 1670h1v210h-1z"/>
                      <path fill="url(#T)" d="M2748 1670h1v210h-1z"/>
                      <path fill="url(#U)" d="M2759 1670h1v210h-1z"/>
                      <path fill="url(#V)" d="M2770 1670h1v210h-1z"/>
                      <path fill="url(#W)" d="M2781 1670h1v210h-1z"/>
                      <path fill="url(#X)" d="M2792 1670h1v210h-1z"/>
                    </g>
                    <path stroke="url(#Y)" stroke-width="2" d="M2801.5 1670s1 194-109.5 194-109.5-194-109.5-194-11 194-111.5 194-96.5-194-96.5-194v203h427v-203Z"/>
                    <mask id="Z" width="450" height="203" x="2395" y="1670" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" d="M2727.5 1864c110.5 0 117-194 117-194v203h-449v-203s7 194 107.5 194 107.5-194 107.5-194 6.5 194 117 194Z"/>
                    </mask>
                    <g mask="url(#Z)">
                      <path fill="url(#aa)" d="M2396 1670h1v210h-1z"/>
                      <path fill="url(#ab)" d="M2408 1670h1v210h-1z"/>
                      <path fill="url(#ac)" d="M2420 1670h1v210h-1z"/>
                      <path fill="url(#ad)" d="M2432 1670h1v210h-1z"/>
                      <path fill="url(#ae)" d="M2444 1670h1v210h-1z"/>
                      <path fill="url(#af)" d="M2456 1670h1v210h-1z"/>
                      <path fill="url(#ag)" d="M2468 1670h1v210h-1z"/>
                      <path fill="url(#ah)" d="M2480 1670h1v210h-1z"/>
                      <path fill="url(#ai)" d="M2492 1670h1v210h-1z"/>
                      <path fill="url(#aj)" d="M2504 1670h1v210h-1z"/>
                      <path fill="url(#ak)" d="M2516 1670h1v210h-1z"/>
                      <path fill="url(#al)" d="M2528 1670h1v210h-1z"/>
                      <path fill="url(#am)" d="M2540 1670h1v210h-1z"/>
                      <path fill="url(#an)" d="M2552 1670h1v210h-1z"/>
                      <path fill="url(#ao)" d="M2564 1670h1v210h-1z"/>
                      <path fill="url(#ap)" d="M2576 1670h1v210h-1z"/>
                      <path fill="url(#aq)" d="M2588 1670h1v210h-1z"/>
                      <path fill="url(#ar)" d="M2600 1670h1v210h-1z"/>
                      <path fill="url(#as)" d="M2612 1670h1v210h-1z"/>
                      <path fill="url(#at)" d="M2624 1670h1v210h-1z"/>
                      <path fill="url(#au)" d="M2636 1670h1v210h-1z"/>
                      <path fill="url(#av)" d="M2648 1670h1v210h-1z"/>
                      <path fill="url(#aw)" d="M2660 1670h1v210h-1z"/>
                      <path fill="url(#ax)" d="M2672 1670h1v210h-1z"/>
                      <path fill="url(#ay)" d="M2684 1670h1v210h-1z"/>
                      <path fill="url(#az)" d="M2696 1670h1v210h-1z"/>
                      <path fill="url(#aA)" d="M2708 1670h1v210h-1z"/>
                      <path fill="url(#aB)" d="M2720 1670h1v210h-1z"/>
                      <path fill="url(#aC)" d="M2732 1670h1v210h-1z"/>
                      <path fill="url(#aD)" d="M2744 1670h1v210h-1z"/>
                      <path fill="url(#aE)" d="M2756 1670h1v210h-1z"/>
                      <path fill="url(#aF)" d="M2768 1670h1v210h-1z"/>
                      <path fill="url(#aG)" d="M2780 1670h1v210h-1z"/>
                      <path fill="url(#aH)" d="M2792 1670h1v210h-1z"/>
                      <path fill="url(#aI)" d="M2804 1670h1v210h-1z"/>
                      <path fill="url(#aJ)" d="M2816 1670h1v210h-1z"/>
                      <path fill="url(#aK)" d="M2828 1670h1v210h-1z"/>
                      <path fill="url(#aL)" d="M2840 1670h1v210h-1z"/>
                    </g>
                    <path stroke="url(#aM)" stroke-width="2" d="M2727.5 1864c110.5 0 117-194 117-194v203h-449v-203s7 194 107.5 194 107.5-194 107.5-194 6.5 194 117 194Z"/>
                    <path fill="${shade0}" d="M2372 1869h472v7h-472z"/>
                    <path fill="url(#aN)" d="M2372 1869h472v7h-472z"/>
                    <path fill="${shade1}" d="M2389 1670h13v250h-13z"/>
                    <path fill="url(#aO)" d="M2389 1670h13v250h-13z"/>
                    <path fill="${shade1}" d="M2604 1670h13v250h-13z"/>
                    <path fill="url(#aP)" d="M2604 1670h13v250h-13z"/>
                    <path fill="${shade1}" d="M2838 1670h13v250h-13z"/>
                    <path fill="url(#aQ)" d="M2838 1670h13v250h-13z"/>
                    <path fill="url(#aR)" d="M2606 1667h9v3h-9z"/>
                    <path fill="url(#aS)" d="M2578 1667h9v3h-9z"/>
                    <path fill="url(#aT)" d="M2797 1667h9v3h-9z"/>
                    <path fill="url(#aU)" d="M2840 1667h9v3h-9z"/>
                    <path fill="url(#aV)" d="M2609 1664h3v3h-3z"/>
                    <path fill="url(#aW)" d="M2581 1664h3v3h-3z"/>
                    <path fill="url(#aX)" d="M2800 1664h3v3h-3z"/>
                    <path fill="url(#aY)" d="M2843 1664h3v3h-3z"/>
                    <path fill="${shade1}" d="M2305 1385h145v535h-145z"/>
                    <path fill="url(#aZ)" d="M2305 1385h145v535h-145z"/>
                    <path fill="${shade7}" fill-opacity=".33" fill-rule="evenodd" d="M2444 1395h-133v525h6v-515h121v515h6v-525Z" clip-rule="evenodd"/>
                    <path fill="${shade2}" fill-opacity=".5" d="M2242 1385h63v535h-63z"/>
                    <path fill="${shade1}" fill-opacity=".5" d="M2242 1385h63v535h-63z"/>
                    <path fill="url(#ba)" d="M2242 1385h63v535h-63z"/>
                    <path fill="${shade7}" fill-opacity=".33" fill-rule="evenodd" d="M2302 1395h-57v525h3v-515h51v515h3v-525Z" clip-rule="evenodd"/>
                    <path fill="${shade1}" d="M2315 1315h109v70h-109z"/>
                    <path fill="${shade2shade3}" d="M2268 1315h47v70h-47z"/>
                    <path fill="${shade7}" fill-opacity=".33" fill-rule="evenodd" d="M2418 1325h-97v60h6v-50h85v50h6v-60ZM2312 1325h-41v60h3v-50h35v50h3v-60Z" clip-rule="evenodd"/>
                    <path fill="${shade7}" fill-opacity=".6" d="M2326 1415h8v10h-8zM2326 1435h8v10h-8zM2326 1455h8v10h-8zM2326 1495h8v10h-8zM2326 1535h8v10h-8zM2326 1615h8v10h-8zM2326 1655h8v10h-8zM2326 1695h8v10h-8zM2326 1715h8v10h-8zM2326 1735h8v10h-8zM2326 1835h8v10h-8zM2326 1855h8v10h-8zM2326 1755h8v10h-8zM2326 1775h8v10h-8zM2345 1435h8v10h-8zM2345 1455h8v10h-8zM2345 1475h8v10h-8zM2345 1495h8v10h-8zM2345 1535h8v10h-8zM2345 1575h8v10h-8zM2345 1615h8v10h-8zM2345 1635h8v10h-8zM2345 1675h8v10h-8zM2345 1735h8v10h-8zM2345 1835h8v10h-8zM2345 1895h8v10h-8zM2345 1755h8v10h-8zM2345 1795h8v10h-8zM2345 1815h8v10h-8zM2364 1435h8v10h-8zM2364 1495h8v10h-8zM2364 1535h8v10h-8zM2364 1555h8v10h-8zM2364 1575h8v10h-8zM2364 1615h8v10h-8zM2364 1635h8v10h-8zM2364 1675h8v10h-8zM2364 1715h8v10h-8zM2364 1735h8v10h-8zM2364 1855h8v10h-8zM2364 1875h8v10h-8zM2364 1795h8v10h-8zM2383 1435h8v10h-8zM2383 1455h8v10h-8zM2383 1475h8v10h-8zM2383 1515h8v10h-8zM2383 1535h8v10h-8zM2383 1555h8v10h-8zM2383 1575h8v10h-8zM2383 1615h8v10h-8zM2383 1635h8v10h-8zM2383 1655h8v10h-8zM2383 1675h8v10h-8zM2383 1715h8v10h-8zM2383 1735h8v10h-8zM2383 1875h8v10h-8zM2383 1755h8v10h-8zM2383 1775h8v10h-8zM2383 1795h8v10h-8zM2402 1415h8v10h-8zM2402 1435h8v10h-8zM2402 1455h8v10h-8zM2402 1475h8v10h-8zM2402 1495h8v10h-8zM2402 1515h8v10h-8zM2402 1575h8v10h-8zM2402 1635h8v10h-8zM2402 1655h8v10h-8zM2402 1675h8v10h-8zM2402 1715h8v10h-8zM2402 1735h8v10h-8zM2402 1835h8v10h-8zM2402 1875h8v10h-8zM2402 1895h8v10h-8zM2402 1755h8v10h-8zM2402 1775h8v10h-8zM2402 1795h8v10h-8zM2402 1815h8v10h-8zM2421 1415h8v10h-8zM2421 1435h8v10h-8zM2421 1455h8v10h-8zM2421 1475h8v10h-8zM2421 1495h8v10h-8zM2421 1515h8v10h-8zM2421 1535h8v10h-8zM2421 1555h8v10h-8zM2421 1595h8v10h-8zM2421 1615h8v10h-8zM2421 1655h8v10h-8zM2421 1675h8v10h-8zM2421 1715h8v10h-8zM2421 1735h8v10h-8zM2421 1875h8v10h-8zM2421 1755h8v10h-8zM2337 1345h8v10h-8v-10ZM2356 1365h8v10h-8v-10ZM2375 1365h8v10h-8v-10ZM2394 1345h8v10h-8v-10ZM2394 1365h8v10h-8v-10Z"/>
                    <path fill="${shade7}" fill-rule="evenodd" d="M2281 1345h-4v10h4v-10Zm-26 70h-4v10h4v-10Zm0 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm12-480h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm4-480h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm10-530h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-2 50v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm10-550h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Z" clip-rule="evenodd"/>
                    <path fill="url(#bb)" fill-opacity=".7" fill-rule="evenodd" d="M2281 1345h-4v10h4v-10Zm-26 70h-4v10h4v-10Zm0 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm12-480h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm4-480h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm10-530h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-2 50v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm10-550h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Z" clip-rule="evenodd"/>
                    <path fill="url(#bc)" d="M2321 1287h49v28h-49z"/>
                    <path fill="url(#bd)" d="M2332 1259h27v28h-27z"/>
                    <path fill="url(#be)" d="M2342 1200h7v59h-7z"/>
                    <path fill="url(#bf)" d="M1899 1154h75v760l-95 6 20-766Z"/>
                    <path fill="url(#bg)" d="M1974 1154h44l10 766h-54v-766Z"/>
                    <path fill="${shade1}" d="m1977 1154 51 766h-149l91.5-766h6.5Z"/>
                    <path fill="url(#bh)" d="m1977 1154 51 766h-149l91.5-766h6.5Z"/>
                    <mask id="bj" width="95" height="766" x="1879" y="1154" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="url(#bi)" d="M1899 1154h75v760l-95 6 20-766Z"/>
                    </mask>
                    <g fill="${accent2}" fill-opacity=".5" mask="url(#bj)">
                      <path d="M1884 1705h12v10h-12zM1883 1727h8v10h-8zM1882 1749h3v10h-3z"/>
                    </g>
                    <path fill="${accent2}" fill-opacity=".5" d="M1944 1485h42v10h-42zM1955 1463h42v10h-42zM1966 1441h33v10h-33zM1977 1419h27v10h-27zM1988 1397h21v10h-21zM1933 1507h42v10h-42zM1922 1529h42v10h-42zM1917 1551h36v10h-36zM1912 1573h30v10h-30zM1907 1595h24v10h-24zM1902 1617h18v10h-18zM1897 1639h14v10h-14zM1892 1661h14v10h-14zM2000 1375h14v10h-14zM2005 1353h14v10h-14zM1887 1683h14v10h-14z"/>
                    <mask id="bl" width="54" height="766" x="1974" y="1154" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="url(#bk)" d="M1974 1154h44l10 766h-54v-766Z"/>
                    </mask>
                    <g fill="${accent2}" fill-opacity=".5" mask="url(#bl)">
                      <path d="M2010 1331h11v10h-11zM2015 1309h6v10h-6z"/>
                    </g>
                    <path fill="${shade0}" d="M1940 1075h2v79h-2z"/>
                    <g filter="url(#bm)">
                      <ellipse cx="1941" cy="1074" fill="${accent0}" fill-opacity=".64" rx="23" ry="2" transform="rotate(-23 1941 1074)"/>
                    </g>
                    <g filter="url(#bn)">
                      <ellipse cx="1941" cy="1074" fill="${accent0}" fill-opacity=".64" rx="2" ry="23" transform="rotate(-23 1941 1074)"/>
                    </g>
                    <circle cx="1941" cy="1074" r="2" fill="${accent0}"/>
                    <circle cx="1941" cy="1074" r="2" fill="${shade7}" fill-opacity=".2"/>
                    <path fill="${shade4}" d="M1612 1397h24v523h-24z"/>
                    <path fill="url(#bo)" fill-opacity=".5" d="M1612 1397h24v523h-24z"/>
                    <path fill="${shade1}" d="M1636 1397h24v523h-24z"/>
                    <path fill="url(#bp)" fill-opacity=".5" d="M1636 1397h24v523h-24z"/>
                    <path fill="${shade2}" d="M1648 1413h67v507h-67z"/>
                    <path fill="url(#bq)" d="M1648 1413h67v507h-67z"/>
                    <path fill="${shade1}" d="M1818 1397h24v523h-24z"/>
                    <path fill="url(#br)" fill-opacity=".5" d="M1818 1397h24v523h-24z"/>
                    <path fill="${shade1}" d="M1794 1397h24v523h-24z"/>
                    <path fill="url(#bs)" fill-opacity=".5" d="M1794 1397h24v523h-24z"/>
                    <path fill="${shade2}" d="M1739 1413h67v507h-67z"/>
                    <path fill="url(#bt)" d="M1739 1413h67v507h-67z"/>
                    <path fill="${shade3}" d="M1648 1418h67v4h-67zM1648 1430h67v4h-67zM1648 1442h67v4h-67zM1648 1454h67v4h-67zM1648 1466h67v4h-67zM1648 1478h67v4h-67zM1648 1490h67v4h-67zM1648 1502h67v4h-67zM1648 1514h67v4h-67zM1648 1526h67v4h-67zM1648 1538h67v4h-67zM1648 1550h67v4h-67zM1648 1562h67v4h-67zM1648 1574h67v4h-67zM1648 1586h67v4h-67zM1648 1598h67v4h-67zM1648 1610h67v4h-67zM1648 1622h67v4h-67zM1648 1634h67v4h-67zM1648 1646h67v4h-67zM1648 1658h67v4h-67zM1648 1670h67v4h-67zM1648 1682h67v4h-67zM1648 1694h67v4h-67zM1648 1706h67v4h-67zM1648 1718h67v4h-67zM1648 1730h67v4h-67zM1648 1742h67v4h-67zM1648 1754h67v4h-67zM1648 1766h67v4h-67zM1648 1778h67v4h-67zM1648 1790h67v4h-67zM1648 1802h67v4h-67zM1648 1814h67v4h-67zM1648 1826h67v4h-67zM1648 1838h67v4h-67zM1648 1850h67v4h-67zM1648 1862h67v4h-67zM1648 1874h67v4h-67zM1648 1886h67v4h-67zM1648 1898h67v4h-67zM1739 1418h67v4h-67zM1739 1430h67v4h-67zM1739 1442h67v4h-67zM1739 1454h67v4h-67zM1739 1466h67v4h-67zM1739 1478h67v4h-67zM1739 1490h67v4h-67zM1739 1502h67v4h-67zM1739 1514h67v4h-67zM1739 1526h67v4h-67zM1739 1538h67v4h-67zM1739 1550h67v4h-67zM1739 1562h67v4h-67zM1739 1574h67v4h-67zM1739 1586h67v4h-67zM1739 1598h67v4h-67zM1739 1610h67v4h-67zM1739 1622h67v4h-67zM1739 1634h67v4h-67zM1739 1646h67v4h-67zM1739 1658h67v4h-67zM1739 1670h67v4h-67zM1739 1682h67v4h-67zM1739 1694h67v4h-67zM1739 1706h67v4h-67zM1739 1718h67v4h-67zM1739 1730h67v4h-67zM1739 1742h67v4h-67zM1739 1754h67v4h-67zM1739 1766h67v4h-67zM1739 1778h67v4h-67zM1739 1790h67v4h-67zM1739 1802h67v4h-67zM1739 1814h67v4h-67zM1739 1826h67v4h-67zM1739 1838h67v4h-67zM1739 1850h67v4h-67zM1739 1862h67v4h-67zM1739 1874h67v4h-67zM1739 1886h67v4h-67zM1739 1898h67v4h-67z"/>
                    <path fill="${accent6}" d="M1657 1478h14v4h-14zM1802 1442h4v4h-4zM1790 1442h4v4h-4zM1688 1538h4v4h-4zM1679 1598h8v4h-8zM1794 1718h8v4h-8zM1763 1610h8v4h-8zM1670 1646h45v4h-45zM1739 1802h45v4h-45zM1739 1454h45v4h-45z"/>
                    <path fill="${shade4}" d="M1703 1397h24v523h-24z"/>
                    <path fill="url(#bu)" fill-opacity=".5" d="M1703 1397h24v523h-24z"/>
                    <path fill="${shade1}" d="M1727 1397h24v523h-24z"/>
                    <path fill="url(#bv)" fill-opacity=".5" d="M1727 1397h24v523h-24z"/>
                    <mask id="bw" width="24" height="103" x="1612" y="1294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade5shade6}" d="M1612 1294h24v103h-24z"/>
                    </mask>
                    <g filter="url(#bx)" mask="url(#bw)">
                      <path fill="url(#by)" d="M1607 1300h34v103h-34z"/>
                    </g>
                    <mask id="bz" width="24" height="103" x="1703" y="1294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade5shade6}" d="M1703 1294h24v103h-24z"/>
                    </mask>
                    <g filter="url(#bA)" mask="url(#bz)">
                      <path fill="url(#bB)" d="M1698 1300h34v103h-34z"/>
                    </g>
                    <mask id="bC" width="24" height="103" x="1794" y="1294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade5shade6}" d="M1794 1294h24v103h-24z"/>
                    </mask>
                    <g filter="url(#bD)" mask="url(#bC)">
                      <path fill="url(#bE)" d="M1789 1300h34v103h-34z"/>
                    </g>
                    <path fill="${shade0}" d="M1171 1775h31v145h-31z"/>
                    <path fill="${accent5}" fill-opacity=".38" d="M1171 1775h31v145h-31z"/>
                    <path fill="${shade0}" d="M1202 1775h285v145h-285z"/>
                    <path fill="${accent5}" fill-opacity=".25" d="M1202 1775h285v145h-285z"/>
                    <path fill="url(#bF)" fill-opacity=".5" d="M1202 1775h285v145h-285z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M1190 1806h4v5h-4zM1179 1806h4v5h-4z"/>
                    <path fill="${shade4}" fill-opacity=".33" d="M1190 1789h4v5h-4zM1179 1789h4v5h-4zM1190 1823h4v5h-4zM1179 1823h4v5h-4zM1190 1840h4v5h-4zM1179 1840h4v5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M1190 1857h4v5h-4zM1179 1857h4v5h-4z"/>
                    <path fill="${shade4}" fill-opacity=".33" d="M1190 1874h4v5h-4zM1179 1874h4v5h-4zM1190 1891h4v5h-4zM1179 1891h4v5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M1229 1787h12v10h-12zM1209 1804h12v10h-12z"/>
                    <path fill="${shade0}" fill-opacity=".25" d="M1209 1787h12v10h-12zM1269 1787h12v10h-12zM1309 1787h12v10h-12zM1329 1787h12v10h-12zM1349 1787h12v10h-12zM1369 1787h12v10h-12zM1389 1787h12v10h-12zM1429 1787h12v10h-12zM1449 1787h12v10h-12zM1469 1787h12v10h-12zM1229 1804h12v10h-12zM1249 1804h12v10h-12zM1269 1804h12v10h-12zM1289 1804h12v10h-12zM1309 1804h12v10h-12zM1329 1804h12v10h-12zM1349 1804h12v10h-12zM1369 1804h12v10h-12zM1389 1804h12v10h-12zM1409 1804h12v10h-12zM1429 1804h12v10h-12zM1449 1804h12v10h-12zM1209 1821h12v10h-12zM1229 1821h12v10h-12zM1249 1821h12v10h-12zM1269 1821h12v10h-12zM1289 1821h12v10h-12zM1309 1821h12v10h-12zM1329 1821h12v10h-12zM1349 1821h12v10h-12zM1369 1821h12v10h-12zM1389 1821h12v10h-12zM1409 1821h12v10h-12zM1429 1821h12v10h-12zM1449 1821h12v10h-12zM1209 1838h12v10h-12zM1229 1838h12v10h-12zM1249 1838h12v10h-12zM1269 1838h12v10h-12zM1289 1838h12v10h-12zM1329 1838h12v10h-12zM1349 1838h12v10h-12zM1389 1838h12v10h-12zM1409 1838h12v10h-12zM1469 1838h12v10h-12zM1229 1855h12v10h-12zM1289 1855h12v10h-12zM1309 1855h12v10h-12zM1329 1855h12v10h-12zM1349 1855h12v10h-12zM1369 1855h12v10h-12zM1389 1855h12v10h-12zM1409 1855h12v10h-12zM1429 1855h12v10h-12zM1449 1855h12v10h-12zM1469 1855h12v10h-12zM1209 1872h12v10h-12zM1249 1872h12v10h-12zM1269 1872h12v10h-12zM1289 1872h12v10h-12zM1349 1872h12v10h-12zM1369 1872h12v10h-12zM1389 1872h12v10h-12zM1409 1872h12v10h-12zM1429 1872h12v10h-12zM1449 1872h12v10h-12zM1469 1872h12v10h-12zM1209 1889h12v10h-12zM1229 1889h12v10h-12zM1249 1889h12v10h-12zM1269 1889h12v10h-12zM1289 1889h12v10h-12zM1309 1889h12v10h-12zM1329 1889h12v10h-12zM1369 1889h12v10h-12zM1389 1889h12v10h-12zM1409 1889h12v10h-12zM1449 1889h12v10h-12zM1469 1889h12v10h-12z"/>
                    <path fill="${accent2}" fill-opacity=".76" d="M1209 1855h12v10h-12zM1249 1787h12v10h-12zM1289 1787h12v10h-12zM1409 1787h12v10h-12zM1469 1804h12v10h-12zM1469 1821h12v10h-12zM1449 1838h12v10h-12zM1429 1838h12v10h-12zM1369 1838h12v10h-12zM1309 1838h12v10h-12zM1249 1855h12v10h-12zM1269 1855h12v10h-12zM1309 1872h12v10h-12zM1349 1889h12v10h-12zM1429 1889h12v10h-12zM1329 1872h12v10h-12zM1229 1872h12v10h-12z"/>
                    <path fill="${shade7}" fill-opacity=".2" d="M1207 1792h16v6h-16zM1207 1809h16v6h-16zM1207 1826h16v6h-16zM1207 1843h16v6h-16zM1207 1860h16v6h-16zM1207 1877h16v6h-16zM1207 1894h16v6h-16zM1227 1792h16v6h-16zM1227 1809h16v6h-16zM1227 1826h16v6h-16zM1227 1843h16v6h-16zM1227 1860h16v6h-16zM1227 1877h16v6h-16zM1227 1894h16v6h-16zM1247 1792h16v6h-16zM1247 1809h16v6h-16zM1247 1826h16v6h-16zM1247 1843h16v6h-16zM1247 1860h16v6h-16zM1247 1877h16v6h-16zM1247 1894h16v6h-16zM1267 1792h16v6h-16zM1267 1809h16v6h-16zM1267 1826h16v6h-16zM1267 1843h16v6h-16zM1267 1860h16v6h-16zM1267 1877h16v6h-16zM1267 1894h16v6h-16zM1287 1792h16v6h-16zM1287 1809h16v6h-16zM1287 1826h16v6h-16zM1287 1843h16v6h-16zM1287 1860h16v6h-16zM1287 1877h16v6h-16zM1287 1894h16v6h-16zM1307 1792h16v6h-16zM1307 1809h16v6h-16zM1307 1826h16v6h-16zM1307 1843h16v6h-16zM1307 1860h16v6h-16zM1307 1877h16v6h-16zM1307 1894h16v6h-16zM1327 1792h16v6h-16zM1327 1809h16v6h-16zM1327 1826h16v6h-16zM1327 1843h16v6h-16zM1327 1860h16v6h-16zM1327 1877h16v6h-16zM1327 1894h16v6h-16zM1347 1792h16v6h-16zM1347 1809h16v6h-16zM1347 1826h16v6h-16zM1347 1843h16v6h-16zM1347 1860h16v6h-16zM1347 1877h16v6h-16zM1347 1894h16v6h-16zM1367 1792h16v6h-16zM1367 1809h16v6h-16zM1367 1826h16v6h-16zM1367 1843h16v6h-16zM1367 1860h16v6h-16zM1367 1877h16v6h-16zM1367 1894h16v6h-16zM1387 1792h16v6h-16zM1387 1809h16v6h-16zM1387 1826h16v6h-16zM1387 1843h16v6h-16zM1387 1860h16v6h-16zM1387 1877h16v6h-16zM1387 1894h16v6h-16zM1407 1792h16v6h-16zM1407 1809h16v6h-16zM1407 1826h16v6h-16zM1407 1843h16v6h-16zM1407 1860h16v6h-16zM1407 1877h16v6h-16zM1407 1894h16v6h-16zM1427 1792h16v6h-16zM1427 1809h16v6h-16zM1427 1826h16v6h-16zM1427 1843h16v6h-16zM1427 1860h16v6h-16zM1427 1877h16v6h-16zM1427 1894h16v6h-16zM1447 1792h16v6h-16zM1447 1809h16v6h-16zM1447 1826h16v6h-16zM1447 1843h16v6h-16zM1447 1860h16v6h-16zM1447 1877h16v6h-16zM1447 1894h16v6h-16zM1467 1792h16v6h-16zM1467 1809h16v6h-16zM1467 1826h16v6h-16zM1467 1843h16v6h-16zM1467 1860h16v6h-16zM1467 1877h16v6h-16zM1467 1894h16v6h-16z"/>
                    <path fill="${shade0}" d="M1567 1546h107v374h-107z"/>
                    <path fill="url(#bG)" d="M1567 1546h107v374h-107z"/>
                    <path fill="${shade0}" d="M1561 1508h93v38h-93z"/>
                    <mask id="bH" width="123" height="103" x="1438" y="1405" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade5shade6}" d="M1438 1405h123v103h-123z"/>
                    </mask>
                    <g filter="url(#bI)" mask="url(#bH)">
                      <path fill="url(#bJ)" d="M1433 1411h133v103h-133z"/>
                    </g>
                    <mask id="bK" width="165" height="103" x="1402" y="1443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade5shade6}" d="M1402 1443h165v103h-165z"/>
                    </mask>
                    <g filter="url(#bL)" mask="url(#bK)">
                      <path fill="url(#bM)" d="M1397 1449h175v103h-175z"/>
                    </g>
                    <path fill="url(#bN)" d="M1438 1508h123v374h-123z"/>
                    <path fill="url(#bO)" d="M1402 1546h165v374h-165z"/>
                    <path fill="${accent0}" fill-opacity=".67" d="M1567 1606h30v24h-30zM1651 1576h23v24h-23zM1567 1696h23v24h-23zM1604 1696h23v24h-23zM1567 1846h30v24h-30zM1611 1846h30v24h-30zM1611 1606h63v24h-63zM1567 1726h107v24h-107z"/>
                    <path fill="url(#bP)" fill-rule="evenodd" d="M1514 1508h-28v17h-48v4h48v17h-15v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v44h28v-44h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h15v-17h47v-4h-47v-17Z" clip-rule="evenodd"/>
                    <mask id="bQ" width="266" height="92" x="1001" y="1821" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" stroke="white" stroke-width="2" d="M1004.72 1854.41c-.92-.57-1.68-1.15-2.28-1.66v58.44h263v-64.85c-.01-.01-.01-.03-.01-.05-.01-.06-.04-.18-.11-.33-.13-.29-.43-.76-1.11-1.27-1.38-1.02-4.38-2.22-10.8-2.22-3.52 0-6.89-1.38-10.09-3.35-3.19-1.96-6.29-4.57-9.27-7.13-.27-.24-.55-.47-.83-.71-2.69-2.32-5.28-4.55-7.8-6.25-2.78-1.89-5.35-3.03-7.74-3.03-7.13 0-13.4 4-19.42 10.28-5.49 5.71-10.64 13.18-15.96 20.88-.53.76-1.05 1.52-1.58 2.28-5.85 8.46-11.96 17.01-18.89 23.45-6.94 6.45-14.8 10.85-24.17 10.85-18.55 0-30.07-11.7-39.26-23.08-1.44-1.79-2.82-3.56-4.17-5.29-2.96-3.8-5.72-7.35-8.53-10.25-4.07-4.2-8.01-6.79-12.43-6.79-10.4 0-17.88 3.03-25.82 6.26-.3.12-.61.24-.91.37-8.3 3.36-17.18 6.77-30.22 6.77-5.06 0-8.97-1.66-11.6-3.32Z"/>
                    </mask>
                    <g mask="url(#bQ)">
                      <path fill="${shade0}" fill-rule="evenodd" d="m998.654 1811.12.978.21-23.286 109.55-.978-.21 23.286-109.55Zm7.996 0 .98.21-23.284 109.55-.978-.21 23.282-109.55Zm8.98.21-.98-.21-23.282 109.55.978.21 23.284-109.55Zm7.02-.21.98.21-23.28 109.55-.982-.21 23.282-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Z" clip-rule="evenodd"/>
                    </g>
                    <g filter="url(#bR)">
                      <path stroke="${shade0}" stroke-width="2" d="M1004.72 1854.41c-.92-.57-1.68-1.15-2.28-1.66v58.44h263v-64.85c-.01-.01-.01-.03-.01-.05-.01-.06-.04-.18-.11-.33-.13-.29-.43-.76-1.11-1.27-1.38-1.02-4.38-2.22-10.8-2.22-3.52 0-6.89-1.38-10.09-3.35-3.19-1.96-6.29-4.57-9.27-7.13-.27-.24-.55-.47-.83-.71-2.69-2.32-5.28-4.55-7.8-6.25-2.78-1.89-5.35-3.03-7.74-3.03-7.13 0-13.4 4-19.42 10.28-5.49 5.71-10.64 13.18-15.96 20.88-.53.76-1.05 1.52-1.58 2.28-5.85 8.46-11.96 17.01-18.89 23.45-6.94 6.45-14.8 10.85-24.17 10.85-18.55 0-30.07-11.7-39.26-23.08-1.44-1.79-2.82-3.56-4.17-5.29-2.96-3.8-5.72-7.35-8.53-10.25-4.07-4.2-8.01-6.79-12.43-6.79-10.4 0-17.88 3.03-25.82 6.26-.3.12-.61.24-.91.37-8.3 3.36-17.18 6.77-30.22 6.77-5.06 0-8.97-1.66-11.6-3.32Z"/>
                    </g>
                    <mask id="bS" width="266" height="75" x="1001" y="1839" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" stroke="white" stroke-width="2" d="M1002.44 1850.69v61.61h263v-63.43c-.31.24-.65.48-1.05.71-2.19 1.33-5.82 2.57-11.73 2.57-2.58 0-4.83 1.07-7.1 2.81-1.76 1.36-3.46 3.06-5.29 4.89-.55.55-1.12 1.12-1.7 1.69-4.97 4.87-10.98 9.96-20.52 9.96-4.84 0-9.52-2.02-14.08-4.92-4.25-2.71-8.5-6.25-12.75-9.8-.31-.25-.62-.51-.93-.77-4.59-3.82-9.2-7.58-13.94-10.4-4.74-2.81-9.54-4.63-14.5-4.63-4.69 0-9.24 3.67-13.79 9.72-4.5 5.99-8.76 14.01-12.96 22.12-.41.8-.82 1.6-1.23 2.39-3.75 7.27-7.45 14.45-11.18 19.97-2.07 3.07-4.18 5.69-6.35 7.54-2.18 1.86-4.5 3.02-6.97 3.02h-27.91c-6.29 0-12.21-4-17.82-9.66-5.64-5.68-11.15-13.24-16.58-20.71l-.24-.33c-5.37-7.39-10.67-14.68-16.01-20.16-5.45-5.58-10.73-9.06-15.98-9.06-5.02 0-8.17 1.34-10.04 2.62-.94.64-1.57 1.27-1.96 1.74-.18.21-.31.39-.39.51Z"/>
                    </mask>
                    <g mask="url(#bS)">
                      <path fill="${shade0}" fill-rule="evenodd" d="m975.368 1811.33.978-.21 23.286 109.55-.978.21-23.286-109.55Zm8 0 .978-.21 23.284 109.55-.98.21-23.282-109.55Zm8.978-.21-.978.21 23.282 109.55.98-.21-23.284-109.55Zm7.022.21.982-.21 23.28 109.55-.98.21-23.282-109.55Zm8.982-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Z" clip-rule="evenodd"/>
                    </g>
                    <g filter="url(#bT)">
                      <path stroke="${shade0}" stroke-width="2" d="M1002.44 1850.69v61.61h263v-63.43c-.31.24-.65.48-1.05.71-2.19 1.33-5.82 2.57-11.73 2.57-2.58 0-4.83 1.07-7.1 2.81-1.76 1.36-3.46 3.06-5.29 4.89-.55.55-1.12 1.12-1.7 1.69-4.97 4.87-10.98 9.96-20.52 9.96-4.84 0-9.52-2.02-14.08-4.92-4.25-2.71-8.5-6.25-12.75-9.8-.31-.25-.62-.51-.93-.77-4.59-3.82-9.2-7.58-13.94-10.4-4.74-2.81-9.54-4.63-14.5-4.63-4.69 0-9.24 3.67-13.79 9.72-4.5 5.99-8.76 14.01-12.96 22.12-.41.8-.82 1.6-1.23 2.39-3.75 7.27-7.45 14.45-11.18 19.97-2.07 3.07-4.18 5.69-6.35 7.54-2.18 1.86-4.5 3.02-6.97 3.02h-27.91c-6.29 0-12.21-4-17.82-9.66-5.64-5.68-11.15-13.24-16.58-20.71l-.24-.33c-5.37-7.39-10.67-14.68-16.01-20.16-5.45-5.58-10.73-9.06-15.98-9.06-5.02 0-8.17 1.34-10.04 2.62-.94.64-1.57 1.27-1.96 1.74-.18.21-.31.39-.39.51Z"/>
                    </g>
                    <path fill="${shade0}" d="M901 1908h2038s35 0 50 6 50 6 50 6H801s35 0 50-6 50-6 50-6Z"/>
                    <path fill="${accent2}" d="M919 1912h4v4h-4zM929 1912h4v4h-4zM959 1912h4v4h-4zM989 1912h4v4h-4zM1019 1912h4v4h-4zM1029 1912h4v4h-4zM1069 1912h4v4h-4zM1109 1912h4v4h-4zM1139 1912h4v4h-4zM1149 1912h4v4h-4zM1189 1912h4v4h-4zM1269 1912h4v4h-4zM1279 1912h4v4h-4zM1319 1912h4v4h-4zM1329 1912h4v4h-4zM1379 1912h4v4h-4zM1429 1912h4v4h-4zM1489 1912h4v4h-4zM1499 1912h4v4h-4zM1559 1912h4v4h-4zM1569 1912h4v4h-4zM1579 1912h4v4h-4zM1589 1912h4v4h-4zM1609 1912h4v4h-4zM1629 1912h4v4h-4zM1669 1912h4v4h-4zM1699 1912h4v4h-4zM1709 1912h4v4h-4zM1769 1912h4v4h-4zM1819 1912h4v4h-4zM1849 1912h4v4h-4zM1859 1912h4v4h-4zM1869 1912h4v4h-4zM1899 1912h4v4h-4zM1929 1912h4v4h-4zM1979 1912h4v4h-4zM2049 1912h4v4h-4zM2079 1912h4v4h-4zM2139 1912h4v4h-4zM2149 1912h4v4h-4zM2189 1912h4v4h-4zM2229 1912h4v4h-4zM2269 1912h4v4h-4zM2279 1912h4v4h-4zM2319 1912h4v4h-4zM2359 1912h4v4h-4zM2379 1912h4v4h-4zM2399 1912h4v4h-4zM2429 1912h4v4h-4zM2439 1912h4v4h-4zM2479 1912h4v4h-4zM2529 1912h4v4h-4zM2609 1912h4v4h-4zM2619 1912h4v4h-4zM2629 1912h4v4h-4zM2669 1912h4v4h-4zM2719 1912h4v4h-4zM2789 1912h4v4h-4zM2799 1912h4v4h-4zM2849 1912h4v4h-4zM2899 1912h4v4h-4zM2909 1912h4v4h-4z"/>
                    <path fill="${shade0}" d="M1320.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#bU)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1315.77 1880.2)"/>
                    </g>
                    <g filter="url(#bV)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1311 1892.09)"/>
                    </g>
                    <ellipse cx="1321.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1321.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1370.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#bW)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1365.77 1880.2)"/>
                    </g>
                    <g filter="url(#bX)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1361 1892.09)"/>
                    </g>
                    <ellipse cx="1371.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1371.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1420.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#bY)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1415.77 1880.2)"/>
                    </g>
                    <g filter="url(#bZ)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1411 1892.09)"/>
                    </g>
                    <ellipse cx="1421.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1421.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1470.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#ca)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1465.77 1880.2)"/>
                    </g>
                    <g filter="url(#cb)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1461 1892.09)"/>
                    </g>
                    <ellipse cx="1471.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1471.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1520.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cc)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1515.77 1880.2)"/>
                    </g>
                    <g filter="url(#cd)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1511 1892.09)"/>
                    </g>
                    <ellipse cx="1521.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1521.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1570.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#ce)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1565.77 1880.2)"/>
                    </g>
                    <g filter="url(#cf)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1561 1892.09)"/>
                    </g>
                    <ellipse cx="1571.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1571.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1620.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cg)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1615.77 1880.2)"/>
                    </g>
                    <g filter="url(#ch)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1611 1892.09)"/>
                    </g>
                    <ellipse cx="1621.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1621.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1670.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#ci)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1665.77 1880.2)"/>
                    </g>
                    <g filter="url(#cj)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1661 1892.09)"/>
                    </g>
                    <ellipse cx="1671.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1671.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1720.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#ck)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1715.77 1880.2)"/>
                    </g>
                    <g filter="url(#cl)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1711 1892.09)"/>
                    </g>
                    <ellipse cx="1721.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1721.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1770.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cm)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1765.77 1880.2)"/>
                    </g>
                    <g filter="url(#cn)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1761 1892.09)"/>
                    </g>
                    <ellipse cx="1771.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1771.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1820.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#co)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1815.77 1880.2)"/>
                    </g>
                    <g filter="url(#cp)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1811 1892.09)"/>
                    </g>
                    <ellipse cx="1821.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1821.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1870.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cq)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1865.77 1880.2)"/>
                    </g>
                    <g filter="url(#cr)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1861 1892.09)"/>
                    </g>
                    <ellipse cx="1871.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1871.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1920.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cs)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1915.77 1880.2)"/>
                    </g>
                    <g filter="url(#ct)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1911 1892.09)"/>
                    </g>
                    <ellipse cx="1921.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1921.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M1970.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cu)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 1965.77 1880.2)"/>
                    </g>
                    <g filter="url(#cv)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 1961 1892.09)"/>
                    </g>
                    <ellipse cx="1971.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="1971.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2020.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cw)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2015.77 1880.2)"/>
                    </g>
                    <g filter="url(#cx)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2011 1892.09)"/>
                    </g>
                    <ellipse cx="2021.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2021.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2070.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cy)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2065.77 1880.2)"/>
                    </g>
                    <g filter="url(#cz)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2061 1892.09)"/>
                    </g>
                    <ellipse cx="2071.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2071.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2120.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cA)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2115.77 1880.2)"/>
                    </g>
                    <g filter="url(#cB)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2111 1892.09)"/>
                    </g>
                    <ellipse cx="2121.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2121.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2170.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cC)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2165.77 1880.2)"/>
                    </g>
                    <g filter="url(#cD)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2161 1892.09)"/>
                    </g>
                    <ellipse cx="2171.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2171.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2220.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cE)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2215.77 1880.2)"/>
                    </g>
                    <g filter="url(#cF)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2211 1892.09)"/>
                    </g>
                    <ellipse cx="2221.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2221.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2270.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cG)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2265.77 1880.2)"/>
                    </g>
                    <g filter="url(#cH)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2261 1892.09)"/>
                    </g>
                    <ellipse cx="2271.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2271.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2320.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cI)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2315.77 1880.2)"/>
                    </g>
                    <g filter="url(#cJ)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2311 1892.09)"/>
                    </g>
                    <ellipse cx="2321.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2321.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2370.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cK)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2365.77 1880.2)"/>
                    </g>
                    <g filter="url(#cL)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2361 1892.09)"/>
                    </g>
                    <ellipse cx="2371.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2371.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2420.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cM)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2415.77 1880.2)"/>
                    </g>
                    <g filter="url(#cN)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2411 1892.09)"/>
                    </g>
                    <ellipse cx="2421.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2421.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2470.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cO)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2465.77 1880.2)"/>
                    </g>
                    <g filter="url(#cP)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2461 1892.09)"/>
                    </g>
                    <ellipse cx="2471.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2471.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2520.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cQ)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2515.77 1880.2)"/>
                    </g>
                    <g filter="url(#cR)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2511 1892.09)"/>
                    </g>
                    <ellipse cx="2521.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2521.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2570.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cS)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2565.77 1880.2)"/>
                    </g>
                    <g filter="url(#cT)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2561 1892.09)"/>
                    </g>
                    <ellipse cx="2571.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2571.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2620.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cU)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2615.77 1880.2)"/>
                    </g>
                    <g filter="url(#cV)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2611 1892.09)"/>
                    </g>
                    <ellipse cx="2621.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2621.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M2670.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                    <g filter="url(#cW)">
                      <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 -.393404 .38807 .92163 2665.77 1880.2)"/>
                    </g>
                    <g filter="url(#cX)">
                      <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 -.393404 .38807 .92163 2661 1892.09)"/>
                    </g>
                    <ellipse cx="2671.25" cy="1889.35" fill="${accent5}" rx="1.5" ry="1.5121"/>
                    <ellipse cx="2671.25" cy="1889.35" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121"/>
                    <path fill="${shade0}" d="M0 1920h3840v1920H0z"/>
                    <g filter="url(#cY)">
                      <path fill="${shade7}" d="M2982 2795h4v-4h-4z"/>
                      <path fill="${shade6}" d="M1992 2705h4v-4h-4z"/>
                      <path fill="${shade5}" d="M1366 2475h4v-4h-4zM3726 2379h4v-4h-4z"/>
                      <path fill="${shade7}" d="M1692 2865h4v-4h-4z"/>
                      <path fill="${shade6}" d="M702 2775h4v-4h-4z"/>
                      <path fill="${shade5}" d="M76 2545h4v-4h-4zM2436 2449h4v-4h-4z"/>
                      <path fill="${shade7}" d="M2614 2644h2v-2h-2z"/>
                      <path fill="${shade6}" d="M1624 2554h2v-2h-2z"/>
                      <path fill="${shade5}" d="M998 2324h2v-2h-2zM3358 2228h2v-2h-2z"/>
                      <path fill="${shade7}" d="M2044 2454h2v-2h-2z"/>
                      <path fill="${shade6}" d="M1054 2364h2v-2h-2z"/>
                      <path fill="${shade5}" d="M428 2134h2v-2h-2zM2788 2038h2v-2h-2z"/>
                      <path fill="${shade7}" d="M2286 2849h1v-1h-1z"/>
                      <path fill="${shade6}" d="M1296 2759h1v-1h-1z"/>
                      <path fill="${shade5}" d="M670 2529h1v-1h-1zM3030 2433h1v-1h-1z"/>
                      <path fill="${shade7}" d="M824 3758h-4v-4h4z"/>
                      <path fill="${shade6}" d="M1814 3668h-4v-4h4z"/>
                      <path fill="${shade5}" d="M2440 3438h-4v-4h4zM80 3342h-4v-4h4z"/>
                      <path fill="${shade7}" d="M2114 3828h-4v-4h4z"/>
                      <path fill="${shade6}" d="M3104 3738h-4v-4h4z"/>
                      <path fill="${shade5}" d="M3730 3508h-4v-4h4zM1370 3412h-4v-4h4z"/>
                      <path fill="${shade7}" d="M1192 3607h-2v-2h2z"/>
                      <path fill="${shade6}" d="M2182 3517h-2v-2h2z"/>
                      <path fill="${shade5}" d="M2808 3287h-2v-2h2zM448 3191h-2v-2h2z"/>
                      <path fill="${shade7}" d="M1762 3417h-2v-2h2z"/>
                      <path fill="${shade6}" d="M2752 3327h-2v-2h2z"/>
                      <path fill="${shade5}" d="M3378 3097h-2v-2h2zM1018 3001h-2v-2h2z"/>
                      <path fill="${shade7}" d="M1520 3812h-1v-1h1z"/>
                      <path fill="${shade6}" d="M2510 3722h-1v-1h1z"/>
                      <path fill="${shade5}" d="M3136 3492h-1v-1h1zM776 3396h-1v-1h1z"/>
                    </g>
                    <mask id="cZ" width="3840" height="1920" x="0" y="1920" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade0}" d="M0 1920h3840v1920H0z"/>
                    </mask>
                    <g mask="url(#cZ)">
                      <path fill="url(#da)" fill-opacity=".5" d="M0 0h3840v3840H0z" transform="matrix(1 0 0 -1 0 3840)"/>
                      <path fill="url(#db)" fill-opacity=".7" d="M0 0h3840v3840H0z" transform="matrix(1 0 0 -1 0 3840)"/>
                      <path fill="url(#dc)" fill-opacity=".4" d="M0 0h3840v3840H0z" transform="matrix(1 0 0 -1 0 3840)"/>
                    </g>
                    <g filter="url(#dd)" opacity=".6">
                      <path fill="${shade0}" fill-rule="evenodd" d="M2245 2372h-180v-30h-99v-422h378v422h-99v30Z" clip-rule="evenodd"/>
                      <path fill="url(#de)" fill-rule="evenodd" d="M2245 2372h-180v-30h-99v-422h378v422h-99v30Z" clip-rule="evenodd"/>
                      <path fill="${accent4}" fill-opacity=".66" d="M2065 2345h180v-3h-180z"/>
                      <path fill="${shade0}" d="M1832 2308h283v-388h-283z"/>
                      <path fill="${accent4}" fill-opacity=".5" d="M1832 2308h283v-388h-283z"/>
                      <path fill="${shade0}" d="M1842 2298h263v-10h-263z"/>
                      <path fill="${accent4}" d="M1842 2278h263v-10h-263zM1842 2258h263v-10h-263z"/>
                      <path fill="${shade0}" d="M1842 2238h263v-10h-263zM1842 2218h263v-10h-263zM1842 2198h263v-10h-263z"/>
                      <path fill="${accent4}" d="M2078 2198h27v-10h-27z"/>
                      <path fill="${shade0}" d="M1842 2178h263v-10h-263zM1842 2158h263v-10h-263zM1842 2138h263v-10h-263zM1842 2118h263v-10h-263zM1842 2098h263v-10h-263zM1842 2078h263v-10h-263zM1842 2058h263v-10h-263z"/>
                      <path fill="${accent4}" d="M1842 2038h263v-10h-263z"/>
                      <path fill="${shade0}" d="M1842 2018h263v-10h-263zM1842 1998h263v-10h-263zM1842 1978h263v-10h-263zM1842 1958h263v-10h-263z"/>
                      <path fill="${accent4}" d="M2051 2078h27v-10h-27z"/>
                      <path fill="${shade0}" d="M1842 1938h263v-10h-263z"/>
                      <path fill="${accent4}" d="M1869 2158h27v-10h-27z"/>
                      <path fill="${shade0}" d="M2478 1920h-283v388h283z"/>
                      <path fill="${accent4}" fill-opacity=".5" d="M2478 1920h-283v388h283z"/>
                      <path fill="${shade0}" d="M2468 1930h-263v10h263z"/>
                      <path fill="${accent4}" d="M2468 1950h-263v10h263zM2468 1970h-263v10h263z"/>
                      <path fill="${shade0}" d="M2468 1990h-263v10h263zM2468 2010h-263v10h263zM2468 2030h-263v10h263z"/>
                      <path fill="${accent4}" d="M2232 2030h-27v10h27z"/>
                      <path fill="${shade0}" d="M2468 2050h-263v10h263zM2468 2070h-263v10h263zM2468 2090h-263v10h263zM2468 2110h-263v10h263zM2468 2130h-263v10h263zM2468 2150h-263v10h263zM2468 2170h-263v10h263z"/>
                      <path fill="${accent4}" d="M2468 2190h-263v10h263z"/>
                      <path fill="${shade0}" d="M2468 2210h-263v10h263zM2468 2230h-263v10h263zM2468 2250h-263v10h263zM2468 2270h-263v10h263z"/>
                      <path fill="${accent4}" d="M2259 2150h-27v10h27z"/>
                      <path fill="${shade0}" d="M2468 2290h-263v10h263z"/>
                      <path fill="${accent4}" d="M2441 2070h-27v10h27z"/>
                      <path fill="${shade0}" d="M2320 2065h31v-145h-31z"/>
                      <path fill="${accent5}" fill-opacity=".38" d="M2320 2065h31v-145h-31z"/>
                      <path fill="${shade0}" d="M2351 2065h285v-145h-285z"/>
                      <path fill="${accent5}" fill-opacity=".25" d="M2351 2065h285v-145h-285z"/>
                      <path fill="url(#df)" fill-opacity=".5" d="M0 0h285v145H0z" transform="matrix(1 0 0 -1 2351 2065)"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M2339 2034h4v-5h-4zM2328 2034h4v-5h-4z"/>
                      <path fill="${shade4}" fill-opacity=".33" d="M2339 2051h4v-5h-4zM2328 2051h4v-5h-4zM2339 2017h4v-5h-4zM2328 2017h4v-5h-4zM2339 2000h4v-5h-4zM2328 2000h4v-5h-4z"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M2339 1983h4v-5h-4zM2328 1983h4v-5h-4z"/>
                      <path fill="${shade4}" fill-opacity=".33" d="M2339 1966h4v-5h-4zM2328 1966h4v-5h-4zM2339 1949h4v-5h-4zM2328 1949h4v-5h-4z"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M2378 2053h12v-10h-12zM2358 2036h12v-10h-12z"/>
                      <path fill="${shade0}" fill-opacity=".25" d="M2358 2053h12v-10h-12zM2418 2053h12v-10h-12zM2458 2053h12v-10h-12zM2478 2053h12v-10h-12zM2498 2053h12v-10h-12zM2518 2053h12v-10h-12zM2538 2053h12v-10h-12zM2578 2053h12v-10h-12zM2598 2053h12v-10h-12zM2618 2053h12v-10h-12zM2378 2036h12v-10h-12zM2398 2036h12v-10h-12zM2418 2036h12v-10h-12zM2438 2036h12v-10h-12zM2458 2036h12v-10h-12zM2478 2036h12v-10h-12zM2498 2036h12v-10h-12zM2518 2036h12v-10h-12zM2538 2036h12v-10h-12zM2558 2036h12v-10h-12zM2578 2036h12v-10h-12zM2598 2036h12v-10h-12zM2358 2019h12v-10h-12zM2378 2019h12v-10h-12zM2398 2019h12v-10h-12zM2418 2019h12v-10h-12zM2438 2019h12v-10h-12zM2458 2019h12v-10h-12zM2478 2019h12v-10h-12zM2498 2019h12v-10h-12zM2518 2019h12v-10h-12zM2538 2019h12v-10h-12zM2558 2019h12v-10h-12zM2578 2019h12v-10h-12zM2598 2019h12v-10h-12zM2358 2002h12v-10h-12zM2378 2002h12v-10h-12zM2398 2002h12v-10h-12zM2418 2002h12v-10h-12zM2438 2002h12v-10h-12zM2478 2002h12v-10h-12zM2498 2002h12v-10h-12zM2538 2002h12v-10h-12zM2558 2002h12v-10h-12zM2618 2002h12v-10h-12zM2378 1985h12v-10h-12zM2438 1985h12v-10h-12zM2458 1985h12v-10h-12zM2478 1985h12v-10h-12zM2498 1985h12v-10h-12zM2518 1985h12v-10h-12zM2538 1985h12v-10h-12zM2558 1985h12v-10h-12zM2578 1985h12v-10h-12zM2598 1985h12v-10h-12zM2618 1985h12v-10h-12zM2358 1968h12v-10h-12zM2398 1968h12v-10h-12zM2418 1968h12v-10h-12zM2438 1968h12v-10h-12zM2498 1968h12v-10h-12zM2518 1968h12v-10h-12zM2538 1968h12v-10h-12zM2558 1968h12v-10h-12zM2578 1968h12v-10h-12zM2598 1968h12v-10h-12zM2618 1968h12v-10h-12zM2358 1951h12v-10h-12zM2378 1951h12v-10h-12zM2398 1951h12v-10h-12zM2418 1951h12v-10h-12zM2438 1951h12v-10h-12zM2458 1951h12v-10h-12zM2478 1951h12v-10h-12zM2518 1951h12v-10h-12zM2538 1951h12v-10h-12zM2558 1951h12v-10h-12zM2598 1951h12v-10h-12zM2618 1951h12v-10h-12z"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M2358 1985h12v-10h-12zM2398 2053h12v-10h-12zM2438 2053h12v-10h-12zM2558 2053h12v-10h-12zM2618 2036h12v-10h-12zM2618 2019h12v-10h-12zM2598 2002h12v-10h-12zM2578 2002h12v-10h-12zM2518 2002h12v-10h-12zM2458 2002h12v-10h-12zM2398 1985h12v-10h-12zM2418 1985h12v-10h-12zM2458 1968h12v-10h-12zM2498 1951h12v-10h-12zM2578 1951h12v-10h-12zM2478 1968h12v-10h-12zM2378 1968h12v-10h-12z"/>
                      <path fill="${shade7}" fill-opacity=".2" d="M2356 2048h16v-6h-16zM2356 2031h16v-6h-16zM2356 2014h16v-6h-16zM2356 1997h16v-6h-16zM2356 1980h16v-6h-16zM2356 1963h16v-6h-16zM2356 1946h16v-6h-16zM2376 2048h16v-6h-16zM2376 2031h16v-6h-16zM2376 2014h16v-6h-16zM2376 1997h16v-6h-16zM2376 1980h16v-6h-16zM2376 1963h16v-6h-16zM2376 1946h16v-6h-16zM2396 2048h16v-6h-16zM2396 2031h16v-6h-16zM2396 2014h16v-6h-16zM2396 1997h16v-6h-16zM2396 1980h16v-6h-16zM2396 1963h16v-6h-16zM2396 1946h16v-6h-16zM2416 2048h16v-6h-16zM2416 2031h16v-6h-16zM2416 2014h16v-6h-16zM2416 1997h16v-6h-16zM2416 1980h16v-6h-16zM2416 1963h16v-6h-16zM2416 1946h16v-6h-16zM2436 2048h16v-6h-16zM2436 2031h16v-6h-16zM2436 2014h16v-6h-16zM2436 1997h16v-6h-16zM2436 1980h16v-6h-16zM2436 1963h16v-6h-16zM2436 1946h16v-6h-16zM2456 2048h16v-6h-16zM2456 2031h16v-6h-16zM2456 2014h16v-6h-16zM2456 1997h16v-6h-16zM2456 1980h16v-6h-16zM2456 1963h16v-6h-16zM2456 1946h16v-6h-16zM2476 2048h16v-6h-16zM2476 2031h16v-6h-16zM2476 2014h16v-6h-16zM2476 1997h16v-6h-16zM2476 1980h16v-6h-16zM2476 1963h16v-6h-16zM2476 1946h16v-6h-16zM2496 2048h16v-6h-16zM2496 2031h16v-6h-16zM2496 2014h16v-6h-16zM2496 1997h16v-6h-16zM2496 1980h16v-6h-16zM2496 1963h16v-6h-16zM2496 1946h16v-6h-16zM2516 2048h16v-6h-16zM2516 2031h16v-6h-16zM2516 2014h16v-6h-16zM2516 1997h16v-6h-16zM2516 1980h16v-6h-16zM2516 1963h16v-6h-16zM2516 1946h16v-6h-16zM2536 2048h16v-6h-16zM2536 2031h16v-6h-16zM2536 2014h16v-6h-16zM2536 1997h16v-6h-16zM2536 1980h16v-6h-16zM2536 1963h16v-6h-16zM2536 1946h16v-6h-16zM2556 2048h16v-6h-16zM2556 2031h16v-6h-16zM2556 2014h16v-6h-16zM2556 1997h16v-6h-16zM2556 1980h16v-6h-16zM2556 1963h16v-6h-16zM2556 1946h16v-6h-16zM2576 2048h16v-6h-16zM2576 2031h16v-6h-16zM2576 2014h16v-6h-16zM2576 1997h16v-6h-16zM2576 1980h16v-6h-16zM2576 1963h16v-6h-16zM2576 1946h16v-6h-16zM2596 2048h16v-6h-16zM2596 2031h16v-6h-16zM2596 2014h16v-6h-16zM2596 1997h16v-6h-16zM2596 1980h16v-6h-16zM2596 1963h16v-6h-16zM2596 1946h16v-6h-16zM2616 2048h16v-6h-16zM2616 2031h16v-6h-16zM2616 2014h16v-6h-16zM2616 1997h16v-6h-16zM2616 1980h16v-6h-16zM2616 1963h16v-6h-16zM2616 1946h16v-6h-16z"/>
                      <path fill="${shade1}" d="M2368 2170h13v-250h-13z"/>
                      <path fill="url(#dg)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2368 2170)"/>
                      <path fill="${shade1}" d="M2576 2170h13v-250h-13z"/>
                      <path fill="url(#dh)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2576 2170)"/>
                      <path fill="${shade1}" d="M2795 2170h13v-250h-13z"/>
                      <path fill="url(#di)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2795 2170)"/>
                      <mask id="dj" width="428" height="203" x="2374" y="1967" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="white" d="M2801.5 2170v-203h-427v196.41c-.05 4.22 0 6.59 0 6.59v-6.59c.39-33.95 7.12-187.41 96.5-187.41 100.5 0 111.5 194 111.5 194s-1-194 109.5-194c107.55 0 109.47 183.79 109.5 193.59v.41Z"/>
                      </mask>
                      <g mask="url(#dj)">
                        <path fill="url(#dk)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2374 2170)"/>
                        <path fill="url(#dl)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2385 2170)"/>
                        <path fill="url(#dm)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2396 2170)"/>
                        <path fill="url(#dn)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2407 2170)"/>
                        <path fill="url(#do)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2418 2170)"/>
                        <path fill="url(#dp)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2429 2170)"/>
                        <path fill="url(#dq)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2440 2170)"/>
                        <path fill="url(#dr)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2451 2170)"/>
                        <path fill="url(#ds)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2462 2170)"/>
                        <path fill="url(#dt)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2473 2170)"/>
                        <path fill="url(#du)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2484 2170)"/>
                        <path fill="url(#dv)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2495 2170)"/>
                        <path fill="url(#dw)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2506 2170)"/>
                        <path fill="url(#dx)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2517 2170)"/>
                        <path fill="url(#dy)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2528 2170)"/>
                        <path fill="url(#dz)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2539 2170)"/>
                        <path fill="url(#dA)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2550 2170)"/>
                        <path fill="url(#dB)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2561 2170)"/>
                        <path fill="url(#dC)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2572 2170)"/>
                        <path fill="url(#dD)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2583 2170)"/>
                        <path fill="url(#dE)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2594 2170)"/>
                        <path fill="url(#dF)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2605 2170)"/>
                        <path fill="url(#dG)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2616 2170)"/>
                        <path fill="url(#dH)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2627 2170)"/>
                        <path fill="url(#dI)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2638 2170)"/>
                        <path fill="url(#dJ)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2649 2170)"/>
                        <path fill="url(#dK)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2660 2170)"/>
                        <path fill="url(#dL)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2671 2170)"/>
                        <path fill="url(#dM)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2682 2170)"/>
                        <path fill="url(#dN)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2693 2170)"/>
                        <path fill="url(#dO)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2704 2170)"/>
                        <path fill="url(#dP)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2715 2170)"/>
                        <path fill="url(#dQ)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2726 2170)"/>
                        <path fill="url(#dR)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2737 2170)"/>
                        <path fill="url(#dS)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2748 2170)"/>
                        <path fill="url(#dT)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2759 2170)"/>
                        <path fill="url(#dU)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2770 2170)"/>
                        <path fill="url(#dV)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2781 2170)"/>
                        <path fill="url(#dW)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2792 2170)"/>
                      </g>
                      <path stroke="url(#dX)" stroke-width="2" d="M2801.5 2170s1-194-109.5-194-109.5 194-109.5 194-11-194-111.5-194-96.5 194-96.5 194v-203h427v203Z"/>
                      <mask id="dY" width="450" height="203" x="2395" y="1967" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="white" d="M2727.5 1976c110.5 0 117 194 117 194v-203h-449v203s7-194 107.5-194 107.5 194 107.5 194 6.5-194 117-194Z"/>
                      </mask>
                      <g mask="url(#dY)">
                        <path fill="url(#dZ)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2396 2170)"/>
                        <path fill="url(#ea)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2408 2170)"/>
                        <path fill="url(#eb)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2420 2170)"/>
                        <path fill="url(#ec)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2432 2170)"/>
                        <path fill="url(#ed)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2444 2170)"/>
                        <path fill="url(#ee)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2456 2170)"/>
                        <path fill="url(#ef)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2468 2170)"/>
                        <path fill="url(#eg)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2480 2170)"/>
                        <path fill="url(#eh)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2492 2170)"/>
                        <path fill="url(#ei)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2504 2170)"/>
                        <path fill="url(#ej)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2516 2170)"/>
                        <path fill="url(#ek)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2528 2170)"/>
                        <path fill="url(#el)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2540 2170)"/>
                        <path fill="url(#em)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2552 2170)"/>
                        <path fill="url(#en)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2564 2170)"/>
                        <path fill="url(#eo)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2576 2170)"/>
                        <path fill="url(#ep)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2588 2170)"/>
                        <path fill="url(#eq)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2600 2170)"/>
                        <path fill="url(#er)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2612 2170)"/>
                        <path fill="url(#es)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2624 2170)"/>
                        <path fill="url(#et)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2636 2170)"/>
                        <path fill="url(#eu)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2648 2170)"/>
                        <path fill="url(#ev)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2660 2170)"/>
                        <path fill="url(#ew)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2672 2170)"/>
                        <path fill="url(#ex)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2684 2170)"/>
                        <path fill="url(#ey)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2696 2170)"/>
                        <path fill="url(#ez)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2708 2170)"/>
                        <path fill="url(#eA)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2720 2170)"/>
                        <path fill="url(#eB)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2732 2170)"/>
                        <path fill="url(#eC)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2744 2170)"/>
                        <path fill="url(#eD)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2756 2170)"/>
                        <path fill="url(#eE)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2768 2170)"/>
                        <path fill="url(#eF)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2780 2170)"/>
                        <path fill="url(#eG)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2792 2170)"/>
                        <path fill="url(#eH)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2804 2170)"/>
                        <path fill="url(#eI)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2816 2170)"/>
                        <path fill="url(#eJ)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2828 2170)"/>
                        <path fill="url(#eK)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2840 2170)"/>
                      </g>
                      <path stroke="url(#eL)" stroke-width="2" d="M2727.5 1976c110.5 0 117 194 117 194v-203h-449v203s7-194 107.5-194 107.5 194 107.5 194 6.5-194 117-194Z"/>
                      <path fill="${shade0}" d="M2372 1971h472v-7h-472z"/>
                      <path fill="url(#eM)" d="M0 0h472v7H0z" transform="matrix(1 0 0 -1 2372 1971)"/>
                      <path fill="${shade1}" d="M2389 2170h13v-250h-13z"/>
                      <path fill="url(#eN)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2389 2170)"/>
                      <path fill="${shade1}" d="M2604 2170h13v-250h-13z"/>
                      <path fill="url(#eO)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2604 2170)"/>
                      <path fill="${shade1}" d="M2838 2170h13v-250h-13z"/>
                      <path fill="url(#eP)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2838 2170)"/>
                      <path fill="url(#eQ)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2606 2173)"/>
                      <path fill="url(#eR)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2578 2173)"/>
                      <path fill="url(#eS)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2797 2173)"/>
                      <path fill="url(#eT)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2840 2173)"/>
                      <path fill="url(#eU)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2609 2176)"/>
                      <path fill="url(#eV)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2581 2176)"/>
                      <path fill="url(#eW)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2800 2176)"/>
                      <path fill="url(#eX)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2843 2176)"/>
                      <path fill="${shade1}" d="M2305 2455h145v-535h-145z"/>
                      <path fill="url(#eY)" d="M0 0h145v535H0z" transform="matrix(1 0 0 -1 2305 2455)"/>
                      <path fill="${shade7}" fill-opacity=".33" fill-rule="evenodd" d="M2444 2445h-133v-525h6v515h121v-515h6v525Z" clip-rule="evenodd"/>
                      <path fill="${shade2}" fill-opacity=".5" d="M2242 2455h63v-535h-63z"/>
                      <path fill="${shade1}" fill-opacity=".5" d="M2242 2455h63v-535h-63z"/>
                      <path fill="url(#eZ)" d="M0 0h63v535H0z" transform="matrix(1 0 0 -1 2242 2455)"/>
                      <path fill="${shade7}" fill-opacity=".33" fill-rule="evenodd" d="M2302 2445h-57v-525h3v515h51v-515h3v525Z" clip-rule="evenodd"/>
                      <path fill="${shade1}" d="M2315 2525h109v-70h-109z"/>
                      <path fill="${shade2shade3}" d="M2268 2525h47v-70h-47z"/>
                      <path fill="${shade7}" fill-opacity=".33" fill-rule="evenodd" d="M2418 2515h-97v-60h6v50h85v-50h6v60ZM2312 2515h-41v-60h3v50h35v-50h3v60Z" clip-rule="evenodd"/>
                      <path fill="${shade7}" fill-opacity=".6" d="M2326 2425h8v-10h-8zM2326 2405h8v-10h-8zM2326 2385h8v-10h-8zM2326 2345h8v-10h-8zM2326 2305h8v-10h-8zM2326 2225h8v-10h-8zM2326 2185h8v-10h-8zM2326 2145h8v-10h-8zM2326 2125h8v-10h-8zM2326 2105h8v-10h-8zM2326 2005h8v-10h-8zM2326 1985h8v-10h-8zM2326 2085h8v-10h-8zM2326 2065h8v-10h-8zM2345 2405h8v-10h-8zM2345 2385h8v-10h-8zM2345 2365h8v-10h-8zM2345 2345h8v-10h-8zM2345 2305h8v-10h-8zM2345 2265h8v-10h-8zM2345 2225h8v-10h-8zM2345 2205h8v-10h-8zM2345 2165h8v-10h-8zM2345 2105h8v-10h-8zM2345 2005h8v-10h-8zM2345 1945h8v-10h-8zM2345 2085h8v-10h-8zM2345 2045h8v-10h-8zM2345 2025h8v-10h-8zM2364 2405h8v-10h-8zM2364 2345h8v-10h-8zM2364 2305h8v-10h-8zM2364 2285h8v-10h-8zM2364 2265h8v-10h-8zM2364 2225h8v-10h-8zM2364 2205h8v-10h-8zM2364 2165h8v-10h-8zM2364 2125h8v-10h-8zM2364 2105h8v-10h-8zM2364 1985h8v-10h-8zM2364 1965h8v-10h-8zM2364 2045h8v-10h-8zM2383 2405h8v-10h-8zM2383 2385h8v-10h-8zM2383 2365h8v-10h-8zM2383 2325h8v-10h-8zM2383 2305h8v-10h-8zM2383 2285h8v-10h-8zM2383 2265h8v-10h-8zM2383 2225h8v-10h-8zM2383 2205h8v-10h-8zM2383 2185h8v-10h-8zM2383 2165h8v-10h-8zM2383 2125h8v-10h-8zM2383 2105h8v-10h-8zM2383 1965h8v-10h-8zM2383 2085h8v-10h-8zM2383 2065h8v-10h-8zM2383 2045h8v-10h-8zM2402 2425h8v-10h-8zM2402 2405h8v-10h-8zM2402 2385h8v-10h-8zM2402 2365h8v-10h-8zM2402 2345h8v-10h-8zM2402 2325h8v-10h-8zM2402 2265h8v-10h-8zM2402 2205h8v-10h-8zM2402 2185h8v-10h-8zM2402 2165h8v-10h-8zM2402 2125h8v-10h-8zM2402 2105h8v-10h-8zM2402 2005h8v-10h-8zM2402 1965h8v-10h-8zM2402 1945h8v-10h-8zM2402 2085h8v-10h-8zM2402 2065h8v-10h-8zM2402 2045h8v-10h-8zM2402 2025h8v-10h-8zM2421 2425h8v-10h-8zM2421 2405h8v-10h-8zM2421 2385h8v-10h-8zM2421 2365h8v-10h-8zM2421 2345h8v-10h-8zM2421 2325h8v-10h-8zM2421 2305h8v-10h-8zM2421 2285h8v-10h-8zM2421 2245h8v-10h-8zM2421 2225h8v-10h-8zM2421 2185h8v-10h-8zM2421 2165h8v-10h-8zM2421 2125h8v-10h-8zM2421 2105h8v-10h-8zM2421 1965h8v-10h-8zM2421 2085h8v-10h-8zM2337 2495h8v-10h-8v10ZM2356 2475h8v-10h-8v10ZM2375 2475h8v-10h-8v10ZM2394 2495h8v-10h-8v10ZM2394 2475h8v-10h-8v10Z"/>
                      <path fill="${shade7}" fill-rule="evenodd" d="M2281 2495h-4v-10h4v10Zm-26-70h-4v-10h4v10Zm0-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm12 480h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm4 480h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm10 530h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-2-50v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm10 550h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Z" clip-rule="evenodd"/>
                      <path fill="url(#fa)" fill-opacity=".7" fill-rule="evenodd" d="M2281 2495h-4v-10h4v10Zm-26-70h-4v-10h4v10Zm0-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm12 480h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm4 480h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm10 530h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-2-50v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm10 550h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Z" clip-rule="evenodd"/>
                      <path fill="url(#fb)" d="M0 0h49v28H0z" transform="matrix(1 0 0 -1 2321 2553)"/>
                      <path fill="url(#fc)" d="M0 0h27v28H0z" transform="matrix(1 0 0 -1 2332 2581)"/>
                      <path fill="url(#fd)" d="M0 0h7v59H0z" transform="matrix(1 0 0 -1 2342 2640)"/>
                      <path fill="url(#fe)" d="M1899 2686h75v-760l-95-6 20 766Z"/>
                      <path fill="url(#ff)" d="M1974 2686h44l10-766h-54v766Z"/>
                      <path fill="${shade1}" d="m1977 2686 51-766h-149l91.5 766h6.5Z"/>
                      <path fill="url(#fg)" d="m1977 2686 51-766h-149l91.5 766h6.5Z"/>
                      <mask id="fi" width="95" height="766" x="1879" y="1920" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="url(#fh)" d="M1899 2686h75v-760l-95-6 20 766Z"/>
                      </mask>
                      <g fill="${accent2}" fill-opacity=".5" mask="url(#fi)">
                        <path d="M1884 2135h12v-10h-12zM1883 2113h8v-10h-8zM1882 2091h3v-10h-3z"/>
                      </g>
                      <path fill="${accent2}" fill-opacity=".5" d="M1944 2355h42v-10h-42zM1955 2377h42v-10h-42zM1966 2399h33v-10h-33zM1977 2421h27v-10h-27zM1988 2443h21v-10h-21zM1933 2333h42v-10h-42zM1922 2311h42v-10h-42zM1917 2289h36v-10h-36zM1912 2267h30v-10h-30zM1907 2245h24v-10h-24zM1902 2223h18v-10h-18zM1897 2201h14v-10h-14zM1892 2179h14v-10h-14zM2000 2465h14v-10h-14zM2005 2487h14v-10h-14zM1887 2157h14v-10h-14z"/>
                      <mask id="fk" width="54" height="766" x="1974" y="1920" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="url(#fj)" d="M1974 2686h44l10-766h-54v766Z"/>
                      </mask>
                      <g fill="${accent2}" fill-opacity=".5" mask="url(#fk)">
                        <path d="M2010 2509h11v-10h-11zM2015 2531h6v-10h-6z"/>
                      </g>
                      <path fill="${shade0}" d="M1940 2765h2v-79h-2z"/>
                      <g filter="url(#fl)">
                        <ellipse cx="23" cy="2" fill="${accent0}" fill-opacity=".64" rx="23" ry="2" transform="scale(1 -1) rotate(-23 -5820.568 -6095.6427)"/>
                      </g>
                      <g filter="url(#fm)">
                        <ellipse cx="2" cy="23" fill="${accent0}" fill-opacity=".64" rx="2" ry="23" transform="scale(1 -1) rotate(-23 -5882.6898 -6136.741)"/>
                      </g>
                      <circle cx="2" cy="2" r="2" fill="${accent0}" transform="matrix(1 0 0 -1 1939 2768)"/>
                      <circle cx="2" cy="2" r="2" fill="${shade7}" fill-opacity=".2" transform="matrix(1 0 0 -1 1939 2768)"/>
                      <path fill="${shade4}" d="M1612 2443h24v-523h-24z"/>
                      <path fill="url(#fn)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1612 2443)"/>
                      <path fill="${shade1}" d="M1636 2443h24v-523h-24z"/>
                      <path fill="url(#fo)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1636 2443)"/>
                      <path fill="${shade2}" d="M1648 2427h67v-507h-67z"/>
                      <path fill="url(#fp)" d="M0 0h67v507H0z" transform="matrix(1 0 0 -1 1648 2427)"/>
                      <path fill="${shade1}" d="M1818 2443h24v-523h-24z"/>
                      <path fill="url(#fq)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1818 2443)"/>
                      <path fill="${shade1}" d="M1794 2443h24v-523h-24z"/>
                      <path fill="url(#fr)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1794 2443)"/>
                      <path fill="${shade2}" d="M1739 2427h67v-507h-67z"/>
                      <path fill="url(#fs)" d="M0 0h67v507H0z" transform="matrix(1 0 0 -1 1739 2427)"/>
                      <path fill="${shade3}" d="M1648 2422h67v-4h-67zM1648 2410h67v-4h-67zM1648 2398h67v-4h-67zM1648 2386h67v-4h-67zM1648 2374h67v-4h-67zM1648 2362h67v-4h-67zM1648 2350h67v-4h-67zM1648 2338h67v-4h-67zM1648 2326h67v-4h-67zM1648 2314h67v-4h-67zM1648 2302h67v-4h-67zM1648 2290h67v-4h-67zM1648 2278h67v-4h-67zM1648 2266h67v-4h-67zM1648 2254h67v-4h-67zM1648 2242h67v-4h-67zM1648 2230h67v-4h-67zM1648 2218h67v-4h-67zM1648 2206h67v-4h-67zM1648 2194h67v-4h-67zM1648 2182h67v-4h-67zM1648 2170h67v-4h-67zM1648 2158h67v-4h-67zM1648 2146h67v-4h-67zM1648 2134h67v-4h-67zM1648 2122h67v-4h-67zM1648 2110h67v-4h-67zM1648 2098h67v-4h-67zM1648 2086h67v-4h-67zM1648 2074h67v-4h-67zM1648 2062h67v-4h-67zM1648 2050h67v-4h-67zM1648 2038h67v-4h-67zM1648 2026h67v-4h-67zM1648 2014h67v-4h-67zM1648 2002h67v-4h-67zM1648 1990h67v-4h-67zM1648 1978h67v-4h-67zM1648 1966h67v-4h-67zM1648 1954h67v-4h-67zM1648 1942h67v-4h-67zM1739 2422h67v-4h-67zM1739 2410h67v-4h-67zM1739 2398h67v-4h-67zM1739 2386h67v-4h-67zM1739 2374h67v-4h-67zM1739 2362h67v-4h-67zM1739 2350h67v-4h-67zM1739 2338h67v-4h-67zM1739 2326h67v-4h-67zM1739 2314h67v-4h-67zM1739 2302h67v-4h-67zM1739 2290h67v-4h-67zM1739 2278h67v-4h-67zM1739 2266h67v-4h-67zM1739 2254h67v-4h-67zM1739 2242h67v-4h-67zM1739 2230h67v-4h-67zM1739 2218h67v-4h-67zM1739 2206h67v-4h-67zM1739 2194h67v-4h-67zM1739 2182h67v-4h-67zM1739 2170h67v-4h-67zM1739 2158h67v-4h-67zM1739 2146h67v-4h-67zM1739 2134h67v-4h-67zM1739 2122h67v-4h-67zM1739 2110h67v-4h-67zM1739 2098h67v-4h-67zM1739 2086h67v-4h-67zM1739 2074h67v-4h-67zM1739 2062h67v-4h-67zM1739 2050h67v-4h-67zM1739 2038h67v-4h-67zM1739 2026h67v-4h-67zM1739 2014h67v-4h-67zM1739 2002h67v-4h-67zM1739 1990h67v-4h-67zM1739 1978h67v-4h-67zM1739 1966h67v-4h-67zM1739 1954h67v-4h-67zM1739 1942h67v-4h-67z"/>
                      <path fill="${accent6}" d="M1657 2362h14v-4h-14zM1802 2398h4v-4h-4zM1790 2398h4v-4h-4zM1688 2302h4v-4h-4zM1679 2242h8v-4h-8zM1794 2122h8v-4h-8zM1763 2230h8v-4h-8zM1670 2194h45v-4h-45zM1739 2038h45v-4h-45zM1739 2386h45v-4h-45z"/>
                      <path fill="${shade4}" d="M1703 2443h24v-523h-24z"/>
                      <path fill="url(#ft)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1703 2443)"/>
                      <path fill="${shade1}" d="M1727 2443h24v-523h-24z"/>
                      <path fill="url(#fu)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1727 2443)"/>
                      <mask id="fv" width="24" height="103" x="1612" y="2443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="${shade5shade6}" d="M1612 2546h24v-103h-24z"/>
                      </mask>
                      <g filter="url(#fw)" mask="url(#fv)">
                        <path fill="url(#fx)" d="M0 0h34v103H0z" transform="matrix(1 0 0 -1 1607 2540)"/>
                      </g>
                      <mask id="fy" width="24" height="103" x="1703" y="2443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="${shade5shade6}" d="M1703 2546h24v-103h-24z"/>
                      </mask>
                      <g filter="url(#fz)" mask="url(#fy)">
                        <path fill="url(#fA)" d="M0 0h34v103H0z" transform="matrix(1 0 0 -1 1698 2540)"/>
                      </g>
                      <mask id="fB" width="24" height="103" x="1794" y="2443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="${shade5shade6}" d="M1794 2546h24v-103h-24z"/>
                      </mask>
                      <g filter="url(#fC)" mask="url(#fB)">
                        <path fill="url(#fD)" d="M0 0h34v103H0z" transform="matrix(1 0 0 -1 1789 2540)"/>
                      </g>
                      <path fill="${shade0}" d="M1171 2065h31v-145h-31z"/>
                      <path fill="${accent5}" fill-opacity=".38" d="M1171 2065h31v-145h-31z"/>
                      <path fill="${shade0}" d="M1202 2065h285v-145h-285z"/>
                      <path fill="${accent5}" fill-opacity=".25" d="M1202 2065h285v-145h-285z"/>
                      <path fill="url(#fE)" fill-opacity=".5" d="M0 0h285v145H0z" transform="matrix(1 0 0 -1 1202 2065)"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M1190 2034h4v-5h-4zM1179 2034h4v-5h-4z"/>
                      <path fill="${shade4}" fill-opacity=".33" d="M1190 2051h4v-5h-4zM1179 2051h4v-5h-4zM1190 2017h4v-5h-4zM1179 2017h4v-5h-4zM1190 2000h4v-5h-4zM1179 2000h4v-5h-4z"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M1190 1983h4v-5h-4zM1179 1983h4v-5h-4z"/>
                      <path fill="${shade4}" fill-opacity=".33" d="M1190 1966h4v-5h-4zM1179 1966h4v-5h-4zM1190 1949h4v-5h-4zM1179 1949h4v-5h-4z"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M1229 2053h12v-10h-12zM1209 2036h12v-10h-12z"/>
                      <path fill="${shade0}" fill-opacity=".25" d="M1209 2053h12v-10h-12zM1269 2053h12v-10h-12zM1309 2053h12v-10h-12zM1329 2053h12v-10h-12zM1349 2053h12v-10h-12zM1369 2053h12v-10h-12zM1389 2053h12v-10h-12zM1429 2053h12v-10h-12zM1449 2053h12v-10h-12zM1469 2053h12v-10h-12zM1229 2036h12v-10h-12zM1249 2036h12v-10h-12zM1269 2036h12v-10h-12zM1289 2036h12v-10h-12zM1309 2036h12v-10h-12zM1329 2036h12v-10h-12zM1349 2036h12v-10h-12zM1369 2036h12v-10h-12zM1389 2036h12v-10h-12zM1409 2036h12v-10h-12zM1429 2036h12v-10h-12zM1449 2036h12v-10h-12zM1209 2019h12v-10h-12zM1229 2019h12v-10h-12zM1249 2019h12v-10h-12zM1269 2019h12v-10h-12zM1289 2019h12v-10h-12zM1309 2019h12v-10h-12zM1329 2019h12v-10h-12zM1349 2019h12v-10h-12zM1369 2019h12v-10h-12zM1389 2019h12v-10h-12zM1409 2019h12v-10h-12zM1429 2019h12v-10h-12zM1449 2019h12v-10h-12zM1209 2002h12v-10h-12zM1229 2002h12v-10h-12zM1249 2002h12v-10h-12zM1269 2002h12v-10h-12zM1289 2002h12v-10h-12zM1329 2002h12v-10h-12zM1349 2002h12v-10h-12zM1389 2002h12v-10h-12zM1409 2002h12v-10h-12zM1469 2002h12v-10h-12zM1229 1985h12v-10h-12zM1289 1985h12v-10h-12zM1309 1985h12v-10h-12zM1329 1985h12v-10h-12zM1349 1985h12v-10h-12zM1369 1985h12v-10h-12zM1389 1985h12v-10h-12zM1409 1985h12v-10h-12zM1429 1985h12v-10h-12zM1449 1985h12v-10h-12zM1469 1985h12v-10h-12zM1209 1968h12v-10h-12zM1249 1968h12v-10h-12zM1269 1968h12v-10h-12zM1289 1968h12v-10h-12zM1349 1968h12v-10h-12zM1369 1968h12v-10h-12zM1389 1968h12v-10h-12zM1409 1968h12v-10h-12zM1429 1968h12v-10h-12zM1449 1968h12v-10h-12zM1469 1968h12v-10h-12zM1209 1951h12v-10h-12zM1229 1951h12v-10h-12zM1249 1951h12v-10h-12zM1269 1951h12v-10h-12zM1289 1951h12v-10h-12zM1309 1951h12v-10h-12zM1329 1951h12v-10h-12zM1369 1951h12v-10h-12zM1389 1951h12v-10h-12zM1409 1951h12v-10h-12zM1449 1951h12v-10h-12zM1469 1951h12v-10h-12z"/>
                      <path fill="${accent2}" fill-opacity=".76" d="M1209 1985h12v-10h-12zM1249 2053h12v-10h-12zM1289 2053h12v-10h-12zM1409 2053h12v-10h-12zM1469 2036h12v-10h-12zM1469 2019h12v-10h-12zM1449 2002h12v-10h-12zM1429 2002h12v-10h-12zM1369 2002h12v-10h-12zM1309 2002h12v-10h-12zM1249 1985h12v-10h-12zM1269 1985h12v-10h-12zM1309 1968h12v-10h-12zM1349 1951h12v-10h-12zM1429 1951h12v-10h-12zM1329 1968h12v-10h-12zM1229 1968h12v-10h-12z"/>
                      <path fill="${shade7}" fill-opacity=".2" d="M1207 2048h16v-6h-16zM1207 2031h16v-6h-16zM1207 2014h16v-6h-16zM1207 1997h16v-6h-16zM1207 1980h16v-6h-16zM1207 1963h16v-6h-16zM1207 1946h16v-6h-16zM1227 2048h16v-6h-16zM1227 2031h16v-6h-16zM1227 2014h16v-6h-16zM1227 1997h16v-6h-16zM1227 1980h16v-6h-16zM1227 1963h16v-6h-16zM1227 1946h16v-6h-16zM1247 2048h16v-6h-16zM1247 2031h16v-6h-16zM1247 2014h16v-6h-16zM1247 1997h16v-6h-16zM1247 1980h16v-6h-16zM1247 1963h16v-6h-16zM1247 1946h16v-6h-16zM1267 2048h16v-6h-16zM1267 2031h16v-6h-16zM1267 2014h16v-6h-16zM1267 1997h16v-6h-16zM1267 1980h16v-6h-16zM1267 1963h16v-6h-16zM1267 1946h16v-6h-16zM1287 2048h16v-6h-16zM1287 2031h16v-6h-16zM1287 2014h16v-6h-16zM1287 1997h16v-6h-16zM1287 1980h16v-6h-16zM1287 1963h16v-6h-16zM1287 1946h16v-6h-16zM1307 2048h16v-6h-16zM1307 2031h16v-6h-16zM1307 2014h16v-6h-16zM1307 1997h16v-6h-16zM1307 1980h16v-6h-16zM1307 1963h16v-6h-16zM1307 1946h16v-6h-16zM1327 2048h16v-6h-16zM1327 2031h16v-6h-16zM1327 2014h16v-6h-16zM1327 1997h16v-6h-16zM1327 1980h16v-6h-16zM1327 1963h16v-6h-16zM1327 1946h16v-6h-16zM1347 2048h16v-6h-16zM1347 2031h16v-6h-16zM1347 2014h16v-6h-16zM1347 1997h16v-6h-16zM1347 1980h16v-6h-16zM1347 1963h16v-6h-16zM1347 1946h16v-6h-16zM1367 2048h16v-6h-16zM1367 2031h16v-6h-16zM1367 2014h16v-6h-16zM1367 1997h16v-6h-16zM1367 1980h16v-6h-16zM1367 1963h16v-6h-16zM1367 1946h16v-6h-16zM1387 2048h16v-6h-16zM1387 2031h16v-6h-16zM1387 2014h16v-6h-16zM1387 1997h16v-6h-16zM1387 1980h16v-6h-16zM1387 1963h16v-6h-16zM1387 1946h16v-6h-16zM1407 2048h16v-6h-16zM1407 2031h16v-6h-16zM1407 2014h16v-6h-16zM1407 1997h16v-6h-16zM1407 1980h16v-6h-16zM1407 1963h16v-6h-16zM1407 1946h16v-6h-16zM1427 2048h16v-6h-16zM1427 2031h16v-6h-16zM1427 2014h16v-6h-16zM1427 1997h16v-6h-16zM1427 1980h16v-6h-16zM1427 1963h16v-6h-16zM1427 1946h16v-6h-16zM1447 2048h16v-6h-16zM1447 2031h16v-6h-16zM1447 2014h16v-6h-16zM1447 1997h16v-6h-16zM1447 1980h16v-6h-16zM1447 1963h16v-6h-16zM1447 1946h16v-6h-16zM1467 2048h16v-6h-16zM1467 2031h16v-6h-16zM1467 2014h16v-6h-16zM1467 1997h16v-6h-16zM1467 1980h16v-6h-16zM1467 1963h16v-6h-16zM1467 1946h16v-6h-16z"/>
                      <path fill="${shade0}" d="M1567 2294h107v-374h-107z"/>
                      <path fill="url(#fF)" d="M0 0h107v374H0z" transform="matrix(1 0 0 -1 1567 2294)"/>
                      <path fill="${shade0}" d="M1561 2332h93v-38h-93z"/>
                      <mask id="fG" width="123" height="103" x="1438" y="2332" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="${shade5shade6}" d="M1438 2435h123v-103h-123z"/>
                      </mask>
                      <g filter="url(#fH)" mask="url(#fG)">
                        <path fill="url(#fI)" d="M0 0h133v103H0z" transform="matrix(1 0 0 -1 1433 2429)"/>
                      </g>
                      <mask id="fJ" width="165" height="103" x="1402" y="2294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="${shade5shade6}" d="M1402 2397h165v-103h-165z"/>
                      </mask>
                      <g filter="url(#fK)" mask="url(#fJ)">
                        <path fill="url(#fL)" d="M0 0h175v103H0z" transform="matrix(1 0 0 -1 1397 2391)"/>
                      </g>
                      <path fill="url(#fM)" d="M0 0h123v374H0z" transform="matrix(1 0 0 -1 1438 2332)"/>
                      <path fill="url(#fN)" d="M0 0h165v374H0z" transform="matrix(1 0 0 -1 1402 2294)"/>
                      <path fill="${accent0}" fill-opacity=".67" d="M1567 2234h30v-24h-30zM1651 2264h23v-24h-23zM1567 2144h23v-24h-23zM1604 2144h23v-24h-23zM1567 1994h30v-24h-30zM1611 1994h30v-24h-30zM1611 2234h63v-24h-63zM1567 2114h107v-24h-107z"/>
                      <path fill="url(#fO)" fill-rule="evenodd" d="M1514 2332h-28v-17h-48v-4h48v-17h-15v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-44h28v44h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h15v17h47v4h-47v17Z" clip-rule="evenodd"/>
                      <mask id="fP" width="266" height="92" x="1001" y="1927" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="white" stroke="white" stroke-width="2" d="M1004.72 1985.59c-.92.57-1.68 1.15-2.28 1.66v-58.44h263v64.85c-.01.01-.01.03-.01.05-.01.06-.04.18-.11.33-.13.29-.43.76-1.11 1.27-1.38 1.02-4.38 2.22-10.8 2.22-3.52 0-6.89 1.38-10.09 3.35-3.19 1.96-6.29 4.57-9.27 7.13-.27.24-.55.47-.83.71-2.69 2.32-5.28 4.55-7.8 6.25-2.78 1.89-5.35 3.03-7.74 3.03-7.13 0-13.4-4-19.42-10.28-5.49-5.71-10.64-13.18-15.96-20.88-.53-.76-1.05-1.52-1.58-2.28-5.85-8.46-11.96-17.01-18.89-23.45-6.94-6.45-14.8-10.85-24.17-10.85-18.55 0-30.07 11.7-39.26 23.08-1.44 1.79-2.82 3.56-4.17 5.29-2.96 3.8-5.72 7.35-8.53 10.25-4.07 4.2-8.01 6.79-12.43 6.79-10.4 0-17.88-3.03-25.82-6.26-.3-.12-.61-.24-.91-.37-8.3-3.36-17.18-6.77-30.22-6.77-5.06 0-8.97 1.66-11.6 3.32Z"/>
                      </mask>
                      <g mask="url(#fP)">
                        <path fill="${shade0}" fill-rule="evenodd" d="m998.654 2028.88.978-.21-23.286-109.55-.978.21 23.286 109.55Zm7.996 0 .98-.21-23.284-109.55-.978.21 23.282 109.55Zm8.98-.21-.98.21-23.282-109.55.978-.21 23.284 109.55Zm7.02.21.98-.21-23.28-109.55-.982.21 23.282 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Z" clip-rule="evenodd"/>
                      </g>
                      <g filter="url(#fQ)">
                        <path stroke="${shade0}" stroke-width="2" d="M1004.72 1985.59c-.92.57-1.68 1.15-2.28 1.66v-58.44h263v64.85c-.01.01-.01.03-.01.05-.01.06-.04.18-.11.33-.13.29-.43.76-1.11 1.27-1.38 1.02-4.38 2.22-10.8 2.22-3.52 0-6.89 1.38-10.09 3.35-3.19 1.96-6.29 4.57-9.27 7.13-.27.24-.55.47-.83.71-2.69 2.32-5.28 4.55-7.8 6.25-2.78 1.89-5.35 3.03-7.74 3.03-7.13 0-13.4-4-19.42-10.28-5.49-5.71-10.64-13.18-15.96-20.88-.53-.76-1.05-1.52-1.58-2.28-5.85-8.46-11.96-17.01-18.89-23.45-6.94-6.45-14.8-10.85-24.17-10.85-18.55 0-30.07 11.7-39.26 23.08-1.44 1.79-2.82 3.56-4.17 5.29-2.96 3.8-5.72 7.35-8.53 10.25-4.07 4.2-8.01 6.79-12.43 6.79-10.4 0-17.88-3.03-25.82-6.26-.3-.12-.61-.24-.91-.37-8.3-3.36-17.18-6.77-30.22-6.77-5.06 0-8.97 1.66-11.6 3.32Z"/>
                      </g>
                      <mask id="fR" width="266" height="75" x="1001" y="1926" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                        <path fill="white" stroke="white" stroke-width="2" d="M1002.44 1989.31v-61.61h263v63.43c-.31-.24-.65-.48-1.05-.71-2.19-1.33-5.82-2.57-11.73-2.57-2.58 0-4.83-1.07-7.1-2.81-1.76-1.36-3.46-3.06-5.29-4.89-.55-.55-1.12-1.12-1.7-1.69-4.97-4.87-10.98-9.96-20.52-9.96-4.84 0-9.52 2.02-14.08 4.92-4.25 2.71-8.5 6.25-12.75 9.8-.31.25-.62.51-.93.77-4.59 3.82-9.2 7.58-13.94 10.4-4.74 2.81-9.54 4.63-14.5 4.63-4.69 0-9.24-3.67-13.79-9.72-4.5-5.99-8.76-14.01-12.96-22.12-.41-.8-.82-1.6-1.23-2.39-3.75-7.27-7.45-14.45-11.18-19.97-2.07-3.07-4.18-5.69-6.35-7.54-2.18-1.86-4.5-3.02-6.97-3.02h-27.91c-6.29 0-12.21 4-17.82 9.66-5.64 5.68-11.15 13.24-16.58 20.71l-.24.33c-5.37 7.39-10.67 14.68-16.01 20.16-5.45 5.58-10.73 9.06-15.98 9.06-5.02 0-8.17-1.34-10.04-2.62-.94-.64-1.57-1.27-1.96-1.74-.18-.21-.31-.39-.39-.51Z"/>
                      </mask>
                      <g mask="url(#fR)">
                        <path fill="${shade0}" fill-rule="evenodd" d="m975.368 2028.67.978.21 23.286-109.55-.978-.21-23.286 109.55Zm8 0 .978.21 23.284-109.55-.98-.21-23.282 109.55Zm8.978.21-.978-.21 23.282-109.55.98.21-23.284 109.55Zm7.022-.21.982.21 23.28-109.55-.98-.21-23.282 109.55Zm8.982.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Z" clip-rule="evenodd"/>
                      </g>
                      <g filter="url(#fS)">
                        <path stroke="${shade0}" stroke-width="2" d="M1002.44 1989.31v-61.61h263v63.43c-.31-.24-.65-.48-1.05-.71-2.19-1.33-5.82-2.57-11.73-2.57-2.58 0-4.83-1.07-7.1-2.81-1.76-1.36-3.46-3.06-5.29-4.89-.55-.55-1.12-1.12-1.7-1.69-4.97-4.87-10.98-9.96-20.52-9.96-4.84 0-9.52 2.02-14.08 4.92-4.25 2.71-8.5 6.25-12.75 9.8-.31.25-.62.51-.93.77-4.59 3.82-9.2 7.58-13.94 10.4-4.74 2.81-9.54 4.63-14.5 4.63-4.69 0-9.24-3.67-13.79-9.72-4.5-5.99-8.76-14.01-12.96-22.12-.41-.8-.82-1.6-1.23-2.39-3.75-7.27-7.45-14.45-11.18-19.97-2.07-3.07-4.18-5.69-6.35-7.54-2.18-1.86-4.5-3.02-6.97-3.02h-27.91c-6.29 0-12.21 4-17.82 9.66-5.64 5.68-11.15 13.24-16.58 20.71l-.24.33c-5.37 7.39-10.67 14.68-16.01 20.16-5.45 5.58-10.73 9.06-15.98 9.06-5.02 0-8.17-1.34-10.04-2.62-.94-.64-1.57-1.27-1.96-1.74-.18-.21-.31-.39-.39-.51Z"/>
                      </g>
                      <path fill="${shade0}" d="M901 1932h2038s35 0 50-6 50-6 50-6H801s35 0 50 6 50 6 50 6Z"/>
                      <path fill="${accent2}" d="M919 1928h4v-4h-4zM929 1928h4v-4h-4zM959 1928h4v-4h-4zM989 1928h4v-4h-4zM1019 1928h4v-4h-4zM1029 1928h4v-4h-4zM1069 1928h4v-4h-4zM1109 1928h4v-4h-4zM1139 1928h4v-4h-4zM1149 1928h4v-4h-4zM1189 1928h4v-4h-4zM1269 1928h4v-4h-4zM1279 1928h4v-4h-4zM1319 1928h4v-4h-4zM1329 1928h4v-4h-4zM1379 1928h4v-4h-4zM1429 1928h4v-4h-4zM1489 1928h4v-4h-4zM1499 1928h4v-4h-4zM1559 1928h4v-4h-4zM1569 1928h4v-4h-4zM1579 1928h4v-4h-4zM1589 1928h4v-4h-4zM1609 1928h4v-4h-4zM1629 1928h4v-4h-4zM1669 1928h4v-4h-4zM1699 1928h4v-4h-4zM1709 1928h4v-4h-4zM1769 1928h4v-4h-4zM1819 1928h4v-4h-4zM1849 1928h4v-4h-4zM1859 1928h4v-4h-4zM1869 1928h4v-4h-4zM1899 1928h4v-4h-4zM1929 1928h4v-4h-4zM1979 1928h4v-4h-4zM2049 1928h4v-4h-4zM2079 1928h4v-4h-4zM2139 1928h4v-4h-4zM2149 1928h4v-4h-4zM2189 1928h4v-4h-4zM2229 1928h4v-4h-4zM2269 1928h4v-4h-4zM2279 1928h4v-4h-4zM2319 1928h4v-4h-4zM2359 1928h4v-4h-4zM2379 1928h4v-4h-4zM2399 1928h4v-4h-4zM2429 1928h4v-4h-4zM2439 1928h4v-4h-4zM2479 1928h4v-4h-4zM2529 1928h4v-4h-4zM2609 1928h4v-4h-4zM2619 1928h4v-4h-4zM2629 1928h4v-4h-4zM2669 1928h4v-4h-4zM2719 1928h4v-4h-4zM2789 1928h4v-4h-4zM2799 1928h4v-4h-4zM2849 1928h4v-4h-4zM2899 1928h4v-4h-4zM2909 1928h4v-4h-4z"/>
                      <path fill="${shade0}" d="M1320.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#fT)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1315.77 1959.8)"/>
                      </g>
                      <g filter="url(#fU)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1311 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1319.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1319.75 1952.16)"/>
                      <path fill="${shade0}" d="M1370.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#fV)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1365.77 1959.8)"/>
                      </g>
                      <g filter="url(#fW)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1361 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1369.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1369.75 1952.16)"/>
                      <path fill="${shade0}" d="M1420.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#fX)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1415.77 1959.8)"/>
                      </g>
                      <g filter="url(#fY)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1411 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1419.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1419.75 1952.16)"/>
                      <path fill="${shade0}" d="M1470.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#fZ)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1465.77 1959.8)"/>
                      </g>
                      <g filter="url(#ga)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1461 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1469.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1469.75 1952.16)"/>
                      <path fill="${shade0}" d="M1520.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gb)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1515.77 1959.8)"/>
                      </g>
                      <g filter="url(#gc)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1511 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1519.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1519.75 1952.16)"/>
                      <path fill="${shade0}" d="M1570.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gd)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1565.77 1959.8)"/>
                      </g>
                      <g filter="url(#ge)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1561 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1569.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1569.75 1952.16)"/>
                      <path fill="${shade0}" d="M1620.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gf)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1615.77 1959.8)"/>
                      </g>
                      <g filter="url(#gg)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1611 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1619.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1619.75 1952.16)"/>
                      <path fill="${shade0}" d="M1670.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gh)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1665.77 1959.8)"/>
                      </g>
                      <g filter="url(#gi)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1661 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1669.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1669.75 1952.16)"/>
                      <path fill="${shade0}" d="M1720.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gj)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1715.77 1959.8)"/>
                      </g>
                      <g filter="url(#gk)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1711 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1719.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1719.75 1952.16)"/>
                      <path fill="${shade0}" d="M1770.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gl)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1765.77 1959.8)"/>
                      </g>
                      <g filter="url(#gm)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1761 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1769.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1769.75 1952.16)"/>
                      <path fill="${shade0}" d="M1820.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gn)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1815.77 1959.8)"/>
                      </g>
                      <g filter="url(#go)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1811 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1819.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1819.75 1952.16)"/>
                      <path fill="${shade0}" d="M1870.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gp)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1865.77 1959.8)"/>
                      </g>
                      <g filter="url(#gq)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1861 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1869.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1869.75 1952.16)"/>
                      <path fill="${shade0}" d="M1920.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gr)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1915.77 1959.8)"/>
                      </g>
                      <g filter="url(#gs)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1911 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1919.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1919.75 1952.16)"/>
                      <path fill="${shade0}" d="M1970.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gt)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 1965.77 1959.8)"/>
                      </g>
                      <g filter="url(#gu)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 1961 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1969.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1969.75 1952.16)"/>
                      <path fill="${shade0}" d="M2020.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gv)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2015.77 1959.8)"/>
                      </g>
                      <g filter="url(#gw)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2011 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2019.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2019.75 1952.16)"/>
                      <path fill="${shade0}" d="M2070.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gx)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2065.77 1959.8)"/>
                      </g>
                      <g filter="url(#gy)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2061 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2069.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2069.75 1952.16)"/>
                      <path fill="${shade0}" d="M2120.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gz)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2115.77 1959.8)"/>
                      </g>
                      <g filter="url(#gA)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2111 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2119.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2119.75 1952.16)"/>
                      <path fill="${shade0}" d="M2170.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gB)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2165.77 1959.8)"/>
                      </g>
                      <g filter="url(#gC)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2161 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2169.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2169.75 1952.16)"/>
                      <path fill="${shade0}" d="M2220.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gD)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2215.77 1959.8)"/>
                      </g>
                      <g filter="url(#gE)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2211 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2219.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2219.75 1952.16)"/>
                      <path fill="${shade0}" d="M2270.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gF)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2265.77 1959.8)"/>
                      </g>
                      <g filter="url(#gG)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2261 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2269.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2269.75 1952.16)"/>
                      <path fill="${shade0}" d="M2320.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gH)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2315.77 1959.8)"/>
                      </g>
                      <g filter="url(#gI)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2311 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2319.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2319.75 1952.16)"/>
                      <path fill="${shade0}" d="M2370.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gJ)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2365.77 1959.8)"/>
                      </g>
                      <g filter="url(#gK)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2361 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2369.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2369.75 1952.16)"/>
                      <path fill="${shade0}" d="M2420.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gL)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2415.77 1959.8)"/>
                      </g>
                      <g filter="url(#gM)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2411 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2419.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2419.75 1952.16)"/>
                      <path fill="${shade0}" d="M2470.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gN)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2465.77 1959.8)"/>
                      </g>
                      <g filter="url(#gO)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2461 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2469.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2469.75 1952.16)"/>
                      <path fill="${shade0}" d="M2520.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gP)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2515.77 1959.8)"/>
                      </g>
                      <g filter="url(#gQ)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2511 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2519.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2519.75 1952.16)"/>
                      <path fill="${shade0}" d="M2570.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gR)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2565.77 1959.8)"/>
                      </g>
                      <g filter="url(#gS)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2561 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2569.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2569.75 1952.16)"/>
                      <path fill="${shade0}" d="M2620.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gT)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2615.77 1959.8)"/>
                      </g>
                      <g filter="url(#gU)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2611 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2619.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2619.75 1952.16)"/>
                      <path fill="${shade0}" d="M2670.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                      <g filter="url(#gV)">
                        <ellipse cx="1.5019" cy="10.572" fill="${accent5}" rx="1.5019" ry="10.572" transform="matrix(.919366 .393404 .38807 -.92163 2665.77 1959.8)"/>
                      </g>
                      <g filter="url(#gW)">
                        <ellipse cx="10.513" cy="1.5103" fill="${accent5}" rx="10.513" ry="1.5103" transform="matrix(.919366 .393404 .38807 -.92163 2661 1947.91)"/>
                      </g>
                      <ellipse cx="1.5" cy="1.5121" fill="${accent5}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2669.75 1952.16)"/>
                      <ellipse cx="1.5" cy="1.5121" fill="${shade7}" fill-opacity=".85" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2669.75 1952.16)"/>
                    </g>
                    <path fill="${shade0}" fill-opacity=".7" d="M0 1920h3840v1920H0z"/>
                  </g>
                  <defs>
                    <linearGradient id="b" x1="1920" x2="1920" y1="0" y2="3840" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade0}"/>
                      <stop offset="1" stop-color="${shade2}"/>
                    </linearGradient>
                    <linearGradient id="c" x1="0" x2="4042.57" y1="1920" y2="1280.45" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="e" x1="1920" x2="1920" y1="1920" y2="1576" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset="1" stop-color="${accent7}" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="f" x1="2155" x2="2155" y1="1468" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".0417" stop-color="${accent4}" stop-opacity=".43"/>
                      <stop offset=".7708" stop-color="${accent4}" stop-opacity=".35"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".6"/>
                    </linearGradient>
                    <linearGradient id="g" x1="2493.5" x2="2493.5" y1="1775" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="h" x1="2374.5" x2="2374.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="i" x1="2582.5" x2="2582.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="j" x1="2801.5" x2="2801.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="l" x1="2374.5" x2="2374.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="m" x1="2385.5" x2="2385.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="n" x1="2396.5" x2="2396.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="o" x1="2407.5" x2="2407.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="p" x1="2418.5" x2="2418.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="q" x1="2429.5" x2="2429.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="r" x1="2440.5" x2="2440.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="s" x1="2451.5" x2="2451.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="t" x1="2462.5" x2="2462.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="u" x1="2473.5" x2="2473.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="v" x1="2484.5" x2="2484.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="w" x1="2495.5" x2="2495.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="x" x1="2506.5" x2="2506.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="y" x1="2517.5" x2="2517.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="z" x1="2528.5" x2="2528.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="A" x1="2539.5" x2="2539.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="B" x1="2550.5" x2="2550.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="C" x1="2561.5" x2="2561.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="D" x1="2572.5" x2="2572.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="E" x1="2583.5" x2="2583.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="F" x1="2594.5" x2="2594.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="G" x1="2605.5" x2="2605.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="H" x1="2616.5" x2="2616.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="I" x1="2627.5" x2="2627.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="J" x1="2638.5" x2="2638.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="K" x1="2649.5" x2="2649.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="L" x1="2660.5" x2="2660.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="M" x1="2671.5" x2="2671.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="N" x1="2682.5" x2="2682.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="O" x1="2693.5" x2="2693.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="P" x1="2704.5" x2="2704.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="Q" x1="2715.5" x2="2715.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="R" x1="2726.5" x2="2726.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="S" x1="2737.5" x2="2737.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="T" x1="2748.5" x2="2748.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="U" x1="2759.5" x2="2759.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="V" x1="2770.5" x2="2770.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="W" x1="2781.5" x2="2781.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="X" x1="2792.5" x2="2792.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="Y" x1="2587.99" x2="2587.99" y1="1670" y2="1873" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aa" x1="2396.5" x2="2396.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ab" x1="2408.5" x2="2408.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ac" x1="2420.5" x2="2420.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ad" x1="2432.5" x2="2432.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ae" x1="2444.5" x2="2444.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="af" x1="2456.5" x2="2456.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ag" x1="2468.5" x2="2468.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ah" x1="2480.5" x2="2480.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ai" x1="2492.5" x2="2492.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aj" x1="2504.5" x2="2504.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ak" x1="2516.5" x2="2516.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="al" x1="2528.5" x2="2528.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="am" x1="2540.5" x2="2540.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="an" x1="2552.5" x2="2552.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ao" x1="2564.5" x2="2564.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ap" x1="2576.5" x2="2576.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aq" x1="2588.5" x2="2588.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ar" x1="2600.5" x2="2600.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="as" x1="2612.5" x2="2612.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="at" x1="2624.5" x2="2624.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="au" x1="2636.5" x2="2636.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="av" x1="2648.5" x2="2648.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aw" x1="2660.5" x2="2660.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ax" x1="2672.5" x2="2672.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ay" x1="2684.5" x2="2684.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="az" x1="2696.5" x2="2696.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aA" x1="2708.5" x2="2708.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aB" x1="2720.5" x2="2720.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aC" x1="2732.5" x2="2732.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aD" x1="2744.5" x2="2744.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aE" x1="2756.5" x2="2756.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aF" x1="2768.5" x2="2768.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aG" x1="2780.5" x2="2780.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aH" x1="2792.5" x2="2792.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aI" x1="2804.5" x2="2804.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aJ" x1="2816.5" x2="2816.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aK" x1="2828.5" x2="2828.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aL" x1="2840.5" x2="2840.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aM" x1="2620" x2="2620" y1="1670" y2="1873" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="aN" x1="2608" x2="2608" y1="1869" y2="1876" gradientUnits="userSpaceOnUse">
                      <stop offset=".5417" stop-color="${shade0}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".6"/>
                    </linearGradient>
                    <linearGradient id="aO" x1="2395.5" x2="2395.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="aP" x1="2610.5" x2="2610.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="aQ" x1="2844.5" x2="2844.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="aR" x1="2610.5" x2="2610.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aS" x1="2582.5" x2="2582.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aT" x1="2801.5" x2="2801.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aU" x1="2844.5" x2="2844.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aV" x1="2610.5" x2="2610.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aW" x1="2582.5" x2="2582.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aX" x1="2801.5" x2="2801.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aY" x1="2844.5" x2="2844.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="aZ" x1="2377.5" x2="2377.5" y1="1385" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset=".8073" stop-color="${shade4}" stop-opacity=".66"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".43"/>
                    </linearGradient>
                    <linearGradient id="ba" x1="2273.5" x2="2273.5" y1="1385" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade2shade3}" stop-opacity=".92"/>
                      <stop offset=".8021" stop-color="${shade6}" stop-opacity=".65"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".58"/>
                    </linearGradient>
                    <linearGradient id="bb" x1="2251" x2="2305" y1="1345" y2="1905" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".4948" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent6}" stop-opacity=".46"/>
                    </linearGradient>
                    <linearGradient id="bc" x1="2345.5" x2="2345.5" y1="1287" y2="1315" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade2}"/>
                    </linearGradient>
                    <linearGradient id="bd" x1="2345.5" x2="2345.5" y1="1259" y2="1287" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade2}"/>
                    </linearGradient>
                    <linearGradient id="be" x1="2345.5" x2="2345.5" y1="1200" y2="1259" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade2}"/>
                    </linearGradient>
                    <linearGradient id="bf" x1="1926.5" x2="1926.5" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent0shade0}"/>
                      <stop offset="1" stop-color="${accent5shade2}"/>
                    </linearGradient>
                    <linearGradient id="bg" x1="2001" x2="2001" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5shade2}"/>
                      <stop offset="1" stop-color="${accent0shade0}"/>
                    </linearGradient>
                    <linearGradient id="bh" x1="1953.5" x2="1953.5" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".8177" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".29"/>
                    </linearGradient>
                    <linearGradient id="bi" x1="1926.5" x2="1926.5" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent0shade0}"/>
                      <stop offset="1" stop-color="${accent5shade2}"/>
                    </linearGradient>
                    <linearGradient id="bk" x1="2001" x2="2001" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5shade2}"/>
                      <stop offset="1" stop-color="${accent0shade0}"/>
                    </linearGradient>
                    <linearGradient id="bo" x1="1624" x2="1624" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5104" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="bp" x1="1648" x2="1648" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="bq" x1="1681.5" x2="1681.5" y1="1413" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                    </linearGradient>
                    <linearGradient id="br" x1="1830" x2="1830" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="bs" x1="1806" x2="1806" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".1302" stop-color="${shade0}" stop-opacity="0"/>
                      <stop offset=".75" stop-color="${shade0}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".36"/>
                    </linearGradient>
                    <linearGradient id="bt" x1="1772.5" x2="1772.5" y1="1413" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                    </linearGradient>
                    <linearGradient id="bu" x1="1715" x2="1715" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5104" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="bv" x1="1739" x2="1739" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="by" x1="1624" x2="1624" y1="1300" y2="1403" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                    </linearGradient>
                    <linearGradient id="bB" x1="1715" x2="1715" y1="1300" y2="1403" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".17"/>
                    </linearGradient>
                    <linearGradient id="bE" x1="1806" x2="1806" y1="1300" y2="1403" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".1"/>
                    </linearGradient>
                    <linearGradient id="bF" x1="1344.5" x2="1344.5" y1="1775" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="bG" x1="1620.5" x2="1620.5" y1="1546" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".6563" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".46"/>
                    </linearGradient>
                    <linearGradient id="bJ" x1="1499.5" x2="1499.5" y1="1411" y2="1514" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                    </linearGradient>
                    <linearGradient id="bM" x1="1484.5" x2="1484.5" y1="1449" y2="1552" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                    </linearGradient>
                    <linearGradient id="bN" x1="1438" x2="1633.83" y1="1508" y2="1838.9" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5156" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="bO" x1="1402" x2="1567" y1="1546" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5156" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="bP" x1="1402" x2="1567" y1="1508" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="da" x1="0" x2="4042.57" y1="1920" y2="1280.45" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="dc" x1="1920" x2="1920" y1="1920" y2="1576" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset="1" stop-color="${accent7}" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="de" x1="2155" x2="2155" y1="2372" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".0417" stop-color="${accent4}" stop-opacity=".43"/>
                      <stop offset=".7708" stop-color="${accent4}" stop-opacity=".35"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".6"/>
                    </linearGradient>
                    <linearGradient id="df" x1="142.5" x2="142.5" y1="0" y2="145" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="dg" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="dh" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="di" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="dk" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dl" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dm" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dn" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="do" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dp" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dq" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dr" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ds" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dt" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="du" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dv" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dw" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dx" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dy" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dz" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dA" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dB" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dC" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dD" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dE" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dF" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dG" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dH" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dI" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dJ" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dK" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dL" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dM" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dN" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dO" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dP" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dQ" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dR" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dS" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dT" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dU" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dV" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dW" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dX" x1="2587.99" x2="2587.99" y1="2170" y2="1967" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="dZ" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ea" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eb" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ec" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ed" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ee" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ef" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eg" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eh" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ei" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ej" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ek" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="el" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="em" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="en" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eo" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ep" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eq" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="er" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="es" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="et" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eu" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ev" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ew" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ex" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ey" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="ez" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eA" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eB" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eC" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eD" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eE" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eF" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eG" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eH" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eI" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eJ" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eK" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset=".4167" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eL" x1="2620" x2="2620" y1="2170" y2="1967" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent3}"/>
                    </linearGradient>
                    <linearGradient id="eM" x1="236" x2="236" y1="0" y2="7" gradientUnits="userSpaceOnUse">
                      <stop offset=".5417" stop-color="${shade0}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".6"/>
                    </linearGradient>
                    <linearGradient id="eN" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="eO" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="eP" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                      <stop offset=".7552" stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                    </linearGradient>
                    <linearGradient id="eQ" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eR" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eS" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eT" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eU" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eV" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eW" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eX" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <linearGradient id="eY" x1="72.5" x2="72.5" y1="0" y2="535" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset=".8073" stop-color="${shade4}" stop-opacity=".66"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".43"/>
                    </linearGradient>
                    <linearGradient id="eZ" x1="31.5" x2="31.5" y1="0" y2="535" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade2shade3}" stop-opacity=".92"/>
                      <stop offset=".8021" stop-color="${shade6}" stop-opacity=".65"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".58"/>
                    </linearGradient>
                    <linearGradient id="fa" x1="2251" x2="2305" y1="2495" y2="1935" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".4948" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent6}" stop-opacity=".46"/>
                    </linearGradient>
                    <linearGradient id="fb" x1="24.5" x2="24.5" y1="0" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade2}"/>
                    </linearGradient>
                    <linearGradient id="fc" x1="13.5" x2="13.5" y1="0" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade2}"/>
                    </linearGradient>
                    <linearGradient id="fd" x1="3.5" x2="3.5" y1="0" y2="59" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${shade1}"/>
                      <stop offset="1" stop-color="${shade2}"/>
                    </linearGradient>
                    <linearGradient id="fe" x1="1926.5" x2="1926.5" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent0shade0}"/>
                      <stop offset="1" stop-color="${accent5shade2}"/>
                    </linearGradient>
                    <linearGradient id="ff" x1="2001" x2="2001" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5shade2}"/>
                      <stop offset="1" stop-color="${accent0shade0}"/>
                    </linearGradient>
                    <linearGradient id="fg" x1="1953.5" x2="1953.5" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop offset=".8177" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".29"/>
                    </linearGradient>
                    <linearGradient id="fh" x1="1926.5" x2="1926.5" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent0shade0}"/>
                      <stop offset="1" stop-color="${accent5shade2}"/>
                    </linearGradient>
                    <linearGradient id="fj" x1="2001" x2="2001" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5shade2}"/>
                      <stop offset="1" stop-color="${accent0shade0}"/>
                    </linearGradient>
                    <linearGradient id="fn" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5104" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fo" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                      <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fp" x1="33.5" x2="33.5" y1="0" y2="507" gradientUnits="userSpaceOnUse">
                      <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                    </linearGradient>
                    <linearGradient id="fq" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                      <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fr" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".1302" stop-color="${shade0}" stop-opacity="0"/>
                      <stop offset=".75" stop-color="${shade0}"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".36"/>
                    </linearGradient>
                    <linearGradient id="fs" x1="33.5" x2="33.5" y1="0" y2="507" gradientUnits="userSpaceOnUse">
                      <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                    </linearGradient>
                    <linearGradient id="ft" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5104" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fu" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                      <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fx" x1="17" x2="17" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                    </linearGradient>
                    <linearGradient id="fA" x1="17" x2="17" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".17"/>
                    </linearGradient>
                    <linearGradient id="fD" x1="17" x2="17" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".1"/>
                    </linearGradient>
                    <linearGradient id="fE" x1="142.5" x2="142.5" y1="0" y2="145" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fF" x1="53.5" x2="53.5" y1="0" y2="374" gradientUnits="userSpaceOnUse">
                      <stop offset=".6563" stop-color="${accent5}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity=".46"/>
                    </linearGradient>
                    <linearGradient id="fI" x1="66.5" x2="66.5" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                    </linearGradient>
                    <linearGradient id="fL" x1="87.5" x2="87.5" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}" stop-opacity="0"/>
                      <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                    </linearGradient>
                    <linearGradient id="fM" x1="0" x2="195.832" y1="0" y2="330.897" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5156" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fN" x1="0" x2="165" y1="0" y2="374" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2}"/>
                      <stop offset=".5156" stop-color="${accent7}"/>
                      <stop offset="1" stop-color="${accent5}"/>
                    </linearGradient>
                    <linearGradient id="fO" x1="1402" x2="1567" y1="2332" y2="1920" gradientUnits="userSpaceOnUse">
                      <stop stop-color="${accent2shade1}"/>
                      <stop offset="1" stop-color="${shade3}"/>
                    </linearGradient>
                    <filter id="bm" width="54.3726" height="30.3505" x="1913.81" y="1058.82" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="bn" width="30.3506" height="54.3726" x="1925.82" y="1046.81" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="bx" width="50" height="119" x="1599" y="1292" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="bA" width="50" height="119" x="1690" y="1292" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="bD" width="50" height="119" x="1781" y="1292" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="bI" width="149" height="119" x="1425" y="1403" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="bL" width="191" height="119" x="1389" y="1441" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="bR" width="269" height="95.1868" x="999.436" y="1821" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_41_13821"/>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_41_13821" result="shape"/>
                    </filter>
                    <filter id="bT" width="269" height="77.3217" x="999.436" y="1839.98" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_41_13821"/>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_41_13821" result="shape"/>
                    </filter>
                    <filter id="bU" width="20.6602" height="31.5233" x="1310.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="bV" width="29.3667" height="18.73" x="1306.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="bW" width="20.6602" height="31.5233" x="1360.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="bX" width="29.3667" height="18.73" x="1356.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="bY" width="20.6602" height="31.5233" x="1410.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="bZ" width="29.3667" height="18.73" x="1406.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="ca" width="20.6602" height="31.5233" x="1460.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cb" width="29.3667" height="18.73" x="1456.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cc" width="20.6602" height="31.5233" x="1510.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cd" width="29.3667" height="18.73" x="1506.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="ce" width="20.6602" height="31.5233" x="1560.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cf" width="29.3667" height="18.73" x="1556.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cg" width="20.6602" height="31.5233" x="1610.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="ch" width="29.3667" height="18.73" x="1606.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="ci" width="20.6602" height="31.5233" x="1660.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cj" width="29.3667" height="18.73" x="1656.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="ck" width="20.6602" height="31.5233" x="1710.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cl" width="29.3667" height="18.73" x="1706.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cm" width="20.6602" height="31.5233" x="1760.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cn" width="29.3667" height="18.73" x="1756.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="co" width="20.6602" height="31.5233" x="1810.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cp" width="29.3667" height="18.73" x="1806.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cq" width="20.6602" height="31.5233" x="1860.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cr" width="29.3667" height="18.73" x="1856.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cs" width="20.6602" height="31.5233" x="1910.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="ct" width="29.3667" height="18.73" x="1906.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cu" width="20.6602" height="31.5233" x="1960.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cv" width="29.3667" height="18.73" x="1956.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cw" width="20.6602" height="31.5233" x="2010.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cx" width="29.3667" height="18.73" x="2006.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cy" width="20.6602" height="31.5233" x="2060.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cz" width="29.3667" height="18.73" x="2056.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cA" width="20.6602" height="31.5233" x="2110.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cB" width="29.3667" height="18.73" x="2106.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cC" width="20.6602" height="31.5233" x="2160.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cD" width="29.3667" height="18.73" x="2156.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cE" width="20.6602" height="31.5233" x="2210.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cF" width="29.3667" height="18.73" x="2206.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cG" width="20.6602" height="31.5233" x="2260.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cH" width="29.3667" height="18.73" x="2256.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cI" width="20.6602" height="31.5233" x="2310.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cJ" width="29.3667" height="18.73" x="2306.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cK" width="20.6602" height="31.5233" x="2360.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cL" width="29.3667" height="18.73" x="2356.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cM" width="20.6602" height="31.5233" x="2410.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cN" width="29.3667" height="18.73" x="2406.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cO" width="20.6602" height="31.5233" x="2460.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cP" width="29.3667" height="18.73" x="2456.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cQ" width="20.6602" height="31.5233" x="2510.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cR" width="29.3667" height="18.73" x="2506.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cS" width="20.6602" height="31.5233" x="2560.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cT" width="29.3667" height="18.73" x="2556.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cU" width="20.6602" height="31.5233" x="2610.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cV" width="29.3667" height="18.73" x="2606.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cW" width="20.6602" height="31.5233" x="2660.92" y="1873.59" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="cX" width="29.3667" height="18.73" x="2656.57" y="1879.99" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="cY" width="3662" height="1800" x="72" y="2032" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2"/>
                    </filter>
                    <filter id="dd" width="2258" height="887.953" x="791" y="1910" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="5"/>
                    </filter>
                    <filter id="fl" width="54.3726" height="30.3506" x="1913.81" y="2750.82" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="fm" width="30.3506" height="54.3726" x="1925.82" y="2738.81" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="fw" width="50" height="119" x="1599" y="2429" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="fz" width="50" height="119" x="1690" y="2429" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="fC" width="50" height="119" x="1781" y="2429" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="fH" width="149" height="119" x="1425" y="2318" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="fK" width="191" height="119" x="1389" y="2280" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="4"/>
                    </filter>
                    <filter id="fQ" width="269" height="95.1868" x="999.436" y="1927.81" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_41_13821"/>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_41_13821" result="shape"/>
                    </filter>
                    <filter id="fS" width="269" height="77.3217" x="999.436" y="1926.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_41_13821"/>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_41_13821" result="shape"/>
                    </filter>
                    <filter id="fT" width="20.6602" height="31.5233" x="1310.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="fU" width="29.3667" height="18.73" x="1306.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="fV" width="20.6602" height="31.5233" x="1360.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="fW" width="29.3667" height="18.73" x="1356.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="fX" width="20.6602" height="31.5233" x="1410.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="fY" width="29.3667" height="18.73" x="1406.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="fZ" width="20.6602" height="31.5233" x="1460.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="ga" width="29.3667" height="18.73" x="1456.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gb" width="20.6602" height="31.5233" x="1510.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gc" width="29.3667" height="18.73" x="1506.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gd" width="20.6602" height="31.5233" x="1560.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="ge" width="29.3667" height="18.73" x="1556.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gf" width="20.6602" height="31.5233" x="1610.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gg" width="29.3667" height="18.73" x="1606.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gh" width="20.6602" height="31.5233" x="1660.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gi" width="29.3667" height="18.73" x="1656.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gj" width="20.6602" height="31.5233" x="1710.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gk" width="29.3667" height="18.73" x="1706.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gl" width="20.6602" height="31.5233" x="1760.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gm" width="29.3667" height="18.73" x="1756.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gn" width="20.6602" height="31.5233" x="1810.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="go" width="29.3667" height="18.73" x="1806.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gp" width="20.6602" height="31.5233" x="1860.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gq" width="29.3667" height="18.73" x="1856.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gr" width="20.6602" height="31.5233" x="1910.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gs" width="29.3667" height="18.73" x="1906.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gt" width="20.6602" height="31.5233" x="1960.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gu" width="29.3667" height="18.73" x="1956.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gv" width="20.6602" height="31.5233" x="2010.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gw" width="29.3667" height="18.73" x="2006.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gx" width="20.6602" height="31.5233" x="2060.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gy" width="29.3667" height="18.73" x="2056.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gz" width="20.6602" height="31.5233" x="2110.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gA" width="29.3667" height="18.73" x="2106.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gB" width="20.6602" height="31.5233" x="2160.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gC" width="29.3667" height="18.73" x="2156.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gD" width="20.6602" height="31.5233" x="2210.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gE" width="29.3667" height="18.73" x="2206.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gF" width="20.6602" height="31.5233" x="2260.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gG" width="29.3667" height="18.73" x="2256.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gH" width="20.6602" height="31.5233" x="2310.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gI" width="29.3667" height="18.73" x="2306.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gJ" width="20.6602" height="31.5233" x="2360.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gK" width="29.3667" height="18.73" x="2356.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gL" width="20.6602" height="31.5233" x="2410.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gM" width="29.3667" height="18.73" x="2406.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gN" width="20.6602" height="31.5233" x="2460.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gO" width="29.3667" height="18.73" x="2456.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gP" width="20.6602" height="31.5233" x="2510.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gQ" width="29.3667" height="18.73" x="2506.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gR" width="20.6602" height="31.5233" x="2560.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gS" width="29.3667" height="18.73" x="2556.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gT" width="20.6602" height="31.5233" x="2610.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gU" width="29.3667" height="18.73" x="2606.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <filter id="gV" width="20.6602" height="31.5233" x="2660.92" y="1934.89" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="3"/>
                    </filter>
                    <filter id="gW" width="29.3667" height="18.73" x="2656.57" y="1941.28" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur result="effect1_foregroundBlur_41_13821" stdDeviation="2.5"/>
                    </filter>
                    <radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="rotate(-58.2193 2181.0962 139.2584) scale(1365.18 1372.28)" gradientUnits="userSpaceOnUse">
                      <stop offset=".1667" stop-color="${accent2}"/>
                      <stop offset=".5521" stop-color="${accent7}" stop-opacity=".67"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="db" cx="0" cy="0" r="1" gradientTransform="rotate(-58.2193 2181.0962 139.2584) scale(1365.18 1372.28)" gradientUnits="userSpaceOnUse">
                      <stop offset=".1667" stop-color="${accent2}"/>
                      <stop offset=".5521" stop-color="${accent7}" stop-opacity=".67"/>
                      <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                    </radialGradient>
                    <clipPath id="a">
                      <path fill="white" d="M0 0h3840v3840H0z"/>
                    </clipPath>
                  </defs>
                </svg>
              `
						: source`
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="${size.w}" height="${size.h}" viewBox="${viewBox}">
                <g clip-path="url(#a)">
                  <path fill="url(#b)" d="M0 0h3840v3840H0z"/>
                  <path fill="${shade0}" d="M2982 1045h4v4h-4z"/>
                  <path fill="${shade1}" d="M1992 1135h4v4h-4z"/>
                  <path fill="${shade2}" d="M1366 1365h4v4h-4zM3726 1461h4v4h-4z"/>
                  <path fill="${shade0}" d="M1692 975h4v4h-4z"/>
                  <path fill="${shade1}" d="M702 1065h4v4h-4z"/>
                  <path fill="${shade2}" d="M76 1295h4v4h-4zM2436 1391h4v4h-4z"/>
                  <path fill="${shade0}" d="M2614 1196h2v2h-2z"/>
                  <path fill="${shade1}" d="M1624 1286h2v2h-2z"/>
                  <path fill="${shade2}" d="M998 1516h2v2h-2zM3358 1612h2v2h-2z"/>
                  <path fill="${shade0}" d="M2044 1386h2v2h-2z"/>
                  <path fill="${shade1}" d="M1054 1476h2v2h-2z"/>
                  <path fill="${shade2}" d="M428 1706h2v2h-2zM2788 1802h2v2h-2z"/>
                  <path fill="${shade0}" d="M2286 991h1v1h-1z"/>
                  <path fill="${shade1}" d="M1296 1081h1v1h-1z"/>
                  <path fill="${shade2}" d="M670 1311h1v1h-1zM3030 1407h1v1h-1z"/>
                  <path fill="${shade0}" d="M824 82h-4v4h4z"/>
                  <path fill="${shade1}" d="M1814 172h-4v4h4z"/>
                  <path fill="${shade2}" d="M2440 402h-4v4h4zM80 498h-4v4h4z"/>
                  <path fill="${shade0}" d="M2114 12h-4v4h4z"/>
                  <path fill="${shade1}" d="M3104 102h-4v4h4z"/>
                  <path fill="${shade2}" d="M3730 332h-4v4h4zM1370 428h-4v4h4z"/>
                  <path fill="${shade0}" d="M1192 233h-2v2h2z"/>
                  <path fill="${shade1}" d="M2182 323h-2v2h2z"/>
                  <path fill="${shade2}" d="M2808 553h-2v2h2zM448 649h-2v2h2z"/>
                  <path fill="${shade0}" d="M1762 423h-2v2h2z"/>
                  <path fill="${shade1}" d="M2752 513h-2v2h2z"/>
                  <path fill="${shade2}" d="M3378 743h-2v2h2zM1018 839h-2v2h2z"/>
                  <path fill="${shade0}" d="M1520 28h-1v1h1z"/>
                  <path fill="${shade1}" d="M2510 118h-1v1h1z"/>
                  <path fill="${shade2}" d="M3136 348h-1v1h1zM776 444h-1v1h1z"/>
                  <path fill="url(#c)" fill-opacity=".5" d="M0 0h3840v3840H0z"/>
                  <path fill="url(#d)" fill-opacity=".7" d="M0 0h3840v3840H0z"/>
                  <path fill="url(#e)" fill-opacity=".4" d="M0 0h3840v3840H0z"/>
                  <path fill="${shade3}" fill-rule="evenodd" d="M2245 1468h-180v30h-99v422h378v-422h-99v-30Z" clip-rule="evenodd"/>
                  <path fill="url(#f)" fill-rule="evenodd" d="M2245 1468h-180v30h-99v422h378v-422h-99v-30Z" clip-rule="evenodd"/>
                  <path fill="${accent4}" fill-opacity=".66" d="M2065 1495h180v3h-180z"/>
                  <path fill="${shade4}" d="M1832 1532h283v388h-283z"/>
                  <path fill="${accent4}" fill-opacity=".5" d="M1832 1532h283v388h-283z"/>
                  <path fill="${shade1}" d="M1842 1542h263v10h-263z"/>
                  <path fill="${accent4}" d="M1842 1562h263v10h-263zM1842 1582h263v10h-263z"/>
                  <path fill="${shade1}" d="M1842 1602h263v10h-263zM1842 1622h263v10h-263zM1842 1642h263v10h-263z"/>
                  <path fill="${accent4}" d="M2078 1642h27v10h-27z"/>
                  <path fill="${shade1}" d="M1842 1662h263v10h-263zM1842 1682h263v10h-263zM1842 1702h263v10h-263zM1842 1722h263v10h-263zM1842 1742h263v10h-263zM1842 1762h263v10h-263zM1842 1782h263v10h-263z"/>
                  <path fill="${accent4}" d="M1842 1802h263v10h-263z"/>
                  <path fill="${shade1}" d="M1842 1822h263v10h-263zM1842 1842h263v10h-263zM1842 1862h263v10h-263zM1842 1882h263v10h-263z"/>
                  <path fill="${accent4}" d="M2051 1762h27v10h-27z"/>
                  <path fill="${shade1}" d="M1842 1902h263v10h-263z"/>
                  <path fill="${accent4}" d="M1869 1682h27v10h-27z"/>
                  <path fill="${shade4}" d="M2478 1920h-283v-388h283z"/>
                  <path fill="${accent4}" fill-opacity=".5" d="M2478 1920h-283v-388h283z"/>
                  <path fill="${shade1}" d="M2468 1910h-263v-10h263z"/>
                  <path fill="${accent4}" d="M2468 1890h-263v-10h263zM2468 1870h-263v-10h263z"/>
                  <path fill="${shade1}" d="M2468 1850h-263v-10h263zM2468 1830h-263v-10h263zM2468 1810h-263v-10h263z"/>
                  <path fill="${accent4}" d="M2232 1810h-27v-10h27z"/>
                  <path fill="${shade1}" d="M2468 1790h-263v-10h263zM2468 1770h-263v-10h263zM2468 1750h-263v-10h263zM2468 1730h-263v-10h263zM2468 1710h-263v-10h263zM2468 1690h-263v-10h263zM2468 1670h-263v-10h263z"/>
                  <path fill="${accent4}" d="M2468 1650h-263v-10h263z"/>
                  <path fill="${shade1}" d="M2468 1630h-263v-10h263zM2468 1610h-263v-10h263zM2468 1590h-263v-10h263zM2468 1570h-263v-10h263z"/>
                  <path fill="${accent4}" d="M2259 1690h-27v-10h27z"/>
                  <path fill="${shade1}" d="M2468 1550h-263v-10h263z"/>
                  <path fill="${accent4}" d="M2441 1770h-27v-10h27z"/>
                  <path fill="${shade7}" d="M2320 1775h31v145h-31z"/>
                  <path fill="${accent5}" fill-opacity=".38" d="M2320 1775h31v145h-31z"/>
                  <path fill="${shade5}" d="M2351 1775h285v145h-285z"/>
                  <path fill="${accent5}" fill-opacity=".25" d="M2351 1775h285v145h-285z"/>
                  <path fill="url(#g)" fill-opacity=".3" d="M2351 1775h285v145h-285z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M2339 1806h4v5h-4zM2328 1806h4v5h-4z"/>
                  <path fill="${shade2}" fill-opacity=".33" d="M2339 1789h4v5h-4zM2328 1789h4v5h-4zM2339 1823h4v5h-4zM2328 1823h4v5h-4zM2339 1840h4v5h-4zM2328 1840h4v5h-4z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M2339 1857h4v5h-4zM2328 1857h4v5h-4z"/>
                  <path fill="${shade2}" fill-opacity=".33" d="M2339 1874h4v5h-4zM2328 1874h4v5h-4zM2339 1891h4v5h-4zM2328 1891h4v5h-4z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M2378 1787h12v10h-12zM2358 1804h12v10h-12z"/>
                  <path fill="${shade6}" fill-opacity=".25" d="M2358 1787h12v10h-12zM2418 1787h12v10h-12zM2458 1787h12v10h-12zM2478 1787h12v10h-12zM2498 1787h12v10h-12zM2518 1787h12v10h-12zM2538 1787h12v10h-12zM2578 1787h12v10h-12zM2598 1787h12v10h-12zM2618 1787h12v10h-12zM2378 1804h12v10h-12zM2398 1804h12v10h-12zM2418 1804h12v10h-12zM2438 1804h12v10h-12zM2458 1804h12v10h-12zM2478 1804h12v10h-12zM2498 1804h12v10h-12zM2518 1804h12v10h-12zM2538 1804h12v10h-12zM2558 1804h12v10h-12zM2578 1804h12v10h-12zM2598 1804h12v10h-12zM2358 1821h12v10h-12zM2378 1821h12v10h-12zM2398 1821h12v10h-12zM2418 1821h12v10h-12zM2438 1821h12v10h-12zM2458 1821h12v10h-12zM2478 1821h12v10h-12zM2498 1821h12v10h-12zM2518 1821h12v10h-12zM2538 1821h12v10h-12zM2558 1821h12v10h-12zM2578 1821h12v10h-12zM2598 1821h12v10h-12zM2358 1838h12v10h-12zM2378 1838h12v10h-12zM2398 1838h12v10h-12zM2418 1838h12v10h-12zM2438 1838h12v10h-12zM2478 1838h12v10h-12zM2498 1838h12v10h-12zM2538 1838h12v10h-12zM2558 1838h12v10h-12zM2618 1838h12v10h-12zM2378 1855h12v10h-12zM2438 1855h12v10h-12zM2458 1855h12v10h-12zM2478 1855h12v10h-12zM2498 1855h12v10h-12zM2518 1855h12v10h-12zM2538 1855h12v10h-12zM2558 1855h12v10h-12zM2578 1855h12v10h-12zM2598 1855h12v10h-12zM2618 1855h12v10h-12zM2358 1872h12v10h-12zM2398 1872h12v10h-12zM2418 1872h12v10h-12zM2438 1872h12v10h-12zM2498 1872h12v10h-12zM2518 1872h12v10h-12zM2538 1872h12v10h-12zM2558 1872h12v10h-12zM2578 1872h12v10h-12zM2598 1872h12v10h-12zM2618 1872h12v10h-12zM2358 1889h12v10h-12zM2378 1889h12v10h-12zM2398 1889h12v10h-12zM2418 1889h12v10h-12zM2438 1889h12v10h-12zM2458 1889h12v10h-12zM2478 1889h12v10h-12zM2518 1889h12v10h-12zM2538 1889h12v10h-12zM2558 1889h12v10h-12zM2598 1889h12v10h-12zM2618 1889h12v10h-12z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M2358 1855h12v10h-12zM2398 1787h12v10h-12zM2438 1787h12v10h-12zM2558 1787h12v10h-12zM2618 1804h12v10h-12zM2618 1821h12v10h-12zM2598 1838h12v10h-12zM2578 1838h12v10h-12zM2518 1838h12v10h-12zM2458 1838h12v10h-12zM2398 1855h12v10h-12zM2418 1855h12v10h-12zM2458 1872h12v10h-12zM2498 1889h12v10h-12zM2578 1889h12v10h-12zM2478 1872h12v10h-12zM2378 1872h12v10h-12z"/>
                  <path fill="${shade0}" fill-opacity=".2" d="M2356 1792h16v6h-16zM2356 1809h16v6h-16zM2356 1826h16v6h-16zM2356 1843h16v6h-16zM2356 1860h16v6h-16zM2356 1877h16v6h-16zM2356 1894h16v6h-16zM2376 1792h16v6h-16zM2376 1809h16v6h-16zM2376 1826h16v6h-16zM2376 1843h16v6h-16zM2376 1860h16v6h-16zM2376 1877h16v6h-16zM2376 1894h16v6h-16zM2396 1792h16v6h-16zM2396 1809h16v6h-16zM2396 1826h16v6h-16zM2396 1843h16v6h-16zM2396 1860h16v6h-16zM2396 1877h16v6h-16zM2396 1894h16v6h-16zM2416 1792h16v6h-16zM2416 1809h16v6h-16zM2416 1826h16v6h-16zM2416 1843h16v6h-16zM2416 1860h16v6h-16zM2416 1877h16v6h-16zM2416 1894h16v6h-16zM2436 1792h16v6h-16zM2436 1809h16v6h-16zM2436 1826h16v6h-16zM2436 1843h16v6h-16zM2436 1860h16v6h-16zM2436 1877h16v6h-16zM2436 1894h16v6h-16zM2456 1792h16v6h-16zM2456 1809h16v6h-16zM2456 1826h16v6h-16zM2456 1843h16v6h-16zM2456 1860h16v6h-16zM2456 1877h16v6h-16zM2456 1894h16v6h-16zM2476 1792h16v6h-16zM2476 1809h16v6h-16zM2476 1826h16v6h-16zM2476 1843h16v6h-16zM2476 1860h16v6h-16zM2476 1877h16v6h-16zM2476 1894h16v6h-16zM2496 1792h16v6h-16zM2496 1809h16v6h-16zM2496 1826h16v6h-16zM2496 1843h16v6h-16zM2496 1860h16v6h-16zM2496 1877h16v6h-16zM2496 1894h16v6h-16zM2516 1792h16v6h-16zM2516 1809h16v6h-16zM2516 1826h16v6h-16zM2516 1843h16v6h-16zM2516 1860h16v6h-16zM2516 1877h16v6h-16zM2516 1894h16v6h-16zM2536 1792h16v6h-16zM2536 1809h16v6h-16zM2536 1826h16v6h-16zM2536 1843h16v6h-16zM2536 1860h16v6h-16zM2536 1877h16v6h-16zM2536 1894h16v6h-16zM2556 1792h16v6h-16zM2556 1809h16v6h-16zM2556 1826h16v6h-16zM2556 1843h16v6h-16zM2556 1860h16v6h-16zM2556 1877h16v6h-16zM2556 1894h16v6h-16zM2576 1792h16v6h-16zM2576 1809h16v6h-16zM2576 1826h16v6h-16zM2576 1843h16v6h-16zM2576 1860h16v6h-16zM2576 1877h16v6h-16zM2576 1894h16v6h-16zM2596 1792h16v6h-16zM2596 1809h16v6h-16zM2596 1826h16v6h-16zM2596 1843h16v6h-16zM2596 1860h16v6h-16zM2596 1877h16v6h-16zM2596 1894h16v6h-16zM2616 1792h16v6h-16zM2616 1809h16v6h-16zM2616 1826h16v6h-16zM2616 1843h16v6h-16zM2616 1860h16v6h-16zM2616 1877h16v6h-16zM2616 1894h16v6h-16z"/>
                  <path fill="${shade6}" d="M2368 1670h13v250h-13z"/>
                  <path fill="url(#h)" d="M2368 1670h13v250h-13z"/>
                  <path fill="${shade6}" d="M2576 1670h13v250h-13z"/>
                  <path fill="url(#i)" d="M2576 1670h13v250h-13z"/>
                  <path fill="${shade6}" d="M2795 1670h13v250h-13z"/>
                  <path fill="url(#j)" d="M2795 1670h13v250h-13z"/>
                  <mask id="k" width="428" height="203" x="2374" y="1670" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="white" d="M2801.5 1670v203h-427v-196.41c-.05-4.22 0-6.59 0-6.59v6.59c.39 33.95 7.12 187.41 96.5 187.41 100.5 0 111.5-194 111.5-194s-1 194 109.5 194c107.55 0 109.47-183.79 109.5-193.59v-.41Z"/>
                  </mask>
                  <g mask="url(#k)">
                    <path fill="url(#l)" d="M2374 1670h1v210h-1z"/>
                    <path fill="url(#m)" d="M2385 1670h1v210h-1z"/>
                    <path fill="url(#n)" d="M2396 1670h1v210h-1z"/>
                    <path fill="url(#o)" d="M2407 1670h1v210h-1z"/>
                    <path fill="url(#p)" d="M2418 1670h1v210h-1z"/>
                    <path fill="url(#q)" d="M2429 1670h1v210h-1z"/>
                    <path fill="url(#r)" d="M2440 1670h1v210h-1z"/>
                    <path fill="url(#s)" d="M2451 1670h1v210h-1z"/>
                    <path fill="url(#t)" d="M2462 1670h1v210h-1z"/>
                    <path fill="url(#u)" d="M2473 1670h1v210h-1z"/>
                    <path fill="url(#v)" d="M2484 1670h1v210h-1z"/>
                    <path fill="url(#w)" d="M2495 1670h1v210h-1z"/>
                    <path fill="url(#x)" d="M2506 1670h1v210h-1z"/>
                    <path fill="url(#y)" d="M2517 1670h1v210h-1z"/>
                    <path fill="url(#z)" d="M2528 1670h1v210h-1z"/>
                    <path fill="url(#A)" d="M2539 1670h1v210h-1z"/>
                    <path fill="url(#B)" d="M2550 1670h1v210h-1z"/>
                    <path fill="url(#C)" d="M2561 1670h1v210h-1z"/>
                    <path fill="url(#D)" d="M2572 1670h1v210h-1z"/>
                    <path fill="url(#E)" d="M2583 1670h1v210h-1z"/>
                    <path fill="url(#F)" d="M2594 1670h1v210h-1z"/>
                    <path fill="url(#G)" d="M2605 1670h1v210h-1z"/>
                    <path fill="url(#H)" d="M2616 1670h1v210h-1z"/>
                    <path fill="url(#I)" d="M2627 1670h1v210h-1z"/>
                    <path fill="url(#J)" d="M2638 1670h1v210h-1z"/>
                    <path fill="url(#K)" d="M2649 1670h1v210h-1z"/>
                    <path fill="url(#L)" d="M2660 1670h1v210h-1z"/>
                    <path fill="url(#M)" d="M2671 1670h1v210h-1z"/>
                    <path fill="url(#N)" d="M2682 1670h1v210h-1z"/>
                    <path fill="url(#O)" d="M2693 1670h1v210h-1z"/>
                    <path fill="url(#P)" d="M2704 1670h1v210h-1z"/>
                    <path fill="url(#Q)" d="M2715 1670h1v210h-1z"/>
                    <path fill="url(#R)" d="M2726 1670h1v210h-1z"/>
                    <path fill="url(#S)" d="M2737 1670h1v210h-1z"/>
                    <path fill="url(#T)" d="M2748 1670h1v210h-1z"/>
                    <path fill="url(#U)" d="M2759 1670h1v210h-1z"/>
                    <path fill="url(#V)" d="M2770 1670h1v210h-1z"/>
                    <path fill="url(#W)" d="M2781 1670h1v210h-1z"/>
                    <path fill="url(#X)" d="M2792 1670h1v210h-1z"/>
                  </g>
                  <path stroke="url(#Y)" stroke-width="2" d="M2801.5 1670s1 194-109.5 194-109.5-194-109.5-194-11 194-111.5 194-96.5-194-96.5-194v203h427v-203Z"/>
                  <mask id="Z" width="450" height="203" x="2395" y="1670" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="white" d="M2727.5 1864c110.5 0 117-194 117-194v203h-449v-203s7 194 107.5 194 107.5-194 107.5-194 6.5 194 117 194Z"/>
                  </mask>
                  <g mask="url(#Z)">
                    <path fill="url(#aa)" d="M2396 1670h1v210h-1z"/>
                    <path fill="url(#ab)" d="M2408 1670h1v210h-1z"/>
                    <path fill="url(#ac)" d="M2420 1670h1v210h-1z"/>
                    <path fill="url(#ad)" d="M2432 1670h1v210h-1z"/>
                    <path fill="url(#ae)" d="M2444 1670h1v210h-1z"/>
                    <path fill="url(#af)" d="M2456 1670h1v210h-1z"/>
                    <path fill="url(#ag)" d="M2468 1670h1v210h-1z"/>
                    <path fill="url(#ah)" d="M2480 1670h1v210h-1z"/>
                    <path fill="url(#ai)" d="M2492 1670h1v210h-1z"/>
                    <path fill="url(#aj)" d="M2504 1670h1v210h-1z"/>
                    <path fill="url(#ak)" d="M2516 1670h1v210h-1z"/>
                    <path fill="url(#al)" d="M2528 1670h1v210h-1z"/>
                    <path fill="url(#am)" d="M2540 1670h1v210h-1z"/>
                    <path fill="url(#an)" d="M2552 1670h1v210h-1z"/>
                    <path fill="url(#ao)" d="M2564 1670h1v210h-1z"/>
                    <path fill="url(#ap)" d="M2576 1670h1v210h-1z"/>
                    <path fill="url(#aq)" d="M2588 1670h1v210h-1z"/>
                    <path fill="url(#ar)" d="M2600 1670h1v210h-1z"/>
                    <path fill="url(#as)" d="M2612 1670h1v210h-1z"/>
                    <path fill="url(#at)" d="M2624 1670h1v210h-1z"/>
                    <path fill="url(#au)" d="M2636 1670h1v210h-1z"/>
                    <path fill="url(#av)" d="M2648 1670h1v210h-1z"/>
                    <path fill="url(#aw)" d="M2660 1670h1v210h-1z"/>
                    <path fill="url(#ax)" d="M2672 1670h1v210h-1z"/>
                    <path fill="url(#ay)" d="M2684 1670h1v210h-1z"/>
                    <path fill="url(#az)" d="M2696 1670h1v210h-1z"/>
                    <path fill="url(#aA)" d="M2708 1670h1v210h-1z"/>
                    <path fill="url(#aB)" d="M2720 1670h1v210h-1z"/>
                    <path fill="url(#aC)" d="M2732 1670h1v210h-1z"/>
                    <path fill="url(#aD)" d="M2744 1670h1v210h-1z"/>
                    <path fill="url(#aE)" d="M2756 1670h1v210h-1z"/>
                    <path fill="url(#aF)" d="M2768 1670h1v210h-1z"/>
                    <path fill="url(#aG)" d="M2780 1670h1v210h-1z"/>
                    <path fill="url(#aH)" d="M2792 1670h1v210h-1z"/>
                    <path fill="url(#aI)" d="M2804 1670h1v210h-1z"/>
                    <path fill="url(#aJ)" d="M2816 1670h1v210h-1z"/>
                    <path fill="url(#aK)" d="M2828 1670h1v210h-1z"/>
                    <path fill="url(#aL)" d="M2840 1670h1v210h-1z"/>
                  </g>
                  <path stroke="url(#aM)" stroke-width="2" d="M2727.5 1864c110.5 0 117-194 117-194v203h-449v-203s7 194 107.5 194 107.5-194 107.5-194 6.5 194 117 194Z"/>
                  <path fill="${shade7}" d="M2372 1869h472v7h-472z"/>
                  <path fill="${shade6}" d="M2389 1670h13v250h-13z"/>
                  <path fill="url(#aN)" d="M2389 1670h13v250h-13z"/>
                  <path fill="${shade6}" d="M2604 1670h13v250h-13z"/>
                  <path fill="url(#aO)" d="M2604 1670h13v250h-13z"/>
                  <path fill="${shade6}" d="M2838 1670h13v250h-13z"/>
                  <path fill="url(#aP)" d="M2838 1670h13v250h-13z"/>
                  <path fill="url(#aQ)" d="M2606 1667h9v3h-9z"/>
                  <path fill="url(#aR)" d="M2578 1667h9v3h-9z"/>
                  <path fill="url(#aS)" d="M2797 1667h9v3h-9z"/>
                  <path fill="url(#aT)" d="M2840 1667h9v3h-9z"/>
                  <path fill="url(#aU)" d="M2609 1664h3v3h-3z"/>
                  <path fill="url(#aV)" d="M2581 1664h3v3h-3z"/>
                  <path fill="url(#aW)" d="M2800 1664h3v3h-3z"/>
                  <path fill="url(#aX)" d="M2843 1664h3v3h-3z"/>
                  <path fill="${shade6}" d="M2305 1385h145v535h-145z"/>
                  <path fill="url(#aY)" d="M2305 1385h145v535h-145z"/>
                  <path fill="${shade0}" fill-opacity=".33" fill-rule="evenodd" d="M2444 1395h-133v525h6v-515h121v515h6v-525Z" clip-rule="evenodd"/>
                  <path fill="${shade5}" fill-opacity=".5" d="M2242 1385h63v535h-63z"/>
                  <path fill="${shade6}" fill-opacity=".5" d="M2242 1385h63v535h-63z"/>
                  <path fill="url(#aZ)" d="M2242 1385h63v535h-63z"/>
                  <path fill="${shade0}" fill-opacity=".33" fill-rule="evenodd" d="M2302 1395h-57v525h3v-515h51v515h3v-525Z" clip-rule="evenodd"/>
                  <path fill="${shade6}" d="M2315 1315h109v70h-109z"/>
                  <path fill="${shade5shade6}" d="M2268 1315h47v70h-47z"/>
                  <path fill="${shade0}" fill-opacity=".33" fill-rule="evenodd" d="M2418 1325h-97v60h6v-50h85v50h6v-60ZM2312 1325h-41v60h3v-50h35v50h3v-60Z" clip-rule="evenodd"/>
                  <path fill="${shade0}" fill-opacity=".3" d="M2326 1415h8v10h-8zM2326 1435h8v10h-8zM2326 1455h8v10h-8zM2326 1495h8v10h-8zM2326 1535h8v10h-8zM2326 1615h8v10h-8zM2326 1655h8v10h-8zM2326 1695h8v10h-8zM2326 1715h8v10h-8zM2326 1735h8v10h-8zM2326 1835h8v10h-8zM2326 1855h8v10h-8zM2326 1755h8v10h-8zM2326 1775h8v10h-8zM2345 1435h8v10h-8zM2345 1455h8v10h-8zM2345 1475h8v10h-8zM2345 1495h8v10h-8zM2345 1535h8v10h-8zM2345 1575h8v10h-8zM2345 1615h8v10h-8zM2345 1635h8v10h-8zM2345 1675h8v10h-8zM2345 1735h8v10h-8zM2345 1835h8v10h-8zM2345 1895h8v10h-8zM2345 1755h8v10h-8zM2345 1795h8v10h-8zM2345 1815h8v10h-8zM2364 1435h8v10h-8zM2364 1495h8v10h-8zM2364 1535h8v10h-8zM2364 1555h8v10h-8zM2364 1575h8v10h-8zM2364 1615h8v10h-8zM2364 1635h8v10h-8zM2364 1675h8v10h-8zM2364 1715h8v10h-8zM2364 1735h8v10h-8zM2364 1855h8v10h-8zM2364 1875h8v10h-8zM2364 1795h8v10h-8zM2383 1435h8v10h-8zM2383 1455h8v10h-8zM2383 1475h8v10h-8zM2383 1515h8v10h-8zM2383 1535h8v10h-8zM2383 1555h8v10h-8zM2383 1575h8v10h-8zM2383 1615h8v10h-8zM2383 1635h8v10h-8zM2383 1655h8v10h-8zM2383 1675h8v10h-8zM2383 1715h8v10h-8zM2383 1735h8v10h-8zM2383 1875h8v10h-8zM2383 1755h8v10h-8zM2383 1775h8v10h-8zM2383 1795h8v10h-8zM2402 1415h8v10h-8zM2402 1435h8v10h-8zM2402 1455h8v10h-8zM2402 1475h8v10h-8zM2402 1495h8v10h-8zM2402 1515h8v10h-8zM2402 1575h8v10h-8zM2402 1635h8v10h-8zM2402 1655h8v10h-8zM2402 1675h8v10h-8zM2402 1715h8v10h-8zM2402 1735h8v10h-8zM2402 1835h8v10h-8zM2402 1875h8v10h-8zM2402 1895h8v10h-8zM2402 1755h8v10h-8zM2402 1775h8v10h-8zM2402 1795h8v10h-8zM2402 1815h8v10h-8zM2421 1415h8v10h-8zM2421 1435h8v10h-8zM2421 1455h8v10h-8zM2421 1475h8v10h-8zM2421 1495h8v10h-8zM2421 1515h8v10h-8zM2421 1535h8v10h-8zM2421 1555h8v10h-8zM2421 1595h8v10h-8zM2421 1615h8v10h-8zM2421 1655h8v10h-8zM2421 1675h8v10h-8zM2421 1715h8v10h-8zM2421 1735h8v10h-8zM2421 1875h8v10h-8zM2421 1755h8v10h-8zM2337 1345h8v10h-8v-10ZM2356 1365h8v10h-8v-10ZM2375 1365h8v10h-8v-10ZM2394 1345h8v10h-8v-10ZM2394 1365h8v10h-8v-10Z"/>
                  <path fill="${shade0}" fill-rule="evenodd" d="M2281 1345h-4v10h4v-10Zm-26 70h-4v10h4v-10Zm0 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm12-480h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm4-480h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm10-530h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-2 50v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm10-550h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Z" clip-rule="evenodd"/>
                  <path fill="url(#ba)" fill-opacity=".7" fill-rule="evenodd" d="M2281 1345h-4v10h4v-10Zm-26 70h-4v10h4v-10Zm0 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm12-480h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm4-480h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm10-530h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Zm-2 50v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm10-550h-4v10h4v-10Zm-4 20h4v10h-4v-10Zm2 60v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm0 10v10h-4v-10h4Zm0 30v-10h-4v10h4Zm6-560h4v10h-4v-10Zm4 20h-4v10h4v-10Z" clip-rule="evenodd"/>
                  <path fill="url(#bb)" d="M2321 1287h49v28h-49z"/>
                  <path fill="url(#bc)" d="M2332 1259h27v28h-27z"/>
                  <path fill="url(#bd)" d="M2342 1200h7v59h-7z"/>
                  <path fill="url(#be)" d="M1899 1154h75v760l-95 6 20-766Z"/>
                  <path fill="url(#bf)" fill-opacity=".2" d="M1899 1154h75v760l-95 6 20-766Z"/>
                  <path fill="url(#bg)" d="M1974 1154h44l10 766h-54v-766Z"/>
                  <path fill="${shade4}" d="m1977 1154 51 766h-149l91.5-766h6.5Z"/>
                  <path fill="url(#bh)" d="m1977 1154 51 766h-149l91.5-766h6.5Z"/>
                  <mask id="bj" width="95" height="766" x="1879" y="1154" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="url(#bi)" d="M1899 1154h75v760l-95 6 20-766Z"/>
                  </mask>
                  <g fill="${accent2}" fill-opacity=".5" mask="url(#bj)">
                    <path d="M1884 1705h12v10h-12zM1883 1727h8v10h-8zM1882 1749h3v10h-3z"/>
                  </g>
                  <path fill="${accent2}" fill-opacity=".5" d="M1944 1485h42v10h-42zM1955 1463h42v10h-42zM1966 1441h33v10h-33zM1977 1419h27v10h-27zM1988 1397h21v10h-21zM1933 1507h42v10h-42zM1922 1529h42v10h-42zM1917 1551h36v10h-36zM1912 1573h30v10h-30zM1907 1595h24v10h-24zM1902 1617h18v10h-18zM1897 1639h14v10h-14zM1892 1661h14v10h-14zM2000 1375h14v10h-14zM2005 1353h14v10h-14zM1887 1683h14v10h-14z"/>
                  <mask id="bl" width="54" height="766" x="1974" y="1154" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="url(#bk)" d="M1974 1154h44l10 766h-54v-766Z"/>
                  </mask>
                  <g fill="${accent2}" fill-opacity=".5" mask="url(#bl)">
                    <path d="M2010 1331h11v10h-11zM2015 1309h6v10h-6z"/>
                  </g>
                  <path fill="${shade7}" d="M1940 1075h2v79h-2z"/>
                  <g filter="url(#bm)">
                    <ellipse cx="1941" cy="1074" fill="${accent0}" fill-opacity=".14" rx="23" ry="2" transform="rotate(-23 1941 1074)"/>
                  </g>
                  <g filter="url(#bn)">
                    <ellipse cx="1941" cy="1074" fill="${accent0}" fill-opacity=".14" rx="2" ry="23" transform="rotate(-23 1941 1074)"/>
                  </g>
                  <circle cx="1941" cy="1074" r="2" fill="${accent0}"/>
                  <circle cx="1941" cy="1074" r="2" fill="${shade0}" fill-opacity=".2"/>
                  <path fill="${shade2shade3}" d="M1612 1397h24v523h-24z"/>
                  <path fill="url(#bo)" fill-opacity=".5" d="M1612 1397h24v523h-24z"/>
                  <path fill="${shade6}" d="M1636 1397h24v523h-24z"/>
                  <path fill="url(#bp)" fill-opacity=".5" d="M1636 1397h24v523h-24z"/>
                  <path fill="${shade5}" d="M1648 1413h67v507h-67z"/>
                  <path fill="url(#bq)" d="M1648 1413h67v507h-67z"/>
                  <path fill="${shade6}" d="M1818 1397h24v523h-24z"/>
                  <path fill="url(#br)" fill-opacity=".5" d="M1818 1397h24v523h-24z"/>
                  <path fill="${shade2shade3}" d="M1794 1397h24v523h-24z"/>
                  <path fill="url(#bs)" fill-opacity=".5" d="M1794 1397h24v523h-24z"/>
                  <path fill="${shade5}" d="M1739 1413h67v507h-67z"/>
                  <path fill="url(#bt)" d="M1739 1413h67v507h-67z"/>
                  <path fill="${shade4}" d="M1648 1418h67v4h-67zM1648 1430h67v4h-67zM1648 1442h67v4h-67zM1648 1454h67v4h-67zM1648 1466h67v4h-67zM1648 1478h67v4h-67zM1648 1490h67v4h-67zM1648 1502h67v4h-67zM1648 1514h67v4h-67zM1648 1526h67v4h-67zM1648 1538h67v4h-67zM1648 1550h67v4h-67zM1648 1562h67v4h-67zM1648 1574h67v4h-67zM1648 1586h67v4h-67zM1648 1598h67v4h-67zM1648 1610h67v4h-67zM1648 1622h67v4h-67zM1648 1634h67v4h-67zM1648 1646h67v4h-67zM1648 1658h67v4h-67zM1648 1670h67v4h-67zM1648 1682h67v4h-67zM1648 1694h67v4h-67zM1648 1706h67v4h-67zM1648 1718h67v4h-67zM1648 1730h67v4h-67zM1648 1742h67v4h-67zM1648 1754h67v4h-67zM1648 1766h67v4h-67zM1648 1778h67v4h-67zM1648 1790h67v4h-67zM1648 1802h67v4h-67zM1648 1814h67v4h-67zM1648 1826h67v4h-67zM1648 1838h67v4h-67zM1648 1850h67v4h-67zM1648 1862h67v4h-67zM1648 1874h67v4h-67zM1648 1886h67v4h-67zM1648 1898h67v4h-67zM1739 1418h67v4h-67zM1739 1430h67v4h-67zM1739 1442h67v4h-67zM1739 1454h67v4h-67zM1739 1466h67v4h-67zM1739 1478h67v4h-67zM1739 1490h67v4h-67zM1739 1502h67v4h-67zM1739 1514h67v4h-67zM1739 1526h67v4h-67zM1739 1538h67v4h-67zM1739 1550h67v4h-67zM1739 1562h67v4h-67zM1739 1574h67v4h-67zM1739 1586h67v4h-67zM1739 1598h67v4h-67zM1739 1610h67v4h-67zM1739 1622h67v4h-67zM1739 1634h67v4h-67zM1739 1646h67v4h-67zM1739 1658h67v4h-67zM1739 1670h67v4h-67zM1739 1682h67v4h-67zM1739 1694h67v4h-67zM1739 1706h67v4h-67zM1739 1718h67v4h-67zM1739 1730h67v4h-67zM1739 1742h67v4h-67zM1739 1754h67v4h-67zM1739 1766h67v4h-67zM1739 1778h67v4h-67zM1739 1790h67v4h-67zM1739 1802h67v4h-67zM1739 1814h67v4h-67zM1739 1826h67v4h-67zM1739 1838h67v4h-67zM1739 1850h67v4h-67zM1739 1862h67v4h-67zM1739 1874h67v4h-67zM1739 1886h67v4h-67zM1739 1898h67v4h-67z"/>
                  <path fill="${accent6}" d="M1657 1478h14v4h-14zM1802 1442h4v4h-4zM1790 1442h4v4h-4zM1688 1538h4v4h-4zM1679 1598h8v4h-8zM1794 1718h8v4h-8zM1763 1610h8v4h-8zM1670 1646h45v4h-45zM1739 1802h45v4h-45zM1739 1454h45v4h-45z"/>
                  <path fill="${shade2shade3}" d="M1703 1397h24v523h-24z"/>
                  <path fill="url(#bu)" fill-opacity=".5" d="M1703 1397h24v523h-24z"/>
                  <path fill="${shade6}" d="M1727 1397h24v523h-24z"/>
                  <path fill="url(#bv)" fill-opacity=".5" d="M1727 1397h24v523h-24z"/>
                  <mask id="bw" width="24" height="103" x="1612" y="1294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="${shade2shade3}" d="M1612 1294h24v103h-24z"/>
                  </mask>
                  <g filter="url(#bx)" mask="url(#bw)">
                    <path fill="url(#by)" d="M1607 1300h34v103h-34z"/>
                  </g>
                  <mask id="bz" width="24" height="103" x="1703" y="1294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="${shade2shade3}" d="M1703 1294h24v103h-24z"/>
                  </mask>
                  <g filter="url(#bA)" mask="url(#bz)">
                    <path fill="url(#bB)" d="M1698 1300h34v103h-34z"/>
                  </g>
                  <mask id="bC" width="24" height="103" x="1794" y="1294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="${shade2shade3}" d="M1794 1294h24v103h-24z"/>
                  </mask>
                  <g filter="url(#bD)" mask="url(#bC)">
                    <path fill="url(#bE)" d="M1789 1300h34v103h-34z"/>
                  </g>
                  <path fill="${shade7}" d="M1171 1775h31v145h-31z"/>
                  <path fill="${accent5}" fill-opacity=".38" d="M1171 1775h31v145h-31z"/>
                  <path fill="${shade5}" d="M1202 1775h285v145h-285z"/>
                  <path fill="${accent5}" fill-opacity=".25" d="M1202 1775h285v145h-285z"/>
                  <path fill="url(#bF)" fill-opacity=".3" d="M1202 1775h285v145h-285z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M1190 1806h4v5h-4zM1179 1806h4v5h-4z"/>
                  <path fill="${shade2}" fill-opacity=".33" d="M1190 1789h4v5h-4zM1179 1789h4v5h-4zM1190 1823h4v5h-4zM1179 1823h4v5h-4zM1190 1840h4v5h-4zM1179 1840h4v5h-4z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M1190 1857h4v5h-4zM1179 1857h4v5h-4z"/>
                  <path fill="${shade2}" fill-opacity=".33" d="M1190 1874h4v5h-4zM1179 1874h4v5h-4zM1190 1891h4v5h-4zM1179 1891h4v5h-4z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M1229 1787h12v10h-12zM1209 1804h12v10h-12z"/>
                  <path fill="${shade6}" fill-opacity=".25" d="M1209 1787h12v10h-12zM1269 1787h12v10h-12zM1309 1787h12v10h-12zM1329 1787h12v10h-12zM1349 1787h12v10h-12zM1369 1787h12v10h-12zM1389 1787h12v10h-12zM1429 1787h12v10h-12zM1449 1787h12v10h-12zM1469 1787h12v10h-12zM1229 1804h12v10h-12zM1249 1804h12v10h-12zM1269 1804h12v10h-12zM1289 1804h12v10h-12zM1309 1804h12v10h-12zM1329 1804h12v10h-12zM1349 1804h12v10h-12zM1369 1804h12v10h-12zM1389 1804h12v10h-12zM1409 1804h12v10h-12zM1429 1804h12v10h-12zM1449 1804h12v10h-12zM1209 1821h12v10h-12zM1229 1821h12v10h-12zM1249 1821h12v10h-12zM1269 1821h12v10h-12zM1289 1821h12v10h-12zM1309 1821h12v10h-12zM1329 1821h12v10h-12zM1349 1821h12v10h-12zM1369 1821h12v10h-12zM1389 1821h12v10h-12zM1409 1821h12v10h-12zM1429 1821h12v10h-12zM1449 1821h12v10h-12zM1209 1838h12v10h-12zM1229 1838h12v10h-12zM1249 1838h12v10h-12zM1269 1838h12v10h-12zM1289 1838h12v10h-12zM1329 1838h12v10h-12zM1349 1838h12v10h-12zM1389 1838h12v10h-12zM1409 1838h12v10h-12zM1469 1838h12v10h-12zM1229 1855h12v10h-12zM1289 1855h12v10h-12zM1309 1855h12v10h-12zM1329 1855h12v10h-12zM1349 1855h12v10h-12zM1369 1855h12v10h-12zM1389 1855h12v10h-12zM1409 1855h12v10h-12zM1429 1855h12v10h-12zM1449 1855h12v10h-12zM1469 1855h12v10h-12zM1209 1872h12v10h-12zM1249 1872h12v10h-12zM1269 1872h12v10h-12zM1289 1872h12v10h-12zM1349 1872h12v10h-12zM1369 1872h12v10h-12zM1389 1872h12v10h-12zM1409 1872h12v10h-12zM1429 1872h12v10h-12zM1449 1872h12v10h-12zM1469 1872h12v10h-12zM1209 1889h12v10h-12zM1229 1889h12v10h-12zM1249 1889h12v10h-12zM1269 1889h12v10h-12zM1289 1889h12v10h-12zM1309 1889h12v10h-12zM1329 1889h12v10h-12zM1369 1889h12v10h-12zM1389 1889h12v10h-12zM1409 1889h12v10h-12zM1449 1889h12v10h-12zM1469 1889h12v10h-12z"/>
                  <path fill="${accent2}" fill-opacity=".16" d="M1209 1855h12v10h-12zM1249 1787h12v10h-12zM1289 1787h12v10h-12zM1409 1787h12v10h-12zM1469 1804h12v10h-12zM1469 1821h12v10h-12zM1449 1838h12v10h-12zM1429 1838h12v10h-12zM1369 1838h12v10h-12zM1309 1838h12v10h-12zM1249 1855h12v10h-12zM1269 1855h12v10h-12zM1309 1872h12v10h-12zM1349 1889h12v10h-12zM1429 1889h12v10h-12zM1329 1872h12v10h-12zM1229 1872h12v10h-12z"/>
                  <path fill="${shade0}" fill-opacity=".2" d="M1207 1792h16v6h-16zM1207 1809h16v6h-16zM1207 1826h16v6h-16zM1207 1843h16v6h-16zM1207 1860h16v6h-16zM1207 1877h16v6h-16zM1207 1894h16v6h-16zM1227 1792h16v6h-16zM1227 1809h16v6h-16zM1227 1826h16v6h-16zM1227 1843h16v6h-16zM1227 1860h16v6h-16zM1227 1877h16v6h-16zM1227 1894h16v6h-16zM1247 1792h16v6h-16zM1247 1809h16v6h-16zM1247 1826h16v6h-16zM1247 1843h16v6h-16zM1247 1860h16v6h-16zM1247 1877h16v6h-16zM1247 1894h16v6h-16zM1267 1792h16v6h-16zM1267 1809h16v6h-16zM1267 1826h16v6h-16zM1267 1843h16v6h-16zM1267 1860h16v6h-16zM1267 1877h16v6h-16zM1267 1894h16v6h-16zM1287 1792h16v6h-16zM1287 1809h16v6h-16zM1287 1826h16v6h-16zM1287 1843h16v6h-16zM1287 1860h16v6h-16zM1287 1877h16v6h-16zM1287 1894h16v6h-16zM1307 1792h16v6h-16zM1307 1809h16v6h-16zM1307 1826h16v6h-16zM1307 1843h16v6h-16zM1307 1860h16v6h-16zM1307 1877h16v6h-16zM1307 1894h16v6h-16zM1327 1792h16v6h-16zM1327 1809h16v6h-16zM1327 1826h16v6h-16zM1327 1843h16v6h-16zM1327 1860h16v6h-16zM1327 1877h16v6h-16zM1327 1894h16v6h-16zM1347 1792h16v6h-16zM1347 1809h16v6h-16zM1347 1826h16v6h-16zM1347 1843h16v6h-16zM1347 1860h16v6h-16zM1347 1877h16v6h-16zM1347 1894h16v6h-16zM1367 1792h16v6h-16zM1367 1809h16v6h-16zM1367 1826h16v6h-16zM1367 1843h16v6h-16zM1367 1860h16v6h-16zM1367 1877h16v6h-16zM1367 1894h16v6h-16zM1387 1792h16v6h-16zM1387 1809h16v6h-16zM1387 1826h16v6h-16zM1387 1843h16v6h-16zM1387 1860h16v6h-16zM1387 1877h16v6h-16zM1387 1894h16v6h-16zM1407 1792h16v6h-16zM1407 1809h16v6h-16zM1407 1826h16v6h-16zM1407 1843h16v6h-16zM1407 1860h16v6h-16zM1407 1877h16v6h-16zM1407 1894h16v6h-16zM1427 1792h16v6h-16zM1427 1809h16v6h-16zM1427 1826h16v6h-16zM1427 1843h16v6h-16zM1427 1860h16v6h-16zM1427 1877h16v6h-16zM1427 1894h16v6h-16zM1447 1792h16v6h-16zM1447 1809h16v6h-16zM1447 1826h16v6h-16zM1447 1843h16v6h-16zM1447 1860h16v6h-16zM1447 1877h16v6h-16zM1447 1894h16v6h-16zM1467 1792h16v6h-16zM1467 1809h16v6h-16zM1467 1826h16v6h-16zM1467 1843h16v6h-16zM1467 1860h16v6h-16zM1467 1877h16v6h-16zM1467 1894h16v6h-16z"/>
                  <path fill="${shade7}" d="M1567 1546h107v374h-107z"/>
                  <path fill="url(#bG)" d="M1567 1546h107v374h-107z"/>
                  <path fill="${shade6}" d="M1561 1508h93v38h-93z"/>
                  <mask id="bH" width="123" height="103" x="1438" y="1405" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="${shade2shade3}" d="M1438 1405h123v103h-123z"/>
                  </mask>
                  <g filter="url(#bI)" mask="url(#bH)">
                    <path fill="url(#bJ)" d="M1433 1411h133v103h-133z"/>
                  </g>
                  <mask id="bK" width="165" height="103" x="1402" y="1443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="${shade2shade3}" d="M1402 1443h165v103h-165z"/>
                  </mask>
                  <g filter="url(#bL)" mask="url(#bK)">
                    <path fill="url(#bM)" d="M1397 1449h175v103h-175z"/>
                  </g>
                  <path fill="url(#bN)" d="M1438 1508h123v374h-123z"/>
                  <path fill="url(#bO)" d="M1402 1546h165v374h-165z"/>
                  <path fill="${accent0}" fill-opacity=".67" d="M1567 1606h30v24h-30zM1651 1576h23v24h-23zM1567 1696h23v24h-23zM1604 1696h23v24h-23zM1567 1846h30v24h-30zM1611 1846h30v24h-30zM1611 1606h63v24h-63zM1567 1726h107v24h-107z"/>
                  <path fill="url(#bP)" fill-rule="evenodd" d="M1514 1508h-28v17h-48v4h48v17h-15v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v24h-69v6h69v44h28v-44h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h68v-6h-68v-24h15v-17h47v-4h-47v-17Z" clip-rule="evenodd"/>
                  <mask id="bQ" width="266" height="92" x="1001" y="1821" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="white" stroke="white" stroke-width="2" d="M1002.44 1852.75v58.44h263v-64.85c-.01-.01-.01-.03-.01-.05-.01-.06-.04-.18-.11-.33-.13-.29-.43-.76-1.11-1.27-1.38-1.02-4.38-2.22-10.8-2.22-3.52 0-6.89-1.38-10.09-3.35-3.19-1.96-6.29-4.57-9.27-7.13-.27-.24-.55-.47-.83-.71-2.69-2.32-5.28-4.55-7.8-6.25-2.78-1.89-5.35-3.03-7.74-3.03-7.13 0-13.4 4-19.42 10.28-5.49 5.71-10.64 13.18-15.96 20.88-.53.76-1.05 1.52-1.58 2.28-5.85 8.46-11.96 17.01-18.89 23.45-6.94 6.45-14.8 10.85-24.17 10.85-18.55 0-30.07-11.7-39.26-23.08-1.44-1.79-2.82-3.56-4.17-5.29-2.96-3.8-5.72-7.35-8.53-10.25-4.07-4.2-8.01-6.79-12.43-6.79-10.4 0-17.88 3.03-25.82 6.26-.3.12-.61.24-.91.37-8.3 3.36-17.18 6.77-30.22 6.77-5.06 0-8.97-1.66-11.6-3.32-.92-.57-1.68-1.15-2.28-1.66Z"/>
                  </mask>
                  <g mask="url(#bQ)">
                    <path fill="${shade7}" fill-rule="evenodd" d="m998.654 1811.12.978.21-23.286 109.55-.978-.21 23.286-109.55Zm7.996 0 .98.21-23.284 109.55-.978-.21 23.282-109.55Zm8.98.21-.98-.21-23.282 109.55.978.21 23.284-109.55Zm7.02-.21.98.21-23.28 109.55-.982-.21 23.282-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Zm7.02-.21.98.21-23.28 109.55-.98-.21 23.28-109.55Zm8.98.21-.98-.21-23.28 109.55.98.21 23.28-109.55Z" clip-rule="evenodd"/>
                  </g>
                  <g filter="url(#bR)">
                    <path stroke="${shade7}" stroke-width="2" d="M1002.44 1852.75v58.44h263v-64.85c-.01-.01-.01-.03-.01-.05-.01-.06-.04-.18-.11-.33-.13-.29-.43-.76-1.11-1.27-1.38-1.02-4.38-2.22-10.8-2.22-3.52 0-6.89-1.38-10.09-3.35-3.19-1.96-6.29-4.57-9.27-7.13-.27-.24-.55-.47-.83-.71-2.69-2.32-5.28-4.55-7.8-6.25-2.78-1.89-5.35-3.03-7.74-3.03-7.13 0-13.4 4-19.42 10.28-5.49 5.71-10.64 13.18-15.96 20.88-.53.76-1.05 1.52-1.58 2.28-5.85 8.46-11.96 17.01-18.89 23.45-6.94 6.45-14.8 10.85-24.17 10.85-18.55 0-30.07-11.7-39.26-23.08-1.44-1.79-2.82-3.56-4.17-5.29-2.96-3.8-5.72-7.35-8.53-10.25-4.07-4.2-8.01-6.79-12.43-6.79-10.4 0-17.88 3.03-25.82 6.26-.3.12-.61.24-.91.37-8.3 3.36-17.18 6.77-30.22 6.77-5.06 0-8.97-1.66-11.6-3.32-.92-.57-1.68-1.15-2.28-1.66Z"/>
                  </g>
                  <mask id="bS" width="266" height="75" x="1001" y="1839" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="white" stroke="white" stroke-width="2" d="M1265.44 1912.3v-63.43c-.31.24-.65.48-1.05.71-2.19 1.33-5.82 2.57-11.73 2.57-2.58 0-4.83 1.07-7.1 2.81-1.76 1.36-3.46 3.06-5.29 4.89-.55.55-1.12 1.12-1.7 1.69-4.97 4.87-10.98 9.96-20.52 9.96-4.84 0-9.52-2.02-14.08-4.92-4.25-2.71-8.5-6.25-12.75-9.8-.31-.25-.62-.51-.93-.77-4.59-3.82-9.2-7.58-13.94-10.4-4.74-2.81-9.54-4.63-14.5-4.63-4.69 0-9.24 3.67-13.79 9.72-4.5 5.99-8.76 14.01-12.96 22.12-.41.8-.82 1.6-1.23 2.39-3.75 7.27-7.45 14.45-11.18 19.97-2.07 3.07-4.18 5.69-6.35 7.54-2.18 1.86-4.5 3.02-6.97 3.02h-27.91c-6.29 0-12.21-4-17.82-9.66-5.64-5.68-11.15-13.24-16.58-20.71l-.24-.33c-5.37-7.39-10.67-14.68-16.01-20.16-5.45-5.58-10.73-9.06-15.98-9.06-5.02 0-8.17 1.34-10.04 2.62-.94.64-1.57 1.27-1.96 1.74-.18.21-.31.39-.39.51v61.61h263Z"/>
                  </mask>
                  <g mask="url(#bS)">
                    <path fill="${shade7}" fill-rule="evenodd" d="m975.368 1811.33.978-.21 23.286 109.55-.978.21-23.286-109.55Zm8 0 .978-.21 23.284 109.55-.98.21-23.282-109.55Zm8.978-.21-.978.21 23.282 109.55.98-.21-23.284-109.55Zm7.022.21.982-.21 23.28 109.55-.98.21-23.282-109.55Zm8.982-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Zm7.02.21.98-.21 23.28 109.55-.98.21-23.28-109.55Zm8.98-.21-.98.21 23.28 109.55.98-.21-23.28-109.55Z" clip-rule="evenodd"/>
                  </g>
                  <g filter="url(#bT)">
                    <path stroke="${shade7}" stroke-width="2" d="M1265.44 1912.3v-63.43c-.31.24-.65.48-1.05.71-2.19 1.33-5.82 2.57-11.73 2.57-2.58 0-4.83 1.07-7.1 2.81-1.76 1.36-3.46 3.06-5.29 4.89-.55.55-1.12 1.12-1.7 1.69-4.97 4.87-10.98 9.96-20.52 9.96-4.84 0-9.52-2.02-14.08-4.92-4.25-2.71-8.5-6.25-12.75-9.8-.31-.25-.62-.51-.93-.77-4.59-3.82-9.2-7.58-13.94-10.4-4.74-2.81-9.54-4.63-14.5-4.63-4.69 0-9.24 3.67-13.79 9.72-4.5 5.99-8.76 14.01-12.96 22.12-.41.8-.82 1.6-1.23 2.39-3.75 7.27-7.45 14.45-11.18 19.97-2.07 3.07-4.18 5.69-6.35 7.54-2.18 1.86-4.5 3.02-6.97 3.02h-27.91c-6.29 0-12.21-4-17.82-9.66-5.64-5.68-11.15-13.24-16.58-20.71l-.24-.33c-5.37-7.39-10.67-14.68-16.01-20.16-5.45-5.58-10.73-9.06-15.98-9.06-5.02 0-8.17 1.34-10.04 2.62-.94.64-1.57 1.27-1.96 1.74-.18.21-.31.39-.39.51v61.61h263Z"/>
                  </g>
                  <path fill="${shade7}" d="M901 1908h2038s35 0 50 6 50 6 50 6H801s35 0 50-6 50-6 50-6Z"/>
                  <path fill="${accent2}" fill-opacity=".1" d="M919 1912h4v4h-4zM929 1912h4v4h-4zM959 1912h4v4h-4zM989 1912h4v4h-4zM1019 1912h4v4h-4zM1029 1912h4v4h-4zM1069 1912h4v4h-4zM1109 1912h4v4h-4zM1139 1912h4v4h-4zM1149 1912h4v4h-4zM1189 1912h4v4h-4zM1269 1912h4v4h-4zM1279 1912h4v4h-4zM1319 1912h4v4h-4zM1329 1912h4v4h-4zM1379 1912h4v4h-4zM1429 1912h4v4h-4zM1489 1912h4v4h-4zM1499 1912h4v4h-4zM1559 1912h4v4h-4zM1569 1912h4v4h-4zM1579 1912h4v4h-4zM1589 1912h4v4h-4zM1609 1912h4v4h-4zM1629 1912h4v4h-4zM1669 1912h4v4h-4zM1699 1912h4v4h-4zM1709 1912h4v4h-4zM1769 1912h4v4h-4zM1819 1912h4v4h-4zM1849 1912h4v4h-4zM1859 1912h4v4h-4zM1869 1912h4v4h-4zM1899 1912h4v4h-4zM1929 1912h4v4h-4zM1979 1912h4v4h-4zM2049 1912h4v4h-4zM2079 1912h4v4h-4zM2139 1912h4v4h-4zM2149 1912h4v4h-4zM2189 1912h4v4h-4zM2229 1912h4v4h-4zM2269 1912h4v4h-4zM2279 1912h4v4h-4zM2319 1912h4v4h-4zM2359 1912h4v4h-4zM2379 1912h4v4h-4zM2399 1912h4v4h-4zM2429 1912h4v4h-4zM2439 1912h4v4h-4zM2479 1912h4v4h-4zM2529 1912h4v4h-4zM2609 1912h4v4h-4zM2619 1912h4v4h-4zM2629 1912h4v4h-4zM2669 1912h4v4h-4zM2719 1912h4v4h-4zM2789 1912h4v4h-4zM2799 1912h4v4h-4zM2849 1912h4v4h-4zM2899 1912h4v4h-4zM2909 1912h4v4h-4z"/>
                  <path fill="${shade7}" d="M1320.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1321.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1370.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1371.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1420.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1421.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1470.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1471.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1520.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1521.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1570.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1571.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1620.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1621.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1670.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1671.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1720.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1721.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1770.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1771.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1820.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1821.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1870.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1871.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1920.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1921.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M1970.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="1971.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2020.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2021.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2070.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2071.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2120.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2121.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2170.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2171.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2220.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2221.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2270.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2271.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2320.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2321.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2370.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2371.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2420.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2421.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2470.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2471.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2520.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2521.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2570.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2571.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2620.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2621.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${shade7}" d="M2670.75 1889.85h1l.5 18.15h-2l.5-18.15Z"/>
                  <ellipse cx="2671.25" cy="1889.35" fill="${shade7}" rx="1.5" ry="1.5121"/>
                  <path fill="${accent5}" d="M0 1920h3840v1920H0z"/>
                  <g filter="url(#bU)">
                    <path fill="${shade0}" d="M2982 2795h4v-4h-4z"/>
                    <path fill="${shade1}" d="M1992 2705h4v-4h-4z"/>
                    <path fill="${shade2}" d="M1366 2475h4v-4h-4zM3726 2379h4v-4h-4z"/>
                    <path fill="${shade0}" d="M1692 2865h4v-4h-4z"/>
                    <path fill="${shade1}" d="M702 2775h4v-4h-4z"/>
                    <path fill="${shade2}" d="M76 2545h4v-4h-4zM2436 2449h4v-4h-4z"/>
                    <path fill="${shade0}" d="M2614 2644h2v-2h-2z"/>
                    <path fill="${shade1}" d="M1624 2554h2v-2h-2z"/>
                    <path fill="${shade2}" d="M998 2324h2v-2h-2zM3358 2228h2v-2h-2z"/>
                    <path fill="${shade0}" d="M2044 2454h2v-2h-2z"/>
                    <path fill="${shade1}" d="M1054 2364h2v-2h-2z"/>
                    <path fill="${shade2}" d="M428 2134h2v-2h-2zM2788 2038h2v-2h-2z"/>
                    <path fill="${shade0}" d="M2286 2849h1v-1h-1z"/>
                    <path fill="${shade1}" d="M1296 2759h1v-1h-1z"/>
                    <path fill="${shade2}" d="M670 2529h1v-1h-1zM3030 2433h1v-1h-1z"/>
                    <path fill="${shade0}" d="M824 3758h-4v-4h4z"/>
                    <path fill="${shade1}" d="M1814 3668h-4v-4h4z"/>
                    <path fill="${shade2}" d="M2440 3438h-4v-4h4zM80 3342h-4v-4h4z"/>
                    <path fill="${shade0}" d="M2114 3828h-4v-4h4z"/>
                    <path fill="${shade1}" d="M3104 3738h-4v-4h4z"/>
                    <path fill="${shade2}" d="M3730 3508h-4v-4h4zM1370 3412h-4v-4h4z"/>
                    <path fill="${shade0}" d="M1192 3607h-2v-2h2z"/>
                    <path fill="${shade1}" d="M2182 3517h-2v-2h2z"/>
                    <path fill="${shade2}" d="M2808 3287h-2v-2h2zM448 3191h-2v-2h2z"/>
                    <path fill="${shade0}" d="M1762 3417h-2v-2h2z"/>
                    <path fill="${shade1}" d="M2752 3327h-2v-2h2z"/>
                    <path fill="${shade2}" d="M3378 3097h-2v-2h2zM1018 3001h-2v-2h2z"/>
                    <path fill="${shade0}" d="M1520 3812h-1v-1h1z"/>
                    <path fill="${shade1}" d="M2510 3722h-1v-1h1z"/>
                    <path fill="${shade2}" d="M3136 3492h-1v-1h1zM776 3396h-1v-1h1z"/>
                  </g>
                  <mask id="bV" width="3840" height="1920" x="0" y="1920" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                    <path fill="${shade7}" d="M0 1920h3840v1920H0z"/>
                  </mask>
                  <g mask="url(#bV)">
                    <path fill="url(#bW)" fill-opacity=".5" d="M0 0h3840v3840H0z" transform="matrix(1 0 0 -1 0 3840)"/>
                    <path fill="url(#bX)" fill-opacity=".7" d="M0 0h3840v3840H0z" transform="matrix(1 0 0 -1 0 3840)"/>
                    <path fill="url(#bY)" fill-opacity=".4" d="M0 0h3840v3840H0z" transform="matrix(1 0 0 -1 0 3840)"/>
                  </g>
                  <g filter="url(#bZ)" opacity=".6">
                    <path fill="${shade3}" fill-rule="evenodd" d="M2245 2372h-180v-30h-99v-422h378v422h-99v30Z" clip-rule="evenodd"/>
                    <path fill="url(#ca)" fill-rule="evenodd" d="M2245 2372h-180v-30h-99v-422h378v422h-99v30Z" clip-rule="evenodd"/>
                    <path fill="${accent4}" fill-opacity=".66" d="M2065 2345h180v-3h-180z"/>
                    <path fill="${shade4}" d="M1832 2308h283v-388h-283z"/>
                    <path fill="${accent4}" fill-opacity=".5" d="M1832 2308h283v-388h-283z"/>
                    <path fill="${shade1}" d="M1842 2298h263v-10h-263z"/>
                    <path fill="${accent4}" d="M1842 2278h263v-10h-263zM1842 2258h263v-10h-263z"/>
                    <path fill="${shade1}" d="M1842 2238h263v-10h-263zM1842 2218h263v-10h-263zM1842 2198h263v-10h-263z"/>
                    <path fill="${accent4}" d="M2078 2198h27v-10h-27z"/>
                    <path fill="${shade1}" d="M1842 2178h263v-10h-263zM1842 2158h263v-10h-263zM1842 2138h263v-10h-263zM1842 2118h263v-10h-263zM1842 2098h263v-10h-263zM1842 2078h263v-10h-263zM1842 2058h263v-10h-263z"/>
                    <path fill="${accent4}" d="M1842 2038h263v-10h-263z"/>
                    <path fill="${shade1}" d="M1842 2018h263v-10h-263zM1842 1998h263v-10h-263zM1842 1978h263v-10h-263zM1842 1958h263v-10h-263z"/>
                    <path fill="${accent4}" d="M2051 2078h27v-10h-27z"/>
                    <path fill="${shade1}" d="M1842 1938h263v-10h-263z"/>
                    <path fill="${accent4}" d="M1869 2158h27v-10h-27z"/>
                    <path fill="${shade4}" d="M2478 1920h-283v388h283z"/>
                    <path fill="${accent4}" fill-opacity=".5" d="M2478 1920h-283v388h283z"/>
                    <path fill="${shade1}" d="M2468 1930h-263v10h263z"/>
                    <path fill="${accent4}" d="M2468 1950h-263v10h263zM2468 1970h-263v10h263z"/>
                    <path fill="${shade1}" d="M2468 1990h-263v10h263zM2468 2010h-263v10h263zM2468 2030h-263v10h263z"/>
                    <path fill="${accent4}" d="M2232 2030h-27v10h27z"/>
                    <path fill="${shade1}" d="M2468 2050h-263v10h263zM2468 2070h-263v10h263zM2468 2090h-263v10h263zM2468 2110h-263v10h263zM2468 2130h-263v10h263zM2468 2150h-263v10h263zM2468 2170h-263v10h263z"/>
                    <path fill="${accent4}" d="M2468 2190h-263v10h263z"/>
                    <path fill="${shade1}" d="M2468 2210h-263v10h263zM2468 2230h-263v10h263zM2468 2250h-263v10h263zM2468 2270h-263v10h263z"/>
                    <path fill="${accent4}" d="M2259 2150h-27v10h27z"/>
                    <path fill="${shade1}" d="M2468 2290h-263v10h263z"/>
                    <path fill="${accent4}" d="M2441 2070h-27v10h27z"/>
                    <path fill="${shade7}" d="M2320 2065h31v-145h-31z"/>
                    <path fill="${accent5}" fill-opacity=".38" d="M2320 2065h31v-145h-31z"/>
                    <path fill="${shade5}" d="M2351 2065h285v-145h-285z"/>
                    <path fill="${accent5}" fill-opacity=".25" d="M2351 2065h285v-145h-285z"/>
                    <path fill="url(#cb)" fill-opacity=".3" d="M0 0h285v145H0z" transform="matrix(1 0 0 -1 2351 2065)"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M2339 2034h4v-5h-4zM2328 2034h4v-5h-4z"/>
                    <path fill="${shade2}" fill-opacity=".33" d="M2339 2051h4v-5h-4zM2328 2051h4v-5h-4zM2339 2017h4v-5h-4zM2328 2017h4v-5h-4zM2339 2000h4v-5h-4zM2328 2000h4v-5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M2339 1983h4v-5h-4zM2328 1983h4v-5h-4z"/>
                    <path fill="${shade2}" fill-opacity=".33" d="M2339 1966h4v-5h-4zM2328 1966h4v-5h-4zM2339 1949h4v-5h-4zM2328 1949h4v-5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M2378 2053h12v-10h-12zM2358 2036h12v-10h-12z"/>
                    <path fill="${shade6}" fill-opacity=".25" d="M2358 2053h12v-10h-12zM2418 2053h12v-10h-12zM2458 2053h12v-10h-12zM2478 2053h12v-10h-12zM2498 2053h12v-10h-12zM2518 2053h12v-10h-12zM2538 2053h12v-10h-12zM2578 2053h12v-10h-12zM2598 2053h12v-10h-12zM2618 2053h12v-10h-12zM2378 2036h12v-10h-12zM2398 2036h12v-10h-12zM2418 2036h12v-10h-12zM2438 2036h12v-10h-12zM2458 2036h12v-10h-12zM2478 2036h12v-10h-12zM2498 2036h12v-10h-12zM2518 2036h12v-10h-12zM2538 2036h12v-10h-12zM2558 2036h12v-10h-12zM2578 2036h12v-10h-12zM2598 2036h12v-10h-12zM2358 2019h12v-10h-12zM2378 2019h12v-10h-12zM2398 2019h12v-10h-12zM2418 2019h12v-10h-12zM2438 2019h12v-10h-12zM2458 2019h12v-10h-12zM2478 2019h12v-10h-12zM2498 2019h12v-10h-12zM2518 2019h12v-10h-12zM2538 2019h12v-10h-12zM2558 2019h12v-10h-12zM2578 2019h12v-10h-12zM2598 2019h12v-10h-12zM2358 2002h12v-10h-12zM2378 2002h12v-10h-12zM2398 2002h12v-10h-12zM2418 2002h12v-10h-12zM2438 2002h12v-10h-12zM2478 2002h12v-10h-12zM2498 2002h12v-10h-12zM2538 2002h12v-10h-12zM2558 2002h12v-10h-12zM2618 2002h12v-10h-12zM2378 1985h12v-10h-12zM2438 1985h12v-10h-12zM2458 1985h12v-10h-12zM2478 1985h12v-10h-12zM2498 1985h12v-10h-12zM2518 1985h12v-10h-12zM2538 1985h12v-10h-12zM2558 1985h12v-10h-12zM2578 1985h12v-10h-12zM2598 1985h12v-10h-12zM2618 1985h12v-10h-12zM2358 1968h12v-10h-12zM2398 1968h12v-10h-12zM2418 1968h12v-10h-12zM2438 1968h12v-10h-12zM2498 1968h12v-10h-12zM2518 1968h12v-10h-12zM2538 1968h12v-10h-12zM2558 1968h12v-10h-12zM2578 1968h12v-10h-12zM2598 1968h12v-10h-12zM2618 1968h12v-10h-12zM2358 1951h12v-10h-12zM2378 1951h12v-10h-12zM2398 1951h12v-10h-12zM2418 1951h12v-10h-12zM2438 1951h12v-10h-12zM2458 1951h12v-10h-12zM2478 1951h12v-10h-12zM2518 1951h12v-10h-12zM2538 1951h12v-10h-12zM2558 1951h12v-10h-12zM2598 1951h12v-10h-12zM2618 1951h12v-10h-12z"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M2358 1985h12v-10h-12zM2398 2053h12v-10h-12zM2438 2053h12v-10h-12zM2558 2053h12v-10h-12zM2618 2036h12v-10h-12zM2618 2019h12v-10h-12zM2598 2002h12v-10h-12zM2578 2002h12v-10h-12zM2518 2002h12v-10h-12zM2458 2002h12v-10h-12zM2398 1985h12v-10h-12zM2418 1985h12v-10h-12zM2458 1968h12v-10h-12zM2498 1951h12v-10h-12zM2578 1951h12v-10h-12zM2478 1968h12v-10h-12zM2378 1968h12v-10h-12z"/>
                    <path fill="${shade0}" fill-opacity=".2" d="M2356 2048h16v-6h-16zM2356 2031h16v-6h-16zM2356 2014h16v-6h-16zM2356 1997h16v-6h-16zM2356 1980h16v-6h-16zM2356 1963h16v-6h-16zM2356 1946h16v-6h-16zM2376 2048h16v-6h-16zM2376 2031h16v-6h-16zM2376 2014h16v-6h-16zM2376 1997h16v-6h-16zM2376 1980h16v-6h-16zM2376 1963h16v-6h-16zM2376 1946h16v-6h-16zM2396 2048h16v-6h-16zM2396 2031h16v-6h-16zM2396 2014h16v-6h-16zM2396 1997h16v-6h-16zM2396 1980h16v-6h-16zM2396 1963h16v-6h-16zM2396 1946h16v-6h-16zM2416 2048h16v-6h-16zM2416 2031h16v-6h-16zM2416 2014h16v-6h-16zM2416 1997h16v-6h-16zM2416 1980h16v-6h-16zM2416 1963h16v-6h-16zM2416 1946h16v-6h-16zM2436 2048h16v-6h-16zM2436 2031h16v-6h-16zM2436 2014h16v-6h-16zM2436 1997h16v-6h-16zM2436 1980h16v-6h-16zM2436 1963h16v-6h-16zM2436 1946h16v-6h-16zM2456 2048h16v-6h-16zM2456 2031h16v-6h-16zM2456 2014h16v-6h-16zM2456 1997h16v-6h-16zM2456 1980h16v-6h-16zM2456 1963h16v-6h-16zM2456 1946h16v-6h-16zM2476 2048h16v-6h-16zM2476 2031h16v-6h-16zM2476 2014h16v-6h-16zM2476 1997h16v-6h-16zM2476 1980h16v-6h-16zM2476 1963h16v-6h-16zM2476 1946h16v-6h-16zM2496 2048h16v-6h-16zM2496 2031h16v-6h-16zM2496 2014h16v-6h-16zM2496 1997h16v-6h-16zM2496 1980h16v-6h-16zM2496 1963h16v-6h-16zM2496 1946h16v-6h-16zM2516 2048h16v-6h-16zM2516 2031h16v-6h-16zM2516 2014h16v-6h-16zM2516 1997h16v-6h-16zM2516 1980h16v-6h-16zM2516 1963h16v-6h-16zM2516 1946h16v-6h-16zM2536 2048h16v-6h-16zM2536 2031h16v-6h-16zM2536 2014h16v-6h-16zM2536 1997h16v-6h-16zM2536 1980h16v-6h-16zM2536 1963h16v-6h-16zM2536 1946h16v-6h-16zM2556 2048h16v-6h-16zM2556 2031h16v-6h-16zM2556 2014h16v-6h-16zM2556 1997h16v-6h-16zM2556 1980h16v-6h-16zM2556 1963h16v-6h-16zM2556 1946h16v-6h-16zM2576 2048h16v-6h-16zM2576 2031h16v-6h-16zM2576 2014h16v-6h-16zM2576 1997h16v-6h-16zM2576 1980h16v-6h-16zM2576 1963h16v-6h-16zM2576 1946h16v-6h-16zM2596 2048h16v-6h-16zM2596 2031h16v-6h-16zM2596 2014h16v-6h-16zM2596 1997h16v-6h-16zM2596 1980h16v-6h-16zM2596 1963h16v-6h-16zM2596 1946h16v-6h-16zM2616 2048h16v-6h-16zM2616 2031h16v-6h-16zM2616 2014h16v-6h-16zM2616 1997h16v-6h-16zM2616 1980h16v-6h-16zM2616 1963h16v-6h-16zM2616 1946h16v-6h-16z"/>
                    <path fill="${shade6}" d="M2368 2170h13v-250h-13z"/>
                    <path fill="url(#cc)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2368 2170)"/>
                    <path fill="${shade6}" d="M2576 2170h13v-250h-13z"/>
                    <path fill="url(#cd)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2576 2170)"/>
                    <path fill="${shade6}" d="M2795 2170h13v-250h-13z"/>
                    <path fill="url(#ce)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2795 2170)"/>
                    <mask id="cf" width="428" height="203" x="2374" y="1967" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" d="M2801.5 2170v-203h-427v196.41c-.05 4.22 0 6.59 0 6.59v-6.59c.39-33.95 7.12-187.41 96.5-187.41 100.5 0 111.5 194 111.5 194s-1-194 109.5-194c107.55 0 109.47 183.79 109.5 193.59v.41Z"/>
                    </mask>
                    <g mask="url(#cf)">
                      <path fill="url(#cg)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2374 2170)"/>
                      <path fill="url(#ch)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2385 2170)"/>
                      <path fill="url(#ci)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2396 2170)"/>
                      <path fill="url(#cj)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2407 2170)"/>
                      <path fill="url(#ck)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2418 2170)"/>
                      <path fill="url(#cl)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2429 2170)"/>
                      <path fill="url(#cm)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2440 2170)"/>
                      <path fill="url(#cn)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2451 2170)"/>
                      <path fill="url(#co)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2462 2170)"/>
                      <path fill="url(#cp)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2473 2170)"/>
                      <path fill="url(#cq)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2484 2170)"/>
                      <path fill="url(#cr)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2495 2170)"/>
                      <path fill="url(#cs)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2506 2170)"/>
                      <path fill="url(#ct)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2517 2170)"/>
                      <path fill="url(#cu)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2528 2170)"/>
                      <path fill="url(#cv)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2539 2170)"/>
                      <path fill="url(#cw)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2550 2170)"/>
                      <path fill="url(#cx)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2561 2170)"/>
                      <path fill="url(#cy)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2572 2170)"/>
                      <path fill="url(#cz)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2583 2170)"/>
                      <path fill="url(#cA)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2594 2170)"/>
                      <path fill="url(#cB)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2605 2170)"/>
                      <path fill="url(#cC)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2616 2170)"/>
                      <path fill="url(#cD)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2627 2170)"/>
                      <path fill="url(#cE)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2638 2170)"/>
                      <path fill="url(#cF)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2649 2170)"/>
                      <path fill="url(#cG)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2660 2170)"/>
                      <path fill="url(#cH)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2671 2170)"/>
                      <path fill="url(#cI)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2682 2170)"/>
                      <path fill="url(#cJ)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2693 2170)"/>
                      <path fill="url(#cK)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2704 2170)"/>
                      <path fill="url(#cL)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2715 2170)"/>
                      <path fill="url(#cM)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2726 2170)"/>
                      <path fill="url(#cN)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2737 2170)"/>
                      <path fill="url(#cO)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2748 2170)"/>
                      <path fill="url(#cP)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2759 2170)"/>
                      <path fill="url(#cQ)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2770 2170)"/>
                      <path fill="url(#cR)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2781 2170)"/>
                      <path fill="url(#cS)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2792 2170)"/>
                    </g>
                    <path stroke="url(#cT)" stroke-width="2" d="M2801.5 2170s1-194-109.5-194-109.5 194-109.5 194-11-194-111.5-194-96.5 194-96.5 194v-203h427v203Z"/>
                    <mask id="cU" width="450" height="203" x="2395" y="1967" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" d="M2727.5 1976c110.5 0 117 194 117 194v-203h-449v203s7-194 107.5-194 107.5 194 107.5 194 6.5-194 117-194Z"/>
                    </mask>
                    <g mask="url(#cU)">
                      <path fill="url(#cV)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2396 2170)"/>
                      <path fill="url(#cW)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2408 2170)"/>
                      <path fill="url(#cX)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2420 2170)"/>
                      <path fill="url(#cY)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2432 2170)"/>
                      <path fill="url(#cZ)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2444 2170)"/>
                      <path fill="url(#da)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2456 2170)"/>
                      <path fill="url(#db)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2468 2170)"/>
                      <path fill="url(#dc)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2480 2170)"/>
                      <path fill="url(#dd)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2492 2170)"/>
                      <path fill="url(#de)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2504 2170)"/>
                      <path fill="url(#df)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2516 2170)"/>
                      <path fill="url(#dg)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2528 2170)"/>
                      <path fill="url(#dh)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2540 2170)"/>
                      <path fill="url(#di)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2552 2170)"/>
                      <path fill="url(#dj)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2564 2170)"/>
                      <path fill="url(#dk)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2576 2170)"/>
                      <path fill="url(#dl)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2588 2170)"/>
                      <path fill="url(#dm)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2600 2170)"/>
                      <path fill="url(#dn)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2612 2170)"/>
                      <path fill="url(#do)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2624 2170)"/>
                      <path fill="url(#dp)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2636 2170)"/>
                      <path fill="url(#dq)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2648 2170)"/>
                      <path fill="url(#dr)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2660 2170)"/>
                      <path fill="url(#ds)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2672 2170)"/>
                      <path fill="url(#dt)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2684 2170)"/>
                      <path fill="url(#du)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2696 2170)"/>
                      <path fill="url(#dv)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2708 2170)"/>
                      <path fill="url(#dw)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2720 2170)"/>
                      <path fill="url(#dx)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2732 2170)"/>
                      <path fill="url(#dy)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2744 2170)"/>
                      <path fill="url(#dz)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2756 2170)"/>
                      <path fill="url(#dA)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2768 2170)"/>
                      <path fill="url(#dB)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2780 2170)"/>
                      <path fill="url(#dC)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2792 2170)"/>
                      <path fill="url(#dD)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2804 2170)"/>
                      <path fill="url(#dE)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2816 2170)"/>
                      <path fill="url(#dF)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2828 2170)"/>
                      <path fill="url(#dG)" d="M0 0h1v210H0z" transform="matrix(1 0 0 -1 2840 2170)"/>
                    </g>
                    <path stroke="url(#dH)" stroke-width="2" d="M2727.5 1976c110.5 0 117 194 117 194v-203h-449v203s7-194 107.5-194 107.5 194 107.5 194 6.5-194 117-194Z"/>
                    <path fill="${shade7}" d="M2372 1971h472v-7h-472z"/>
                    <path fill="${shade6}" d="M2389 2170h13v-250h-13z"/>
                    <path fill="url(#dI)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2389 2170)"/>
                    <path fill="${shade6}" d="M2604 2170h13v-250h-13z"/>
                    <path fill="url(#dJ)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2604 2170)"/>
                    <path fill="${shade6}" d="M2838 2170h13v-250h-13z"/>
                    <path fill="url(#dK)" d="M0 0h13v250H0z" transform="matrix(1 0 0 -1 2838 2170)"/>
                    <path fill="url(#dL)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2606 2173)"/>
                    <path fill="url(#dM)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2578 2173)"/>
                    <path fill="url(#dN)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2797 2173)"/>
                    <path fill="url(#dO)" d="M0 0h9v3H0z" transform="matrix(1 0 0 -1 2840 2173)"/>
                    <path fill="url(#dP)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2609 2176)"/>
                    <path fill="url(#dQ)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2581 2176)"/>
                    <path fill="url(#dR)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2800 2176)"/>
                    <path fill="url(#dS)" d="M0 0h3v3H0z" transform="matrix(1 0 0 -1 2843 2176)"/>
                    <path fill="${shade6}" d="M2305 2455h145v-535h-145z"/>
                    <path fill="url(#dT)" d="M0 0h145v535H0z" transform="matrix(1 0 0 -1 2305 2455)"/>
                    <path fill="${shade0}" fill-opacity=".33" fill-rule="evenodd" d="M2444 2445h-133v-525h6v515h121v-515h6v525Z" clip-rule="evenodd"/>
                    <path fill="${shade5}" fill-opacity=".5" d="M2242 2455h63v-535h-63z"/>
                    <path fill="${shade6}" fill-opacity=".5" d="M2242 2455h63v-535h-63z"/>
                    <path fill="url(#dU)" d="M0 0h63v535H0z" transform="matrix(1 0 0 -1 2242 2455)"/>
                    <path fill="${shade0}" fill-opacity=".33" fill-rule="evenodd" d="M2302 2445h-57v-525h3v515h51v-515h3v525Z" clip-rule="evenodd"/>
                    <path fill="${shade6}" d="M2315 2525h109v-70h-109z"/>
                    <path fill="${shade5shade6}" d="M2268 2525h47v-70h-47z"/>
                    <path fill="${shade0}" fill-opacity=".33" fill-rule="evenodd" d="M2418 2515h-97v-60h6v50h85v-50h6v60ZM2312 2515h-41v-60h3v50h35v-50h3v60Z" clip-rule="evenodd"/>
                    <path fill="${shade0}" fill-opacity=".3" d="M2326 2425h8v-10h-8zM2326 2405h8v-10h-8zM2326 2385h8v-10h-8zM2326 2345h8v-10h-8zM2326 2305h8v-10h-8zM2326 2225h8v-10h-8zM2326 2185h8v-10h-8zM2326 2145h8v-10h-8zM2326 2125h8v-10h-8zM2326 2105h8v-10h-8zM2326 2005h8v-10h-8zM2326 1985h8v-10h-8zM2326 2085h8v-10h-8zM2326 2065h8v-10h-8zM2345 2405h8v-10h-8zM2345 2385h8v-10h-8zM2345 2365h8v-10h-8zM2345 2345h8v-10h-8zM2345 2305h8v-10h-8zM2345 2265h8v-10h-8zM2345 2225h8v-10h-8zM2345 2205h8v-10h-8zM2345 2165h8v-10h-8zM2345 2105h8v-10h-8zM2345 2005h8v-10h-8zM2345 1945h8v-10h-8zM2345 2085h8v-10h-8zM2345 2045h8v-10h-8zM2345 2025h8v-10h-8zM2364 2405h8v-10h-8zM2364 2345h8v-10h-8zM2364 2305h8v-10h-8zM2364 2285h8v-10h-8zM2364 2265h8v-10h-8zM2364 2225h8v-10h-8zM2364 2205h8v-10h-8zM2364 2165h8v-10h-8zM2364 2125h8v-10h-8zM2364 2105h8v-10h-8zM2364 1985h8v-10h-8zM2364 1965h8v-10h-8zM2364 2045h8v-10h-8zM2383 2405h8v-10h-8zM2383 2385h8v-10h-8zM2383 2365h8v-10h-8zM2383 2325h8v-10h-8zM2383 2305h8v-10h-8zM2383 2285h8v-10h-8zM2383 2265h8v-10h-8zM2383 2225h8v-10h-8zM2383 2205h8v-10h-8zM2383 2185h8v-10h-8zM2383 2165h8v-10h-8zM2383 2125h8v-10h-8zM2383 2105h8v-10h-8zM2383 1965h8v-10h-8zM2383 2085h8v-10h-8zM2383 2065h8v-10h-8zM2383 2045h8v-10h-8zM2402 2425h8v-10h-8zM2402 2405h8v-10h-8zM2402 2385h8v-10h-8zM2402 2365h8v-10h-8zM2402 2345h8v-10h-8zM2402 2325h8v-10h-8zM2402 2265h8v-10h-8zM2402 2205h8v-10h-8zM2402 2185h8v-10h-8zM2402 2165h8v-10h-8zM2402 2125h8v-10h-8zM2402 2105h8v-10h-8zM2402 2005h8v-10h-8zM2402 1965h8v-10h-8zM2402 1945h8v-10h-8zM2402 2085h8v-10h-8zM2402 2065h8v-10h-8zM2402 2045h8v-10h-8zM2402 2025h8v-10h-8zM2421 2425h8v-10h-8zM2421 2405h8v-10h-8zM2421 2385h8v-10h-8zM2421 2365h8v-10h-8zM2421 2345h8v-10h-8zM2421 2325h8v-10h-8zM2421 2305h8v-10h-8zM2421 2285h8v-10h-8zM2421 2245h8v-10h-8zM2421 2225h8v-10h-8zM2421 2185h8v-10h-8zM2421 2165h8v-10h-8zM2421 2125h8v-10h-8zM2421 2105h8v-10h-8zM2421 1965h8v-10h-8zM2421 2085h8v-10h-8zM2337 2495h8v-10h-8v10ZM2356 2475h8v-10h-8v10ZM2375 2475h8v-10h-8v10ZM2394 2495h8v-10h-8v10ZM2394 2475h8v-10h-8v10Z"/>
                    <path fill="${shade0}" fill-rule="evenodd" d="M2281 2495h-4v-10h4v10Zm-26-70h-4v-10h4v10Zm0-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm12 480h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm4 480h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm10 530h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-2-50v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm10 550h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Z" clip-rule="evenodd"/>
                    <path fill="url(#dV)" fill-opacity=".7" fill-rule="evenodd" d="M2281 2495h-4v-10h4v10Zm-26-70h-4v-10h4v10Zm0-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm12 480h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm4 480h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm10 530h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Zm-2-50v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm10 550h-4v-10h4v10Zm-4-20h4v-10h-4v10Zm2-60v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm0-10v-10h-4v10h4Zm0-30v10h-4v-10h4Zm6 560h4v-10h-4v10Zm4-20h-4v-10h4v10Z" clip-rule="evenodd"/>
                    <path fill="url(#dW)" d="M0 0h49v28H0z" transform="matrix(1 0 0 -1 2321 2553)"/>
                    <path fill="url(#dX)" d="M0 0h27v28H0z" transform="matrix(1 0 0 -1 2332 2581)"/>
                    <path fill="url(#dY)" d="M0 0h7v59H0z" transform="matrix(1 0 0 -1 2342 2640)"/>
                    <path fill="url(#dZ)" d="M1899 2686h75v-760l-95-6 20 766Z"/>
                    <path fill="url(#ea)" fill-opacity=".2" d="M1899 2686h75v-760l-95-6 20 766Z"/>
                    <path fill="url(#eb)" d="M1974 2686h44l10-766h-54v766Z"/>
                    <path fill="${shade4}" d="m1977 2686 51-766h-149l91.5 766h6.5Z"/>
                    <path fill="url(#ec)" d="m1977 2686 51-766h-149l91.5 766h6.5Z"/>
                    <mask id="ee" width="95" height="766" x="1879" y="1920" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="url(#ed)" d="M1899 2686h75v-760l-95-6 20 766Z"/>
                    </mask>
                    <g fill="${accent2}" fill-opacity=".5" mask="url(#ee)">
                      <path d="M1884 2135h12v-10h-12zM1883 2113h8v-10h-8zM1882 2091h3v-10h-3z"/>
                    </g>
                    <path fill="${accent2}" fill-opacity=".5" d="M1944 2355h42v-10h-42zM1955 2377h42v-10h-42zM1966 2399h33v-10h-33zM1977 2421h27v-10h-27zM1988 2443h21v-10h-21zM1933 2333h42v-10h-42zM1922 2311h42v-10h-42zM1917 2289h36v-10h-36zM1912 2267h30v-10h-30zM1907 2245h24v-10h-24zM1902 2223h18v-10h-18zM1897 2201h14v-10h-14zM1892 2179h14v-10h-14zM2000 2465h14v-10h-14zM2005 2487h14v-10h-14zM1887 2157h14v-10h-14z"/>
                    <mask id="eg" width="54" height="766" x="1974" y="1920" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="url(#ef)" d="M1974 2686h44l10-766h-54v766Z"/>
                    </mask>
                    <g fill="${accent2}" fill-opacity=".5" mask="url(#eg)">
                      <path d="M2010 2509h11v-10h-11zM2015 2531h6v-10h-6z"/>
                    </g>
                    <path fill="${shade7}" d="M1940 2765h2v-79h-2z"/>
                    <g filter="url(#eh)">
                      <ellipse cx="23" cy="2" fill="${accent0}" fill-opacity=".14" rx="23" ry="2" transform="scale(1 -1) rotate(-23 -5820.568 -6095.6427)"/>
                    </g>
                    <g filter="url(#ei)">
                      <ellipse cx="2" cy="23" fill="${accent0}" fill-opacity=".14" rx="2" ry="23" transform="scale(1 -1) rotate(-23 -5882.6898 -6136.741)"/>
                    </g>
                    <circle cx="2" cy="2" r="2" fill="${accent0}" transform="matrix(1 0 0 -1 1939 2768)"/>
                    <circle cx="2" cy="2" r="2" fill="${shade0}" fill-opacity=".2" transform="matrix(1 0 0 -1 1939 2768)"/>
                    <path fill="${shade2shade3}" d="M1612 2443h24v-523h-24z"/>
                    <path fill="url(#ej)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1612 2443)"/>
                    <path fill="${shade6}" d="M1636 2443h24v-523h-24z"/>
                    <path fill="url(#ek)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1636 2443)"/>
                    <path fill="${shade5}" d="M1648 2427h67v-507h-67z"/>
                    <path fill="url(#el)" d="M0 0h67v507H0z" transform="matrix(1 0 0 -1 1648 2427)"/>
                    <path fill="${shade6}" d="M1818 2443h24v-523h-24z"/>
                    <path fill="url(#em)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1818 2443)"/>
                    <path fill="${shade2shade3}" d="M1794 2443h24v-523h-24z"/>
                    <path fill="url(#en)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1794 2443)"/>
                    <path fill="${shade5}" d="M1739 2427h67v-507h-67z"/>
                    <path fill="url(#eo)" d="M0 0h67v507H0z" transform="matrix(1 0 0 -1 1739 2427)"/>
                    <path fill="${shade4}" d="M1648 2422h67v-4h-67zM1648 2410h67v-4h-67zM1648 2398h67v-4h-67zM1648 2386h67v-4h-67zM1648 2374h67v-4h-67zM1648 2362h67v-4h-67zM1648 2350h67v-4h-67zM1648 2338h67v-4h-67zM1648 2326h67v-4h-67zM1648 2314h67v-4h-67zM1648 2302h67v-4h-67zM1648 2290h67v-4h-67zM1648 2278h67v-4h-67zM1648 2266h67v-4h-67zM1648 2254h67v-4h-67zM1648 2242h67v-4h-67zM1648 2230h67v-4h-67zM1648 2218h67v-4h-67zM1648 2206h67v-4h-67zM1648 2194h67v-4h-67zM1648 2182h67v-4h-67zM1648 2170h67v-4h-67zM1648 2158h67v-4h-67zM1648 2146h67v-4h-67zM1648 2134h67v-4h-67zM1648 2122h67v-4h-67zM1648 2110h67v-4h-67zM1648 2098h67v-4h-67zM1648 2086h67v-4h-67zM1648 2074h67v-4h-67zM1648 2062h67v-4h-67zM1648 2050h67v-4h-67zM1648 2038h67v-4h-67zM1648 2026h67v-4h-67zM1648 2014h67v-4h-67zM1648 2002h67v-4h-67zM1648 1990h67v-4h-67zM1648 1978h67v-4h-67zM1648 1966h67v-4h-67zM1648 1954h67v-4h-67zM1648 1942h67v-4h-67zM1739 2422h67v-4h-67zM1739 2410h67v-4h-67zM1739 2398h67v-4h-67zM1739 2386h67v-4h-67zM1739 2374h67v-4h-67zM1739 2362h67v-4h-67zM1739 2350h67v-4h-67zM1739 2338h67v-4h-67zM1739 2326h67v-4h-67zM1739 2314h67v-4h-67zM1739 2302h67v-4h-67zM1739 2290h67v-4h-67zM1739 2278h67v-4h-67zM1739 2266h67v-4h-67zM1739 2254h67v-4h-67zM1739 2242h67v-4h-67zM1739 2230h67v-4h-67zM1739 2218h67v-4h-67zM1739 2206h67v-4h-67zM1739 2194h67v-4h-67zM1739 2182h67v-4h-67zM1739 2170h67v-4h-67zM1739 2158h67v-4h-67zM1739 2146h67v-4h-67zM1739 2134h67v-4h-67zM1739 2122h67v-4h-67zM1739 2110h67v-4h-67zM1739 2098h67v-4h-67zM1739 2086h67v-4h-67zM1739 2074h67v-4h-67zM1739 2062h67v-4h-67zM1739 2050h67v-4h-67zM1739 2038h67v-4h-67zM1739 2026h67v-4h-67zM1739 2014h67v-4h-67zM1739 2002h67v-4h-67zM1739 1990h67v-4h-67zM1739 1978h67v-4h-67zM1739 1966h67v-4h-67zM1739 1954h67v-4h-67zM1739 1942h67v-4h-67z"/>
                    <path fill="${accent6}" d="M1657 2362h14v-4h-14zM1802 2398h4v-4h-4zM1790 2398h4v-4h-4zM1688 2302h4v-4h-4zM1679 2242h8v-4h-8zM1794 2122h8v-4h-8zM1763 2230h8v-4h-8zM1670 2194h45v-4h-45zM1739 2038h45v-4h-45zM1739 2386h45v-4h-45z"/>
                    <path fill="${shade2shade3}" d="M1703 2443h24v-523h-24z"/>
                    <path fill="url(#ep)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1703 2443)"/>
                    <path fill="${shade6}" d="M1727 2443h24v-523h-24z"/>
                    <path fill="url(#eq)" fill-opacity=".5" d="M0 0h24v523H0z" transform="matrix(1 0 0 -1 1727 2443)"/>
                    <mask id="er" width="24" height="103" x="1612" y="2443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade2shade3}" d="M1612 2546h24v-103h-24z"/>
                    </mask>
                    <g filter="url(#es)" mask="url(#er)">
                      <path fill="url(#et)" d="M0 0h34v103H0z" transform="matrix(1 0 0 -1 1607 2540)"/>
                    </g>
                    <mask id="eu" width="24" height="103" x="1703" y="2443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade2shade3}" d="M1703 2546h24v-103h-24z"/>
                    </mask>
                    <g filter="url(#ev)" mask="url(#eu)">
                      <path fill="url(#ew)" d="M0 0h34v103H0z" transform="matrix(1 0 0 -1 1698 2540)"/>
                    </g>
                    <mask id="ex" width="24" height="103" x="1794" y="2443" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade2shade3}" d="M1794 2546h24v-103h-24z"/>
                    </mask>
                    <g filter="url(#ey)" mask="url(#ex)">
                      <path fill="url(#ez)" d="M0 0h34v103H0z" transform="matrix(1 0 0 -1 1789 2540)"/>
                    </g>
                    <path fill="${shade7}" d="M1171 2065h31v-145h-31z"/>
                    <path fill="${accent5}" fill-opacity=".38" d="M1171 2065h31v-145h-31z"/>
                    <path fill="${shade5}" d="M1202 2065h285v-145h-285z"/>
                    <path fill="${accent5}" fill-opacity=".25" d="M1202 2065h285v-145h-285z"/>
                    <path fill="url(#eA)" fill-opacity=".3" d="M0 0h285v145H0z" transform="matrix(1 0 0 -1 1202 2065)"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M1190 2034h4v-5h-4zM1179 2034h4v-5h-4z"/>
                    <path fill="${shade2}" fill-opacity=".33" d="M1190 2051h4v-5h-4zM1179 2051h4v-5h-4zM1190 2017h4v-5h-4zM1179 2017h4v-5h-4zM1190 2000h4v-5h-4zM1179 2000h4v-5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M1190 1983h4v-5h-4zM1179 1983h4v-5h-4z"/>
                    <path fill="${shade2}" fill-opacity=".33" d="M1190 1966h4v-5h-4zM1179 1966h4v-5h-4zM1190 1949h4v-5h-4zM1179 1949h4v-5h-4z"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M1229 2053h12v-10h-12zM1209 2036h12v-10h-12z"/>
                    <path fill="${shade6}" fill-opacity=".25" d="M1209 2053h12v-10h-12zM1269 2053h12v-10h-12zM1309 2053h12v-10h-12zM1329 2053h12v-10h-12zM1349 2053h12v-10h-12zM1369 2053h12v-10h-12zM1389 2053h12v-10h-12zM1429 2053h12v-10h-12zM1449 2053h12v-10h-12zM1469 2053h12v-10h-12zM1229 2036h12v-10h-12zM1249 2036h12v-10h-12zM1269 2036h12v-10h-12zM1289 2036h12v-10h-12zM1309 2036h12v-10h-12zM1329 2036h12v-10h-12zM1349 2036h12v-10h-12zM1369 2036h12v-10h-12zM1389 2036h12v-10h-12zM1409 2036h12v-10h-12zM1429 2036h12v-10h-12zM1449 2036h12v-10h-12zM1209 2019h12v-10h-12zM1229 2019h12v-10h-12zM1249 2019h12v-10h-12zM1269 2019h12v-10h-12zM1289 2019h12v-10h-12zM1309 2019h12v-10h-12zM1329 2019h12v-10h-12zM1349 2019h12v-10h-12zM1369 2019h12v-10h-12zM1389 2019h12v-10h-12zM1409 2019h12v-10h-12zM1429 2019h12v-10h-12zM1449 2019h12v-10h-12zM1209 2002h12v-10h-12zM1229 2002h12v-10h-12zM1249 2002h12v-10h-12zM1269 2002h12v-10h-12zM1289 2002h12v-10h-12zM1329 2002h12v-10h-12zM1349 2002h12v-10h-12zM1389 2002h12v-10h-12zM1409 2002h12v-10h-12zM1469 2002h12v-10h-12zM1229 1985h12v-10h-12zM1289 1985h12v-10h-12zM1309 1985h12v-10h-12zM1329 1985h12v-10h-12zM1349 1985h12v-10h-12zM1369 1985h12v-10h-12zM1389 1985h12v-10h-12zM1409 1985h12v-10h-12zM1429 1985h12v-10h-12zM1449 1985h12v-10h-12zM1469 1985h12v-10h-12zM1209 1968h12v-10h-12zM1249 1968h12v-10h-12zM1269 1968h12v-10h-12zM1289 1968h12v-10h-12zM1349 1968h12v-10h-12zM1369 1968h12v-10h-12zM1389 1968h12v-10h-12zM1409 1968h12v-10h-12zM1429 1968h12v-10h-12zM1449 1968h12v-10h-12zM1469 1968h12v-10h-12zM1209 1951h12v-10h-12zM1229 1951h12v-10h-12zM1249 1951h12v-10h-12zM1269 1951h12v-10h-12zM1289 1951h12v-10h-12zM1309 1951h12v-10h-12zM1329 1951h12v-10h-12zM1369 1951h12v-10h-12zM1389 1951h12v-10h-12zM1409 1951h12v-10h-12zM1449 1951h12v-10h-12zM1469 1951h12v-10h-12z"/>
                    <path fill="${accent2}" fill-opacity=".16" d="M1209 1985h12v-10h-12zM1249 2053h12v-10h-12zM1289 2053h12v-10h-12zM1409 2053h12v-10h-12zM1469 2036h12v-10h-12zM1469 2019h12v-10h-12zM1449 2002h12v-10h-12zM1429 2002h12v-10h-12zM1369 2002h12v-10h-12zM1309 2002h12v-10h-12zM1249 1985h12v-10h-12zM1269 1985h12v-10h-12zM1309 1968h12v-10h-12zM1349 1951h12v-10h-12zM1429 1951h12v-10h-12zM1329 1968h12v-10h-12zM1229 1968h12v-10h-12z"/>
                    <path fill="${shade0}" fill-opacity=".2" d="M1207 2048h16v-6h-16zM1207 2031h16v-6h-16zM1207 2014h16v-6h-16zM1207 1997h16v-6h-16zM1207 1980h16v-6h-16zM1207 1963h16v-6h-16zM1207 1946h16v-6h-16zM1227 2048h16v-6h-16zM1227 2031h16v-6h-16zM1227 2014h16v-6h-16zM1227 1997h16v-6h-16zM1227 1980h16v-6h-16zM1227 1963h16v-6h-16zM1227 1946h16v-6h-16zM1247 2048h16v-6h-16zM1247 2031h16v-6h-16zM1247 2014h16v-6h-16zM1247 1997h16v-6h-16zM1247 1980h16v-6h-16zM1247 1963h16v-6h-16zM1247 1946h16v-6h-16zM1267 2048h16v-6h-16zM1267 2031h16v-6h-16zM1267 2014h16v-6h-16zM1267 1997h16v-6h-16zM1267 1980h16v-6h-16zM1267 1963h16v-6h-16zM1267 1946h16v-6h-16zM1287 2048h16v-6h-16zM1287 2031h16v-6h-16zM1287 2014h16v-6h-16zM1287 1997h16v-6h-16zM1287 1980h16v-6h-16zM1287 1963h16v-6h-16zM1287 1946h16v-6h-16zM1307 2048h16v-6h-16zM1307 2031h16v-6h-16zM1307 2014h16v-6h-16zM1307 1997h16v-6h-16zM1307 1980h16v-6h-16zM1307 1963h16v-6h-16zM1307 1946h16v-6h-16zM1327 2048h16v-6h-16zM1327 2031h16v-6h-16zM1327 2014h16v-6h-16zM1327 1997h16v-6h-16zM1327 1980h16v-6h-16zM1327 1963h16v-6h-16zM1327 1946h16v-6h-16zM1347 2048h16v-6h-16zM1347 2031h16v-6h-16zM1347 2014h16v-6h-16zM1347 1997h16v-6h-16zM1347 1980h16v-6h-16zM1347 1963h16v-6h-16zM1347 1946h16v-6h-16zM1367 2048h16v-6h-16zM1367 2031h16v-6h-16zM1367 2014h16v-6h-16zM1367 1997h16v-6h-16zM1367 1980h16v-6h-16zM1367 1963h16v-6h-16zM1367 1946h16v-6h-16zM1387 2048h16v-6h-16zM1387 2031h16v-6h-16zM1387 2014h16v-6h-16zM1387 1997h16v-6h-16zM1387 1980h16v-6h-16zM1387 1963h16v-6h-16zM1387 1946h16v-6h-16zM1407 2048h16v-6h-16zM1407 2031h16v-6h-16zM1407 2014h16v-6h-16zM1407 1997h16v-6h-16zM1407 1980h16v-6h-16zM1407 1963h16v-6h-16zM1407 1946h16v-6h-16zM1427 2048h16v-6h-16zM1427 2031h16v-6h-16zM1427 2014h16v-6h-16zM1427 1997h16v-6h-16zM1427 1980h16v-6h-16zM1427 1963h16v-6h-16zM1427 1946h16v-6h-16zM1447 2048h16v-6h-16zM1447 2031h16v-6h-16zM1447 2014h16v-6h-16zM1447 1997h16v-6h-16zM1447 1980h16v-6h-16zM1447 1963h16v-6h-16zM1447 1946h16v-6h-16zM1467 2048h16v-6h-16zM1467 2031h16v-6h-16zM1467 2014h16v-6h-16zM1467 1997h16v-6h-16zM1467 1980h16v-6h-16zM1467 1963h16v-6h-16zM1467 1946h16v-6h-16z"/>
                    <path fill="${shade7}" d="M1567 2294h107v-374h-107z"/>
                    <path fill="url(#eB)" d="M0 0h107v374H0z" transform="matrix(1 0 0 -1 1567 2294)"/>
                    <path fill="${shade6}" d="M1561 2332h93v-38h-93z"/>
                    <mask id="eC" width="123" height="103" x="1438" y="2332" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade2shade3}" d="M1438 2435h123v-103h-123z"/>
                    </mask>
                    <g filter="url(#eD)" mask="url(#eC)">
                      <path fill="url(#eE)" d="M0 0h133v103H0z" transform="matrix(1 0 0 -1 1433 2429)"/>
                    </g>
                    <mask id="eF" width="165" height="103" x="1402" y="2294" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="${shade2shade3}" d="M1402 2397h165v-103h-165z"/>
                    </mask>
                    <g filter="url(#eG)" mask="url(#eF)">
                      <path fill="url(#eH)" d="M0 0h175v103H0z" transform="matrix(1 0 0 -1 1397 2391)"/>
                    </g>
                    <path fill="url(#eI)" d="M0 0h123v374H0z" transform="matrix(1 0 0 -1 1438 2332)"/>
                    <path fill="url(#eJ)" d="M0 0h165v374H0z" transform="matrix(1 0 0 -1 1402 2294)"/>
                    <path fill="${accent0}" fill-opacity=".67" d="M1567 2234h30v-24h-30zM1651 2264h23v-24h-23zM1567 2144h23v-24h-23zM1604 2144h23v-24h-23zM1567 1994h30v-24h-30zM1611 1994h30v-24h-30zM1611 2234h63v-24h-63zM1567 2114h107v-24h-107z"/>
                    <path fill="url(#eK)" fill-rule="evenodd" d="M1514 2332h-28v-17h-48v-4h48v-17h-15v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-24h-69v-6h69v-44h28v44h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h68v6h-68v24h15v17h47v4h-47v17Z" clip-rule="evenodd"/>
                    <mask id="eL" width="266" height="92" x="1001" y="1927" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" stroke="white" stroke-width="2" d="M1002.44 1987.25v-58.44h263v64.85c-.01.01-.01.03-.01.05-.01.06-.04.18-.11.33-.13.29-.43.76-1.11 1.27-1.38 1.02-4.38 2.22-10.8 2.22-3.52 0-6.89 1.38-10.09 3.35-3.19 1.96-6.29 4.57-9.27 7.13-.27.24-.55.47-.83.71-2.69 2.32-5.28 4.55-7.8 6.25-2.78 1.89-5.35 3.03-7.74 3.03-7.13 0-13.4-4-19.42-10.28-5.49-5.71-10.64-13.18-15.96-20.88-.53-.76-1.05-1.52-1.58-2.28-5.85-8.46-11.96-17.01-18.89-23.45-6.94-6.45-14.8-10.85-24.17-10.85-18.55 0-30.07 11.7-39.26 23.08-1.44 1.79-2.82 3.56-4.17 5.29-2.96 3.8-5.72 7.35-8.53 10.25-4.07 4.2-8.01 6.79-12.43 6.79-10.4 0-17.88-3.03-25.82-6.26-.3-.12-.61-.24-.91-.37-8.3-3.36-17.18-6.77-30.22-6.77-5.06 0-8.97 1.66-11.6 3.32-.92.57-1.68 1.15-2.28 1.66Z"/>
                    </mask>
                    <g mask="url(#eL)">
                      <path fill="${shade7}" fill-rule="evenodd" d="m998.654 2028.88.978-.21-23.286-109.55-.978.21 23.286 109.55Zm7.996 0 .98-.21-23.284-109.55-.978.21 23.282 109.55Zm8.98-.21-.98.21-23.282-109.55.978-.21 23.284 109.55Zm7.02.21.98-.21-23.28-109.55-.982.21 23.282 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Zm7.02.21.98-.21-23.28-109.55-.98.21 23.28 109.55Zm8.98-.21-.98.21-23.28-109.55.98-.21 23.28 109.55Z" clip-rule="evenodd"/>
                    </g>
                    <g filter="url(#eM)">
                      <path stroke="${shade7}" stroke-width="2" d="M1002.44 1987.25v-58.44h263v64.85c-.01.01-.01.03-.01.05-.01.06-.04.18-.11.33-.13.29-.43.76-1.11 1.27-1.38 1.02-4.38 2.22-10.8 2.22-3.52 0-6.89 1.38-10.09 3.35-3.19 1.96-6.29 4.57-9.27 7.13-.27.24-.55.47-.83.71-2.69 2.32-5.28 4.55-7.8 6.25-2.78 1.89-5.35 3.03-7.74 3.03-7.13 0-13.4-4-19.42-10.28-5.49-5.71-10.64-13.18-15.96-20.88-.53-.76-1.05-1.52-1.58-2.28-5.85-8.46-11.96-17.01-18.89-23.45-6.94-6.45-14.8-10.85-24.17-10.85-18.55 0-30.07 11.7-39.26 23.08-1.44 1.79-2.82 3.56-4.17 5.29-2.96 3.8-5.72 7.35-8.53 10.25-4.07 4.2-8.01 6.79-12.43 6.79-10.4 0-17.88-3.03-25.82-6.26-.3-.12-.61-.24-.91-.37-8.3-3.36-17.18-6.77-30.22-6.77-5.06 0-8.97 1.66-11.6 3.32-.92.57-1.68 1.15-2.28 1.66Z"/>
                    </g>
                    <mask id="eN" width="266" height="75" x="1001" y="1926" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                      <path fill="white" stroke="white" stroke-width="2" d="M1265.44 1927.7v63.43c-.31-.24-.65-.48-1.05-.71-2.19-1.33-5.82-2.57-11.73-2.57-2.58 0-4.83-1.07-7.1-2.81-1.76-1.36-3.46-3.06-5.29-4.89-.55-.55-1.12-1.12-1.7-1.69-4.97-4.87-10.98-9.96-20.52-9.96-4.84 0-9.52 2.02-14.08 4.92-4.25 2.71-8.5 6.25-12.75 9.8-.31.25-.62.51-.93.77-4.59 3.82-9.2 7.58-13.94 10.4-4.74 2.81-9.54 4.63-14.5 4.63-4.69 0-9.24-3.67-13.79-9.72-4.5-5.99-8.76-14.01-12.96-22.12-.41-.8-.82-1.6-1.23-2.39-3.75-7.27-7.45-14.45-11.18-19.97-2.07-3.07-4.18-5.69-6.35-7.54-2.18-1.86-4.5-3.02-6.97-3.02h-27.91c-6.29 0-12.21 4-17.82 9.66-5.64 5.68-11.15 13.24-16.58 20.71l-.24.33c-5.37 7.39-10.67 14.68-16.01 20.16-5.45 5.58-10.73 9.06-15.98 9.06-5.02 0-8.17-1.34-10.04-2.62-.94-.64-1.57-1.27-1.96-1.74-.18-.21-.31-.39-.39-.51v-61.61h263Z"/>
                    </mask>
                    <g mask="url(#eN)">
                      <path fill="${shade7}" fill-rule="evenodd" d="m975.368 2028.67.978.21 23.286-109.55-.978-.21-23.286 109.55Zm8 0 .978.21 23.284-109.55-.98-.21-23.282 109.55Zm8.978.21-.978-.21 23.282-109.55.98.21-23.284 109.55Zm7.022-.21.982.21 23.28-109.55-.98-.21-23.282 109.55Zm8.982.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Zm7.02-.21.98.21 23.28-109.55-.98-.21-23.28 109.55Zm8.98.21-.98-.21 23.28-109.55.98.21-23.28 109.55Z" clip-rule="evenodd"/>
                    </g>
                    <g filter="url(#eO)">
                      <path stroke="${shade7}" stroke-width="2" d="M1265.44 1927.7v63.43c-.31-.24-.65-.48-1.05-.71-2.19-1.33-5.82-2.57-11.73-2.57-2.58 0-4.83-1.07-7.1-2.81-1.76-1.36-3.46-3.06-5.29-4.89-.55-.55-1.12-1.12-1.7-1.69-4.97-4.87-10.98-9.96-20.52-9.96-4.84 0-9.52 2.02-14.08 4.92-4.25 2.71-8.5 6.25-12.75 9.8-.31.25-.62.51-.93.77-4.59 3.82-9.2 7.58-13.94 10.4-4.74 2.81-9.54 4.63-14.5 4.63-4.69 0-9.24-3.67-13.79-9.72-4.5-5.99-8.76-14.01-12.96-22.12-.41-.8-.82-1.6-1.23-2.39-3.75-7.27-7.45-14.45-11.18-19.97-2.07-3.07-4.18-5.69-6.35-7.54-2.18-1.86-4.5-3.02-6.97-3.02h-27.91c-6.29 0-12.21 4-17.82 9.66-5.64 5.68-11.15 13.24-16.58 20.71l-.24.33c-5.37 7.39-10.67 14.68-16.01 20.16-5.45 5.58-10.73 9.06-15.98 9.06-5.02 0-8.17-1.34-10.04-2.62-.94-.64-1.57-1.27-1.96-1.74-.18-.21-.31-.39-.39-.51v-61.61h263Z"/>
                    </g>
                    <path fill="${shade7}" d="M901 1932h2038s35 0 50-6 50-6 50-6H801s35 0 50 6 50 6 50 6Z"/>
                    <path fill="${accent2}" fill-opacity=".1" d="M919 1928h4v-4h-4zM929 1928h4v-4h-4zM959 1928h4v-4h-4zM989 1928h4v-4h-4zM1019 1928h4v-4h-4zM1029 1928h4v-4h-4zM1069 1928h4v-4h-4zM1109 1928h4v-4h-4zM1139 1928h4v-4h-4zM1149 1928h4v-4h-4zM1189 1928h4v-4h-4zM1269 1928h4v-4h-4zM1279 1928h4v-4h-4zM1319 1928h4v-4h-4zM1329 1928h4v-4h-4zM1379 1928h4v-4h-4zM1429 1928h4v-4h-4zM1489 1928h4v-4h-4zM1499 1928h4v-4h-4zM1559 1928h4v-4h-4zM1569 1928h4v-4h-4zM1579 1928h4v-4h-4zM1589 1928h4v-4h-4zM1609 1928h4v-4h-4zM1629 1928h4v-4h-4zM1669 1928h4v-4h-4zM1699 1928h4v-4h-4zM1709 1928h4v-4h-4zM1769 1928h4v-4h-4zM1819 1928h4v-4h-4zM1849 1928h4v-4h-4zM1859 1928h4v-4h-4zM1869 1928h4v-4h-4zM1899 1928h4v-4h-4zM1929 1928h4v-4h-4zM1979 1928h4v-4h-4zM2049 1928h4v-4h-4zM2079 1928h4v-4h-4zM2139 1928h4v-4h-4zM2149 1928h4v-4h-4zM2189 1928h4v-4h-4zM2229 1928h4v-4h-4zM2269 1928h4v-4h-4zM2279 1928h4v-4h-4zM2319 1928h4v-4h-4zM2359 1928h4v-4h-4zM2379 1928h4v-4h-4zM2399 1928h4v-4h-4zM2429 1928h4v-4h-4zM2439 1928h4v-4h-4zM2479 1928h4v-4h-4zM2529 1928h4v-4h-4zM2609 1928h4v-4h-4zM2619 1928h4v-4h-4zM2629 1928h4v-4h-4zM2669 1928h4v-4h-4zM2719 1928h4v-4h-4zM2789 1928h4v-4h-4zM2799 1928h4v-4h-4zM2849 1928h4v-4h-4zM2899 1928h4v-4h-4zM2909 1928h4v-4h-4z"/>
                    <path fill="${shade7}" d="M1320.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1319.75 1952.16)"/>
                    <path fill="${shade7}" d="M1370.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1369.75 1952.16)"/>
                    <path fill="${shade7}" d="M1420.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1419.75 1952.16)"/>
                    <path fill="${shade7}" d="M1470.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1469.75 1952.16)"/>
                    <path fill="${shade7}" d="M1520.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1519.75 1952.16)"/>
                    <path fill="${shade7}" d="M1570.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1569.75 1952.16)"/>
                    <path fill="${shade7}" d="M1620.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1619.75 1952.16)"/>
                    <path fill="${shade7}" d="M1670.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1669.75 1952.16)"/>
                    <path fill="${shade7}" d="M1720.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1719.75 1952.16)"/>
                    <path fill="${shade7}" d="M1770.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1769.75 1952.16)"/>
                    <path fill="${shade7}" d="M1820.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1819.75 1952.16)"/>
                    <path fill="${shade7}" d="M1870.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1869.75 1952.16)"/>
                    <path fill="${shade7}" d="M1920.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1919.75 1952.16)"/>
                    <path fill="${shade7}" d="M1970.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 1969.75 1952.16)"/>
                    <path fill="${shade7}" d="M2020.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2019.75 1952.16)"/>
                    <path fill="${shade7}" d="M2070.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2069.75 1952.16)"/>
                    <path fill="${shade7}" d="M2120.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2119.75 1952.16)"/>
                    <path fill="${shade7}" d="M2170.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2169.75 1952.16)"/>
                    <path fill="${shade7}" d="M2220.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2219.75 1952.16)"/>
                    <path fill="${shade7}" d="M2270.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2269.75 1952.16)"/>
                    <path fill="${shade7}" d="M2320.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2319.75 1952.16)"/>
                    <path fill="${shade7}" d="M2370.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2369.75 1952.16)"/>
                    <path fill="${shade7}" d="M2420.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2419.75 1952.16)"/>
                    <path fill="${shade7}" d="M2470.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2469.75 1952.16)"/>
                    <path fill="${shade7}" d="M2520.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2519.75 1952.16)"/>
                    <path fill="${shade7}" d="M2570.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2569.75 1952.16)"/>
                    <path fill="${shade7}" d="M2620.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2619.75 1952.16)"/>
                    <path fill="${shade7}" d="M2670.75 1950.15h1l.5-18.15h-2l.5 18.15Z"/>
                    <ellipse cx="1.5" cy="1.5121" fill="${shade7}" rx="1.5" ry="1.5121" transform="matrix(1 0 0 -1 2669.75 1952.16)"/>
                  </g>
                  <path fill="${shade0}" fill-opacity=".48" d="M0 1920h3840v1920H0z"/>
                </g>
                <defs>
                  <linearGradient id="b" x1="1920" x2="1920" y1="0" y2="3840" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent5}"/>
                    <stop offset="1" stop-color="${shade0}"/>
                  </linearGradient>
                  <linearGradient id="c" x1="0" x2="4042.57" y1="1920" y2="1280.45" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="e" x1="1920" x2="1920" y1="1920" y2="1576" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="f" x1="2155" x2="2155" y1="1468" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".0417" stop-color="${accent4}" stop-opacity=".43"/>
                    <stop offset=".7708" stop-color="${accent4}" stop-opacity=".35"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".6"/>
                  </linearGradient>
                  <linearGradient id="g" x1="2493.5" x2="2493.5" y1="1775" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="h" x1="2374.5" x2="2374.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="i" x1="2582.5" x2="2582.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="j" x1="2801.5" x2="2801.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="l" x1="2374.5" x2="2374.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="m" x1="2385.5" x2="2385.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="n" x1="2396.5" x2="2396.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="o" x1="2407.5" x2="2407.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="p" x1="2418.5" x2="2418.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="q" x1="2429.5" x2="2429.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="r" x1="2440.5" x2="2440.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="s" x1="2451.5" x2="2451.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="t" x1="2462.5" x2="2462.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="u" x1="2473.5" x2="2473.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="v" x1="2484.5" x2="2484.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="w" x1="2495.5" x2="2495.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="x" x1="2506.5" x2="2506.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="y" x1="2517.5" x2="2517.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="z" x1="2528.5" x2="2528.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="A" x1="2539.5" x2="2539.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="B" x1="2550.5" x2="2550.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="C" x1="2561.5" x2="2561.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="D" x1="2572.5" x2="2572.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="E" x1="2583.5" x2="2583.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="F" x1="2594.5" x2="2594.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="G" x1="2605.5" x2="2605.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="H" x1="2616.5" x2="2616.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="I" x1="2627.5" x2="2627.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="J" x1="2638.5" x2="2638.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="K" x1="2649.5" x2="2649.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="L" x1="2660.5" x2="2660.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="M" x1="2671.5" x2="2671.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="N" x1="2682.5" x2="2682.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="O" x1="2693.5" x2="2693.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="P" x1="2704.5" x2="2704.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="Q" x1="2715.5" x2="2715.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="R" x1="2726.5" x2="2726.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="S" x1="2737.5" x2="2737.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="T" x1="2748.5" x2="2748.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="U" x1="2759.5" x2="2759.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="V" x1="2770.5" x2="2770.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="W" x1="2781.5" x2="2781.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="X" x1="2792.5" x2="2792.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="Y" x1="2587.99" x2="2587.99" y1="1670" y2="1873" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aa" x1="2396.5" x2="2396.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ab" x1="2408.5" x2="2408.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ac" x1="2420.5" x2="2420.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ad" x1="2432.5" x2="2432.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ae" x1="2444.5" x2="2444.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="af" x1="2456.5" x2="2456.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ag" x1="2468.5" x2="2468.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ah" x1="2480.5" x2="2480.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ai" x1="2492.5" x2="2492.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aj" x1="2504.5" x2="2504.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ak" x1="2516.5" x2="2516.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="al" x1="2528.5" x2="2528.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="am" x1="2540.5" x2="2540.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="an" x1="2552.5" x2="2552.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ao" x1="2564.5" x2="2564.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ap" x1="2576.5" x2="2576.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aq" x1="2588.5" x2="2588.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ar" x1="2600.5" x2="2600.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="as" x1="2612.5" x2="2612.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="at" x1="2624.5" x2="2624.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="au" x1="2636.5" x2="2636.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="av" x1="2648.5" x2="2648.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aw" x1="2660.5" x2="2660.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ax" x1="2672.5" x2="2672.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ay" x1="2684.5" x2="2684.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="az" x1="2696.5" x2="2696.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aA" x1="2708.5" x2="2708.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aB" x1="2720.5" x2="2720.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aC" x1="2732.5" x2="2732.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aD" x1="2744.5" x2="2744.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aE" x1="2756.5" x2="2756.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aF" x1="2768.5" x2="2768.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aG" x1="2780.5" x2="2780.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aH" x1="2792.5" x2="2792.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aI" x1="2804.5" x2="2804.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aJ" x1="2816.5" x2="2816.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aK" x1="2828.5" x2="2828.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aL" x1="2840.5" x2="2840.5" y1="1670" y2="1880" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aM" x1="2620" x2="2620" y1="1670" y2="1873" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="aN" x1="2395.5" x2="2395.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="aO" x1="2610.5" x2="2610.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="aP" x1="2844.5" x2="2844.5" y1="1670" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="aQ" x1="2610.5" x2="2610.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aR" x1="2582.5" x2="2582.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aS" x1="2801.5" x2="2801.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aT" x1="2844.5" x2="2844.5" y1="1667" y2="1670" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aU" x1="2610.5" x2="2610.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aV" x1="2582.5" x2="2582.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aW" x1="2801.5" x2="2801.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aX" x1="2844.5" x2="2844.5" y1="1664" y2="1667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="aY" x1="2377.5" x2="2377.5" y1="1385" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset=".8073" stop-color="${shade3}" stop-opacity=".66"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".43"/>
                  </linearGradient>
                  <linearGradient id="aZ" x1="2273.5" x2="2273.5" y1="1385" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade5shade6}" stop-opacity=".92"/>
                    <stop offset=".8021" stop-color="${shade1}" stop-opacity=".65"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".58"/>
                  </linearGradient>
                  <linearGradient id="ba" x1="2251" x2="2305" y1="1345" y2="1905" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".4948" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".46"/>
                  </linearGradient>
                  <linearGradient id="bb" x1="2345.5" x2="2345.5" y1="1287" y2="1315" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset="1" stop-color="${shade5}"/>
                  </linearGradient>
                  <linearGradient id="bc" x1="2345.5" x2="2345.5" y1="1259" y2="1287" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset="1" stop-color="${shade5}"/>
                  </linearGradient>
                  <linearGradient id="bd" x1="2345.5" x2="2345.5" y1="1200" y2="1259" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset="1" stop-color="${shade5}"/>
                  </linearGradient>
                  <linearGradient id="be" x1="1926.5" x2="1926.5" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F37735"/>
                    <stop offset="1" stop-color="${shade4}"/>
                  </linearGradient>
                  <linearGradient id="bf" x1="1926.5" x2="1926.5" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset="1" stop-color="${shade0}" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="bg" x1="2001" x2="2001" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="#C23945"/>
                  </linearGradient>
                  <linearGradient id="bh" x1="1953.5" x2="1953.5" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".8177" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".29"/>
                  </linearGradient>
                  <linearGradient id="bi" x1="1926.5" x2="1926.5" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C23945"/>
                    <stop offset="1" stop-color="#436885"/>
                  </linearGradient>
                  <linearGradient id="bk" x1="2001" x2="2001" y1="1154" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#436885"/>
                    <stop offset="1" stop-color="#C23945"/>
                  </linearGradient>
                  <linearGradient id="bo" x1="1624" x2="1624" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5104" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="bp" x1="1648" x2="1648" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="bq" x1="1681.5" x2="1681.5" y1="1413" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                  </linearGradient>
                  <linearGradient id="br" x1="1830" x2="1830" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="bs" x1="1806" x2="1806" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".1302" stop-color="${shade7}"/>
                    <stop offset=".75" stop-color="${shade7}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".36"/>
                  </linearGradient>
                  <linearGradient id="bt" x1="1772.5" x2="1772.5" y1="1413" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                  </linearGradient>
                  <linearGradient id="bu" x1="1715" x2="1715" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5104" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="bv" x1="1739" x2="1739" y1="1397" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="by" x1="1624" x2="1624" y1="1300" y2="1403" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                  </linearGradient>
                  <linearGradient id="bB" x1="1715" x2="1715" y1="1300" y2="1403" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".17"/>
                  </linearGradient>
                  <linearGradient id="bE" x1="1806" x2="1806" y1="1300" y2="1403" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".1"/>
                  </linearGradient>
                  <linearGradient id="bF" x1="1344.5" x2="1344.5" y1="1775" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="bG" x1="1620.5" x2="1620.5" y1="1546" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".6563" stop-color="${shade0}" stop-opacity=".2"/>
                    <stop offset="1" stop-color="${shade0}" stop-opacity=".46"/>
                  </linearGradient>
                  <linearGradient id="bJ" x1="1499.5" x2="1499.5" y1="1411" y2="1514" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                  </linearGradient>
                  <linearGradient id="bM" x1="1484.5" x2="1484.5" y1="1449" y2="1552" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                  </linearGradient>
                  <linearGradient id="bN" x1="1438" x2="1633.83" y1="1508" y2="1838.9" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5156" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="bO" x1="1402" x2="1567" y1="1546" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5156" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="bP" x1="1402" x2="1567" y1="1508" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#77715A"/>
                    <stop offset="1" stop-color="${shade4}"/>
                  </linearGradient>
                  <linearGradient id="bW" x1="0" x2="4042.57" y1="1920" y2="1280.45" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="bY" x1="1920" x2="1920" y1="1920" y2="1576" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="ca" x1="2155" x2="2155" y1="2372" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".0417" stop-color="${accent4}" stop-opacity=".43"/>
                    <stop offset=".7708" stop-color="${accent4}" stop-opacity=".35"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".6"/>
                  </linearGradient>
                  <linearGradient id="cb" x1="142.5" x2="142.5" y1="0" y2="145" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="cc" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="cd" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="ce" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="cg" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ch" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ci" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cj" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ck" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cl" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cm" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cn" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="co" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cp" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cq" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cr" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cs" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ct" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cu" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cv" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cw" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cx" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cy" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cz" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cA" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cB" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cC" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cD" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cE" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cF" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cG" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cH" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cI" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cJ" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cK" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cL" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cM" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cN" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cO" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cP" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cQ" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cR" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cS" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cT" x1="2587.99" x2="2587.99" y1="2170" y2="1967" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cV" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cW" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cX" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cY" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="cZ" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="da" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="db" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dc" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dd" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="de" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="df" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dg" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dh" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="di" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dj" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dk" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dl" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dm" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dn" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="do" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dp" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dq" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dr" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="ds" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dt" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="du" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dv" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dw" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dx" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dy" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dz" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dA" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dB" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dC" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dD" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dE" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dF" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dG" x1=".5" x2=".5" y1="0" y2="210" gradientUnits="userSpaceOnUse">
                    <stop offset=".4167" stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dH" x1="2620" x2="2620" y1="2170" y2="1967" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade3}"/>
                    <stop offset="1" stop-color="#A4CC35"/>
                  </linearGradient>
                  <linearGradient id="dI" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="dJ" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="dK" x1="6.5" x2="6.5" y1="0" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset=".7552" stop-color="${shade5}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".24"/>
                  </linearGradient>
                  <linearGradient id="dL" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dM" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dN" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dO" x1="4.5" x2="4.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dP" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dQ" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dR" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dS" x1="1.5" x2="1.5" y1="0" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="${shade6}"/>
                  </linearGradient>
                  <linearGradient id="dT" x1="72.5" x2="72.5" y1="0" y2="535" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset=".8073" stop-color="${shade3}" stop-opacity=".66"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".43"/>
                  </linearGradient>
                  <linearGradient id="dU" x1="31.5" x2="31.5" y1="0" y2="535" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade5shade6}" stop-opacity=".92"/>
                    <stop offset=".8021" stop-color="${shade1}" stop-opacity=".65"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".58"/>
                  </linearGradient>
                  <linearGradient id="dV" x1="2251" x2="2305" y1="2495" y2="1935" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".4948" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".46"/>
                  </linearGradient>
                  <linearGradient id="dW" x1="24.5" x2="24.5" y1="0" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset="1" stop-color="${shade5}"/>
                  </linearGradient>
                  <linearGradient id="dX" x1="13.5" x2="13.5" y1="0" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset="1" stop-color="${shade5}"/>
                  </linearGradient>
                  <linearGradient id="dY" x1="3.5" x2="3.5" y1="0" y2="59" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade6}"/>
                    <stop offset="1" stop-color="${shade5}"/>
                  </linearGradient>
                  <linearGradient id="dZ" x1="1926.5" x2="1926.5" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F37735"/>
                    <stop offset="1" stop-color="${shade4}"/>
                  </linearGradient>
                  <linearGradient id="ea" x1="1926.5" x2="1926.5" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset="1" stop-color="${shade0}" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="eb" x1="2001" x2="2001" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade4}"/>
                    <stop offset="1" stop-color="#C23945"/>
                  </linearGradient>
                  <linearGradient id="ec" x1="1953.5" x2="1953.5" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop offset=".8177" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".29"/>
                  </linearGradient>
                  <linearGradient id="ed" x1="1926.5" x2="1926.5" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C23945"/>
                    <stop offset="1" stop-color="#436885"/>
                  </linearGradient>
                  <linearGradient id="ef" x1="2001" x2="2001" y1="2686" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#436885"/>
                    <stop offset="1" stop-color="#C23945"/>
                  </linearGradient>
                  <linearGradient id="ej" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5104" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="ek" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                    <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="el" x1="33.5" x2="33.5" y1="0" y2="507" gradientUnits="userSpaceOnUse">
                    <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                  </linearGradient>
                  <linearGradient id="em" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                    <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="en" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".1302" stop-color="${shade7}"/>
                    <stop offset=".75" stop-color="${shade7}"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".36"/>
                  </linearGradient>
                  <linearGradient id="eo" x1="33.5" x2="33.5" y1="0" y2="507" gradientUnits="userSpaceOnUse">
                    <stop offset=".7448" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity=".3"/>
                  </linearGradient>
                  <linearGradient id="ep" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5104" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="eq" x1="12" x2="12" y1="0" y2="523" gradientUnits="userSpaceOnUse">
                    <stop offset=".75" stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="et" x1="17" x2="17" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                  </linearGradient>
                  <linearGradient id="ew" x1="17" x2="17" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".17"/>
                  </linearGradient>
                  <linearGradient id="ez" x1="17" x2="17" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".1"/>
                  </linearGradient>
                  <linearGradient id="eA" x1="142.5" x2="142.5" y1="0" y2="145" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent5}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="eB" x1="53.5" x2="53.5" y1="0" y2="374" gradientUnits="userSpaceOnUse">
                    <stop offset=".6563" stop-color="${shade0}" stop-opacity=".2"/>
                    <stop offset="1" stop-color="${shade0}" stop-opacity=".46"/>
                  </linearGradient>
                  <linearGradient id="eE" x1="66.5" x2="66.5" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                  </linearGradient>
                  <linearGradient id="eH" x1="87.5" x2="87.5" y1="0" y2="103" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${accent2}" stop-opacity="0"/>
                    <stop offset="1" stop-color="${accent2}" stop-opacity=".25"/>
                  </linearGradient>
                  <linearGradient id="eI" x1="0" x2="195.832" y1="0" y2="330.897" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5156" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="eJ" x1="0" x2="165" y1="0" y2="374" gradientUnits="userSpaceOnUse">
                    <stop stop-color="${shade0}"/>
                    <stop offset=".5156" stop-color="${accent2}"/>
                    <stop offset="1" stop-color="${accent5}"/>
                  </linearGradient>
                  <linearGradient id="eK" x1="1402" x2="1567" y1="2332" y2="1920" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#77715A"/>
                    <stop offset="1" stop-color="${shade4}"/>
                  </linearGradient>
                  <filter id="bm" width="54.373" height="30.3505" x="1913.81" y="1058.82" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="3"/>
                  </filter>
                  <filter id="bn" width="30.3506" height="54.3726" x="1925.82" y="1046.81" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="3"/>
                  </filter>
                  <filter id="bx" width="50" height="119" x="1599" y="1292" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="bA" width="50" height="119" x="1690" y="1292" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="bD" width="50" height="119" x="1781" y="1292" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="bI" width="149" height="119" x="1425" y="1403" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="bL" width="191" height="119" x="1389" y="1441" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="bR" width="269" height="95.1868" x="999.436" y="1821" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_54_4645"/>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_54_4645" result="shape"/>
                  </filter>
                  <filter id="bT" width="269" height="77.3217" x="999.436" y="1839.98" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_54_4645"/>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_54_4645" result="shape"/>
                  </filter>
                  <filter id="bU" width="3662" height="1800" x="72" y="2032" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="2"/>
                  </filter>
                  <filter id="bZ" width="2258" height="887.953" x="791" y="1910" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="5"/>
                  </filter>
                  <filter id="eh" width="54.373" height="30.3506" x="1913.81" y="2750.82" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="3"/>
                  </filter>
                  <filter id="ei" width="30.3506" height="54.3726" x="1925.82" y="2738.81" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="3"/>
                  </filter>
                  <filter id="es" width="50" height="119" x="1599" y="2429" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="ev" width="50" height="119" x="1690" y="2429" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="ey" width="50" height="119" x="1781" y="2429" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="eD" width="149" height="119" x="1425" y="2318" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="eG" width="191" height="119" x="1389" y="2280" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_54_4645" stdDeviation="4"/>
                  </filter>
                  <filter id="eM" width="269" height="95.1868" x="999.436" y="1927.81" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_54_4645"/>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_54_4645" result="shape"/>
                  </filter>
                  <filter id="eO" width="269" height="77.3217" x="999.436" y="1926.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_54_4645"/>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_54_4645" result="shape"/>
                  </filter>
                  <radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="rotate(-58.2193 2181.0962 139.2584) scale(1365.18 1372.28)" gradientUnits="userSpaceOnUse">
                    <stop offset=".1667" stop-color="${shade0}"/>
                    <stop offset=".5521" stop-color="${accent2}" stop-opacity=".67"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                  </radialGradient>
                  <radialGradient id="bX" cx="0" cy="0" r="1" gradientTransform="rotate(-58.2193 2181.0962 139.2584) scale(1365.18 1372.28)" gradientUnits="userSpaceOnUse">
                    <stop offset=".1667" stop-color="${shade0}"/>
                    <stop offset=".5521" stop-color="${accent2}" stop-opacity=".67"/>
                    <stop offset="1" stop-color="${accent5}" stop-opacity="0"/>
                  </radialGradient>
                  <clipPath id="a">
                    <path fill="white" d="M0 0h3840v3840H0z"/>
                  </clipPath>
                </defs>
              </svg>
            `;
				yield {
					path: `${variant.title.kebab}-${size.w}x${size.h}.svg`,
					content: svg
				};
			}
		}
	},
	renderInstructions: listOutputFiles
};

export default template;
