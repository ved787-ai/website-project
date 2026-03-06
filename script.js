function goAdmin(){
    window.location.href = "admin login.html";
}
function goStaff(){
    window.location.href = "staff login.html"
}
function goUser(){
    window.location.href = "customer login.html"
}

function checkAdminLogin(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "ved panchal" && password === "7807"){
        window.location.href = "admin.html";
        return false;
    }
    else{
        alert("Invalid username & password");
        return false;
    }
}

function checkStaffLogin(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "bhaveshkumar" && password === "1806"){
        window.location.href = "staff.html";
        return false;
    }
    else{
        alert("Invalid username & password");
        return false;
    }
}

function checkUserLogin(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "mehul" && password === "2601"){
        window.location.href = "user.html";
        return false;
    }
    else{
        alert("Invalid username & password");
        return false;
    }
}