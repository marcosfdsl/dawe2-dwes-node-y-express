// Refresca la página al pulsar S O F O S
document.querySelector("#refrescar").addEventListener("click", () => window.location.reload());

// Dropdown oculto (menú para móvil)
const menu = document.querySelector("#menu");
const toggleMenu = (event) => {
    menu.classList.toggle("hidden");
    event.stopPropagation();
};
document.querySelector("#boton").addEventListener("click", toggleMenu);
document.addEventListener("click", () => menu.classList.add("hidden"));

// VISIBILIDAD FONDO2 SEGÚN ORIGEN Y DESTINO
const fondo1 = document.querySelector('.fondo2');
const fondo2 = document.querySelector('.fondo2');
const fondo3 = document.querySelector('.fondo3');
const contenedorfondos = document.querySelector('.contenedorfondos');

// A Home
document.getElementById('btnhome').addEventListener('click', function () {
    let scrollPosition = document.querySelector('.contenedorfondos').scrollTop;
    let scrollHeight = contenedorfondos.scrollHeight;
    // Cuando se quiere ir a fondo1 desde fondo2, si el scrollPosition es aprox un tercio del scrollHeight de contenedorfondos, fondo2 se hace visible
    if (scrollPosition >= scrollHeight / 3.5 && scrollPosition <= scrollHeight / 2.5) {
        fondo2.style.display = 'flex';
    }
    // En caso contrario fondo2 se hace invisible y vuelve a ser visible a los 500ms
    else {
        fondo2.style.display = 'none';
        setTimeout(function () {
            fondo2.style.display = 'flex';
        }, 500);
    }
});

// A About
document.getElementById('btnabout').addEventListener('click', function () {
    // fondo2 se hace visible
    fondo2.style.display = 'flex';
});

// A Help
document.getElementById('btnhelp').addEventListener('click', function () {
    let scrollPosition = document.querySelector('.contenedorfondos').scrollTop;
    let scrollHeight = contenedorfondos.scrollHeight;
    // Cuando se quiere ir a fondo3 desde fondo1 (scrollPosition 0), fondo2 se hace invisible y vuelve a ser visible a los 500ms
    if (scrollPosition == 0) {
        fondo2.style.display = 'none';
        setTimeout(function () {
            fondo2.style.display = 'flex';
        }, 500);
    }
    // En caso contrario fondo2 se hace visible
    else {
        fondo2.style.display = 'flex';
    }

});

// Botones de navegación entre fondos
const actions = {
    "#btnhome": document.querySelector('.fondo1').offsetTop,
    "#btnabout": document.querySelector('.fondo2').offsetTop,
    "#btnhelp": document.querySelector('.fondo3').offsetTop
};
for (let [btn, top] of Object.entries(actions)) {
    if (document.querySelector(btn)) {
        document.querySelector(btn).addEventListener("click", e => {
            e.preventDefault();
            contenedorfondos.scrollTo({
                top: top,
                behavior: "smooth"
            });
        });
    }
}

// Abrir info en fondo1 al pulsar "btnmusica", "btnhosteleria", "btngenealogia" o "btndesarrollo"
const mostrarinfo = (sectionId) => {
    let section = document.getElementById(sectionId);
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
};

const btnToSectionMapping = {
    "btnmusica": "infomusica",
    "btnhosteleria": "infohosteleria",
    "btngenealogia": "infogenealogia",
    "btndesarrollo": "infodesarrollo"
};

for (const [btnId, sectionId] of Object.entries(btnToSectionMapping)) {
    document.getElementById(btnId).addEventListener("click", () => mostrarinfo(sectionId));
}


// Cerrar info fondo1 y pausar id="video" de "infomusica" al salir
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video');
}
const esconderinfo = (sectionId) => {
    let section = document.getElementById(sectionId);
    section.style.opacity = "0";
    section.style.transform = "translateY(100%)";
    if (player && player.pauseVideo) {
        player.pauseVideo();
    }
};
["infomusica", "infohosteleria", "infogenealogia", "infodesarrollo", "boton", "btnhome", "btnabout", "btnhelp"].forEach(btnId => {
    document.getElementById(btnId).addEventListener("click", () => {
        esconderinfo('infomusica');
        esconderinfo('infohosteleria');
        esconderinfo('infogenealogia');
        esconderinfo('infodesarrollo');

        // Reinicia scroll info
        setTimeout(() => {
            scrollmusica.scrollTo(0, 0);
            scrollhosteleria.scrollTo(0, 0);
            scrollgenealogia.scrollTo(0, 0);
            scrolldesarrollo.scrollTo(0, 0);
        }, 200);
    });
});

// Hover azul rombos fondo1
var elementos = document.querySelectorAll('.hoverazul');
elementos.forEach(function (elemento) {
    elemento.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#001a29';
    });
    elemento.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '';
    });
});

// Mientras se hace scroll
contenedorfondos.addEventListener('scroll', function () {
    let scrollTimeout;
    clearTimeout(scrollTimeout);
    const buttonIDs = ['btnhome', 'btnabout', 'btnhelp', 'btnmusica', 'btnhosteleria', 'btngenealogia', 'btndesarrollo'];
    buttonIDs.forEach(id => {
        const button = document.getElementById(id);
        if (button) button.setAttribute('disabled', 'disabled');
    });
    // Al acabar scroll
    scrollTimeout = setTimeout(function () {
        const margen = 50;
        const scrollPosition = contenedorfondos.scrollTop;
        const estaCerca = (fondo) => {
            const fondoPosition = fondo.offsetTop;
            return scrollPosition >= fondoPosition - margen && scrollPosition <= fondoPosition + margen;
        };
        // Si se está en fondo1
        if (estaCerca(document.querySelector('.fondo1'))) {
            // Flecha no girada
            document.getElementById("flecha").classList.remove("girarflecha");
            // Deshabilita botones hasta completar scroll
            buttonIDs.forEach(id => {
                const button = document.getElementById(id);
                if (button) button.removeAttribute('disabled');
            });
            // Subraya Home
            document.getElementById("btnhome").classList.add("subrayado");
            document.getElementById("btnabout").classList.remove("subrayado");
            document.getElementById("btnhelp").classList.remove("subrayado");
            // Reinicia scrolls
            infocv.scrollTo(0, 0);
            scrollmusica.scrollTo(0, 0);
            scrollhosteleria.scrollTo(0, 0);
            scrollgenealogia.scrollTo(0, 0);
            scrolldesarrollo.scrollTo(0, 0);
        }
        // Si se está en fondo2
        else if (estaCerca(document.querySelector('.fondo2'))) {
            // Flecha no girada
            document.getElementById("flecha").classList.remove("girarflecha");
            // Deshabilita botones hasta completar scroll
            buttonIDs.forEach(id => {
                const button = document.getElementById(id);
                if (button) button.removeAttribute('disabled');
            });
            // Subraya About
            document.getElementById("btnhome").classList.remove("subrayado");
            document.getElementById("btnabout").classList.add("subrayado");
            document.getElementById("btnhelp").classList.remove("subrayado");
        }
        // Si se está en fondo3
        else if (estaCerca(document.querySelector('.fondo3'))) {
            // Flecha girada
            document.getElementById("flecha").classList.add("girarflecha");
            // Deshabilita botones hasta completar scroll
            buttonIDs.forEach(id => {
                const button = document.getElementById(id);
                if (button) button.removeAttribute('disabled');
            });
            // Subraya Help
            document.getElementById("btnhome").classList.remove("subrayado");
            document.getElementById("btnabout").classList.remove("subrayado");
            document.getElementById("btnhelp").classList.add("subrayado");
            // Reinicia scrolls
            infocv.scrollTo(0, 0);
            scrollmusica.scrollTo(0, 0);
            scrollhosteleria.scrollTo(0, 0);
            scrollgenealogia.scrollTo(0, 0);
            scrolldesarrollo.scrollTo(0, 0);
        }
    }, 10);
});