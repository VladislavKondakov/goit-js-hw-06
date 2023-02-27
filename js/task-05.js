const elementInput = document.querySelector('#name-input')
const elementSpan = document.querySelector('#name-output')
elementInput.addEventListener("input", (event) => {
elementSpan.textContent = event.target.value;
})