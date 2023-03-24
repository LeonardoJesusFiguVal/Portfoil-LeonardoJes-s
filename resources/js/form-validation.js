//Seleccionamos las variables
const formulario= document.querySelector(".formularie");
const mesage= document.querySelector("#message");

//Evento de validacion de formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const email= document.querySelector("#email").value.trim();
    const name= document.querySelector("#name").value.trim();
    const phone= document.querySelector("#phone").value.trim();

    //Comprobamos que el formulario esta vacio
    

    console.log(name);
    console.log(email);
    if (email === "" || name === "" || phone === ""){
        if (email === ""){
            mesage.textContent= "The field email can't bee empty";
        }
        if (phone === ""){
            mesage.textContent= "The field phone can't bee empty";
        }
        if (name === ""){
            mesage.textContent= "The field name can't bee empty";
        }
        mesage.classList.add("error");
    }
    else if (!/^\S+@\S+\.\S+$/.test(email)){
        mesage.textContent= "The email has not a valid format";
        mesage.classList.add("error");
    }
    else{
        mesage.textContent= "";
        mesage.classList.remove("error");
        formulario.submit();
    }
});