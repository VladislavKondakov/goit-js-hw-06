const elementInput = document.querySelector('#name-input')
const elementSpan = document.querySelector('#name-output')

elementInput.addEventListener("input", (event) => {
  const inputText = event.target.value.trim();
  
  if (inputText === '') {
    elementSpan.textContent = 'Anonymous';
  } else {
    elementSpan.textContent = inputText;
  }
});
