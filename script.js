// Overall Validation
function validationForm(){
    if(validateName() && validateEmail() && validatePhone() && validateDOB() && validateGender() && validateEducation() && validateUser && validatePassword() && validatePAN() && validateImage()){
        saveFile();
    }
    else{
        alert("Enter All Details Correctly");
    }
}


// Data Storing
function saveFile(){
    var Name = document.getElementById('name').value.trim();
    var Email = document.getElementById('email').value.trim();
    var Phone = document.getElementById('phone').value.trim();
    var DOB = document.getElementById('dob').value.trim();
    var Gender = document.getElementById('gender').value.trim();
    var Occupation = document.getElementById('occupation').value.trim();
    var Education = document.getElementById('education').value.trim();
    var Username = document.getElementById('username').value.trim();
    var Password = document.getElementById('password').value.trim();
    var PAN = document.getElementById('pan').value.trim();
    var AgeInDays = parseInt(ageFinder());
    var Age = parseInt(Math.floor(AgeInDays/365));

    var profilePhoto = document.getElementById('image');
    var uploadedFile = profilePhoto.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        console.log("hi");
        var ImageData = event.target.result;
        var ImageSize = uploadedFile ? uploadedFile.size : null;
        ImageSize /= 1024;
        var ImageType = uploadedFile.type;

    var user_data = {
        "Name" : Name,
        "Email" : Email,
        "Phone" : Phone,
        "DOB" : DOB,
        "Age" : Age,
        "AgeInDays" : AgeInDays,
        "Gender" : Gender,
        "Occupation" : Occupation,
        "Education" : Education,
        "Username" : Username,
        "Password" : Password,
        "PAN" : PAN,
        "ImageData" : ImageData,
        "ImageSize" : ImageSize,
        "ImageType" : ImageType
    }
    localStorage.setItem(Username,JSON.stringify(user_data));
    window.location.reload();
    }
    reader.readAsDataURL(uploadedFile);

    alert('Details submitted successfully');
}

// 1.Name V
function validateName(){
    var name = document.getElementById('name').value.trim();
    var nameRegex = /^[A-Za-z\s]+$/;
    const form_group = document.getElementsByClassName('form-group')[0];
    if(nameRegex.test(name)) {
        document.getElementById('nameError').innerHTML="<small class='green'><small>";
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
    else if(name===""){
        document.getElementById('nameError').innerHTML="<small class='red'>Name should not be Empty<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else{
        document.getElementById('nameError').innerHTML="<small class='red'>Enter Valid Name (Numbers and Special Characters not allowed)<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
}

// 2.Email V
function validateEmail() {
    var email = document.getElementById('email').value.trim();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const form_group = document.getElementsByClassName('form-group')[1];
    if (emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML="<small class='green'><small>";
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
    else if(email===""){
        document.getElementById('emailError').innerHTML="<small class='red'>Email Should not be empty<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else{
        document.getElementById('emailError').innerHTML="<small class='red'>Invalid Email<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
}

// 3. Phone Number V
function validatePhone() {
    var phone = document.getElementById('phone').value.trim();
    var phoneRegex = /^[6-9]{1}[0-9]{9}$/;
    const form_group = document.getElementsByClassName('form-group')[2];
    if (phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerHTML="<small class='green'><small>";
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
    else if(phone===""){
        document.getElementById('phoneError').innerHTML="<small class='red'>Phone Number cannot be empty<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else{
        document.getElementById('phoneError').innerHTML="<small class='red'>Invalid Phone Number<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
}

// 4. DOB Validation
function validateDOB() {
    var userYear = document.getElementById('dob').value.trim();
    var year = new Date(userYear).getFullYear();
    var month = new Date(userYear).getMonth();
    var date = new Date(userYear).getDate();
    const form_group = document.getElementsByClassName('form-group')[3];
    if (year >= 1950 && year <= 2010) {

        document.getElementById('dobError').innerHTML="<small class='green'><small>";
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
    else{
        document.getElementById('dobError').innerHTML="<small class='red'>Year must in between 1950 and 2010<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
}

// Age Calculator
function ageFinder(){
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var today = new Date();
    var millisecondsInDay = 1000 * 60 * 60 * 24;
    var ageInDays = Math.floor((today - dob) / millisecondsInDay);
    return ageInDays;
}

// 5. Gender validation
function validateGender(){
    var gender = document.getElementById("gender").value.trim();
    const form_group = document.getElementsByClassName('form-group')[4];
    if(gender===""){
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else{
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
}

// 6. Occupation no need to Validate

// 7. Education Validation
function validateEducation(){
    var education = document.getElementById("education").value.trim();
    const form_group = document.getElementsByClassName('form-group')[6];
    if(education===""){
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else{
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
}

// 8. Username Validation
function validateUser(){
    var username = document.getElementById('username').value.trim();
    const form_group = document.getElementsByClassName('form-group')[7];
    var userRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?\/~`|-]+$/;
    var keyz = Object.keys(localStorage);
    if(keyz.includes(username)){
        document.getElementById('usernameError').innerHTML="<small class='red'>Username Exists<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else if(username==""){
        document.getElementById('usernameError').innerHTML="<small class='red'>Username cannot be empty<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else if(userRegex.test(username)){
        document.getElementById('usernameError').innerHTML="<small class='green'><small>";
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
    else{
        document.getElementById('usernameError').innerHTML="<small class='red'>Username should not contain any spaces<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
}

// 9. Password Validation strong weak
function validatePassword() {
    var userPassword = document.getElementById('password').value.trim();
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
    const form_group = document.getElementsByClassName('form-group')[8];
    if (passwordRegex.test(userPassword)) {
        document.getElementById('passwordError').innerHTML="<small class='green'><small>";
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
    else if(userPassword==""){
        document.getElementById('passwordError').innerHTML="<small class='red'>Password Cannot be empty<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else{
        document.getElementById('passwordError').innerHTML="<small class='red'>Enter a strong password<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
}

// Show Password
function showPassword(){
    var password=document.getElementById('password');
    var eyeicon=document.getElementById('eye');
    if(password.type==='password')
    {
        password.type='text';
        eyeicon.src='visible.png';
    }
    else{
        password.type='password';
        eyeicon.src='hidden.png';
    }
}

//   10. PAN Validation
function validatePAN() {
    var PAN = document.getElementById('pan').value.trim();
    var PANRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    const form_group = document.getElementsByClassName('form-group')[9];
    if (PANRegex.test(PAN)) {
        document.getElementById('panError').innerHTML="<small class='green'><small>";
        form_group.classList.remove("wrong");
        form_group.classList.add("success");
        return true;
    }
    else if(PAN==""){
        document.getElementById('panError').innerHTML="<small class='red'>PAN Number Cannot be Empty<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
    else{
        document.getElementById('panError').innerHTML="<small class='red'>Invalid PAN Number<small>";
        form_group.classList.remove("success");
        form_group.classList.add("wrong");
        return false;
    }
}

// 11. Image Validation
function validateImage() {
    var img = document.getElementById("image");
    var maxSize = 2 * 1024 * 1024;
    const form_group = document.getElementsByClassName('form-group')[10];
    if (img.files && img.files[0]) {
        var ImageSize = img.files[0].size;
        if (ImageSize > maxSize) {
            document.getElementById('imageError').innerHTML="<small class='red'>Image size exceeds 2MB. Please select a smaller image.<small>";
            form_group.classList.remove("success");
            form_group.classList.add("wrong");
            return false;
        } else {
            document.getElementById('imageError').innerHTML="<small class='green'><small>";
            form_group.classList.remove("wrong");
            form_group.classList.add("success");
          return true;
        }
      }
  }
  
// // Search // //
function search(){
    var text = document.getElementById('searchInput').value.trim();
    var nameRegex = /^[A-Za-z\s]+$/;
    var ageRegex = /^[\d]+$/;
    var imageSizeRegex = /^[\d]+kb$/;
    if(nameRegex.test(text)){
        searchByName(text);
    }
    else if(ageRegex.test(text)){
        searchByAge(text);
    }
    else if(imageSizeRegex.test(text)){
        searchByImage(text);
    }
    else{
        resultsList.innerHTML = "";
    }
}



// search by name
function searchByName(text){
    let arr = [];
    var keyz = Object.keys(localStorage);
    for(var things of keyz){
        var parsedData = JSON.parse(localStorage.getItem(things));
        var temp = parsedData.Name;
        if(temp.includes(text)){
            arr.push(things);
        }
    }
    displayUser(arr);
}

// search by age
function searchByAge(text){
    var age = parseInt(text);
    let arr = [];
    var keyz = Object.keys(localStorage);
    for(var things of keyz){
        var parsedData = JSON.parse(localStorage.getItem(things));
        var temp = parsedData.AgeInDays;
        if(temp>age){
            arr.push(things);
        }
    }
    displayUser(arr);
}

// search by image
function searchByImage(text){
    var size = parseInt(text);
    let arr = [];
    var keyz = Object.keys(localStorage);
    for(var things of keyz){
        var parsedData = JSON.parse(localStorage.getItem(things));
        var temp = parsedData.ImageSize;
        if(temp<size){
            arr.push(things);
        }
    }
    // displayData(arr);
    displayUser(arr)
}

// display data also image
function displayUser(arr){
    // calling for every users
    document.getElementById('resultsList').innerHTML = "";
    for(var i of arr){
        var userData = JSON.parse(localStorage.getItem(i));
        displayUserData(userData);
    }
}
function displayUserData(userData) {
    resultsList.innerHTML += `
          <h3>${userData.Name}</h3>
          <p>Email      : ${userData.Email}</p>
          <p>Phone      : ${userData.Phone}</p>
          <p>DOB        : ${userData.DOB}</p>
          <p>Age        : ${userData.Age}</p>
          <p>AgeInDays  : ${userData.AgeInDays}</p>
          <p>Gender     : ${userData.Gender}</p>
          <p>Occupation : ${userData.Occupation}</p>
          <p>Education  : ${userData.Education}</p>
          <p>Username   : ${userData.Username}</p>
          <p>Password   : ${userData.Password}</p>
          <p>PAN        : ${userData.PAN}</p>
          <img src="${userData.ImageData}" alt="User Image" width="320" height="180">
          <p>Image Size : ${userData.ImageSize}</p>
          <p>Image Type : ${userData.ImageType}</p>
          <p>--------------------------------------------------------------------------</p>
        <br> <br>
      `;
}

