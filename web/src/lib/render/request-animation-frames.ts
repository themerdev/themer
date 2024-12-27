export default async function* requestAnimationFrames(): AsyncGenerator<number> {
	while (true) {
		yield await new Promise((resolve) => {
			requestAnimationFrame(resolve);
		});
	}
}
