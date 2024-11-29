bannerbtn1 = document.querySelector(".bannerbtn1");
bannerbtn2 = document.querySelector(".bannerbtn2");
bannerbtn3 = document.querySelector(".bannerbtn3");

buybtns = document.querySelectorAll(".buy-order");

cake1 = document.querySelector(".cake1");
cake2 = document.querySelector(".cake2");
cake3 = document.querySelector(".cake3");
cake4 = document.querySelector(".cake4");
cake5 = document.querySelector(".cake5");
cake6 = document.querySelector(".cake6");
cake7 = document.querySelector(".cake7");
cake8 = document.querySelector(".cake8");

cake_info = document.querySelector(".cake-info");

cake1_info = document.querySelector(".cake1-info");
cake2_info = document.querySelector(".cake2-info");
cake3_info = document.querySelector(".cake3-info");
cake4_info = document.querySelector(".cake4-info");
cake5_info = document.querySelector(".cake5-info");
cake6_info = document.querySelector(".cake6-info");
cake7_info = document.querySelector(".cake7-info");
cake8_info = document.querySelector(".cake8-info");

overlay = document.querySelector(".overlay");

cake_section = document.querySelector(".cake-section");

order_sections = document.querySelectorAll(".order-section");

exitbtn = document.querySelector(".exit-info");

const place_orders = document.querySelectorAll(".place-order");

bannerbtn1.addEventListener("click", function () {
    cake_section.scrollIntoView({
        behavior: 'smooth'
    });
});

cake1.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake1_info.style.display = "flex";
    overlay.style.display = "block";

});
cake2.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake2_info.style.display = "flex";
    overlay.style.display = "block";
    
});
cake3.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake3_info.style.display = "flex";
    overlay.style.display = "block";
    
});
cake4.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake4_info.style.display = "flex";
    overlay.style.display = "block";
    
});
cake5.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake5_info.style.display = "flex";
    overlay.style.display = "block";
    
});
cake6.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake6_info.style.display = "flex";
    overlay.style.display = "block";
    
});
cake7.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake7_info.style.display = "flex";
    overlay.style.display = "block";
    
});
cake8.addEventListener("click", function(){
    cake_info.style.display = "block";
    cake8_info.style.display = "flex";
    overlay.style.display = "block";
    
});

buybtns.forEach(button => {
    button.addEventListener("click", () => {
        order_sections.forEach(order_section => {
            order_section.style.display = "flex";
            order_section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

exitbtn.addEventListener("click", function(){
    cake_info.style.display = "none";
    cake1_info.style.display = "none";
    cake2_info.style.display = "none";
    cake3_info.style.display = "none";
    cake4_info.style.display = "none";
    cake5_info.style.display = "none";
    cake6_info.style.display = "none";
    cake7_info.style.display = "none";
    cake8_info.style.display = "none";
    overlay.style.display = "none";
    order_sections.forEach(order_section => {
        order_section.style.display = "none";
    });
});


nameErrors = document.querySelectorAll(".name-error");
addressErrors = document.querySelectorAll(".address-error");
phn_noErrors = document.querySelectorAll(".phn-no-error");
cakeChoiceErrors = document.querySelectorAll(".choice-error");
quantityErrors = document.querySelectorAll(".quantity-error");



var order_sections = document.querySelectorAll(".order-section");

order_sections.forEach(order_section => {
    order_section.addEventListener("submit", (event) => {
        event.preventDefault();

        var customerName = order_section.querySelector(".customer-name").value;
        var customerAddress = order_section.querySelector(".customer-address").value;
        var customerNumber = order_section.querySelector(".customer-number").value.trim();
        var cakeType = order_section.querySelector(".customer-cake-type").value;
        var cakeQuantity = order_section.querySelector(".cake-quantity").value;

        var checkbox = order_section.querySelector(".checkbox");

        if(customerName == "" ||
            customerAddress == "" ||
            customerNumber == "" ||
            cakeType == "" ||
            cakeQuantity == "" ||
            checkbox.checked != true){

                if(customerName == ""){
                    nameErrors.forEach(nameError => {
                        nameError.style.display = "block";
                    });  
                }
                if(customerAddress == ""){
                    addressErrors.forEach(addressError => {
                        addressError.style.display = "block";
                    });
                }
                if(customerNumber == ""){
                    phn_noErrors.forEach(phn_noError => {
                        phn_noError.style.display = "block";
                    });
                }
                

                if(cakeType == ""){
                    cakeChoiceErrors.forEach(cakeChoiceError => {
                        cakeChoiceError.style.display = "block";
                    });                    
                }
                if(cakeQuantity == ""){
                    quantityErrors.forEach(quantityError => {
                        quantityError.style.display = "block";
                    });   
                }
            }
            else if(customerNumber.length != 10){
                phn_noErrors.forEach(phn_noError => {
                    phn_noError.innerText = "*Enter a valid phone number";
                    phn_noError.style.display = "block";
                });
            }else{
                
                const Whatsapp_number = 8777687037;

                var whatsappURL = "https://wa.me/"+Whatsapp_number+"?text="+"Name: "+customerName+"%0a"+"%0a"
                +"Address: "+customerAddress+"%0a"+"%0a"
                +"Phone No.: "+customerNumber+"%0a"+"%0a"
                +"Cake: "+cakeType+"%0a"+"%0a"
                +"Quantity: "+cakeQuantity+"%0a";

                window.open(whatsappURL,"_blank").focus();
            }
    });
});

