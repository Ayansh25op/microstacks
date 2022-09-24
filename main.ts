input.onPinPressed(TouchPin.P0, function () {
    keyboard.sendString(" ")
})
input.onPinPressed(TouchPin.P2, function () {
    keyboard.sendString(" ")
})
input.onPinPressed(TouchPin.P1, function () {
    keyboard.sendString(" ")
})
keyboard.startKeyboardService()
basic.forever(function () {
	
})
