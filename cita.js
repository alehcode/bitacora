window.addEventListener("load", function(){ 
    var btnPublicar = document.getElementById("publica")
    var contenedor = document.getElementById("contenedor");

    btnPublicar.addEventListener("click", function(){
        var contenedorBotones = document.createElement("div");
        var btnTexto = document.createElement("button");
        var btnCita = document.createElement("button");
        var btnMeme = document.createElement("button");
        var btnPastillita = document.createElement("button");

        btnTexto.textContent="Texto";
        btnCita.textContent="Cita";
        btnMeme.textContent="Meme";
        btnPastillita.textContent="Pastillita";

        btnTexto.classList.add("botones");
        btnCita.classList.add("botones");
        btnMeme.classList.add("botones");
        btnPastillita.classList.add("botones");

        contenedorBotones.insertBefore(btnTexto,contenedorBotones.childNodes[0]);
        contenedorBotones.insertBefore(btnCita,contenedorBotones.childNodes[1]);
        contenedorBotones.insertBefore(btnMeme,contenedorBotones.childNodes[2]);
        contenedorBotones.insertBefore(btnPastillita,contenedorBotones.childNodes[3]);
        contenedor.appendChild(contenedorBotones);

        btnTexto.addEventListener("click", function(){
            cajaTexto();
        });

        function cajaTexto(){
            var contenedorTexto = document.createElement("div");            
            var titulo = document.createElement("input");
            var textarea = document.createElement("textarea");
            var btnMandar = document.createElement("button");
            var btnCerrar= document.createElement("button");
            
            btnMandar.textContent="Publicar";
            btnCerrar.textContent="Cerrar";
            
            textarea.classList.add("escribirTexto");
            titulo.classList.add("titulo");
            btnMandar.classList.add("botonesDos");
            btnCerrar.classList.add("botonesDos");
            contenedorTexto.classList.add("contenedorTexto");

            contenedorTexto.insertBefore(titulo,contenedorTexto.childNodes[0]);
            contenedorTexto.insertBefore(textarea,contenedorTexto.childNodes[1]);
            contenedorTexto.insertBefore(btnMandar,contenedorTexto.childNodes[2]);
            contenedorTexto.insertBefore(btnCerrar,contenedorTexto.childNodes[3]);
            contenedor.appendChild(contenedorTexto);

            btnMandar.addEventListener("click", publicacion);

            function publicacion(){
                var cajaPubli = document.createElement("div");
                var cajatitle = document.createElement("div");
                var imprimirTexto = document.getElementById("imprimirTexto");
                var impTitulo  = document.createElement("input");
                var impTexto = document.createElement("input");
                var conten = document.createElement("div");
                var imprimirHora = document.createElement("div");
                var tiempo= new Date();
                var hora =tiempo.getHours();
                var min=tiempo.getMinutes();

                

                if(min < 10){
                    min = "0" + min;
                }

                var tiempoImp= hora + ":" + min;
                imprimirHora.innerText = tiempoImp;


                cajaPubli.innerText=textarea.value;
                imprimirTexto.insertBefore(cajaPubli,imprimirTexto.childNodes[1]);

                cajatitle.innerText= titulo.value;
                imprimirTexto.insertBefore(cajatitle,imprimirTexto.childNodes[0]);
                
                imprimirTexto.insertBefore(imprimirHora,imprimirTexto.childNodes[2]);


            }

            
        }
    });
});