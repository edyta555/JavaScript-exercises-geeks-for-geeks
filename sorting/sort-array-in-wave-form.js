/*  Given an unsorted array of integers, sort the array into a wave array. An array arr[0..n-1] is sorted in wave form if:
    arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..

    Examples:
        Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
        Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} 

        Input: arr[] = {20, 10, 8, 6, 4, 2}
        Output: arr[] = {20, 8, 10, 4, 6, 2}
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

function waveArray(sampleArray) {
  sampleArray.sort((a, b) => a - b);
  for (let i = 0; i < sampleArray.length - 1; i += 2) {
    swapTwoElements(sampleArray, i, i + 1);
  }
  return sampleArray;
}

const firstExample = [10, 90, 49, 2, 1, 5, 23];
console.log("first example: ", waveArray(firstExample));

const secondExample = [20, 10, 8, 6, 4, 2];
console.log("second example", waveArray(secondExample));
