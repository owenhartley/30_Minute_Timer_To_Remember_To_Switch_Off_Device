let Minutes = 0
function Counting () {
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    Minutes += 1
}
basic.forever(function () {
    Counting()
    if (Minutes == 30) {
        music.setVolume(255)
        music.playMelody("G - G - G - G - ", 120)
    }
})
