(() => {
  'use strict'


const forms = document.querySelectorAll('.needs-validation')



Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    const password = document.getElementById('password')
    const val = password.value
    const usrnam = document.getElementById('usrname')
console.log(val.length)
    
    if (usrnam.value === '') {
      event.preventDefault()
      event.stopPropagation()
    
      usrnam.classList.add('is-invalid')

    }
    usrnam.classList.remove('is-invalid')

  
    if(val.length<=8){
      event.preventDefault()
      event.stopPropagation()
      password.classList.remove('is-valid')
      password.classList.add('is-invalid')

    }
    password.classList.remove('is-valid')

    form.classList.add('was-validated')
  },false)
})
})()