export type AlphaNoteName = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
export type SyllabNoteName = 'la' | 'si' | 'do' | 're' | 'mi' | 'fa' | 'sol';

export const NOTE_LIST: AlphaNoteName[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export const NoteNameMap = new Map<AlphaNoteName, SyllabNoteName>([
  ['a', 'la'],
  ['b', 'si'],
  ['c', 'do'],
  ['d', 're'],
  ['e', 'mi'],
  ['f', 'fa'],
  ['g', 'sol'],
]);
