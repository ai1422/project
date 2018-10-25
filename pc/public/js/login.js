var login1=document.getElementById("login1");
var login2=document.getElementById("login2");
var login3=document.getElementById("login3");
var login4=document.getElementById("login4");
login1.onclick=function(){
    login1.classList.add("active");
    login2.classList.remove("active");
    login3.classList.add("active");
    login4.classList.remove("active");
}
login2.onclick=function(){
    login2.classList.add("active");
    login1.classList.remove("active");
    login4.classList.add("active");
    login3.classList.remove("active");
}

