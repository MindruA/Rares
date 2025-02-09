window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const videoBack = document.getElementById("videoback");
    const html = document.documentElement;
    const body = document.body;
    const loadingPercentage = document.getElementById("loading-percentage");

    // Dezactivează scroll-ul cât timp coperta este vizibilă
    html.classList.add("no-scroll");
    body.classList.add("no-scroll");

    // Funcție pentru actualizarea procentului de încărcare
    const updateLoadingProgress = (progress) => {
        loadingPercentage.textContent = `${progress}%`;
    };

    // Simulează progresul încărcării paginii
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        updateLoadingProgress(progress);

        if (progress >= 100) {
            clearInterval(interval); // Oprește intervalul

            // Ascunde coperta cu tranziție
            preloader.classList.add("hidden");

            // După tranziție, elimină complet coperta
            preloader.addEventListener(
                "transitionend",
                () => {
                    preloader.style.display = "none";
                    videoBack.play(); // Pornește videoclipul principal
                    window.scrollTo(0, 0); // Resetează poziția scroll-ului
                    html.classList.remove("no-scroll"); // Reactivează scroll-ul
                    body.classList.remove("no-scroll");
                },
                { once: true } // Rulează o singură dată
            );
        }
    }, 35); // Interval pentru progresul procentual
});


function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuIcon = document.getElementById('menu-icon');
    const html = document.documentElement; // Selectăm elementul <html>

    if (sideMenu.classList.contains('open')) {
        // Închide meniul și reactivează scroll-ul
        sideMenu.classList.remove('open');
        menuIcon.classList.remove('open');
        html.style.overflow = ''; // Resetează overflow-ul
    } else {
        // Deschide meniul și dezactivează scroll-ul
        sideMenu.classList.add('open');
        menuIcon.classList.add('open');
        html.style.overflow = 'hidden'; // Dezactivează scroll-ul pe întreaga pagină
    }
}



gsap.registerPlugin(ScrollTrigger);






ScrollTrigger.defaults({

    fastScrollEnd: true, // Optimizează finalizarea scroll-ului pe mobil
    preventOverlaps: true // Previne suprapunerile animațiilor
});


gsap.to("#mini4pro", {
    y: "-10vh", // Urcă #mini4pro
    scrollTrigger: {
        trigger: ".descriere1", // Declanșează la scroll în descriere1
        start: "top center", // Începe când descriere1 ajunge în centrul viewport-ului
        end: "bottom center", // Termină la sfârșitul descriere1
        scrub: 2, // Sincronizare lină
      pin:true,
       markers:true,
    }
});















// Animație pentru descriere1 (iese în sus și se îngustează)(PERFECT)
gsap.to("#descriere1", {
    y: "-250%", // Se ridică textul
  x:"3%",
    transform: "perspective(2000px) rotateX(30deg)", // Aplică perspectiva
    transformOrigin: "center top", // Punctul de transformare este partea de sus
    ease: "power1.inOut", // Tranziție mai lină
    transformOrigin: "center top", // Punctul de transformare este partea de sus
    scrollTrigger: {
        trigger: "#titlu1", // Declanșat de descriere1
        start: "top center", // Începe când descriere1 ajunge în centrul viewport-ului
        end: "bottom -600", // Termină când descriere1 iese complet
        scrub: 1, // Sincronizare lină cu scroll-ul
      
    },
});

gsap.to("#descriere1", {
    opacity:0,
      
        ease: "power1.inOut", // Tranziție mai lină
        transformOrigin: "center top", // Punctul de transformare este partea de sus
        scrollTrigger: {
            trigger: ".camera1", // Declanșat de descriere1
            start: "top center", // Începe când descriere1 ajunge în centrul viewport-ului
            end: "250%", // Termină când descriere1 iese complet
            scrub: 1, // Sincronizare lină cu scroll-ul
         
        },
    });
    




// Animație pentru .hexagon (din partea stângă)
gsap.fromTo(
    ".hexagon",
    { x: "-100%", opacity: 0 }, // Începe din afara ecranului, partea stângă
    {
        x: "-27%", // Ajunge la poziția inițială
        opacity: 1, // Devine vizibil
        ease: "power2.out", // Tranziție lină
        scrollTrigger: {
            trigger: ".hexagon", // Declanșează animația când hexagonul intră în viewport
            start: "top 80%", // Începe când hexagonul e aproape de marginea de jos a ecranului
            end: "top 50%", // Termină când ajunge la mijlocul viewport-ului
            scrub: 2, // Sincronizare lină cu scroll-ul
        }
    }
);

// Animație pentru #RS4 img (din partea dreaptă)
gsap.fromTo(
    "#RS4 img",
    { x: "100%", opacity: 0 }, // Începe din afara ecranului, partea dreaptă
    {
        x: "0%", // Ajunge la poziția inițială
        opacity: 1, // Devine vizibil
        ease: "power2.out", // Tranziție lină
        scrollTrigger: {
            trigger: "#RS4", // Declanșează animația când #RS4 intră în viewport
            start: "center 70%", // Începe când secțiunea este aproape de marginea de jos a ecranului
            end: "top ", // Termină când ajunge la mijlocul viewport-ului
            scrub: 2, // Sincronizare lină cu scroll-ul
        }
    }
);

// Controlează redarea videoclipului în funcție de poziția în viewport
ScrollTrigger.create({
    trigger: "#stabvideo",
    start: "center top", // Începe când videoclipul este în centrul viewport-ului

    markers: false // Setează true pentru debug (pentru a vedea marcajele în browser)
});





// Selectează toate span-urile din #stabi
const words = document.querySelectorAll("#stabi span");

// Aplică animația pentru fiecare cuvânt, pe rând
words.forEach((word, index) => {
    gsap.fromTo(
        word,
        { color: "gray", opacity: 0.5 }, // Stare inițială
        {
            color: "#000000", // Culoarea finală
            opacity: 1, // Devine complet vizibil
            scrollTrigger: {
                trigger: "#stabi", // Declanșează animația pentru text
                start: `top+=${index * 4}% 85%`, // Intervale mai scurte
                end: `top+=${index * 2}% 75%`, // Termină mai repede
                scrub: 0.5, // Sincronizare mai rapidă
                markers: false, // Dezactivează markerii (pentru debug setează true)
            }
        }
    );
});

// Selectează toate span-urile din #vidvertical
const vidWords = document.querySelectorAll("#vidvertical span");

// Aplică animația pentru fiecare cuvânt, pe rând
vidWords.forEach((word, index) => {
    gsap.fromTo(
        word,
        { color: "gray", opacity: 0.5, scale: 0.8 }, // Stare inițială
        {
            color: "#ffffff", // Culoarea finală (poți modifica după preferințe)
            opacity: 1, // Devine complet vizibil
            scale: 1, // Revine la dimensiunea normală
            ease: "power2.out", // Tranziție mai lină
            scrollTrigger: {
                trigger: "#vidvertical", // Declanșează animația pentru text
                start: `top+=${index * 5}% 85%`, // Intervale mai rapide
                end: `top+=${index * 5}% 75%`, // Termină mai repede
                scrub: 0.5, // Sincronizare lină cu scroll-ul
                markers: false, // Dezactivează markerii (pentru debug setează true)
            }
        }
    );
});



gsap.registerPlugin(ScrollTrigger);

// Animație pentru "Perspectiva"
gsap.fromTo(
    "#scrisp2",
    { fontSize: "1rem", opacity: 0.5 }, // Stare inițială
    {
        fontSize: "1.5rem", // Stare finală
        opacity: 1, // Opacitate maximă
        scrollTrigger: {
            trigger: "#scrisp2",
            start: "center 75%", // Începe când textul intră aproape de centrul viewport-ului
            end: "center center", // Termină când textul ajunge în centru
            scrub: true, // Animație sincronizată cu scroll-ul
        },
    }
);

// Animație pentru "supremă"
gsap.fromTo(
    "#scrisp2B",
    { fontSize: "1rem", opacity: 0.5 },
    {
        fontSize: "3rem",
        opacity: 1,
        scrollTrigger: {
            trigger: "#scrisp2B",
            start: "center 90%",
            end: "center center",
            scrub: true,
        },
    }
);

// Animație pentru "din înaltul cerului"
gsap.fromTo(
    "#scrisp2P",
    { fontSize: "1rem", opacity: 0.5 },
    {
        fontSize: "1.5rem",
        opacity: 1,
        scrollTrigger: {
            trigger: "#scrisp2P",
            start: "center 90%",
            end: "center center",
            scrub: true,
        },
    }
);

// Selectează toate span-urile din #vidvertical
const vidWords2 = document.querySelectorAll("#info1 span");

// Aplică animația pentru fiecare cuvânt, pe rând
vidWords2.forEach((word, index) => {
    gsap.fromTo(
        word,
        { color: "gray", opacity: 0.5, scale: 0.8 }, // Stare inițială
        {
            color: "#ffffff", // Culoarea finală (poți modifica după preferințe)
            opacity: 1, // Devine complet vizibil
            scale: 1, // Revine la dimensiunea normală
            ease: "power2.out", // Tranziție mai lină
            scrollTrigger: {
                trigger: "#info1", // Declanșează animația pentru text
                start: `top+=${index * 7}% 85%`, // Intervale mai rapide
                end: `top+=${index * 5}% 75%`, // Termină mai repede
                scrub: 0.5, // Sincronizare lină cu scroll-ul
                markers: false, // Dezactivează markerii (pentru debug setează true)
            }
        }
    );
});

// Selectează toate span-urile din #vidvertical
const vidWords3 = document.querySelectorAll("#info2 span");

// Aplică animația pentru fiecare cuvânt, pe rând
vidWords3.forEach((word, index) => {
    gsap.fromTo(
        word,
        { color: "gray", opacity: 0.5, scale: 0.8 }, // Stare inițială
        {
            color: "#ffffff", // Culoarea finală (poți modifica după preferințe)
            opacity: 1, // Devine complet vizibil
            scale: 1, // Revine la dimensiunea normală
            ease: "power2.out", // Tranziție mai lină
            scrollTrigger: {
                trigger: "#info2", // Declanșează animația pentru text
                start: `top+=${index * 3}% 85%`, // Intervale mai rapide
                end: `top+=${index * 5}% 75%`, // Termină mai repede
                scrub: 0.5, // Sincronizare lină cu scroll-ul
                markers: false, // Dezactivează markerii (pentru debug setează true)
            }
        }
    );
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleInput = document.getElementById("toggle");
    const video = document.getElementById("pr1");

    toggleInput.addEventListener("change", function () {
        if (toggleInput.checked) {
            video.play();
        } else {
            video.pause();
        }
    });



     // Control pentru al doilea video (toggle 2)
     const toggleInput2 = document.getElementById("toggle2");
     const video2 = document.getElementById("pr2");
 
     toggleInput2.addEventListener("change", function () {
         if (toggleInput2.checked) {
             video2.play();
         } else {
             video2.pause();
         }
     });
 
     video2.addEventListener("play", function () {
         toggleInput2.checked = true;
     });
 
     video2.addEventListener("pause", function () {
         toggleInput2.checked = false;
     });


      // Control pentru al treilea video (toggle 3)
    const toggleInput3 = document.getElementById("toggle3");
    const video3 = document.getElementById("pr3");

    toggleInput3.addEventListener("change", function () {
        if (toggleInput3.checked) {
            video3.play();
        } else {
            video3.pause();
        }
    });

    video3.addEventListener("play", function () {
        toggleInput3.checked = true;
    });

    video3.addEventListener("pause", function () {
        toggleInput3.checked = false;
    });



    // Asigură că toggle-ul reflectă starea videoclipului
    video.addEventListener("play", function () {
        toggleInput.checked = true;
    });

    video.addEventListener("pause", function () {
        toggleInput.checked = false;
    });
    // Blochează intrarea în fullscreen automat
    video.addEventListener("fullscreenchange", function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    });

    // Previne ca video-ul să intre în fullscreen la play
    video.addEventListener("play", function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    });

    // Asigură că video-ul nu cere fullscreen la click
    video.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});



//redare de la 0
document.addEventListener("DOMContentLoaded", function () {
    const videos = [
        { video: document.getElementById("pr1"), toggle: document.getElementById("toggle") },
        { video: document.getElementById("pr2"), toggle: document.getElementById("toggle2") },
        { video: document.getElementById("pr3"), toggle: document.getElementById("toggle3") }
    ];

    videos.forEach(({ video, toggle }) => {
        toggle.addEventListener("change", function () {
            if (toggle.checked) {
                video.play();
            } else {
                video.pause();
               
            }
        });

        video.addEventListener("ended", function () {
            video.currentTime = 0; // Resetează timpul la început
            toggle.checked = false; // Debifează toggle-ul
        });

        video.addEventListener("play", function () {
            toggle.checked = true;
        });

        video.addEventListener("pause", function () {
            toggle.checked = false;
        });
    });
});


//link buton portofoliu
document.getElementById("portofoliubtn").addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=iCrV2C2KBhI"; // Link-ul către pagina dorită
});