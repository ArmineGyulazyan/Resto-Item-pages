document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".checked-ingredients")

    if(container){

        const labels = container.querySelectorAll("label")
        const ingredients = Array.from(labels).map(label => label.innerHTML.trim())
        console.log(ingredients)
    }
})


function extraxt_num_part(num) {
    return parseInt(num.replace(/AMD$/, ""), 10)
}

function addition(){

    let num_to_add = document.getElementById("quantity").innerHTML
    let changed = parseInt(num_to_add, 10)+1
    document.getElementById("quantity").innerHTML = changed
    
    price = extraxt_num_part(document.getElementById("price").getAttribute("data-initial-price"))
    price *= changed
    document.getElementById("price").innerHTML = price.toString() + "AMD"
}

function subtraction(){
    
    let num_to_sub = document.getElementById('quantity').innerHTML
    let int_num = parseInt(num_to_sub, 10)
    if (int_num == 1 || int_num == 0){
        document.getElementById("quantity").innerHTML = 0
        return
    }
    
    int_num -= 1
    document.getElementById("quantity").innerHTML = int_num
    
    price = extraxt_num_part(document.getElementById("price").getAttribute("data-initial-price"))
    price *= int_num
    document.getElementById("price").innerHTML = price.toString() + "AMD"
}



