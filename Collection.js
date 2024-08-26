var input = document.getElementById("search");
var products = document.getElementById("product");
var elements  = products.querySelectorAll("div");

input.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase();


    for(var i = 0; i<elements.length;i++){

        var product_name =  elements[i].querySelector("p").textContent;


        if(product_name.toUpperCase().indexOf(enteredvalue) < 0 ){
            elements[i].style.display = "none";
        }

        else{
            elements[i].style.display = "flex";
        }
    }

})