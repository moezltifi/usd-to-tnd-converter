let dollar = document.getElementById("dollar");
let dinar = document.getElementById("dinar");

dollar.addEventListener("keyup", function(){
    dinar.value = dollar.value * 3.46
});
dollar.addEventListener("mouseup", function(){
    dinar.value = dollar.value * 3.46
});

dinar.addEventListener("keyup", function(){
    dollar.value = dinar.value / 3.46
})
dinar.addEventListener("mouseup", function(){
    dollar.value = dinar.value / 3.46 
})
