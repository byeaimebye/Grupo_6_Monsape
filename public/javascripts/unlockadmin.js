window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key == "a"){
        e.preventDefault();
        window.location.href = "http://localhost:3080/admin/login";
    }
});