function validatingForm(e){
    var username = document.getElementById("username")
    var gender = document.getElementById("gender")
    var email = document.getElementById("email")
    var address = document.getElementById("address")
    var city = document.getElementById("city")
    var agree = document.getElementById("agree")
    var valid = true

    if(username.value == ""){
        lblError.innerText = "Username must be filled!"
        valid = false
    }

    else if(email.value == ""){
        lblError.innerText = "Email must be filled!"
        valid = false
    }

    else if(gender.value != "Male" && gender.value != "male" && gender.value != "Female" && gender.value != "female"){
        lblError.innerText = "Required field needs to be Male or Female!"
        valid = false
    }

    else if (address.value.length < 10){
        lblError.innerText = "Address must be at least 10 characters!"
        valid = false
    }

    else if(city.value == ""){
        lblError.innerText = "City must be filled!"
        valid = false
    }

    else if(!(city.value.charAt(0) >= 'A' && city.value.charAt(0) <= 'Z')){
        lblError.innerText = "City name must be start with uppercase!"
        valid = false
    }

    else if (agree.checked == false){
        lblError.innerText = "You must agree with our terms and services to continue!"
        valid = false
    }
    e.preventDefault()
 
    if(valid == true){
        alert("Welcome new member!")
        e.preventDefault()
    }
}