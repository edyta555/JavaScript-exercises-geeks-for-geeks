/*  Given an array of integers, print the array in such a way that the first element is first maximum 
    and second element is first minimum and so on. 

    Examples:
        Input : arr[] = {7, 1, 2, 3, 4, 5, 6}
        Output : 7 1 6 2 5 3 4

        Input : arr[] = {1, 6, 9, 4, 3, 7, 8, 2}
        Output : 9 1 8 2 7 3 6 4
    
    Solution:
        1. Sort input array using a O(n Log n) algorithm. 
        2. We maintain two pointers, one from beginning and one from end in sorted array. We alternatively print elements pointed by two pointers and move them toward each other.

    Time Complexity: O(n Log n) 
    Auxiliary Space : O(1), since no extra space has been taken.
*/

function alternativeSorting(sampleArray) {
  sampleArray.sort((a, b) => a - b);
  const arrayLength = sampleArray.length;
  let alternativeSortedArray = [];
  let minValuePointer = 0;
  let maxValuePointer = arrayLength - 1;
  while (minValuePointer < maxValuePointer) {
    alternativeSortedArray.push(sampleArray[maxValuePointer]);
    maxValuePointer--;
    alternativeSortedArray.push(sampleArray[minValuePointer]);
    minValuePointer++;
  }
  if (arrayLength % 2 !== 0) {
    alternativeSortedArray.push(sampleArray[maxValuePointer]);
  }
  return alternativeSortedArray;
}

const oddLengthArray = alternativeSorting([7, 1, 2, 3, 4, 5, 6]);
console.log("alternative sorted array: ", oddLengthArray);
const eventLengthArray = alternativeSorting([1, 6, 9, 4, 3, 7, 8, 2]);
console.log("alternative sorted array: ", eventLengthArray);
