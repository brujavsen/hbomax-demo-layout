const body = document.querySelector('body');
const buttonEye = document.querySelector('.eyeBtn');
const inputEmail = document.querySelector('#input-email');
const inputPass = document.querySelector('#input-pass');
const signBtn = document.querySelector('#sign-btn');
const infoValidate = document.querySelector('.infoValidate');
const infoValidatePass = document.querySelector('.infoValidatePass');
const btnOpen = document.querySelector('.btn-open');
const footer = document.querySelector('.footer');
const regEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;


//event mouse
inputPass.addEventListener('mouseover', ()=> {
    buttonEye.style.color = 'white';
    buttonEye.style.transition = '.5s ease-in-out';
});
inputPass.addEventListener('mouseout', ()=> {
    buttonEye.style.color = '#77777731';
})
buttonEye.addEventListener('mouseover', ()=> {
    buttonEye.style.color = 'white';
});
buttonEye.addEventListener('mouseout', ()=> {
    buttonEye.style.color = '#77777731';
});
//end event mouse


//event click
buttonEye.addEventListener('click', passVisible);

signBtn.addEventListener('click', ()=>{
    validateInputEmail();
    validateInputPass();
});


btnOpen.addEventListener('click', showHideFooter);

//end event click

//Functions//

function passVisible() {
    //Change input password to text
    inputPass.getAttribute('type') === 'password' ? inputPass.setAttribute("type", "text") : inputPass.setAttribute("type", "password");

    //change Eye slash to normal
    this.textContent !== 'visibility' ? this.textContent = 'visibility' : this.textContent = 'visibility_off';
}


//Create image icon email
let iconTag = document.createElement('img');
iconTag.src = './exclam-icon.png';
iconTag.classList.add('icon-png');

//Create text email
let textTag = document.createElement('p');
textTag.textContent = 'Please enter an existing email';
textTag.classList.add('txt-val');

//Create image icon pass
let iconPass = document.createElement('img');
iconPass.src = './exclam-icon.png';
iconPass.classList.add('icon-png');

//Create text pass
let textPass = document.createElement('p');
textPass.textContent = 'Please enter a valid password';
textPass.classList.add('txt-val');

function validateInputEmail() {
    if(inputEmail.value !== '' && regEmail.test(inputEmail.value)) {
        console.log('Correcto');
        infoValidate.remove(iconTag);
        infoValidate.remove(textTag);
    }else {
        infoValidate.appendChild(iconTag);
        infoValidate.appendChild(textTag);
    }
}

function validateInputPass() {
    if(inputPass.value !== '') {
        console.log('Correcto');
        infoValidatePass.remove(iconPass);
        infoValidatePass.remove(textPass);
    }else {
        infoValidatePass.appendChild(iconPass);
        infoValidatePass.appendChild(textPass);
    }
}

function showHideFooter() {
    if(footer.classList.contains('active')) {
        footer.classList.remove('active');
        this.classList.remove('active');
        this.textContent = '>';
        this.style.transform = 'rotate(270deg)';
        this.style.borderRadius = '0 50px 50px 0';
    }else {
        footer.classList.add('active');
        this.classList.add('active');
        this.textContent = '>';
        this.style.transform = 'rotate(90deg)';
        this.style.color = 'var(--white)'
        this.style.borderRadius = '50px 0 0 50px';
    }
}