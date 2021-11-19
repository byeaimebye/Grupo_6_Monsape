window.addEventListener("load", () => {
    //Capturando campos...
    let _crear = document.querySelector("#create"),
        _inputs = document.querySelectorAll("input"),//Contiene todos los inputs.
        _form = document.querySelector(".main-admin-create form"),
        _divVariety = document.querySelector(".div-variety-charge"),
    //inputs capturados individualmente.
        _name = document.querySelector("#input-name-charge"),
        _description = document.querySelector("#textarea-description-charge"),
        _category = document.querySelector("#select-category-charge"),
        _collection = document.querySelector("#select-collection-charge"),
        _stock = document.querySelector("#input-stock-charge"),
        _pairing = document.querySelector("#textarea-pairing-charge"),
        _alcoholContent = document.querySelector("#input-alcoholContent-charge"),
        _totalAcidity = document.querySelector("#input-totalAcidity-charge"),
        _residualSugar = document.querySelector("#input-residualSugar-charge"),
        _serviceTemperature = document.querySelector("#input-service_temperature-charge"),
        _price = document.querySelector("#input-price-charge"),
        _discount = document.querySelector("#input-discount-charge"),
        _variety = document.querySelectorAll("#input-variety-charge"),
        _image = document.querySelector("#input-image-charge"),
        _imagePreview = document.querySelector('#img-preview'),
        _imageAdd = document.querySelector('.fa-file-image'),
    //errors
        _allErrors = document.querySelectorAll(".small-form-charge"),
        _nameErrors = document.querySelector("#nameErrors"),
        _descriptionErrors = document.querySelector("#descriptionErrors"),
        _categoryErrors = document.querySelector("#categoryErrors"),
        _collectionErrors = document.querySelector("#collectionErrors"),
        _stockErrors = document.querySelector("#stockErrors"),
        _pairingErrors = document.querySelector("#pairingErrors"),
        _alcoholContentErrors = document.querySelector("#alcoholContentErrors"),
        _totalAcidityErrors = document.querySelector("#totalAcidityErrors"),
        _residualSugarErrors = document.querySelector("#residualSugarErrors"),
        _serviceTemperatureErrors = document.querySelector("#service_temperatureErrors"),
        _priceErrors = document.querySelector("#priceErrors"),
        _discountErrors = document.querySelector("#discountErrors"),
        _varietyErrors = document.querySelector("#varietyErrors"),
        _imageErrors = document.querySelector("#imageErrors"),
    // small example service temperture
        _serviceTemperatureExample = document.querySelector("#service_temperatureExample"),         
    //Expresiones regulares.
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExDecimal = /^[0-9]{1,2}([,][0-9]{1,2})?$/,
        regExPrice = /^[0-9]{1,6}([,][0-9]{1,2})?$/,
        regExNum = /^[0-9]{1,8}$/;

        /*iconos check y info*/

        let checkCircles = document.getElementsByClassName("fa-check-circle");
        for (let i = 0; i < (checkCircles.length); i++) {
            checkCircles[i].style.top = "35px";            
            checkCircles[2].style.right = "20px";            
            checkCircles[3].style.right = "20px";            
            checkCircles[12].style.top = "-27px";            
            checkCircles[12].style.right = "460px";            
        }
        let infoCircles = document.getElementsByClassName("fa-info-circle");
        for (let i = 0; i < (infoCircles.length); i++) {
            infoCircles[i].style.top = "35px";            
            infoCircles[2].style.right = "20px";            
            infoCircles[3].style.right = "20px";            
            infoCircles[12].style.top = "151px";            
            infoCircles[12].style.right = "104px";            
        }
              
        /*Ejemplo de temperatura recomendada*/
        _serviceTemperatureExample.style.color = "blue";  
        
        /* ******VALIDACIONES******* */
    _name.addEventListener("blur", () => {
        let $value = _name.value.trim();

        switch (true) {
            case !$value:
                _name.placeholder = "";
                _nameErrors.style.display = "block";
                _nameErrors.style.color = "orangered";
                _nameErrors.innerHTML = "";
                _nameErrors.innerHTML = "El campo nombre está vacío.";
                _name.classList.remove("error");
                _name.classList.remove("valid");
                _name.classList.add("warning");
                document.querySelector(".div-name-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-name-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-name-charge .fa-info-circle").style.color = "orangered";
                break;
            case $value.length<5:
                _name.placeholder = "";
                _nameErrors.style.display = "block";
                _nameErrors.style.color = "orangered";
                _nameErrors.innerHTML = "";
                _nameErrors.innerHTML = "El campo nombre debe tener al menos 5 caracteres.";
                _name.classList.remove("error");
                _name.classList.remove("valid");
                _name.classList.add("warning");
                document.querySelector(".div-name-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-name-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-name-charge .fa-info-circle").style.color = "orangered";
                break;
            default:
                _nameErrors.style.display = "none";
                _name.classList.remove("warning");
                _name.classList.remove("error");
                _name.classList.add("valid");
                document.querySelector(".div-name-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-name-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-name-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _description.addEventListener("blur", () => {
        let $value = _description.value.trim();

        switch (true) {
            case !$value:
                _description.placeholder = "";
                _descriptionErrors.style.display = "block";
                _descriptionErrors.style.color = "orangered";
                _descriptionErrors.innerHTML = "";
                _descriptionErrors.innerHTML = "El campo descripción está vacío.";
                _description.classList.remove("error");
                _description.classList.remove("valid");
                _description.classList.add("warning");
                document.querySelector(".div-description-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-description-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-description-charge .fa-info-circle").style.color = "orangered";
                break;
            case $value.length<20:
                _description.placeholder = "";
                _descriptionErrors.style.display = "block";
                _descriptionErrors.style.color = "orangered";
                _descriptionErrors.innerHTML = "";
                _descriptionErrors.innerHTML = "El campo descripción debe tener al menos 20 caracteres.";
                _description.classList.remove("error");
                _description.classList.remove("valid");
                _description.classList.add("warning");
                document.querySelector(".div-description-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-description-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-description-charge .fa-info-circle").style.color = "orangered";
                break;  
            default:
                _descriptionErrors.style.display = "none";
                _description.classList.remove("warning");
                _description.classList.remove("error");
                _description.classList.add("valid");
                document.querySelector(".div-description-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-description-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-description-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _category.addEventListener("blur", () => {
        let $value = _category.value.trim();

        switch (true) {
            case !$value:
                _category.placeholder = "";
                _categoryErrors.style.display = "block";
                _categoryErrors.style.color = "orangered";
                _categoryErrors.innerHTML = "";
                _categoryErrors.innerHTML = "Debés elegir una categoria.";
                _category.classList.remove("error");
                _category.classList.remove("valid");
                _category.classList.add("warning");
                document.querySelector(".div-category-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-category-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-category-charge .fa-info-circle").style.color = "orangered";
                break;              
            default:
                _categoryErrors.style.display = "none";
                _category.classList.remove("warning");
                _category.classList.remove("error");
                _category.classList.add("valid");
                document.querySelector(".div-category-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-category-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-category-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _collection.addEventListener("blur", () => {
        let $value = _collection.value.trim();

        switch (true) {
            case !$value:
                _collection.placeholder = "";
                _collectionErrors.style.display = "block";
                _collectionErrors.style.color = "orangered";
                _collectionErrors.innerHTML = "";
                _collectionErrors.innerHTML = "Debés elegir una colección.";
                _collection.classList.remove("error");
                _collection.classList.remove("valid");
                _collection.classList.add("warning");
                document.querySelector(".div-collection-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-collection-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-collection-charge .fa-info-circle").style.color = "orangered";
                break;              
            default:
                _collectionErrors.style.display = "none";
                _collection.classList.remove("warning");
                _collection.classList.remove("error");
                _collection.classList.add("valid");
                document.querySelector(".div-collection-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-collection-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-collection-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _stock.addEventListener("blur", () => {
        let $value = _stock.value.trim();

        switch (true) {
            case !$value:
                _stock.placeholder = "";
                _stockErrors.style.display = "block";
                _stockErrors.style.color = "orangered";
                _stockErrors.innerHTML = "";
                _stockErrors.innerHTML = "El campo stock está vacío.";
                _stock.classList.remove("error");
                _stock.classList.remove("valid");
                _stock.classList.add("warning");
                document.querySelector(".div-stock-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-stock-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-stock-charge .fa-info-circle").style.color = "orangered";
                break;
            case !regExNum.test($value):
                _stock.placeholder = "";
                _stockErrors.style.display = "block";
                _stockErrors.style.color = "darkred";
                _stockErrors.innerHTML = "";
                _stockErrors.innerHTML = "Ingresa un valor numérico.";
                _stock.classList.remove("warning");
                _stock.classList.remove("valid");
                _stock.classList.add("error");
                document.querySelector(".div-stock-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-stock-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-stock-charge .fa-info-circle").style.color = "darkred";
                break;  
            default:
                _stockErrors.style.display = "none";
                _stock.classList.remove("warning");
                _stock.classList.remove("error");
                _stock.classList.add("valid");
                document.querySelector(".div-stock-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-stock-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-stock-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _pairing.addEventListener("blur", () => {
        let $value = _pairing.value.trim();

        switch (true) {
            case !$value:
                _pairing.placeholder = "";
                _pairingErrors.style.display = "block";
                _pairingErrors.style.color = "orangered";
                _pairingErrors.innerHTML = "";
                _pairingErrors.innerHTML = "El campo Maridaje está vacío.";
                _pairing.classList.remove("error");
                _pairing.classList.remove("valid");
                _pairing.classList.add("warning");
                document.querySelector(".div-pairing-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-pairing-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-pairing-charge .fa-info-circle").style.color = "orangered";
                break;
            case $value.length<20:
                _pairing.placeholder = "";
                _pairingErrors.style.display = "block";
                _pairingErrors.style.color = "orangered";
                _pairingErrors.innerHTML = "";
                _pairingErrors.innerHTML = "El campo Maridaje debe tener al menos 20 caracteres.";
                _pairing.classList.remove("error");
                _pairing.classList.remove("valid");
                _pairing.classList.add("warning");
                document.querySelector(".div-pairing-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-pairing-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-pairing-charge .fa-info-circle").style.color = "orangered";
                break;  
            default:
                _pairingErrors.style.display = "none";
                _pairing.classList.remove("warning");
                _pairing.classList.remove("error");
                _pairing.classList.add("valid");
                document.querySelector(".div-pairing-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-pairing-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-pairing-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _alcoholContent.addEventListener("blur", () => {
        let $value = _alcoholContent.value.trim();

        switch (true) {
            case !$value:
                _alcoholContent.placeholder = "";
                _alcoholContentErrors.style.display = "block";
                _alcoholContentErrors.style.color = "orangered";
                _alcoholContentErrors.innerHTML = "";
                _alcoholContentErrors.innerHTML = "El campo está vacío.";
                _alcoholContent.classList.remove("error");
                _alcoholContent.classList.remove("valid");
                _alcoholContent.classList.add("warning");
                document.querySelector(".div-alcoholContent-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-alcoholContent-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-alcoholContent-charge .fa-info-circle").style.color = "orangered";
                break;
            case !regExDecimal.test($value):
                _alcoholContent.placeholder = "";
                _alcoholContentErrors.style.display = "block";
                _alcoholContentErrors.style.color = "darkred";
                _alcoholContentErrors.innerHTML = "";
                _alcoholContentErrors.innerHTML = "Debés ingresar un valor numérico o decimal.";
                _alcoholContent.classList.remove("warning");
                _alcoholContent.classList.remove("valid");
                _alcoholContent.classList.add("error");
                document.querySelector(".div-alcoholContent-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-alcoholContent-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-alcoholContent-charge .fa-info-circle").style.color = "darkred";
                break; 
            case $value.length>5:
                _alcoholContent.placeholder = "";
                _alcoholContentErrors.style.display = "block";
                _alcoholContentErrors.style.color = "orangered";
                _alcoholContentErrors.innerHTML = "";
                _alcoholContentErrors.innerHTML = "El campo Contenido de alcohol NO debe tener más de 4 caracteres.";
                _alcoholContent.classList.remove("error");
                _alcoholContent.classList.remove("valid");
                _alcoholContent.classList.add("warning");
                document.querySelector(".div-alcoholContent-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-alcoholContent-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-alcoholContent-charge .fa-info-circle").style.color = "orangered";
                break;   
            default:
                _alcoholContentErrors.style.display = "none";
                _alcoholContent.classList.remove("warning");
                _alcoholContent.classList.remove("error");
                _alcoholContent.classList.add("valid");
                document.querySelector(".div-alcoholContent-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-alcoholContent-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-alcoholContent-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _totalAcidity.addEventListener("blur", () => {
        let $value = _totalAcidity.value.trim();

        switch (true) {
            case !$value:
                _totalAcidity.placeholder = "";
                _totalAcidityErrors.style.display = "block";
                _totalAcidityErrors.style.color = "orangered";
                _totalAcidityErrors.innerHTML = "";
                _totalAcidityErrors.innerHTML = "El campo Acidez Total está vacío.";
                _totalAcidity.classList.remove("error");
                _totalAcidity.classList.remove("valid");
                _totalAcidity.classList.add("warning");
                document.querySelector(".div-totalAcidity-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-totalAcidity-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-totalAcidity-charge .fa-info-circle").style.color = "orangered";
                break;
            case !regExDecimal.test($value):
                _totalAcidity.placeholder = "";
                _totalAcidityErrors.style.display = "block";
                _totalAcidityErrors.style.color = "darkred";
                _totalAcidityErrors.innerHTML = "";
                _totalAcidityErrors.innerHTML = "Debés ingresar un valor numérico o decimal.";
                _totalAcidity.classList.remove("warning");
                _totalAcidity.classList.remove("valid");
                _totalAcidity.classList.add("error");
                document.querySelector(".div-totalAcidity-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-totalAcidity-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-totalAcidity-charge .fa-info-circle").style.color = "darkred";
                break;        
            case $value.length>5:
                _totalAcidity.placeholder = "";
                _totalAcidityErrors.style.display = "block";
                _totalAcidityErrors.style.color = "orangered";
                _totalAcidityErrors.innerHTML = "";
                _totalAcidityErrors.innerHTML = "El campo Acidez Total NO debe tener más de 4 caracteres.";
                _totalAcidity.classList.remove("error");
                _totalAcidity.classList.remove("valid");
                _totalAcidity.classList.add("warning");
                document.querySelector(".div-totalAcidity-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-totalAcidity-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-totalAcidity-charge .fa-info-circle").style.color = "orangered";
                break;  
            default:
                _totalAcidityErrors.style.display = "none";
                _totalAcidity.classList.remove("warning");
                _totalAcidity.classList.remove("error");
                _totalAcidity.classList.add("valid");
                document.querySelector(".div-totalAcidity-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-totalAcidity-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-totalAcidity-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _residualSugar.addEventListener("blur", () => {
        let $value = _residualSugar.value.trim();

        switch (true) {
            case !$value:
                _residualSugar.placeholder = "";
                _residualSugarErrors.style.display = "block";
                _residualSugarErrors.style.color = "orangered";
                _residualSugarErrors.innerHTML = "";
                _residualSugarErrors.innerHTML = "El campo Azúcar Residual está vacío.";
                _residualSugar.classList.remove("error");
                _residualSugar.classList.remove("valid");
                _residualSugar.classList.add("warning");
                document.querySelector(".div-residualSugar-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-residualSugar-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-residualSugar-charge .fa-info-circle").style.color = "orangered";
                break;
            case !regExDecimal.test($value):
                _residualSugar.placeholder = "";
                _residualSugarErrors.style.display = "block";
                _residualSugarErrors.style.color = "darkred";
                _residualSugarErrors.innerHTML = "";
                _residualSugarErrors.innerHTML = "Debés ingresar un valor numérico o decimal.";
                _residualSugar.classList.remove("warning");
                _residualSugar.classList.remove("valid");
                _residualSugar.classList.add("error");
                document.querySelector(".div-residualSugar-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-residualSugar-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-residualSugar-charge .fa-info-circle").style.color = "darkred";
                break;
            case $value.length>5:
                _residualSugar.placeholder = "";
                _residualSugarErrors.style.display = "block";
                _residualSugarErrors.style.color = "orangered";
                _residualSugarErrors.innerHTML = "";
                _residualSugarErrors.innerHTML = "El campo Azúcar Residual NO debe tener más de 4 caracteres.";
                _residualSugar.classList.remove("error");
                _residualSugar.classList.remove("valid");
                _residualSugar.classList.add("warning");
                document.querySelector(".div-residualSugar-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-residualSugar-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-residualSugar-charge .fa-info-circle").style.color = "orangered";
                break;  
            default:
                _residualSugarErrors.style.display = "none";
                _residualSugar.classList.remove("warning");
                _residualSugar.classList.remove("error");
                _residualSugar.classList.add("valid");
                document.querySelector(".div-residualSugar-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-residualSugar-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-residualSugar-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _serviceTemperature.addEventListener("blur", () => {
        let $value = _serviceTemperature.value.trim();

        switch (true) {
            case !$value:
                _serviceTemperature.placeholder = "";
                _serviceTemperatureErrors.style.display = "block";
                _serviceTemperatureErrors.style.color = "orangered";
                _serviceTemperatureErrors.innerHTML = "";
                _serviceTemperatureErrors.innerHTML = "El campo Temperatura Recomendada está vacío.";
                _serviceTemperature.classList.remove("error");
                _serviceTemperature.classList.remove("valid");
                _serviceTemperature.classList.add("warning");
                document.querySelector(".div-serviceTemperature-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-serviceTemperature-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-serviceTemperature-charge .fa-info-circle").style.color = "orangered";
                break; 
            default:
                _serviceTemperatureErrors.style.display = "none";
                _serviceTemperature.classList.remove("warning");
                _serviceTemperature.classList.remove("error");
                _serviceTemperature.classList.add("valid");
                document.querySelector(".div-serviceTemperature-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-serviceTemperature-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-serviceTemperature-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _price.addEventListener("blur", () => {
        let $value = _price.value.trim();

        switch (true) {
            case !$value:
                _price.placeholder = "";
                _priceErrors.style.display = "block";
                _priceErrors.style.color = "orangered";
                _priceErrors.innerHTML = "";
                _priceErrors.innerHTML = "Debés ingresar un precio para el producto.";
                _price.classList.remove("error");
                _price.classList.remove("valid");
                _price.classList.add("warning");
                document.querySelector(".div-price-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-price-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-price-charge .fa-info-circle").style.color = "orangered";
                break;
                case $value.length>9:
                    _price.placeholder = "";
                    _priceErrors.style.display = "block";
                    _priceErrors.style.color = "orangered";
                    _priceErrors.innerHTML = "";
                    _priceErrors.innerHTML = "El campo precio NO debe superar los 9 caracteres.";
                    _price.classList.remove("error");
                    _price.classList.remove("valid");
                    _price.classList.add("warning");
                    document.querySelector(".div-price-charge .fa-check-circle").style.display = "none";
                    document.querySelector(".div-price-charge .fa-info-circle").style.display = "block";
                    document.querySelector(".div-price-charge .fa-info-circle").style.color = "orangered";
                    break;  
                case regExPrice.test($value) && !regExNum.test($value):
                    _price.placeholder = "";
                    _priceErrors.style.display = "block";
                    _priceErrors.style.color = "darkred";
                    _priceErrors.innerHTML = "";
                    _priceErrors.innerHTML = "Debés ingresar un valor numérico o decimal.";
                    _price.classList.remove("warning");
                    _price.classList.remove("valid");
                    _price.classList.add("error");
                    document.querySelector(".div-price-charge .fa-check-circle").style.display = "none";
                    document.querySelector(".div-price-charge .fa-info-circle").style.display = "block";
                    document.querySelector(".div-price-charge .fa-info-circle").style.color = "darkred";
                    break;
            default:
                _priceErrors.style.display = "none";
                _price.classList.remove("warning");
                _price.classList.remove("error");
                _price.classList.add("valid");
                document.querySelector(".div-price-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-price-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-price-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    _discount.addEventListener("blur", () => {
        let $value = _discount.value.trim();

        switch (true) {
            case !$value:
                _discount.placeholder = "";
                _discountErrors.style.display = "block";
                _discountErrors.style.color = "orangered";
                _discountErrors.innerHTML = "";
                _discountErrors.innerHTML = "El campo Descuento está vacío.";
                _discount.classList.remove("error");
                _discount.classList.remove("valid");
                _discount.classList.add("warning");
                document.querySelector(".div-discount-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-discount-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-discount-charge .fa-info-circle").style.color = "orangered";
                break;
            case !regExNum.test($value):
                _discount.placeholder = "";
                _discountErrors.style.display = "block";
                _discountErrors.style.color = "darkred";
                _discountErrors.innerHTML = "";
                _discountErrors.innerHTML = "Debés ingresar un valor numérico";
                _discount.classList.remove("warning");
                _discount.classList.remove("valid");
                _discount.classList.add("error");
                document.querySelector(".div-discount-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-discount-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-discount-charge .fa-info-circle").style.color = "darkred";
                break;
            case $value.length>3:
                _discount.placeholder = "";
                _discountErrors.style.display = "block";
                _discountErrors.style.color = "orangered";
                _discountErrors.innerHTML = "";
                _discountErrors.innerHTML = "El campo Descuento NO debe superar los 3 dígitos.";
                _discount.classList.remove("error");
                _discount.classList.remove("valid");
                _discount.classList.add("warning");
                document.querySelector(".div-discount-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-discount-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-discount-charge .fa-info-circle").style.color = "orangered";
                break;
            case $value>100:
                _discount.placeholder = "";
                _discountErrors.style.display = "block";
                _discountErrors.style.color = "orangered";
                _discountErrors.innerHTML = "";
                _discountErrors.innerHTML = "El campo Descuento NO debe ser superior a 100.";
                _discount.classList.remove("error");
                _discount.classList.remove("valid");
                _discount.classList.add("warning");
                document.querySelector(".div-discount-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-discount-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-discount-charge .fa-info-circle").style.color = "orangered";
                break;      
            default:
                _discountErrors.style.display = "none";
                _discount.classList.remove("warning");
                _discount.classList.remove("error");
                _discount.classList.add("valid");
                document.querySelector(".div-discount-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-discount-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-discount-charge .fa-info-circle").style.display = "none";
                break;
        };
    });

    /*Validacion para VARIETY*/
    let contador = 0;
    for(let i=0; i<_variety.length; i++){
        if(_variety[i].checked){
            contador++;
        }
        if(contador>0){
            _varietyErrors.style.display = "none";
            _variety[i].classList.remove("warning");
            _variety[i].classList.remove("error");
            _variety[i].classList.add("valid");
            document.querySelector(".div-variety-charge .fa-check-circle").style.display = "block";
            document.querySelector(".div-variety-charge .fa-check-circle").style.color = "green";
            document.querySelector(".div-variety-charge .fa-info-circle").style.display = "none";
        }    
    }
    
    for(let i=0; i<_variety.length; i++){
        _variety[i].addEventListener("click", () => {
            if(_variety[i].checked){
                contador++;
                _varietyErrors.style.display = "none";
                _variety[i].classList.remove("warning");
                _variety[i].classList.remove("error");
                _variety[i].classList.add("valid");
                document.querySelector(".div-variety-charge .fa-check-circle").style.display = "block";
                document.querySelector(".div-variety-charge .fa-check-circle").style.color = "green";
                document.querySelector(".div-variety-charge .fa-info-circle").style.display = "none";
            }else{
                contador--;               
            }
            if(contador == 0){                
                _varietyErrors.style.display = "block";
                _varietyErrors.style.color = "orangered";
                _varietyErrors.innerHTML = "";
                _varietyErrors.innerHTML = "Debés seleccionar una o más variedades.";
                _variety[i].classList.remove("error");
                _variety[i].classList.remove("valid");
                _variety[i].classList.add("warning");
                document.querySelector(".div-variety-charge .fa-check-circle").style.display = "none";
                document.querySelector(".div-variety-charge .fa-info-circle").style.display = "block";
                document.querySelector(".div-variety-charge .fa-info-circle").style.color = "orangered";
            }
        })         
    }    

    _image.addEventListener('change', 
    function fileValidation(){
        let filePath = _image.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            _imageErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            _image.value = '';
            _imagePreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log(_image.files);
            if(_image.files && _image.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    _imagePreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(_image.files[0]);
                _imageErrors.innerHTML = '';
                _image.classList.remove('is-invalid')
                _imageAdd.classList.remove('fa-file-image')
            }
        }
    })
    
    _form.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()        
        let elementosForm = this.elements
        
        for (let index = 0; index < elementosForm.length-23; index++) {
            //console.log(elementosForm[index].value);
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('warning');
                submitErrors.innerHTML = "Los campos señalados son obligatorios";
                error = true;
            }
        }

        if(contador==0){            
            _varietyErrors.style.display = "block";
            _varietyErrors.style.color = "orangered";
            _varietyErrors.innerHTML = "";
            _varietyErrors.innerHTML = "Debés seleccionar una o más variedades.";
            error = true
        }

        if(!error){
            alert('Se realizó la carga con éxito');
            _form.submit()
        }

    })
})