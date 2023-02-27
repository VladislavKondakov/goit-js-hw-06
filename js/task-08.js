const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault(); 

  const formData = new FormData(loginForm); 
  const formValues = Object.fromEntries(formData.entries()); 

  
  if (!formValues.email || !formValues.password) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  console.log(formValues); 
  loginForm.reset(); 
});

