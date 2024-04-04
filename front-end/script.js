let quantCarts = 0

function favorite(id){
    const icon = document.getElementById(id)
    const cart = document.getElementById("quant-cart")
    if(icon){
        if(icon.classList.contains("fa-regular")){
            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")
            quantCarts++;
            cart.textContent = quantCarts

        }else{
            icon.classList.remove("fa-solid")
            quantCarts--;
            cart.textContent = quantCarts































































































            
            icon.classList.add("fa-regular")

        }
    }else{
        console.log("Elemento não encontrado");
    }
}