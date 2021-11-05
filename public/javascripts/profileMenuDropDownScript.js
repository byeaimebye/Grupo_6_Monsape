window.addEventListener("load", ()=>{
    let _optMenu = document.querySelector(".opt-drop-down");
    let _optMenuLi = document.querySelector(".opt-drop-down li");
    let _opt = document.querySelector("#opt");

    _opt.addEventListener("click", ()=>{
        if(_optMenu.style.height == 0){
            _optMenu.style.height = "80px";
        }else{
            _optMenu.style.height = 0;
        }
    })

    /* _optMenuLi.addEventListener("mouseout", ()=>{
        _optMenu.style.height = "0";
    }); */
})