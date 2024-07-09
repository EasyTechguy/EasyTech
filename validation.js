let btn = document.getElementById('btn')
btn.addEventListener('click',function(e){
    validateForm()
})
function validateForm(){
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let password2 = document.getElementById('password2')
    
    if (username.value === ''){
        setError(username,'please enter a valid username')
    }
    else{
        setSuccess(username);
    }
    
    if (email.value === ''){
        setError(email,'please enter a valid username')
    }
    else{
        setSuccess(email);
    }
    if (password.value === ''){
        setError(password,'please enter a valid username')
    }
    else{
        setSuccess(password);
    }
    if (password.value === ''){
        setError(password,'please enter a valid username')
    }
    else{
        setSuccess(password);
    }
    if (password2.value === ''){
        setError(password2,'re-enter password')
    }
    else if(password.value !== password2.value){
        setError(password2, 'passwords does not match')
    }
    
    else{
        setSuccess(password2);
    }
}
function setError(element){
    const formGroup = element.parentElement;
    const small = formGroup.querySelector('small')
    const faExclamation = formGroup.querySelector('.fa-exclamation-circle')
    const faCheck = formGroup.querySelector('.fa-check-circle')
    small.innerText = message
    small.style.display = 'block'
    faExclamation.style.display = 'block'
    faCheck.style.display = 'none'
}
function setSuccess(element){
    const formGroup = element.parentElement;
    const small = formGroup.querySelector('small')
    const faExclamation = formGroup.querySelector('.fa-exclamation-circle')
    const faCheck = formGroup.querySelector('.fa-check-circle')
    small.style.display = 'none'
    faExclamation.style.display = 'none'
    faCheck.style.display = 'block'
}