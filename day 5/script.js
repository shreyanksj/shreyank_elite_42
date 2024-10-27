


function fnValidateSignUpForm(e) {
    e.preventDefault();
    console.log(e)
    let formData = e.target;
    let fname = formData.firstname.value
    console.log(fname)

    let lname = formData.lastname.value
    console.log(lname)

    let password = document.getElementById("password").value
    // console.log(inputUsername)
    let confirmpassword = document.getElementById("confirmpassword").value
    // console.log(inputPassword)
    let container = document.getElementsByClassName("container")

    if(password === confirmpassword){
        alert("successful")        
    }else{
        alert("ERROR")
    }
}