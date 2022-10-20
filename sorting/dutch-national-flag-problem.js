/*  Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. 
    The functions should put all 0s first, then all 1s and all 2s in last.

    This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:
        Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls 
        with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue 
        (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

    Examples:
        Input: {0, 1, 2, 0, 1, 2}
        Output: {0, 0, 1, 1, 2, 2}
        
        Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
        Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
*/

/* First approach: using the pointer

Solution:
    - Keep three indices low = 1, mid = 1, and high = N and there are four ranges, 1 to low (the range containing 0), low to mid (the range containing 1), mid to high (the range containing unknown elements) and high to N (the range containing 2).
    - Traverse the array from start to end and mid is less than high. (Loop counter is i)
    - If the element is 0 then swap the element with the element at index low and update low = low + 1 and mid = mid + 1
    - If the element is 1 then update mid = mid + 1
    - If the element is 2 then swap the element with the element at index high and update high = high – 1 and update i = i – 1. As the swapped element is not processed

    Time Complexity: O(n), Only one traversal of the array is needed.
    Space Complexity: O(1), No extra space is required.

*/

function sortArrayUsingPointer(sampleArray) {
  let indexFor0 = 0;
  let indexFor1 = 0;
  let indexFor2 = sampleArray.length - 1;
  let valueToMove = 0;
  while (indexFor1 <= indexFor2) {
    if (sampleArray[indexFor1] === 0) {
      valueToMove = sampleArray[indexFor0];
      sampleArray[indexFor0] = sampleArray[indexFor1];
      sampleArray[indexFor1] = valueToMove;
      indexFor0++;
      indexFor1++;
    } else if (sampleArray[indexFor1] === 1) {
      indexFor1++;
    } else {
      valueToMove = sampleArray[indexFor1];
      sampleArray[indexFor1] = sampleArray[indexFor2];
      sampleArray[indexFor2] = valueToMove;
      indexFor2--;
    }
  }
  return sampleArray;
}

const firstExample = sortArrayUsingPointer([0, 1, 2, 0, 1, 2]);
console.log("first example:", firstExample);

const secondExample = sortArrayUsingPointer([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]);
console.log("second example", secondExample);
