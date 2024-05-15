const keyDownInput = document.querySelector(".keyDownInput");
const output = document.querySelector(".output");

keyDownInput.addEventListener("keydown",(event)=>{
	output.textContent = `按下的键为:"${event.key}"`;
})


// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed "${event.key}".`;
// });