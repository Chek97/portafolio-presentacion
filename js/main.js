console.log("Iniciando");

function generateText() {
    const text = document.getElementById("about-text");
    const buttonShow = document.getElementById("show");

    if(buttonShow.innerHTML === "Ver Mas"){
        text.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit labore totam nesciunt, ipsa nemo nam fugiat dignissimos amet itaque perferendis, quibusdam nostrum, culpa cupiditate eius quas commodi harum voluptatibus.";
        buttonShow.innerHTML = "Ver Menos";
    }else{
        text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit labore totam nesciunt, ipsa nemo nam fugiat dignissimos amet itaque perferendis, quibusdam nostrum, culpa cupiditate eius quas commodi harum voluptatibus.";
        buttonShow.innerHTML = "Ver Mas";
    }
    //todo: cuando el boton se de en ver mas bajar con un pequeño delay para animacion, cuando este activado si se le da otra vez lo reduzca
}
