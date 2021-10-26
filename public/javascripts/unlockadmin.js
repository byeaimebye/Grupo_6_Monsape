window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.altKey && e.key == "a" && window.location == "http://localhost:3080/users/login"){
        e.preventDefault();
        window.location.href = "http://localhost:3080/admin/login";
    }else if (e.ctrlKey && e.altKey && e.key == "a" && window.location == "http://localhost:3080/users/register"){
        e.preventDefault();
        window.location.href = "http://localhost:3080/admin/register";
    }
});