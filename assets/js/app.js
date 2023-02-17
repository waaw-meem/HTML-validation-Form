const form = document.getElementById("form-control");
const userName = document.getElementById("fullname");
const userMail = document.getElementById("email");
const userPwd = document.getElementById("pwd");
const usermatchPwd = document.getElementById("cpwd");

// check required method
function checkRequired(){
  let txt ="";
  let input =  document.getElementsByTagName('input');
  for(var i=0; i<input.length; i++){
    txt += "Index number is [" + i + "]" + " its value is = " + input[i].value + "\n";   
  }
  console.log(txt);
}

//check length
function checkLength(){
  if((userName.value.length > 0 && userName.value.length < 3)|| userName.value.length > 17){
    alert("Your name must be greater than 3 character & less then 17")
  }
}

// email regex
function checkEmail(){
  let emailReg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})()$/;
  if(emailReg.test(userMail.value)){
    userMail.className += " valid";
  }
  else if(!emailReg.test(userMail.value)){
    userMail.className += " invalid";
  }
}

// password match
function checkPassword(){

  if(userPwd.value === usermatchPwd.value){

    if(userPwd.value == "" && usermatchPwd.value == ""){
      document.getElementById("pwd-match").innerHTML = "Please enter password";
      document.getElementById('pwd-match').style.color = "red";
    }
    document.getElementById("pwd-match").innerHTML = "Password Matched";
    document.getElementById('pwd-match').style.color = "green";


  }
  else if(userPwd.value !== usermatchPwd.value){
   document.getElementById("pwd-match").innerHTML  = "Password not matched";
   document.getElementById('pwd-match').style.color = "red";
  }

}

// show error message
function showErrorMessage(){
  if(userName.value == ""){
    document.getElementById("uname-err").innerHTML = "UserName is Required";
    document.getElementById('uname-err').style.color = "red";
  }
  if(userMail.value == ""){
    document.getElementById("umail-err").innerHTML = "Email Address is Required";
    document.getElementById('umail-err').style.color = "red";
  }

  if(userPwd.value == ""){
    document.getElementById("pwd-err").innerHTML = "Password is Required";
    document.getElementById('pwd-err').style.color = "red";
  }

  if(usermatchPwd.value == ""){
    document.getElementById("pwd-match").innerHTML = "Confirm Password is Required";
    document.getElementById('pwd-match').style.color = "red";
  }
 
}


form.addEventListener('submit',function(e){
  // To stop from reloading page
  e.preventDefault(); 

    checkLength();

    checkEmail();

    checkRequired();

    checkPassword();

    showErrorMessage();
   
  });

