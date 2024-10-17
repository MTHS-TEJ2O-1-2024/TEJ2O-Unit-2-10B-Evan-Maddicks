/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Oct 2024
 * This program will read the light levels in a roon
*/

let lightLevel = 0
let neopixelStrip: neopixel.Strip = null
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

basic.clearScreen()
neopixelStrip.clear()
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

basic.forever(function () {
    lightLevel = input.lightLevel()
    neopixelStrip.clear()
    if (lightLevel <= 51) {
        // Light up 0 NeoPixels
    }
    if (lightLevel > 52 && lightLevel <= 104) {
        // Light up 1 NeoPixel
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 104 && lightLevel <= 156) {
        // Light up 2 NeoPixels
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 156 && lightLevel <= 208) {
        // Light up 3 NeoPixels
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 208) {
        // Light up 4 NeoPixels
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }
    neopixelStrip.show()
    basic.pause(1000)
})
