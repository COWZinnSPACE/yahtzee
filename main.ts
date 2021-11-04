let dice2 = 0
let dice3 = 0
let dice4 = 0
let dice5 = 0
let dice1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    dice2 = randint(1, 6)
    dice3 = randint(1, 6)
    dice4 = randint(1, 6)
    dice5 = randint(1, 6)
    dice1 = randint(1, 6)
})
basic.forever(function () {
    basic.showString("D1")
    basic.showNumber(dice1)
    basic.showString("D2")
    basic.showNumber(dice2)
    basic.showString("D3")
    basic.showNumber(dice3)
    basic.showString("D4")
    basic.showNumber(dice4)
    basic.showString("D5")
    basic.showNumber(dice5)
})
