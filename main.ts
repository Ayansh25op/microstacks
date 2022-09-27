input.onPinPressed(TouchPin.P0, function () {
    if (Status == 1) {
        mouse.click()
    }
})
input.onButtonPressed(Button.A, function () {
    Status = 1
    basic.showIcon(IconNames.Yes)
})
input.onPinPressed(TouchPin.P2, function () {
    if (Status == 1) {
        mouse.click()
    }
})
input.onButtonPressed(Button.B, function () {
    Status = 2
    basic.showIcon(IconNames.No)
})
input.onPinPressed(TouchPin.P1, function () {
    if (Status == 1) {
        mouse.click()
    }
})
let Status = 0
keyboard.startKeyboardService()
Status = 1
basic.showIcon(IconNames.Yes)
