// let row = [0, 0];

// let matrix = [row, row]
// matrix[0][0] = 1
// console.log(matrix)
// matrix[1][0] = 2

// console.log(matrix)

// let matrix2 = [[0,0], [0, 0]]
// matrix2[0][0] = 1
// console.log(matrix2)
// matrix2[1][0] = 2
// console.log(matrix2)

// [1, 0][2, 0]


// const button = {
//     liked: false,
//     handleClick: function() {
//         this.liked = !this.liked
//     }
// }

// let handleClick = button.handleClick

// handleClick = handleClick.bind(this)

// console.log(handleClick())
// noneoftheabove


// let matrix = [];
// let row = [0, 0];

// for (let i = 0; i < 2; i++) {
//     matrix.push(row)
    
// }

// matrix[0][0] = 1

// console.log(matrix)

// const delay = ms => new Promise(res => setTimeout(res, ms))

// async function asyncCallFirst() {
//     await delay(3000);
//     console.log("async call 1")
// }
// async function asyncCallSecond() {
//     await delay(1000);
//     console.log("async call 2")
// }

// console.log((async () => {
//     asyncCallFirst()
//    await asyncCallSecond()
// })())

// var fizzBuzz = function(n) {
//     let arr = [];
//      for(let i = 1; i <= n; i++){
//          if(i % 15 === 0 ){
//              arr.push("FizzBuzz");
//          } else if ( i % 5 === 0) {
//              arr.push("Buzz")
//          }else if(i % 3 === 0) {
//              arr.push("Fizz")
//          }else {
//              arr.push(`${i}`)
//          }

       

//      }
//      return arr;
//  };

// console.log( fizzBuzz(3))

// let nums = [0,0,1,1,1,2,2,3,3,4]
let nums = [1,1,2]
// var removeDuplicates = function(nums) {
//     let unique = []  
//     for(let i = 0; i < nums.length; i++){
//         let current = nums[i];
//         let next = nums[i+1]
//         if(current !== next ){
//             unique.push(current)
//         }
//  }

//  nums = [...unique, ...nums ]
//  return unique.length
        
//     }
// let nums = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j ++){
       
        if(nums[j] !== nums[i]){
            console.log(nums[j], nums[i]);
           i++;
           console.log(nums[j], nums[i]);

           nums[i] = nums[j];
           console.log(nums[j], nums[i]);

        }
    }

    return i + 1
};


console.log(removeDuplicates(nums))