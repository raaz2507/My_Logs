function newUser(){
    let pass=createPWD();
    if (!true){
        alert("new page");
    }else {
        alert("old user");
    }
    
}
function createPWD(){
    let pwd1=document.getElementById("pwd1"); //get password form first box
    let pwd2=document.getElementById("pwd2"); //get reenterd password
    //if passward is same then return else give aleart message.
    if (pwd1 == pwd2) return pwd1; 
    else alert("password is not same. Enter Again.");
}
function check_pwd(){
    var pwd=document.getElementById("pwd").value;
    alert("your password is "+pwd);
    return false;
}