// --- FLECHA HACIA ARRIBA ---
$(document).ready(function(){
    //mostrar el botón cuando se haga scroll hacia abajo
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.ir-arriba').fadeIn(600); //mostrar el botón
        } else {
            $('.ir-arriba').fadeOut(600); //ocultar el botón
        }
    });
    //función para hacer scroll hacia arriba
    $('.ir-arriba').click(function(){
        $('body, html').animate({ scrollTop: 0 }, 1000); //animación hacia arriba
    });
});

// --- BORRAR FORMULARIO DESPUES DE ENVIAR ---
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

// --- CALCULADORA PRECIO POR CONSTRUIR ---
function calcularCosto() {
    let metros = document.getElementById("metros").value;
    let tipo = document.getElementById("tipo").value.split("-");
    
    if (metros <= 0 || isNaN(metros)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido de metros cuadrados.";
        return;
    }
    
    let costoMin = metros * parseInt(tipo[0]);
    let costoMax = metros * parseInt(tipo[1]);
    
    document.getElementById("resultado").innerText = `Costo estimado: $${costoMin.toLocaleString()} - $${costoMax.toLocaleString()} MXN`;
}

// --- GALERIA DE PROYECTOS ---
document.addEventListener("DOMContentLoaded", function () {
    //galerías de imágenes por proyecto
    const projectImages = {
        "dublin": [
            "https://riansoluciones.com/wp-content/uploads/2023/01/277351973_4787545931294760_1426472643302541383_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/277296696_4787546261294727_3618947276708008971_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/277432336_4787546231294730_1611900661679638335_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/277435567_4787729604609726_6010239974559439522_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/277424319_4787546044628082_7747596790330427815_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/277371908_4787546167961403_1736919056800315573_n.jpg"
        ],
        "toscana": [
            "https://riansoluciones.com/wp-content/uploads/2023/01/275045223_4722802047769149_4176416276120574790_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/275054976_4722802271102460_4072083559876249760_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/275074836_4722775031105184_3036178041107178993_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/275069889_4722792917770062_5239354043802188833_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/275053173_4722792951103392_2296616023335169377_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/275043036_4722760861106601_9192575517462527180_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/275008951_4722793024436718_3165646471418329034_n.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/275004588_4722760991106588_2919097414361068258_n.jpg"
        ],
        "fratelli": [
            "https://riansoluciones.com/wp-content/uploads/2023/01/cuetaraaa-scaled.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/cuetaraa-scaled.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/IMG_0195-scaled.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/IMG_7344-scaled.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/Cuetara-2-scaled.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/IMG_0091-1-scaled.jpg",
            "https://riansoluciones.com/wp-content/uploads/2023/01/cuetaracocina-scaled.jpg"
        ]
    };

    //detecta clics en las cards
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", function () {
            let project = this.getAttribute("data-project");
            let images = projectImages[project];

            if (images) {
                let carouselInner = document.getElementById("carousel-images");
                carouselInner.innerHTML = images.map((img, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${img}" class="d-block w-100" alt="Imagen del proyecto">
                    </div>
                `).join("");

                //mostrar el modal
                let modal = new bootstrap.Modal(document.getElementById('imageCarouselModal'));
                modal.show();
            }
        });
    });
});
