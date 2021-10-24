var buttons = [false, false, false, false]
window.ongamepadconnected = (e) => {
  buttons = e.gamepad.buttons
}
setTimeout(() => {setCloud('controller', `${Number(buttons[0].pressed)}${Number(buttons[1].pressed)}${Number(buttons[2].pressed)}${Number(buttons[3].pressed)}`)}, 0)
