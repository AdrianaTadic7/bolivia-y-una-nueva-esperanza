namespace SpriteKind {
    export const premio_final = SpriteKind.create()
    export const andrea = SpriteKind.create()
    export const diablo = SpriteKind.create()
    export const Fernanda = SpriteKind.create()
    export const premio_final2 = SpriteKind.create()
    export const enemigo = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direccion == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . f . . . . . . . . . . 
            . . . . f . . . . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . . f . f . f 1 f . . . . . . . 
            . f . . . f 1 1 1 f . . . . . . 
            . . . . f 1 1 2 1 1 f . . . . . 
            . . . f 1 1 2 1 1 2 1 f . . . . 
            . . . . f 1 1 1 2 1 1 1 f . . . 
            . . . . . f 1 2 1 1 2 1 1 f . . 
            . . . . . . f 1 1 2 2 2 1 1 f . 
            . . . . . . . f 1 1 2 1 1 f . . 
            . . . . . . . . f 1 1 1 f . . . 
            . . . . . . . . . f 1 f . f . . 
            . . . . . . . . . . f . . . f . 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . . . 
            `, Sebastian_Oruro_Diablada_Sara, 200, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . f . . . . 
            . . . . . . . . . . . . f . . . 
            . . . . . . . . . f . . . f . . 
            . . . . . . . . f 1 f . f . f . 
            . . . . . . . f 1 1 1 f . . . f 
            . . . . . . f 1 1 2 1 1 f . . . 
            . . . . . f 1 2 1 1 2 1 1 f . . 
            . . . . f 1 1 1 2 1 1 1 f . . . 
            . . . f 1 1 2 1 1 2 1 f . . . . 
            . . f 1 1 2 2 2 1 1 f . . . . . 
            . . . f 1 1 2 1 1 f . . . . . . 
            . . . . f 1 1 1 f . . . . . . . 
            . . . f . f 1 f . . . . . . . . 
            . . f . . . f . . . . . . . . . 
            . f . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Sebastian_Oruro_Diablada_Sara, -200, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sebastian_Oruro_Diablada_Sara.isHittingTile(CollisionDirection.Bottom)) {
        Sebastian_Oruro_Diablada_Sara.setVelocity(0, -200)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direccion = 0
    Sebastian_Oruro_Diablada_Sara.setImage(img`
        ..........................................
        ..........................................
        ........ff...........................ff...
        ........ff..........................fff...
        ........f2f.........................f2f...
        ........f2f....f............f......ff2f...
        ........f2f.....ff.......f.f.......f22f...
        ........f22f......f.f...fff........f22f...
        ........f22f..fff..ff..fff..ffff..ff2ff...
        ........f22ffffef.f5ffff5ff.feeff.f2ff....
        .........f22ffeefff55ff55ffffeeeff22f.....
        .........ff22fffeff55ff55fffeefff222f.....
        ..........fffffffff55ff55ffffff222ff......
        ............f11111f55ff55f11111ffff.......
        ............f11f11f55ff55f11f11ff.........
        ............f1fff1f55ff55f1fff1f..........
        ............f1fff1ffffffff1fff1f..........
        ............f11111ffffffff11111f..........
        .......5555..fffffeffffffefffff...........
        ....555fff5......eeffffffee...............
        ....5f555f55....eeeeffffffee.....ffffffff.
        ....5f5555ff5...efeeeeeeeefe....fff55555f.
        ....5f55f55555..ee1ffffff1ee....f5555555ff
        ...55ff5fff5fffffe1eeeeee1effff.f555ff55ff
        ..55fff5ffff555f5555ffff55555fffffffff55ff
        .55ffff5f2ff555555ff5555fffff555fff2ff55ff
        .5fff55ff2fffff55ffffffffffff5fffff22f5fff
        .5ff55ff22fffff5ffffffffff2ff5ffffff2f5fff
        .5f555fffff55f25fffffffff52ff5fff555ff55ff
        .5f55ffffff5ff25ffffff2ff522f5fffff5fff5ff
        .ff55ffff555f225fff55f2ff5f2f5ff2ff5fff5ff
        .fff5ff55fff22ff5fff5f22f5f2f5ff2ff5ff55ff
        .fff5ff5fffff515f22f55f2f55ff55f2f5fffffff
        .fff5ff5ffff5515ff2ff5f2ff5ff5152f555ff5ff
        .fff5ff5fff55115ff22f5f2fffff51522ff5fff5f
        .fff5fffff55115ffff2f5fffffff5115fff55ff5f
        .fff55fff551115ffffffffffffff511555ff5ff5f
        .fff55fff5111555ffffffffffff5511115ff5f55f
        .ffff555511115f555ffffffff555511115fff55ff
        .fffffff111115fff55ffff555fff5111155555fff
        .ffffff1111555ffff5ffff5ffffff511111ffffff
        .ffffffdddd5fffffff55555fffffff5ddddffffff
        .ffffffdddd5fff55ffffffffff55ff5ddddffffff
        .ffffffddd5fff252ff252fffff252ff5dddfffff.
        .ffffffddd5ff555ffff5fffffff55ff5dddfffff.
        .ffffffff55ffffff5ff5ff55fffffff5ffffffff.
        .fffffffff5fffff55fffff5f55fffff5ffffffff.
        ..ffffffff5ff5555f5fff5ffff555ff55fffffff.
        ..ffffffff5555.fff55555fffff.55ffffffffff.
        ..ffff..ffff...fff55555fffff..5f5fffffff..
        ...............ffffff4ffffff.ff55fffffff..
        ...............ffffff4ffffff.ffffffff.....
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ................eeee...eeee...............
        ................effe...effe...............
        ...............eeffee.eeffee..............
        ...............effffe.effffe..............
        ...............eeeeee.eeeeee..............
        `)
})
sprites.onOverlap(SpriteKind.diablo, SpriteKind.premio_final, function (sprite, otherSprite) {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f f f f f f f f f f f f f f 
        `)
    game.showLongText("Oh no!! el virus se encuentra expandido en una ciudad más del país, haz clic en siguiente para ir al siguiente nivel", DialogLayout.Bottom)
    nivel2()
    Sebastian_Oruro_Diablada_Sara.destroy()
})
function nivel2 () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.splash("Ayuda a Fernanda a recolectar alcohol")
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    tiles.setTilemap(tilemap`level5`)
    Fernanda_Santa_Cruz_Sara = sprites.create(img`
        .......................................
        .......................................
        .......................................
        .......................................
        .................eeeeeeeee.............
        ..............eeeeeeeeeeeeeee..........
        .............eeeeeeeeeeeeeeee..........
        ............eeeeeeeeeeeeeeeeee.........
        ............eeeeeeeeeeeeeeeeee.........
        ...........eeeeeeeeedeeeeeeeee.........
        ..........eeeeeeededddeeeeeeee.........
        ..........eeeeeeeddddddeeddeee.........
        ..........eeeedddddddddeddddd..........
        ..........eeeeddddddddddddddd..........
        ..........eeddddfffddddfffddd..........
        ..........eeddddee1ddddee1ddd..........
        ..........eeedddeeeddddeeeddd..........
        ..........eeedddddddddddddddd..........
        ..........eeedddddddddddddddd..........
        ..........eeeeddddfdddddddddd..........
        ..........eeeedddddfffdddddd...........
        ..........eeeedddddddddddddd...........
        ...........eeeeedddddddddd.............
        ...........eeeeeddddddd777.............
        ............eeeddddddd71117............
        ............eeedddd777177717...........
        .............eeee77111711171...........
        ............dddde11177111117...........
        ............ddddeee711111111...........
        ...........ddddd114411111111...........
        ...........ddddd111e111111ddd..........
        ...........ddddd111ee11111dddd.........
        ...........ddddd111ee11111ddddd........
        ..........ddddd11111111111.ddddd.......
        .........7dddd777777777777.ddddd7......
        .........77777111111111111..ddd7dddd...
        .........ddddd111111111111...dd7dddd...
        .........ddddd1111111111111....7dddd...
        ............111111111111111............
        ...........1111111111111111............
        ...........11111111111111111...........
        ...........11111111111111111...........
        ...........11111111111111111...........
        ...........77777777777777777...........
        ...........11111111111111111...........
        ...........77777777777777777...........
        ...............ddd..ddd................
        ...............ddd..ddd................
        ...............ddd..ddd................
        ...............ddd..ddd................
        ...............dddd.dddd...............
        ...............dddd.dddd...............
        `, SpriteKind.Fernanda)
    Fernanda_Santa_Cruz_Sara.ay = 300
    Fernanda_Santa_Cruz_Sara.setPosition(20, 0)
    controller.moveSprite(Fernanda_Santa_Cruz_Sara, 100, 0)
    scene.cameraFollowSprite(Fernanda_Santa_Cruz_Sara)
    Paloma2 = sprites.create(img`
        ............................................................cc.....
        ...........................................................ccc.....
        ...........................................................cdc.....
        ..........................................................ccdc.....
        ..........................................................cddcc....
        .........................................................ccddbcc...
        .........................................................cdddbcc...
        ........................................................ccdddbdc...
        .......................................................ccdddbddc...
        ......................................................ccdddbbddbcc.
        ....................................................ccbbddbbdddbdc.
        ..................................................cccddbddddddbddc.
        .................................................ccddddbdddddbdddcc
        ................................................cdddddbbddddddddbcc
        ccc............................................cdddddbbddddddddbddc
        cdcc..........................................cddddddbbddddddbbddcc
        cddcc........................................cddddddddbbdddddddddc.
        .cddcc.......................................cdddddddddbddddddddc..
        .cdddcc......................................cdddddddddbdddddbbbccc
        ccbdddc......................................cbdddddddbbddddddddddc
        cdbbddcc.................ccccccc.............cbdddddbbbddddddddddcc
        cddbbddc...............ccbbbbbbbcc............cdddddbbddddddddddcc.
        ccdddddcc.............ccbbbbbbbbbcc...........cdddddbbddddddbbbbc..
        .cddddddcc............cbbbbbbbbbbbc...........cddddddbdddddddbbbc..
        .ccddddddcc...........cbbbbbbffbbbcc.........cbddddddbddddddddddc..
        ..cddddddbccccccc....c111bbbbffbbbbcc......cccddddddbbddddbbdddcc..
        ...cddddbbdddddddcc..f111bbbbbbbbbbbccc..ccddddddbbbbdddddddbbbc...
        ..cbbbddbbddddddddcccfbb11cbbbbbbbbbbbcccddddddddbbdddddbdddddc....
        .cdddbbdbbbbdddddddddfbbbbcbbbbbbbbbbb6cdddddddddbdddddddbdddc.....
        .ccdddddddbbbddddddddfbbfccbbbbbbbbbbb6cdddbbbbdbbddddddddbbbc.....
        ..ccddddddddbddddddddfbfdcbbbbbbbbbbb66bddbbbdbbbbddbddbdddbc......
        ....cddddddbbddddddddffddcbbbbbbbbbbb663bbbdddddddddbddbbdddc......
        ....cbbddddbbdbbbddddddddcbbbbbbbbbbb663bbbddbdddddddbddbbbcc......
        ....cddbbdddbbbbbddddddddcbbbbbbbbb66633ddbddbdddbbdddbddccc.......
        ....ccddddddddddbdddddddccbbbbbbbbb6633dddbddbbdddbbddcccc.........
        .....ccdddddddddbbddbbddcbbbbbbbbbb663dddddddcbbdddbbc.............
        ......ccddddddddbbbbbbddc6bbbbbbbb666ddddddcccccccccc..............
        .......ccbbbbdddddddbbbbc666bb6666663ddddddc.......................
        .........cbbddddddddddbbc66666666663dddddddc.......................
        .........cdddddbddddddbccd3666633ddddddddddc.......................
        .........ccddbbbddbdddbccdd33333dddddddddddc.......................
        ..........cccccddbbddbb.ccddddddddddddddddddc......................
        ..............ccccccbb...ccdddddddddddddddddc......................
        ...................cc.....ccddddddddddddddddcc.....................
        ...........................ccddddddddddbbbbddcc....................
        ............................bbbdddddddbbbbbddccccccc...............
        .............................bbbddddddbdddddddddddbcc..............
        .............................ccccddddbccccddddddddbbc..............
        ............................c3333cdddc3333cddddddcccc..............
        ...........................cc33333cbcc33333cdddddcc................
        ...........................c3333333cc3333333cdcdbbc................
        ...................bbbbbbbbc3c3c3c3cc3c3c3c3cdccbbc................
        ...................b1d11111c3c3c3cb1c3c3c3cbbdbccc.................
        ...................b1dd11111bcbccc111bcbcccdbbbcc..................
        ...................b11d111111111111111dd111dbccc...................
        ..................b111dd1111111111111dd1111dbc.....................
        ..................b1111dd11111111111dd1111ddb......................
        ..................b11111dd111111111dd11111ddb......................
        .................b1111111d11111111dd111111ddb......................
        .................b1111111dd111111dd1111111db.......................
        .................b11111111dd111ddd11111111db.......................
        .................b111111111dd1dd1111111111db.......................
        ................b11111111111ddd1111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................bbbb111111111111111111111db........................
        ...................bbbbbbb111111111111111db........................
        ..........................bbbbbbbb1111111db........................
        .................................bbbbbbbbbb........................
        `, SpriteKind.premio_final2)
    Paloma2.ay = 300
    Paloma2.setPosition(0, 0)
    enemigo2 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.enemigo)
    animation.runImageAnimation(
    enemigo2,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c b 1 b b b 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    200,
    true
    )
    enemigo2.setPosition(0, 0)
    enemigo2.vy = 60
    enemigo2.setBounceOnWall(true)
    alcohol = sprites.create(img`
        . . . . . . . . f f . . . . . . 
        . . . . . . f f b f f f f f . . 
        . . . . . f b b b b b b b f . . 
        . . . . f f b b b b b b b f . . 
        . . . . f b b b b b b b b f . . 
        . . . f b b b b b b b b b f . . 
        . . . f b b b b b b b b b f . . 
        . . . f b b b b b b b b b f . . 
        . . . f b b b b b b b b b f . . 
        . . . f b b b b b b b b f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f b b b b b b f f . . . 
        . . . . f b b b b b f f . . . . 
        . . . . . f b b b f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.Player)
    alcohol.setPosition(0, 0)
    enemigo2.ay = 300
}
sprites.onOverlap(SpriteKind.diablo, SpriteKind.Food, function (sprite, otherSprite) {
    barbijos_veces += 1
    info.changeScoreBy(1)
    if (barbijos_veces == 1) {
        barbijos.setPosition(1200, 0)
    } else if (barbijos_veces == 2) {
        barbijos.setPosition(400, 200)
    } else if (barbijos_veces == 3) {
        barbijos.setPosition(710, 0)
    } else if (barbijos_veces == 4) {
        barbijos.setPosition(800, 220)
    } else {
        barbijos.destroy()
    }
    Sebastian_Oruro_Diablada_Sara.say("Muy bien!!", 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direccion = 1
    Sebastian_Oruro_Diablada_Sara.setImage(img`
        ..........................................
        ..........................................
        ........ff...........................ff...
        ........ff..........................fff...
        ........f2f.........................f2f...
        ........f2f....f............f......ff2f...
        ........f2f.....ff.......f.f.......f22f...
        ........f22f......f.f...fff........f22f...
        ........f22f..fff..ff..fff..ffff..ff2ff...
        ........f22ffffef.f5ffff5ff.feeff.f2ff....
        .........f22ffeefff55ff55ffffeeeff22f.....
        .........ff22fffeff55ff55fffeefff222f.....
        ..........fffffffff55ff55ffffff222ff......
        ............f11111f55ff55f11111ffff.......
        ............f11f11f55ff55f11f11ff.........
        ............f1fff1f55ff55f1fff1f..........
        ............f1fff1ffffffff1fff1f..........
        ............f11111ffffffff11111f..........
        .......5555..fffffeffffffefffff...........
        ....555fff5......eeffffffee...............
        ....5f555f55....eeeeffffffee.....ffffffff.
        ....5f5555ff5...efeeeeeeeefe....fff55555f.
        ....5f55f55555..ee1ffffff1ee....f5555555ff
        ...55ff5fff5fffffe1eeeeee1effff.f555ff55ff
        ..55fff5ffff555f5555ffff55555fffffffff55ff
        .55ffff5f2ff555555ff5555fffff555fff2ff55ff
        .5fff55ff2fffff55ffffffffffff5fffff22f5fff
        .5ff55ff22fffff5ffffffffff2ff5ffffff2f5fff
        .5f555fffff55f25fffffffff52ff5fff555ff55ff
        .5f55ffffff5ff25ffffff2ff522f5fffff5fff5ff
        .ff55ffff555f225fff55f2ff5f2f5ff2ff5fff5ff
        .fff5ff55fff22ff5fff5f22f5f2f5ff2ff5ff55ff
        .fff5ff5fffff515f22f55f2f55ff55f2f5fffffff
        .fff5ff5ffff5515ff2ff5f2ff5ff5152f555ff5ff
        .fff5ff5fff55115ff22f5f2fffff51522ff5fff5f
        .fff5fffff55115ffff2f5fffffff5115fff55ff5f
        .fff55fff551115ffffffffffffff511555ff5ff5f
        .fff55fff5111555ffffffffffff5511115ff5f55f
        .ffff555511115f555ffffffff555511115fff55ff
        .fffffff111115fff55ffff555fff5111155555fff
        .ffffff1111555ffff5ffff5ffffff511111ffffff
        .ffffffdddd5fffffff55555fffffff5ddddffffff
        .ffffffdddd5fff55ffffffffff55ff5ddddffffff
        .ffffffddd5fff252ff252fffff252ff5dddfffff.
        .ffffffddd5ff555ffff5fffffff55ff5dddfffff.
        .ffffffff55ffffff5ff5ff55fffffff5ffffffff.
        .fffffffff5fffff55fffff5f55fffff5ffffffff.
        ..ffffffff5ff5555f5fff5ffff555ff55fffffff.
        ..ffffffff5555.fff55555fffff.55ffffffffff.
        ..ffff..ffff...fff55555fffff..5f5fffffff..
        ...............ffffff4ffffff.ff55fffffff..
        ...............ffffff4ffffff.ffffffff.....
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ................eeee...eeee...............
        ................effe...effe...............
        ...............eeffee.eeffee..............
        ...............effffe.effffe..............
        ...............eeeeee.eeeeee..............
        `)
})
sprites.onOverlap(SpriteKind.diablo, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Sebastian_Oruro_Diablada_Sara.setPosition(20, 0)
})
info.onLifeZero(function () {
    game.over(false)
})
function nivel1 () {
    game.splash("Ayuda a Sebastián a recolectar barbijos")
    game.splash("Y al final del nivel encontraras a un mensajero especial ¡El te ayudara!")
    game.splash("Nivel 1")
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    tiles.setTilemap(tilemap`level1`)
    effects.clouds.startScreenEffect()
    Sebastian_Oruro_Diablada_Sara = sprites.create(img`
        ..........................................
        ..........................................
        ........ff...........................ff...
        ........ff..........................fff...
        ........f2f.........................f2f...
        ........f2f....f............f......ff2f...
        ........f2f.....ff.......f.f.......f22f...
        ........f22f......f.f...fff........f22f...
        ........f22f..fff..ff..fff..ffff..ff2ff...
        ........f22ffffef.f5ffff5ff.feeff.f2ff....
        .........f22ffeefff55ff55ffffeeeff22f.....
        .........ff22fffeff55ff55fffeefff222f.....
        ..........fffffffff55ff55ffffff222ff......
        ............f11111f55ff55f11111ffff.......
        ............f11f11f55ff55f11f11ff.........
        ............f1fff1f55ff55f1fff1f..........
        ............f1fff1ffffffff1fff1f..........
        ............f11111ffffffff11111f..........
        .......5555..fffffeffffffefffff...........
        ....555fff5......eeffffffee...............
        ....5f555f55....eeeeffffffee.....ffffffff.
        ....5f5555ff5...efeeeeeeeefe....fff55555f.
        ....5f55f55555..ee1ffffff1ee....f5555555ff
        ...55ff5fff5fffffe1eeeeee1effff.f555ff55ff
        ..55fff5ffff555f5555ffff55555fffffffff55ff
        .55ffff5f2ff555555ff5555fffff555fff2ff55ff
        .5fff55ff2fffff55ffffffffffff5fffff22f5fff
        .5ff55ff22fffff5ffffffffff2ff5ffffff2f5fff
        .5f555fffff55f25fffffffff52ff5fff555ff55ff
        .5f55ffffff5ff25ffffff2ff522f5fffff5fff5ff
        .ff55ffff555f225fff55f2ff5f2f5ff2ff5fff5ff
        .fff5ff55fff22ff5fff5f22f5f2f5ff2ff5ff55ff
        .fff5ff5fffff515f22f55f2f55ff55f2f5fffffff
        .fff5ff5ffff5515ff2ff5f2ff5ff5152f555ff5ff
        .fff5ff5fff55115ff22f5f2fffff51522ff5fff5f
        .fff5fffff55115ffff2f5fffffff5115fff55ff5f
        .fff55fff551115ffffffffffffff511555ff5ff5f
        .fff55fff5111555ffffffffffff5511115ff5f55f
        .ffff555511115f555ffffffff555511115fff55ff
        .fffffff111115fff55ffff555fff5111155555fff
        .ffffff1111555ffff5ffff5ffffff511111ffffff
        .ffffffdddd5fffffff55555fffffff5ddddffffff
        .ffffffdddd5fff55ffffffffff55ff5ddddffffff
        .ffffffddd5fff252ff252fffff252ff5dddfffff.
        .ffffffddd5ff555ffff5fffffff55ff5dddfffff.
        .ffffffff55ffffff5ff5ff55fffffff5ffffffff.
        .fffffffff5fffff55fffff5f55fffff5ffffffff.
        ..ffffffff5ff5555f5fff5ffff555ff55fffffff.
        ..ffffffff5555.fff55555fffff.55ffffffffff.
        ..ffff..ffff...fff55555fffff..5f5fffffff..
        ...............ffffff4ffffff.ff55fffffff..
        ...............ffffff4ffffff.ffffffff.....
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ...............ffffff4ffffff..............
        ................eeee...eeee...............
        ................effe...effe...............
        ...............eeffee.eeffee..............
        ...............effffe.effffe..............
        ...............eeeeee.eeeeee..............
        `, SpriteKind.diablo)
    Sebastian_Oruro_Diablada_Sara.ay = 300
    Sebastian_Oruro_Diablada_Sara.setPosition(20, 0)
    controller.moveSprite(Sebastian_Oruro_Diablada_Sara, 100, 0)
    scene.cameraFollowSprite(Sebastian_Oruro_Diablada_Sara)
    paloma = sprites.create(img`
        ............................................................cc.....
        ...........................................................ccc.....
        ...........................................................cdc.....
        ..........................................................ccdc.....
        ..........................................................cddcc....
        .........................................................ccddbcc...
        .........................................................cdddbcc...
        ........................................................ccdddbdc...
        .......................................................ccdddbddc...
        ......................................................ccdddbbddbcc.
        ....................................................ccbbddbbdddbdc.
        ..................................................cccddbddddddbddc.
        .................................................ccddddbdddddbdddcc
        ................................................cdddddbbddddddddbcc
        ccc............................................cdddddbbddddddddbddc
        cdcc..........................................cddddddbbddddddbbddcc
        cddcc........................................cddddddddbbdddddddddc.
        .cddcc.......................................cdddddddddbddddddddc..
        .cdddcc......................................cdddddddddbdddddbbbccc
        ccbdddc......................................cbdddddddbbddddddddddc
        cdbbddcc.................ccccccc.............cbdddddbbbddddddddddcc
        cddbbddc...............ccbbbbbbbcc............cdddddbbddddddddddcc.
        ccdddddcc.............ccbbbbbbbbbcc...........cdddddbbddddddbbbbc..
        .cddddddcc............cbbbbbbbbbbbc...........cddddddbdddddddbbbc..
        .ccddddddcc...........cbbbbbbffbbbcc.........cbddddddbddddddddddc..
        ..cddddddbccccccc....c111bbbbffbbbbcc......cccddddddbbddddbbdddcc..
        ...cddddbbdddddddcc..f111bbbbbbbbbbbccc..ccddddddbbbbdddddddbbbc...
        ..cbbbddbbddddddddcccfbb11cbbbbbbbbbbbcccddddddddbbdddddbdddddc....
        .cdddbbdbbbbdddddddddfbbbbcbbbbbbbbbbb6cdddddddddbdddddddbdddc.....
        .ccdddddddbbbddddddddfbbfccbbbbbbbbbbb6cdddbbbbdbbddddddddbbbc.....
        ..ccddddddddbddddddddfbfdcbbbbbbbbbbb66bddbbbdbbbbddbddbdddbc......
        ....cddddddbbddddddddffddcbbbbbbbbbbb663bbbdddddddddbddbbdddc......
        ....cbbddddbbdbbbddddddddcbbbbbbbbbbb663bbbddbdddddddbddbbbcc......
        ....cddbbdddbbbbbddddddddcbbbbbbbbb66633ddbddbdddbbdddbddccc.......
        ....ccddddddddddbdddddddccbbbbbbbbb6633dddbddbbdddbbddcccc.........
        .....ccdddddddddbbddbbddcbbbbbbbbbb663dddddddcbbdddbbc.............
        ......ccddddddddbbbbbbddc6bbbbbbbb666ddddddcccccccccc..............
        .......ccbbbbdddddddbbbbc666bb6666663ddddddc.......................
        .........cbbddddddddddbbc66666666663dddddddc.......................
        .........cdddddbddddddbccd3666633ddddddddddc.......................
        .........ccddbbbddbdddbccdd33333dddddddddddc.......................
        ..........cccccddbbddbb.ccddddddddddddddddddc......................
        ..............ccccccbb...ccdddddddddddddddddc......................
        ...................cc.....ccddddddddddddddddcc.....................
        ...........................ccddddddddddbbbbddcc....................
        ............................bbbdddddddbbbbbddccccccc...............
        .............................bbbddddddbdddddddddddbcc..............
        .............................ccccddddbccccddddddddbbc..............
        ............................c3333cdddc3333cddddddcccc..............
        ...........................cc33333cbcc33333cdddddcc................
        ...........................c3333333cc3333333cdcdbbc................
        ...................bbbbbbbbc3c3c3c3cc3c3c3c3cdccbbc................
        ...................b1d11111c3c3c3cb1c3c3c3cbbdbccc.................
        ...................b1dd11111bcbccc111bcbcccdbbbcc..................
        ...................b11d111111111111111dd111dbccc...................
        ..................b111dd1111111111111dd1111dbc.....................
        ..................b1111dd11111111111dd1111ddb......................
        ..................b11111dd111111111dd11111ddb......................
        .................b1111111d11111111dd111111ddb......................
        .................b1111111dd111111dd1111111db.......................
        .................b11111111dd111ddd11111111db.......................
        .................b111111111dd1dd1111111111db.......................
        ................b11111111111ddd1111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................b111111111111111111111111ddb.......................
        ................bbbb111111111111111111111db........................
        ...................bbbbbbb111111111111111db........................
        ..........................bbbbbbbb1111111db........................
        .................................bbbbbbbbbb........................
        `, SpriteKind.premio_final)
    paloma.ay = 300
    paloma.setPosition(1300, 0)
    enemigo = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemigo,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    200,
    true
    )
    enemigo.setPosition(1140, 42)
    enemigo.setVelocity(-100, 0)
    barbijos = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....fffffffffff.....
        ..fff666666666fff...
        ..f.f611111116f.f...
        ..f.f666666666f.f...
        ..f.f661111166f.f...
        ..fff666666666fff...
        ....fffffffffff.....
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    barbijos.setPosition(350, 0)
    barbijos.ay = 300
    info.setLife(3)
    info.setScore(0)
}
function sprites2 () {
    Vanessa_La_PazSara = sprites.create(img`
        ..........888.........333..............
        ..........89888......33a3..............
        ..........888988...333a33..............
        ............88988.33aa33...............
        ..............898.3a333................
        ..............888.333..................
        ..............ffffffffff...............
        .............ff888ff888ff..............
        ............ff8333333338ff.............
        ...........ff88aaaffaaa88ff............
        ...........f88aa333333aa88f............
        ...........f8aaaaaffaaaaa8f............
        ...........f88888888888888f............
        ..........ffffffffffffffffff...........
        .........eeeeeeeddddddeeddeee..........
        .........eeeedddddddddeddddd...........
        .........eeeeddddddddddddddd...........
        .........eeddddfffddddfffddd...........
        .........eeddddee1ddddee1ddd...........
        .........eeedddeeeddddeeeddd...........
        .........eeedddddddddddddddd...........
        .........eeedddddddddddddddd...........
        .........eeeeddddfdddddddddd...........
        .........eeeedddddfffdddddd............
        .........eeeeddddddddddddd.............
        ..........eeeeeddddddddd...............
        ..........eeeeedddddddd................
        ...........eeeddddddddddddd............
        ...........eeefddddddddfddd............
        ............eeeeddddddfffddd...........
        ...........ddddefddddf333fdd...........
        ...........ddddeeeddf3333fdd...........
        ..........dddddf34ff33ff3fdd...........
        ..........ddddf333e333f3fddd...........
        ..........ddddf333ee333f.dddd..........
        ..........ddddf333ee33f..ddddd.........
        .........ddddf333333333f..ddddd........
        ........dddddf3333333333f.dddddd.......
        ........dddddf333333f333f..dddddddd....
        ........ddddf333f333fff33f..ddddddd....
        ........ddddf333f33333f333f...ddddd....
        ..........ff333ff333333f333f...........
        .........f333333333333333333f..........
        .........f3333333ffff3333333f..........
        ..........ffffffff..ffffffff...........
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............fff...fff................
        ..............f3f...f3f................
        ..............fff...fff................
        ..............f3fff.f3fff..............
        ..............fff3f.fff3f..............
        ..............f.fff.f.fff..............
        `, SpriteKind.Player)
    Matteo_Beni_Sara = sprites.create(img`
        .......................................
        .....................2.................
        ............2...5...22.....5...........
        ...........22...5...22....55........55.
        ...2...5...22..55..2222..555.22....555.
        ..22...55.222.5555.2222.555.222...555..
        ..222..55.22888888888888888822...555...
        .2222..55528888888888888888822..555....
        .2222..555888885fff5fff55ff882.5555....
        .222228888888f55fff5fff5fffff88555..222
        ..2222888885ff5555555555555ff8855..2222
        5.22228888855555eeeeeeeeee55ff85..2222.
        5.22888888ff5eeeeeeeeeeeeee55f88822222.
        552288885855eeeeeeeeeeeeeee55ff882222..
        555288885f5eeeeeeeeeeeeeeeee5ff8822..5.
        55528888f55eeeeeeeeeeeeeeeee5ff88..555.
        55558888f5eeeeeededddeeeeeee5ff8855555.
        .555888ff5eeeeeeddddddeeddee5ff85555...
        .555888ff5eeedddddddddeddddd...........
        ..55888555eeeddddddddddddddd...........
        ..55888ff5eddddfffddddfffddd...........
        ...5888ff5eddddee1ddddee1ddd...........
        ....888ff5eedddeeeddddeeeddd...........
        ....888ff5eedddddddddddddddd...........
        ....888ff5eedddddddddddddddd...........
        .....88f55eeeddddfdddddddddd...........
        .............dddddfffdddddd............
        .............dddddddddddddd............
        ...............ddddddddd...............
        .........ffffffffffffffffffffff........
        ........ff22222222111222222222ff.......
        .......ff1222222221112222222221ff......
        .......f111222222211122222222111f......
        .......f111122222211122222222111f......
        .......f111122222111112222221111f......
        .......f111112221111111222211111f......
        .......fff11122211111112222111fff......
        ........1ffff22111111111122ffff1.......
        ........1111f21111111111112f1111.......
        ........1111f11111111111111f1111.......
        ........1111f11111111111111f111........
        .........111f11111111111111f111........
        .........111f11111111111111f111........
        .........111f11111111111111ff11........
        .........11f1111111111111111f11........
        .........11f1111111111111111f11........
        ........dddf1111111111111111fddd.......
        ........dddf1111111111111111fddd.......
        ........dddf1111111111111111fddd.......
        ...........f1111111111111111f..........
        ...........f1111111111111111f..........
        ...........ffffffffffffffffff..........
        ................ddd...ddd..............
        ................ddd...ddd..............
        ................ddd...ddd..............
        ................dddd..dddd.............
        `, SpriteKind.Player)
    Andrea_Cochabamba_Sara = sprites.create(img`
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........1111111111111111111...........
        .........fffffffffffffffffff...........
        ......111111111111ff11111111111........
        ......11111111111f11f1111111111........
        .........eeeeeeefddddfeeddeee..........
        .........eeeedddddddddeddddd...........
        .........eeeeddddddddddddddd...........
        .........eeddddfffddddfffddd...........
        .........eeddddee1ddddee1ddd...........
        .........eeedddeeeddddeeeddd...........
        .........eeedddddddddddddddd...........
        .........eeedddddddddddddddd...........
        .........eeeeddddfdddddddddd...........
        ..........eeedddddfffdddddd............
        ..........eeeddddddddddddd.............
        ..........eeeeeddddddddd...............
        ...........eeeedddddddd................
        ...........feedddddddddf...............
        ..........f1eefdddddddd1f..............
        .........f11eeeedddddd111f.............
        ........f111111efdddd11111f............
        ........f111111eeedd111111f............
        ........f11111111ee1111111f............
        .......f1111111111e11111111f...........
        ......f11111111111ee11111111f..........
        ..fffff11111111111ee11111111ffffff.....
        ..fa11111111f11111111111f1111111af.....
        ..fa1111111f.f111111111f.f111111af.....
        ..faa11111f..f6a6c68696f..f1111aaf.....
        ..ffa11111f.f6a6c68696b6f.f1111aff.....
        ..dfaaa111f.f6a6c68696b6aff11aaafd.....
        ..dfffaaaaff6a6c68696b6a6cfaaafffd.....
        ..ddddfffff6a6c68696b6a6c6fffffddd.....
        ..ddddd...f6a6c68696b6a6c6f...dddd.....
        ..........f6a6c68696b6a6c6f............
        ..........fffffffffffffffff............
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............ddd...ddd................
        ..............1dd11.1dd11..............
        ..............11111.11111..............
        ..............1.111.1.111..............
        `, SpriteKind.andrea)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemigo.destroy()
    info.changeScoreBy(1)
    animation.runImageAnimation(
    enemigo,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    500,
    false
    )
})
let Andrea_Cochabamba_Sara: Sprite = null
let Matteo_Beni_Sara: Sprite = null
let Vanessa_La_PazSara: Sprite = null
let enemigo: Sprite = null
let paloma: Sprite = null
let barbijos: Sprite = null
let alcohol: Sprite = null
let enemigo2: Sprite = null
let Paloma2: Sprite = null
let Fernanda_Santa_Cruz_Sara: Sprite = null
let Sebastian_Oruro_Diablada_Sara: Sprite = null
let projectile: Sprite = null
let direccion = 0
let barbijos_veces = 0
barbijos_veces = 0
scene.setBackgroundImage(img`
    999999999999999999999999999999999999999999999999ffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999ffffff999999ffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999ffffff999999999999999999fff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999ffffff999999999999999999999999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999fffff9999999999999999999999999999999999f9fffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999fff999999999999999999999999999999999999999f9f9999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999ff9999999999999999999999999999999999999999999ff99999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999f999999999999999999999999999999999999999999999f999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999f999999999999999999999ff99999999999999999999999f999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999f99999999999999999999f99ff999999999999999999999f9999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999f99999999999999999999f9999f999999999999999999999f9999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999f9999999999999999999f99999f9999999999999999999999f999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999f999f9999999999999999999f99999f9999999999999999999999f9999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999f999f9999999999999999999f99999f99999999999999999999999f9999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999ff99f999999999999999999f9999999f999999999999999999999f999999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999ff99f999999999999999999f9999999f999999999999999999999f9999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999ff99f999999999999999999f9999999f999999999999999999999f9999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999f9f9f999999999999999999f99999999f99999999999999999999f99999999999f99999999999999999999999999999999999ffffffffffff9999999999999999999999999999999
    9999999999999999f9f9f99999999999999999f999999999f99999999999999999999f999999999999f9999999999999999999999999999999fff9999999999999999999999999999999999999999999
    9999999999999999f9f9f99999999999999999f999999999f99999999999999999999f9999999999999f999999999999999999999999999fff9999999999f99999999999999999999999999999999999
    9999999999999999f99ff99999999999999999f999999999f99999999999999999999f99999999999999f99999999999999999999999fff999999999999f999999999999999999999999999999999999
    9999999999999999f99ff99999999999999999f999999999f99999999999999999999f99999999999999f99999999999999999999fff999999999999999f999999999999999999999999999999999999
    9999999999999999f99ff99999999999999999f999999999f99999999999999999999f999999999999999f9999999999999999fff999999999999999999f999999999999999999999999999999999999
    9999999999999999f999f999999999999999999999999999f99999999999999999999f9999999999999999f9999999999999ff999999999999999999999f999999999999999999999999999999999999
    9999999999999999f99ff9999999999999999ff99999999f999999999999999999999f99999999999999999f9999999999ff99999999999999999999999f999999999999999999999999999999999999
    9999999999999999f99f9f999999999999999f9ff99999f99999999999999999999999999999999999999999f9999999ff9999999999999999999999999f999999999999999999999999999999999999
    99999999999999999f9f9f99999999999999f9999ff99f999999999999999999999999999999999999999999f999999f999999999999999999999999999f999999999999999999999999999999999999
    99999999999999999f9f9999999999999999f999999f999999999999999999999999999999999999999999999f999ff9999999999999999999999999999f999999999999999999999999999999999999
    99999999999999999f9f99fffffffffffffff9999999f999999999999999999999999999999999999999999999f9f999999999999999999999999999999f999999999999999999999999999999999999
    99999999999999999f9f9f9999999999999999999999f9999999999999999999999999999999999999999999999ff999999999999999999999999999999f999999999999999999999999999999999999
    99999999999999999f9f9f9999999999999999999999f9999999999999999999999999999999999999999999999ff999999999999999999999999999fff9999999999999999999999999999999999999
    999999999999999999ff9f9999999999999999999999f999999999999999999999999999999999999999999999f9f9999999999999999999999fffff9999999999999999999999999999999999999999
    9999999999999999999ff9999999999999999999999f999999999999999999999999999999999999999999999f999f99999999999999fffffff999999999999999999999999999999999999999999999
    9999999999999999999ff9999999999999999999999f999999999999999999999999999999999999999999999f9999f99999999fffff9999999999999999999999999999999999999999999999999999
    9999999999999999999ff9999999999999999999999f999999999999999999999999999999999999999999999f9999ff9999fff999999999999999999999999999999999999999999999999999999999
    9999999999999999999ff9999999999999999999999f99999999999999999999999999999999999999999999f9999999ffff999999999999999999999999999999999999999999999999999999999999
    9999999999999999999ff9999999999999999999999f9999999999999999999999999999999999999999999f9999ffff9f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999ff9999999999999999999999f999999999999999999999999999999999999999999f999ff99999f99999999999999999999999999999999999999999999999999999999999999
    999999999999999999ff99999999999999999999999f99999999999999999999999999999999999999999f99ff9999999f99999999999999999999999999999999999999999999999999999999999999
    999999999999999999ff9999999999999999999999f99999999999999999999999999999999999999999f99f999999999f99999999999999999999999999999999999999999999999999999999999999
    999999999999999999ff9999999999999999999999f99999999999999999999999999999999999999999fff9999999999f99999999999999999999999999999999999999999999999999999999999999
    999999999999999999f9f99999999999999999999f99999999999999999999999999999999999999999ff9999999999999f9999999999999999999999999999999999999999999999999999999999999
    999999999999999999f9f99999999999999999999f9999999999999999999999999999999999999999ff99999999999999f9999999999999999999999999999999999999999999999999999999999999
    999999999999999999f9ff999999999999999999f9999999999999999999999999999999999999999f9f99999999999999f9999999999999999999999999999999999999999999999999999999999999
    999999999999999999f9f9f99999999999999999f999999999999999999999999999999999999999f99f9fffff99999999f9999999999999999999999999999999999999999999999999999999999999
    999999999999999999f9f99f9999999999999999f99999999999999999999999999999999999999f999ff99999ffff9999f9999999999999999999999999999999999999999999999999999999999999
    999999999999999999f9f999f99999999999999f999999999999999999999999999999999999999f99999999999999f9999f999999999999999999999999999999999999999999999999999999999999
    99999999999999999f99f999f99999999999999f99999999999999999999999999999999999999f999999999999999f9999f999999999999999999999999999999999999999999999999999999999999
    99999999999999999f99f9999f999999999999f99999999999999999999999999999999999999f99999999999999ff99999f999999999999999999999999999999999999999999999999999999999999
    99999999999999999f99f99999f9999999999f99999999999999999999999999999999999999f9999999999999ff9999999f999999999999999999999999999999999999999999999999999999999999
    9999999999999999ff99f999999fffff99f99f99999999999999999999999999999999999999f9999999999fff999999999f999999999999999999999999999999999999999999999999999999999999
    9999999999999999ff99f99999999999fffff99999999999999999999999999999999999999f99999999fff9999999999999f99999999999999999999999999999999999999999999999999999999999
    999999999999999ff999f9999999999999f999999999999999999999999999999999999999f9999999ff9999999999999999f99999999999999999999999999999999999999999999999999999999999
    999999999999999ff999f9999999999999f999999999999999999999999999999999999999f99999ff999999999999999999f99999999999999999999999999999999999999999999999999999999999
    99999999999999f9f999f9999999999999f9999999ffffffffffffff99999999999999999fffffff99999999999999999999f99999999999999999999999999999999999999999999999999999999999
    99999999999999f9f999f9999999999999f999ffff99999999999999ff999999999999999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999
    99999999999999f9f999ff999999999999f9ff9999999999999999999f9999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999999f9f9999ff9999999999999f999999999999999999999f9999999999999999999999999779999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999999f9f9999ff9999999999999f999999999999999999999f9999999999999999999999997799999999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999999f99f99999f9999999999999f9999999999999999999fff9999999999999999999999979799999999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999999f99f99999f99999999999999f9999999999ffffffff9999999999999999999999999799799999999999999999f9999999999999999999999999999999999999999999999999999999999
    99999999999f99f999999f99999999999999f9999ffffff999999999999999999999999999999997999799999999999999999f9999999999999999999999999999999999999999999999999999999999
    99999999999f99f99999ff999999999999999f9ff999999999999999999999999999999999999979997999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f999f99999ff999999999999999ff99999999999999999999999999999999999999799979999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f99f99999f9f99999999999999f9f99999999999999999799999999999999999997999979999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f99f9999f99f99999999999999999f9999999999999999979999999999999999979999799999999999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999f999f9999f99f999999999999999999f999999999999999997999999999999999799997999999999999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999f999f999f999f999999999999999999f9999999999999999979999999999999997999979999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999ffffffffff999f9999999999999999999f999999999999999997999999999999979999799999999999999999999999f999999999999999999999999999999999999999999999999999999999
    999999999999f99999999f99999999999999999999f99999999999999999799999999999799999999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f99999999999999999999f99999999999999999979999999997999999999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f9999999999999999997999997777779999999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f9999999999999999997999777777777777799999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f9999999999999999999777777777777799999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f9999ffff99999999999777777777777799999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f99ff9999f9999999999777777777777799999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f9f9999999f999999999777777777777779999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f999999999f999977777777777777777779999999999999999999999999f999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f999999999999999999999f999999999f99999999977777777777777777779999999999999999999f9999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f99999999999999999999f9999999999f99999999977777777777777777997777799999999999999f9999999999999999999999999999999999999999999999999999999999
    99999999999f999999999f99999999999999999999f9999999999f99999999977777777777777999777777999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f9999999999999999999f99999999999f99999999977777777777779999999999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f9999999999999999999f99999999999f99999999977777777777779999999999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f999999999999999999f999999999999f99999999977777777777779999999999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f999999999999999999f999999999999f99999999977777777777799999999999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f99999999999999999f9999999999999f99999999977777777779777779999999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f99999999999999999f9999999999999f99999999977777777799977997777999999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f9999999999999999f99999999999999f99999999777777779999999799999799999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f9999999999999999f99999999999999f99999997977777999999999979999979999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f999999999999999f999999999999999f99999979977779999999999997999979999999999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999f9999999999f999999999999999f99999999999999f999997797797999999999999999799997999999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999f99999999999f99999999999999f999999999999999f999979979999999999999999999979999799999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999f99999999999ff9999ff999999ff99999999999999f9999799799999999999999999999997799979999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999f99999999999ff99999f9999ff9999999999999999f9997977999999999999999999999999977979999999999999f9999999999999999999999999999999999999999999999999999999999
    999999999f99999999999f9f999f99fff99f999999999999999f977779999999999999999999999999999977799999999999ff9999999999999999999999999999999999999999999999999999999999
    999999999f99999999999f9f999fff999999f9999999999999f77779999999999fffffffffffffffffffffff9999999999ff999999999999999999999999999999999999999999999999999999999999
    999999999f9999999999f99f99ff999999999f999999999999f779999999999ff99999999999999999999999ffffffffff99999999999999999999999999999999999999999999999999999999999999
    999999999f9999999999f999fff99999999999f9999999999f99999999999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f9999999999f99999f999999999999f999999999f999999999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f9999999999f9999f99999999999999ff9999999f9999999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f999999999f99999f9999999999999999ffff99f999999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f999999999f9999f999999999999999999999fff9999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999f9999999999f999f999999999999999999999999999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999f9999999999f999f9999999999999999999999999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f999999999f99f999999999999999999999999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f999999999f99f9999999999999999999999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999f99999999f9f999999999999999999999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999f99999999ff99999999999999999999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999f9999999ff999999999999999999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999ff99999999999999999999999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999fff999999999999999999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999fffff99999999999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999ffffff999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999fff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 f f f f f f f f f f f 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(1)
game.showLongText("Ñam Ñam...", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff99999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999ff9999999fffffffff99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999fffffff9999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999ffffff9999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999f9999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999f9999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999f9999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999f9999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999fff99999999999999999999999999999f9999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999fffff99fff9999999999999999999999999f99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999fff9999f99999ffff999999999999999999999f99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999fff9999999f999999999ffff9999ff99999999999f99999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999ff999999999f99999999999999ff9f99ff99999999f999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f9999999999f9999999999999999fff999ff999999f999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f9999999999f99999999999f9fff999ff999f99999f999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f9999999fffff99999999ff9ff9999999fff9f9fffffff999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f999ffff99f99fffff99f999999999999999f9f99f99ffffff99999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999fff999999f9999999ffff999999999999999fffffff99999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999f99999ff9999ffff99999999999ffff99999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999f9999f9999999999fffffffffff9999f9999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999f999999999f99999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999ff99999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999f99999999f9999999999999999999f99999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999999f999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999f999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999f9999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999f9999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999f9999999f9999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999f999999999999999f99999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999f9999999999999f999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999ff9999999999f9999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999f99999999f99999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999f9999999f999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999f99999f9999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999f9ff99999999999999f9999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999f999f999999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999f9999f999999f999f999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999f99999f99999f99f9999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999f999999fff99f9f99999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999f999999999ffff999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999f9999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999f99f999999999ffff99999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999ff9f99f999999999f999fff99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999ff99f999f999999999f999999f9999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999ff9999f999f999999999f99999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999f99999f99999f99999999f99999f99f99999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999f999999f99999f99999999f99999f99f99999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f999999f999999f9999999f999999f99f99999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f999999f9999999f99999f9999999f999f9999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999f999999f99999999f99999f9999999f999f9999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f9999f9999999999f999f99999999f999f9999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999f999f99999999999f9f999999999f9999f999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999fff9999999999999ff999999999f9999f999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999ff99999999999999f999999999f9999f999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999999999999f99999f99999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999f99999f99999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999f99999f99999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999f99999f99999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999999f99999f99999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999fffffffff9999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999ff99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999ffffffff9999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999f999999999999999999ffffff999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999f99999999999999ffff999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999f99999999999ffff999999f99999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999fff99999ffff999f999999f99999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999fffff9999999f999999f999999f9999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999f99999f999999f9999999fff9999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999f99999f999999f9999999999ff99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999f999999f999999f999999999999f9999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999f9999999f999999f9999999999999f999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999f9999999f999999f9999999999999f999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999f99999999f999999f9999999999999f999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f999999999f999999f999999999999f9999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f99999999f9999999f999999999999f9999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999f999999999f9999999f999999999999f9999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999f999999999f9999999f999999999999f9999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f9999999999f9999999f999999999999f9999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999f9999999999f99999999f9999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999f99999999999f99999999f9999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999f99999999999f99999999f9999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f99999999999f9999999999f999999999f99999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f99999999999f9999999999f999999999f99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999ff99999999999f99999999999f9999999ff999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999ff9999999999f9999999999999f9999ff99999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999f9999999999f9999999fff9999f9ff9999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f9999999ff99999999f99ffff9f99999ff99999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999fff99ff9999999999f999999f999999f999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999ff9999999999999f99999f999ffff999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999ffff99f9999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999f9999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999fffffffff9999999999999999f99999999f99999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999f99999999999999999999999999f9999999f99999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999f999999999999999999999999999ff999ff999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
game.showLongText("Oh no!", DialogLayout.Bottom)
game.showLongText("Es un virus!!!", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbb2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168b2222229ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111222222b99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818222222bb299fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb6661888188881881822222be9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd6888888888888888822222299fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd22d9666666dbb668886888888222222222222229ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffd22299666966d6886688888822222222222222222269ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffd2229996696666668888888882222bbb228b22222222229fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffd222999666666666888888888cbb2be8bbbcb22222bb222b9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9222999666666666688888888bccb888888bbbbb88888b22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffd222999669666666866888868bbbbb8888888ccc888b88bb28222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffd2229d99ddd666668868888688bbcb888888888bc888bcc8b288629fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff222222ddd966666888688888888888888b88888888888cc8222886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd222222dd6966666666868888888888bb2bbebb8888888888b228c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff922d2ddd6666666666888688868888222222222e8888888888b22bbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9d229dd666666666668868888888b222222b2bb2222222d88b8eb22bbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888b22222bbbbb2bbb222222b8bbb2228bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbb22222bbbddbbbbbbbbb22228b222bb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bb222bbbbdbbbbbbbbbbb2222228bb22288bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bb22222bbbdbbbbbbbbbbbb2b22288b222288c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666b22bbb22bbdbbbbbbbbbbbb22222288bb2228869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668b22bbdbbbbbbbbbbbbbbbbb222222288b2222866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668b222bbbbbbbbbbbbbbbbbbb2222222888bb222669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868b22bbbdbbbbbbbbbbbbbbbb22222222888bb22869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd6966666668888886822bddbbbbbbbbbbbbbbbbbb222222222888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbb22b222228888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbb2b22222222288888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9992299666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbb2222222222228888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff992222966696666666666888886888bbbbbbbbbbbbbbbbbbbbbb2b22222222222888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9922d22666969666666668888868888bbbbbbbbbbbbbbbbbbbb22b222222222228888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99d222226696966666666668886868888bbbbeb888bbbbbbbbb222222222222228888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99222222e6969666666666888888888888888888888bbbbbbbb222222222222288888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff922222222266966666666688888688888888888d888ebbbbbbb22222222222bb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9222222222269996666688668886888888dd88dbbd88bbbbbbb22222222222eb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff922222222222999966668868888888888ddddbbbbd88cbbbbbbbb2222222228888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9e2222222222229966666688888888888888ddbbbb888bbbbbbbb2222222228888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff922222222222222666666888866888888888dddddbdd88bbbbbb22222222288888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff22222222222222226666688888888888888888d8888888bbbbbb22222222288888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9d222222222222222666688868888888888888888888888bbbbb222222222888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9d22222222222222266666688888888888888888888888bbbb2222222222288888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9222222222222222666666688888888888888888888888bbbb2222222222888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9222222222222222666666688888888888888888888888bbbb222222222288888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9922222222222226666668888888888888888888888888bbbb2b2222222288888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99d222222222226666668888888888888888888888888bbbbb222222222888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99d222222222226666668688688888888888888888888bbbb2222222228888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999222222222b26666666688688888888888888888888bbbb2222222288888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969222222222269666666668688868888888888888888bbbb222222288888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff992222222222696bb668888888868888888888888888bbb222222228888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999922222229666dbbb8888888888888888888888888ccb222222228888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff6992222222966966bbb8888888888888888888888888bbbb2222288888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999222222666666dbbdd88888888688888888888888bb22222288888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699d2222266666666bb6d8888888688888888888888bb2222228888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff96962222266666666dbbd6886868888888888888888bb2b2228888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999e22222666666666dbb8868888688888888888888bbb2228888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9692222266996666666bbb868888888888888888888bbb2888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9622222966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff9922b2996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff96922b9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff9692226696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969229669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9622266699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96266669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.showLongText("Oh no!! Parece que se expandió por todo el mundo", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
nivel1()
game.onUpdate(function () {
    if (Sebastian_Oruro_Diablada_Sara.tileKindAt(TileDirection.Bottom, assets.tile`myTile39`) || Sebastian_Oruro_Diablada_Sara.tileKindAt(TileDirection.Bottom, assets.tile`myTile38`) || Sebastian_Oruro_Diablada_Sara.tileKindAt(TileDirection.Bottom, assets.tile`myTile38`)) {
        info.changeLifeBy(-3)
    }
})
