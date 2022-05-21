// Imagine a shelf where all the items on the shelf are numbers representing points
// The only thing you can do is gain the point value from either the left or right side of the shelf
// You are allocated a certain number of turns (t) where each time you take off a side of the shelf you use a turn
// Write an algorithm to find the highest number of points you can earn with the amount of turns you are given

// Examples
// [3, 1, 2, 2, 7, 4], 3 => 14 (left 1 turn, right 2 turns)
// [2, 26, 12, 7, 14], 2 => 28 (left both turns)

function maxShelfFormLeftAndRight(shelf, t) {

}


// Notes
// may assume the n number of moves will be smaller than the length of array
// may assume array will always have length
// the order or left vs right turns taken do not matter

// Solutions

// v1 O(2^m) Time, O(n) space
// function maxShelfFormLeftAndRight(shelf, m, left=0, right=shelf.length - 1) {
//     if(m === 0) return 0;

//     const leftRes = shelf[left] + maxShelfFormLeftAndRight(shelf, m-1, left+1, right);
//     const rightRes = shelf[right] + maxShelfFormLeftAndRight(shelf, m-1, left, right-1);

//     return Math.max(leftRes, rightRes);
// }

// v2 O(m) Time, O(n) space memoization
// function maxShelfFormLeftAndRight(shelf, m, left=0, right=shelf.length - 1, memo={}) {
//     if(m === 0) return 0;
//     if(m in memo) return memo[m];

//     const leftRes = shelf[left] + maxShelfFormLeftAndRight(shelf, m-1, left+1, right);
//     const rightRes = shelf[right] + maxShelfFormLeftAndRight(shelf, m-1, left, right-1);
    
//     return memo[m] = Math.max(leftRes, rightRes);
// }

// console.log(maxShelfFormLeftAndRight([3, 1, 2, 2, 7, 4], 3)); // 14
// console.log(maxShelfFormLeftAndRight([2, 26, 12, 7, 14], 2)); // 28
// console.log(maxShelfFormLeftAndRight([5, 3, 12, 3], 2)); // 15

//                                                        [5, 3, 12, 3]
// m=2                           5 + [3, 12, 3] = 8            ->                 3 + [5, 3, 12] = 15
// m=1             3 + [12, 3] = 3     ==    3 + [3, 12] = 3          5 + [3, 12] = 5     ->    12 + [5, 3] = 12
// m=0                  0                        0                           0                          0