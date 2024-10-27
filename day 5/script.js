function fnValidateSignUpForm(e) {
    e.preventDefault();
    console.log(e)
    let formData = e.target;


    //first name
    let fname = formData.firstname.value
    if(!fname){
        document.getElementsByClassName("fname-invalid")[0].style.display = "none"
        document.getElementsByClassName("fname-empty")[0].style.display = "block";
    } else if(!(fname.length > 4)){
        document.getElementsByClassName("fname-empty")[0].style.display = "none";
        document.getElementsByClassName("fname-invalid")[0].style.display = "block"
    }

    //last name
    let lname = formData.lastname.value
    if(!lname){
        document.getElementsByClassName("lname-invalid")[0].style.display = "none"
        document.getElementsByClassName("lname-empty")[0].style.display = "block";
    } else if(!(lname.length > 4)){
        document.getElementsByClassName("lname-empty")[0].style.display = "none";
        document.getElementsByClassName("lname-invalid")[0].style.display = "block"
    }

    //password
    let password = document.getElementById("password").value
    if(!password){
        document.getElementsByClassName("password-invalid")[0].style.display = "none"
        document.getElementsByClassName("password-empty")[0].style.display = "block";
    } else if(!(password.length > 7)){
        document.getElementsByClassName("password-empty")[0].style.display = "none";
        document.getElementsByClassName("password-invalid")[0].style.display = "block"
    }
    
    //confirm password
    let confirmpassword = document.getElementById("confirmpassword").value
    if(!confirmpassword){
        document.getElementsByClassName("confirmpassword-invalid")[0].style.display = "none"
        document.getElementsByClassName("confirmpassword-empty")[0].style.display = "block";
    } else if(!(confirmpassword === password)){
        document.getElementsByClassName("confirmpassword-empty")[0].style.display = "none";
        document.getElementsByClassName("confirmpassword-invalid")[0].style.display = "block"
    }


    

    let email = formData.email.value
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);

    let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const isPassword = regex.test(password)
    console.log("password is " + password)

    // if(password === confirmpassword && isValid && isPassword){
    //     alert("successful")        
    // }else{
    //     alert("ERROR")     
    // }
}