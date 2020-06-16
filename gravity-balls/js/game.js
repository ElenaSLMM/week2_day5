const Game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: null,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
        SPACE: 32
    },
    balls: [],

    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.SPACE ? this.createNewBall() : null
        }
    },

    start() {
        setInterval(() => {
            this.clearScreen()
            this.balls.forEach(elm => elm.draw())
            this.removeBalls()
        }, 20)
    },

    removeBalls() {
        this.balls = this.balls.filter(elm => elm.ballPos.x >= -elm.ballSize.w)
    },

    createNewBall() {
        let ball = new Ball(this.ctx, this.canvasSize)
        this.balls.push(ball)
    },
    
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}