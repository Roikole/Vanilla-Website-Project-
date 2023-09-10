const passwordText = document.getElementById('passwordText');
const generatePasswordButton = document.getElementById('generatePasswordButton');

generatePasswordButton.addEventListener("click", () => {
    let password = "";
    let textNumberSymbol = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMMOPQRSTUVWXYZ0123456789!@#$%^&*()";
    for (let i = 0; i <= 13; i++) {
        let randomPassword = Math.floor(Math.random() * textNumberSymbol.length + 1);
        password += textNumberSymbol.charAt(randomPassword);
    }
    passwordText.value = password;
});
