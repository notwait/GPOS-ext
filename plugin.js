var controller = navigator.getGamepads()[0]
var buttons = controller.buttons
setTimeout(() => {setCloud('controller', `${Number(buttons[0].pressed)}${Number(buttons[1].pressed)}${Number(buttons[2].pressed)}${Number(buttons[3].pressed)}`)}, 0)
