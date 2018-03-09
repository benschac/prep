/**
 * Url: https://leetcode.com/problems/two-sum/description/
 * 
 * Instructions: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example: 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 */


//  First pass -- This is brute force O(n * n) (n squared)
// https://cl.ly/34432c1L1m1e -- This code can get a lot better.  Let's try again later.

/**
 * Only return numbers that sum to the matching target
 * @param {array} numbers the numbers to check
 * @param {number} taget the number to match when summed
 * 
 * @return {array} the indexes of the summed numbers or an empty array
 */
const twoSumBruteForce = (numbers, target) => {
  const indexes = [];
  for(let i = 0, l = numbers.length; i < l; i++) {
   for(let j = (i + 1); j < l; j++) {

     if (numbers[j] === 'undefined') {
       return;
     }

     if((numbers[i] + numbers[j]) === target) {
       indexes.includes(i) ? null : indexes.push(i);
       indexes.includes(j) ? null : indexes.push(j);
     }
   } 
  }
  return indexes;
};

//  console.log(twoSumBruteForce([3, 2, 4], 6));

//  Still buggy, have some collisions to think about.
 const twoSumHashTable = (numbers, target) => {
   const map = new Map();
   const indexes = [];
   for(let i = 0, l = numbers.length; i < l; i++) {
    if(map.has(numbers[i])) {
      let value = map.get(numbers[i]);
      value.push(i);
    }
      map.set(numbers[i], [i]);
   }

   for(let i = 0, l = numbers.length; i < l; i++) {
     const complement = target - numbers[i];

     if(map.has(complement) && map.get(complement) !== i) {
        indexes.push(map.get(numbers[i]));
     }
   }

   return map.get(numbers[1]);
 }

console.log(twoSumHashTable([3, 3], 6));