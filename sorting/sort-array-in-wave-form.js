/*  Given an unsorted array of integers, sort the array into a wave array. An array arr[0..n-1] is sorted in wave form if:
    arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
*/

/*  First approach: using sorting
    Solution:
        - Sort the array
        - Traverse the array from index 0 to N-1, and increase the value of the index by 2
        - While traversing the array swap arr[i] with arr[i+1].

    Time Complexity: O(n log(n))
    Auxiliary Space: O(1)
*/

function swapTwoElements(sampleArray, firstIndex, secondIndex) {
  let replacedValue = sampleArray[firstIndex];
  sampleArray[firstIndex] = sampleArray[secondIndex];
  sampleArray[secondIndex] = replacedValue;
}

function sortArrayInWave(sampleArray) {
  sampleArray.sort((a, b) => a - b);
  for (let i = 0; i < sampleArray.length - 1; i += 2) {
    swapTwoElements(sampleArray, i, i + 1);
  }
  return sampleArray;
}

const firstExample = sortArrayInWave([10, 5, 6, 3, 2, 20, 100]);
const secondExample = sortArrayInWave([20, 10, 8, 6, 4, 2]);

console.log("first example: ", firstExample);
console.log("second example", secondExample);

/* optimized approach
  The idea is based on the fact that if we make sure that all even positioned (at index 0, 2, 4, ..) 
  elements are greater than their adjacent odd elements, we don’t need to worry about oddly positioned elements. 

  Examples:
    Input:  arr[] = {10, 5, 6, 3, 2, 20, 100}
    Output: arr[] = {10, 5, 6, 2, 20, 3, 100} 

    Input: arr[] = {20, 10, 8, 6, 4, 2}
    Output: arr[] = {20, 8, 10, 4, 6, 2}

  Solution:
  - Traverse all even positioned elements of the input array, and do the following. 
    - If the current element is smaller than the previous odd element, swap the previous and current. 
    - If the current element is smaller than the next odd element, swap next and current.

  Time Complexity: O(N)
  Auxiliary Space: O(1)
*/

function sortArrayInWave2(sampleArray) {
  const arrayLength = sampleArray.length;
  for (let i = 0; i < arrayLength; i += 2) {
    if (i > 0 && sampleArray[i] < sampleArray[i - 1]) {
      [sampleArray[i - 1], sampleArray[i]] = [
        sampleArray[i],
        sampleArray[i - 1],
      ];
    }

    if (i < arrayLength && sampleArray[i] < sampleArray[i + 1]) {
      [sampleArray[i], sampleArray[i + 1]] = [
        sampleArray[i + 1],
        sampleArray[i],
      ];
    }
  }
  return sampleArray;
}

const thirdExample = sortArrayInWave2([10, 5, 6, 3, 2, 20, 100]);
console.log("third example:", thirdExample);
const fourthExample = sortArrayInWave2([20, 10, 8, 6, 4, 2]);
console.log("fourth example:", fourthExample);
