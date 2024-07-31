const inputBox = document.querySelector(".inputBox");
const copyBtn = document.querySelector("#copy")
const genBtn = document.querySelector(".genBtn")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()[]{}|"

const allChars = upperCase + lowerCase + symbols + numbers;
const len = 12;

genBtn.addEventListener("click", () => {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(len > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    inputBox.value = password
});

copyBtn.addEventListener("click", () => {
    inputBox.select();
    document.execCommand("copy"); 
})

