function 倒數 () {
    basic.clearScreen()
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.clearScreen()
}
function 關卡1 () {
    倒數()
}
function 關卡3 () {
    倒數()
}
function 關卡2 () {
    倒數()
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (關卡 == 1) {
        關卡1()
    } else if (關卡 == 2) {
        關卡2()
    } else {
        關卡3()
    }
})
let 關卡 = 0
basic.showString("MG1")
關卡 = 1
basic.showNumber(關卡)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        關卡 = 1
        basic.showNumber(關卡)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        關卡 = 2
        basic.showNumber(關卡)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        關卡 = 3
        basic.showNumber(關卡)
    }
})
