export async function toArray<T>(generator: AsyncGenerator<T>): Promise<T[]> {
  const arr: T[] = [];
  for await (const item of generator) {
    arr.push(item);
  }
  return arr;
}
