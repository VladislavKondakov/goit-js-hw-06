const elementInput = document.querySelector('#font-size-control');
const elementSpan = document.querySelector('#text');
elementInput.addEventListener("input", () => {
   elementSpan.style.fontSize = `${elementInput.value}px`;
})