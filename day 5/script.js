

function fnValidate() {
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
