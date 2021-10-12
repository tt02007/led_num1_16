let N = 0
let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    for (let N_0 = 0; N_0 <= 16; N_0++) {
        N = N_0 + 1
        燈號(N)
        led.plot(a, b)
        basic.pause(500)
        N_0 += 1
    }
})
function 燈號 (num: number) {
    if (num < 6) {
        a = num - 1
        b = 0
    } else if (6 <= num && num < 10) {
        a = 4
        b = num - 5
    } else if (10 <= num && num < 14) {
        a = 13 - num
        b = 4
    } else {
        a = 0
        b = 17 - num
    }
}
input.onButtonPressed(Button.B, function () {
    for (let N_0 = 0; N_0 <= 16; N_0++) {
        N = 18 - N_0
        燈號(N)
        led.plot(a, b)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
