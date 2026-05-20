let name = 'Adrian'
let mark = 99

if (mark < 40) {
    console.log(`Student: ${name}, Grade: No Grade`)
} else if (mark > 39 && mark < 60) {
    console.log(`Student: ${name}, Grade: C`)
} else if (mark > 59 && mark < 80) {
    console.log(`Student: ${name}, Grade: B`)
} else {
    console.log(`Student: ${name}, Grade: A`)
}