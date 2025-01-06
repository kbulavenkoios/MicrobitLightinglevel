let x = 0
let y = 0
let ledNumber = 0
basic.forever(function () {
    basic.clearScreen()
    x = 0
    y = 0
    ledNumber = Math.round(input.lightLevel()) / 10
    for (let index = 0; index <= ledNumber; index++) {
        led.plot(x, y)
        x = x + 1
        if (x > 4) {
            x = 0
            y = y + 1
        }
        if (ledNumber == 0) {
            basic.clearScreen()
        }
    }
    basic.pause(1000)
})
