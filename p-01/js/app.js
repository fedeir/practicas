window.onload = () => {
    const toggleSwitch = document.getElementById("switch");
    const toggleSwitchText =toggleSwitch.querySelector("p");
    const body = document.body;
    const titulo = document.querySelector("#h1"); 

    toggleSwitch.onclick = () => {

        if (body.style.backgroundColor == ""){
            body.style.backgroundColor = "black"; /*Cambia el fondo a negro */
            toggleSwitch.style.backgroundColor = "white";/*Cambia el fondo del switch a blanco */
            toggleSwitchText.innerHTML = "Encender";
            toggleSwitchText.style.color = "black";
            titulo.style.color = "White";
        }
        else if(body.style.backgroundColor == "white"){
            body.style.backgroundColor = "black"; /*Cambia el fondo a negro */
            toggleSwitch.style.backgroundColor = "white";/*Cambia el fondo del switch a blanco */
            toggleSwitchText.innerHTML = "Encender";
            toggleSwitchText.style.color = "black";
            titulo.style.color = "White";
        }
        else{
            body.style.backgroundColor = "white"; 
            toggleSwitch.style.backgroundColor = "black";
            toggleSwitchText.innerHTML = "Apagar";
            toggleSwitchText.style.color = "white";
            titulo.style.color = "black";
        }
    }

}