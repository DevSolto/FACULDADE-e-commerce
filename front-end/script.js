let quantCarts = 0

function favorite(id){
    const icon = document.getElementById(id)
    const cart = document.getElementById("quant-cart")
    if(icon){
        if(icon.classList.contains("desativado")){
            icon.classList.remove("desativado")
            icon.classList.add("ativado")
            quantCarts++;
            cart.textContent = quantCarts

        }else{
            icon.classList.remove("ativado")
            icon.classList.add("desativado")
            quantCarts--;
            cart.textContent = quantCarts































































































            
            icon.classList.add("fa-regular")

        }
    }else{
        console.log("Elemento não encontrado");
    }
}