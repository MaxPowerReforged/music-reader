import { noteMap } from '../core/noteMap';

test('note a is mapped to number value 1', () => {
  expect(noteMap.get('a')).toBe(1);
});