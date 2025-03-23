let formData = {
    email: '',
    message: '',
  };
  
  const localStorageFormKey = 'feedback-form-state';
  const form = document.querySelector('.feedback-form');
  
  if (localStorage.getItem(localStorageFormKey) !== null) {
    formData = JSON.parse(localStorage.getItem(localStorageFormKey));
    for (const key in formData) {
      if (form.elements[key]) {
        form.elements[key].value = formData[key];
      }
    }
  }
  
  form.addEventListener('input', event => {
    const targetValue = event.target.value.trim();
    const targetKey = event.target.name;
    if (formData.hasOwnProperty(targetKey)) {
      formData[targetKey] = targetValue;
      localStorage.setItem(localStorageFormKey, JSON.stringify(formData));
    }
  });
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (form.elements.email.value !== '' && form.elements.message.value !== '') {
      form.reset();
      localStorage.removeItem(localStorageFormKey);
      console.log(formData);
      formData.email = '';
      formData.message = '';
    } else {
      alert('All fields must be fills');
    }
  });