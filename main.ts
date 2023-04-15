input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
})
