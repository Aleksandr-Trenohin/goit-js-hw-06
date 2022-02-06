const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const email = loginFormEl.email.value;
  const password = loginFormEl.password.value;
  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены!');
  } else {
    const formData = {
      email,
      password,
      };
      console.log(formData);
  }
  loginFormEl.reset(); 
}
