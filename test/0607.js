// let odd = 0, even = 0;
// let n = parseInt();

//  0 <= n <= 1000;

// let result = n % 2 ? odd : even;

// for (i = 0; i <= 1000; i++) {
//   if (even) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }

// console.log("홀수의 합 :", odd);
// console.log("짝수의 합 :", even);
// console.log("1부터 n까지의 합 :", odd + even);



function solution(n) {
    let answer = 0;

for (i = 2; i <= n; i+=2) {

    answer += i;
}
    return answer;
}


// function solution(n) {
//     let count = Math.trunc(n/2)
//     return count * (count+1)
// }