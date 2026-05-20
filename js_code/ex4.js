let sideA = 7.4
let sideB = 6.8
let sideC = 9.6

if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)) {
    console.log('You can build a triangle with these measures!')
} else {
    console.log('It is not possible to build a triangle with these measures. Try again!')
}