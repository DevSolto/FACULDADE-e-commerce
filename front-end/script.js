function favorite(id){
    const icon = document.getElementById(id)
    if(icon){
        if(icon.classList.contains("fa-regular")){
            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")
        }else{
            icon.classList.remove("fa-solid")
            icon.classList.add("fa-regular")
        }
    }else{
        console.log("Elemento não encontrado");
    }
}