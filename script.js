const code = document.getElementById("code")
const key = document.getElementById("keycode")
const press = document.getElementById("press")

document.addEventListener("keydown", (event)=> {
    code.textContent = event.code
    key.textContent = event.key
    press.textContent = event.which

})
