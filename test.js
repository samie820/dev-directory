let pattern = [..."UDDDUDUU"]

let descentAction = "D"
let ascendAction = "U"

let valleyStepDown = 0
let valleyStepUp = 0

let level = 0

let mountainStepDown = 0
let mountainStepUp = 0

let mountains = 0
let valleys = 0

pattern.forEach((x, index) => {
    if (index === 0) {
        x === ascendAction ? [mountainStepUp, level] = [1,1] : [valleyStepDown, level] = [1, -1]
    }

    if (x === pattern[index - 1]) {
        if (x === descentAction) {
            level += -1
            valleyStepDown++
        } else {
            level++
            mountainStepUp++
        }
    }

    if (x !== pattern[index - 1]) {
        if (level > 0) {
            if (x === descentAction) {
                mountainStepDown++
                level--
                if (mountainStepDown === mountainStepDown) {
                    mountains++
                    mountainStepDown = 0
                    mountainStepUp = 0
                }
            } else {
                mountainStepUp++
                level++
            }
        }

        if (level < 0) {
            if (x === descentAction) {
                valleyStepDown++
                level += -1
                if (valleyStepDown === valleyStepUp) {
                    valleys++
                    valleyStepDown = 0
                    valleyStepUp = 0
                }
            } else {
                
            }
        }

        if (level === 0) {

        }
    }

    if (x !== pattern[index + 1]) {

        x === descentAction ? descentCycle = 0 : ascendAction = 0
    }


})



// let patternObject = {};
// let currentPattern

// pattern.forEach((x, index) => {
//     console.log(x)
//     if (patternObject[`${x}`] === undefined) {
//         patternObject[`${x}`] = {1 : 1}
//     }
//     if (index != 0 && pattern[index+1] !== x) {
//         if (patternObject[`${x}`] === undefined) {
//             patternObject[`${x}`] = {1 : 1}
//         } else {
//             let currentKey = Object.keys(patternObject[`${x}`])
//             patternObject[`${x}`][currentKey.length - 1] += 1
//         }
//     }
//     if (index != 0 && pattern[index+1] == x) {
//         let currentKey = Object.keys(patternObject[`${x}`])
//         patternObject[`${x}`][currentKey.length - 1] += 1
//     }
// })

// console.log(patternObject)