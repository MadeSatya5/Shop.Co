function validateName(firstName, lastName){
    var namePattern = /^[a-zA-Z\s]+$/; //Menerima input alphabet dan spasi

    if (!firstName || !lastName) {
        return "First name and last name are required.";
    }

    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        return "Invalid first name or last name.";
    }
    return true;
}
function validateEmail(email){
    var emailPattern = /^[^@]+@[^@]+\.[^@]+$/; //Menerima input dengan format email

    if (!email) {
        return "Email is required.";
    }

    if (!emailPattern.test(email)) {
        return "Invalid email address.";
    }
    return true;
}
function validateAddress(address){
    var addressPattern = /^[a-zA-Z0-9\s,.]+$/; //Menerima input alphabet, angka, koma dan titik

    if (!address) {
        return "Address is required.";
    }

    if (!addressPattern.test(address)) {
        return "Invalid address.";
    }
    return true;
}
function validatePhone(phone){
    var phonePattern = /^(\+62|62|0)8[1-9][0-9]{6,9}$/; //Menerima input nomor handphone indonesia

    if(!phone){
        return "Phone Number is required";
    }
    if(!phonePattern.test(phone)){
        return "Invalid Phone Number";
    }
    return true;
}
function validateGender(){
    var genderOptions = document.getElementsByName("opsi");
    for(var i = 0; i < genderOptions.length; i++){
        if(genderOptions[i].checked){
            return true;
        }
    }
    return "Gender is required";
}

function submitForm(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    var validationName = validateName(firstName, lastName);
    var validationEmail = validateEmail(email);
    var validationAddress = validateAddress(address);
    var validationPhone = validatePhone(phone);
    var validationGender = validateGender();

    if(validationName !== true){
        alert(validationName);
        return;
    }
    if(validationEmail !== true){
        alert(validationEmail);
        return;
    }
    if(validationAddress !== true){
        alert(validationAddress);
        return;
    }
    if(validationPhone !== true){
        alert(validationPhone);
        return;
    }
    if (validationGender !== true){ 
        alert(validationGender);
        return;
    }

    alert("Form Submitted Succesfully");

    window.location.href = "index.html";
}