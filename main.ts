basic.showLeds(`
    # # . # #
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
let llum = 0
led.setBrightness(llum)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    if (llum > 5) {
        basic.showLeds(`
            # # . # #
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        llum += 1
        led.setBrightness(llum)
        serial.writeLine("" + (llum))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        llum += -1
        led.setBrightness(llum)
        serial.writeLine("" + (llum))
    }
})
