import { AlphaNoteName, SyllabNoteName, NoteNameMap } from './noteUtilities';

export default class Note {
  alphaName: AlphaNoteName;
  syllabName: SyllabNoteName;

  constructor(name: AlphaNoteName) {
    this.alphaName = name;
    this.syllabName = NoteNameMap.get(name);
  }
}
