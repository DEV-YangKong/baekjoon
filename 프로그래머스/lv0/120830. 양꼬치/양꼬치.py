import math

def solution(n, k):
    if n >= 10:
        if k >= 1:
            answer = (12000*n) + (2000*(k-math.trunc(n/10)))
        else:
            answer = 12000*n
    elif n < 10:
        if k >= 1:
            answer = (12000*n) + (2000*k)
        else:
            answer = 12000*n
            
    return answer