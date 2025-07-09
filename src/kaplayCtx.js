import kaplay from "kaplay";

const k = kaplay({
    width: 1920,
    height: 1080,
    stretch: true,
    letterbox: false,
    background: [0, 0, 0],
    global: false,
    buttons: {
        jump: {
            keyboard: ["space"],
            mouse: "left",
        },
    },
    touchToMouse: true,
    debug: false,
});

const oldCanvas = document.getElementById('game-canvas');
const newCanvas = k.canvas;
oldCanvas.parentNode.replaceChild(newCanvas, oldCanvas);
// document.getElementById("game-wrapper").prepend(k.canvas);

export default k;
