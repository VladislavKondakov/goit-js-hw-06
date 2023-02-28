const elementInput = document.querySelector('#font-size-control');
const elementSpan = document.querySelector('#text');


elementSpan.style.fontSize = `${elementInput.value}px`;

elementInput.addEventListener("input", () => {
   elementSpan.style.fontSize = `${elementInput.value}px`;
});
