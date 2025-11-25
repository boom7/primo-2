import { merge } from '../src/merge';

describe('merge function', () => {
  it('should merge and sort three arrays correctly', () => {
    const collection_1 = [9, 5, 2]; // descending
    const collection_2 = [1, 3, 6]; // ascending
    const collection_3 = [0, 4, 7]; // ascending

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  it('should handle empty arrays', () => {
    const result = merge([], [1, 2], []);
    expect(result).toEqual([1, 2]);
  });

  it('should handle negative numbers', () => {
    const result = merge([-2, -5], [-1, 0], [-3]);
    expect(result).toEqual([-5, -3, -2, -1, 0]);
  });
});
