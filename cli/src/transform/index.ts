import { OutputFile } from '../template/index.js';

export type OutputFileTransform = (
  file: OutputFile,
) => AsyncGenerator<OutputFile>;

export const noopTransform: OutputFileTransform = async function* (file) {
  yield file;
};
