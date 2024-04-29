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


function addition(quantity_id, price_id){

    let num_to_add = document.getElementById(quantity_id).innerHTML
    let changed = parseInt(num_to_add, 10)+1
    document.getElementById(quantity_id).innerHTML = changed
    
    price = extraxt_num_part(document.getElementById(price_id).getAttribute("data-initial-price"))
    price *= changed
    document.getElementById(price_id).innerHTML = price.toString() + "AMD"
}


function subtraction(quantity_id, price_id){
    
    let num_to_sub = document.getElementById(quantity_id).innerHTML
    let int_num = parseInt(num_to_sub, 10)
    if (int_num == 1 || int_num == 0){
        document.getElementById(quantity_id).innerHTML = 0
        return
    }
    
    int_num -= 1
    document.getElementById(quantity_id).innerHTML = int_num
    
    price = extraxt_num_part(document.getElementById(price_id).getAttribute("data-initial-price"))
    price *= int_num
    document.getElementById(price_id).innerHTML = price.toString() + "AMD"
}

function cart_number_change(cart_num_id, quantity_id){

    let cart_number = parseInt(document.getElementById(cart_num_id).innerHTML)
    let order_quantity = parseInt(document.getElementById(quantity_id).innerHTML)
    document.getElementById(cart_num_id).innerHTML = cart_number + order_quantity

}

function delete_item(item_id) {
    elements = document.getElementById(item_id).innerHTML
    elements = ''
    document.getElementById(item_id).innerHTML = elements
}

function empty_list(list) {
    elements = document.getElementById(list).innerHTML
    elements = ''
    document.getElementById(list).innerHTML = elements
}





