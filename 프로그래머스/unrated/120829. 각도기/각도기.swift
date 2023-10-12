import Foundation

func solution(_ angle:Int) -> Int {
    if angle > 0 && angle < 90 {
        return 1
    }else if angle == 90 {
        return 2
    }else if angle > 90 && angle < 180 {
        return 3
    }else if angle == 180 {
        return 4
    }
    
    //유효하지 않은 angle 값에 대한 처리
    return -1
    // return 0 해도 됨
}