import { OutputFile } from '../template/index.js';

export type OutputFileTransform<T> = (
  file: OutputFile,
) => AsyncGenerator<T | OutputFile>;

export async function* noopTransform(file: OutputFile) {
  yield file;
}
