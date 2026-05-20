let num1 = 130
let num2 = 140
let num3 = 150

if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log('All numbers should be different. Please try again')
}
else {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is the largest number.`)
    } else if (num2 > num1 && num2 > num3) {
        console.log(`${num2} is the largest number`)
    } else {
        console.log(`${num3} is the largest number`)
    }
}

