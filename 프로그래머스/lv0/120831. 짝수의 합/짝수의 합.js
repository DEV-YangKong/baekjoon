// 23-06-07 첫 풀이 0:27

function solution(n) {
    let answer = 0;

for (i = 2; i <= n; i+=2) {

    answer += i;
}
    return answer;
}

