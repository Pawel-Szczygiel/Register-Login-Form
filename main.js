
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');
const container = document.querySelector('.wraper');


const toggleForm = () => {
    
    container.classList.toggle('active');

}

signup.addEventListener('click',toggleForm);
signin.addEventListener('click',toggleForm);