def solution(n):
    total = 0
    for num in range(2, n+1, 2):
        total += num

    return total
