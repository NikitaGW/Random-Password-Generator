const passWordBox=document.getElementById("password");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";

const number="0123456789";

const symbol="@#$%6&()~+-|}{[]></-.";

const allChars=upperCase+lowerCase+number+symbol;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random() *number.length)];
    password+=symbol[Math.floor(Math.random() *symbol.length)];

    while(length>password.length){
        password+=allChars[Math.floor
            (Math.random()*allChars.length)];
    }
    passWordBox.value=password;
}

function copyPassword(){
    passWordBox.select();
    document.execCommand("copy");
}