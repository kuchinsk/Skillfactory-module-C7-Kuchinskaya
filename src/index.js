export function reverse(str)  {
    let reverseStr = ''
    for (let i = str.length; i > 0; i--) {
        reverseStr += str[i-1]
    }
    return reverseStr
}