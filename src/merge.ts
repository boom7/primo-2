function mergeTwo(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i++]);
      } else {
        result.push(arr2[j++]);
      }
    }
  
    // Append remaining elements
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  
  export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    // Convert collection_1 to be in ascending order
    const arr1 = [...collection_1].reverse();
  
    // Merge step by step
    const merged12 = mergeTwo(arr1, collection_2);
    const merged123 = mergeTwo(merged12, collection_3);
  
    return merged123;
  }
  