def solution(my_string):
    answer = ''
    for letter in reversed(my_string):
        answer += letter
    return answer