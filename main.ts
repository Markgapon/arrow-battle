mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`2`)
    if (arrow.image.equals(assets.image`2`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`3`)
    if (arrow.image.equals(assets.image`3`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
let arrow: Sprite = null
let arrow_list: Image[] = []
scene.setBackgroundImage(assets.image`2pbg`)
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        ....111...........
        ...1c8c1..........
        ....1c8c111.......
        ....1cccccc1......
        ...1c88888cc1.....
        ...1988f198cc1....
        ..1f498ff188c1....
        .114499cf988c111..
        1c44444888889ccc1.
        .1c44444889cc999c1
        ..1c888888c8889cc1
        .1c88888898888f9f1
        .1c888888c889f9cf1
        .1c9888889cff99f1.
        ..1cc88899999cf1..
        ...1ccffffffff1...
        ....1111111111....
        ..................
        `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
bundles.wrap3(function () {
    arrow_list = [
    assets.image`0`,
    assets.image`1`,
    assets.image`2`,
    assets.image`3`
    ]
    arrow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    arrow.setPosition(80, 30)
})
bundles.wrap4(function () {
    game.splash("Be the quickest to match", "arrow directions to win!")
    carnival.startCountdownGame(40, carnival.WinTypes.Multi)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})
game.onUpdateInterval(300, function () {
    arrow.setImage(arrow_list._pickRandom())
})
