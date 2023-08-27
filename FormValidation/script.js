const nameText = document.getElementById('nameText');
const ageText = document.getElementById('ageText');
const emailText = document.getElementById('emailText');
const nameMessage = document.getElementById('nameMessage');
const ageMessage = document.getElementById('ageMessage');
const emailMessage = document.getElementById('emailMessage');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", () => {
    if (nameText.value === "") {
        nameMessage.innerHTML = '* Field Required';
        nameText.style.borderColor = 'red';
    }
    else {
        nameMessage.innerHTML = '';
        nameText.style.borderColor = '';
    }
    if (ageText.value === "") {
        ageMessage.innerHTML = '* Field Required';
        ageText.style.borderColor = 'red';
    }
    else {
        ageMessage.innerHTML = '';
        ageText.style.borderColor = '';
    }
    if (emailText.value === "") {
        emailMessage.innerHTML = '* Field Required';
        emailText.style.borderColor = 'red';
    }
    else {
        emailMessage.innerHTML = '';
        emailText.style.borderColor = '';
    }
    if (nameText.value !== '' && ageText.value !== '' && emailText.value !== '') {
        window.location.assign("registered.html");
    }
});
