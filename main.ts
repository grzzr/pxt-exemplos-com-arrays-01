let imgInimigos = [
    assets.image`pizza`,
    assets.image`taco`,
    assets.image`bolo`,
    assets.image`donut`,
    assets.image`hamburguer`   
]

let x = 16
let i = 0
let indo = true

let criaInimigo = function (inimigo:Image) {
    let sprt = sprites.create(inimigo, SpriteKind.Enemy)
    sprt.setPosition(x, 0)
    sprt.setVelocity(0, 64)
    if (indo) {
        x+=32
    } else {
        x-=32
    }

    if (x > scene.screenWidth()-32) {
        indo=false
    } else if (x < 32) {
        indo=true
    }
    
}


game.onUpdateInterval(500, function () {
    criaInimigo(imgInimigos[i])
    i++
    if (i >= imgInimigos.length) {
        i = 0
    }

})




let tamanho = 1
let crescendo = false


let pulsarSprites = function () {
    let inimigos = sprites.allOfKind(SpriteKind.Enemy)
    if (crescendo) {
        tamanho = tamanho + 0.1
    } else {
        tamanho = tamanho - 0.1
    }
    
    if (tamanho < 0.3) {
        crescendo = true
    } else if (tamanho > 1) {
        crescendo = false
    }
        
    inimigos.forEach(function (inimigo) {        
        inimigo.setScale(tamanho)
    })
}