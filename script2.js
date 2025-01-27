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


gsap.registerPlugin(ScrollTrigger);


// Zoom și pierderea opacității videoclipului
gsap.to("#videoback", {
    scale: 2, // Zoom de 2x
    opacity: 0, // Devine complet transparent
    scrollTrigger: {
        trigger: ".videopricipal", // Elementul care declanșează animația
        start: "top top",          // Începe când secțiunea ajunge în partea de sus
        end: "bottom top",         // Termină când secțiunea iese complet din ecran
        scrub: 1,                  // Sincronizează efectul cu scroll-ul
        pin: true,                 // Fixează videoclipul pe loc în timpul scroll-ului
        onLeave: () => {           // Când animația se termină
            const bgDiv = document.getElementById("background-div");
            bgDiv.style.display = "block"; // Afișează div-ul
            gsap.fromTo(bgDiv, { opacity: 0 }, { opacity: 1, duration: 1 }); // Tranziție la afișare
        
            // Activează struct-container
            document.querySelector(".struct-container").style.display = "flex";
                   // Oprește animația și resetează proprietățile
                   gsap.set("#videoback", { scale: 2.5, opacity: 0 });
                   console.log("Animația de zoom s-a oprit. video");
        },
       
        
    }
});

// Animație pentru text
gsap.to("#dynamic-text", {
    scale: 5, // Mărește textul de 5x
    opacity: 0, // Devine complet transparent
    scrollTrigger: {
        trigger: ".videopricipal", // Sincronizare cu aceeași secțiune
        start: "top top",          // Începe când secțiunea ajunge în partea de sus
        end: "bottom top",         // Termină când secțiunea iese complet din ecran
        scrub: 1,                  // Sincronizare cu scroll-ul
    },
    onComplete: () => {
        console.log("Animația de zoom s-a oprit. cu text");
        // Execută aici acțiunile dorite
    }
});



ScrollTrigger.defaults({

    fastScrollEnd: true, // Optimizează finalizarea scroll-ului pe mobil
    preventOverlaps: true // Previne suprapunerile animațiilor
});


gsap.to("#mini4pro", {
    y: "-30vh", // Urcă #mini4pro
    scrollTrigger: {
        trigger: ".descriere1", // Declanșează la scroll în descriere1
        start: "top center", // Începe când descriere1 ajunge în centrul viewport-ului
        end: "bottom -=500", // Termină la sfârșitul descriere1
        scrub: 2, // Sincronizare lină
      
       
    }
});




gsap.to("#sony7", {
    y:"-110vh",
    scrollTrigger: {
        trigger: ".descriere1",
        start: "top center", // Începe când descriere1 este la jumătatea viewport-ului
        end: "bottom center", // Termină la sfârșitul descriere1
        scrub: 3,
        
    }
});


gsap.to("#titlu2", {
    y:"-110vh",
    
    scrollTrigger: {
        trigger: ".descriere1",
        start: "top center", // Începe când descriere1 este la jumătatea viewport-ului
        end: "bottom center", // Termină la sfârșitul descriere1
        scrub: 2,
       
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
    

// Animație pentru descriere1 (iese în sus și se îngustează)(PERFECT)
gsap.to(".descriere2", {
    y: "-200%", // Se ridică textul
    ease: "power1.inOut", // Tranziție mai lină
    scrollTrigger: {
        trigger: ".descriere1", // Declanșat de descriere1
        start: "top center", // Începe când descriere1 ajunge în centrul viewport-ului
        end: "bottom top", // Termină când descriere1 iese complet
        scrub: 1, // Sincronizare lină cu scroll-ul
       
    },
});

gsap.to("#descriere2", {
    y: "-70%", // Se ridică textul
    x: "3%",
    duration: 6,
    opacity:1,
    transform: "perspective(800px) rotateX(30deg)", // Aplică perspectiva
    transformOrigin: "center top", // Punctul de transformare este partea de sus
    ease: "power1.inOut", // Tranziție mai lină
    scrollTrigger: {
        trigger: ".descriere1", // Declanșat de descriere1
        start: "top center", // Începe când descriere1 ajunge în centrul viewport-ului
        end: "center", // Termină când descriere1 iese complet
        scrub: 2, // Sincronizare lină cu scroll-ul
        pin: true,
       
    }
});

gsap.to("#descriere2", {
    opacity:0,
    scrollTrigger: {
        trigger: "#titlu2", // Declanșat de descriere1
        start: "top bottom", // Începe când descriere1 ajunge în centrul viewport-ului
        end: "-=500", // Termină când descriere1 iese complet
        scrub: 2, // Sincronizare lină cu scroll-ul
        
        markers:true,
    }
   
});
gsap.to("#sony7", {
    filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))", // Elimină complet umbra
    scrollTrigger: {
        trigger: "#sony7", // Elementul care declanșează animația
        end: "-=1000", // Termină la o distanță de 1000px față de poziția inițială
        scrub: 2, // Sincronizare lină cu scroll-ul
        
    }
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
            start: "center 75%",
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
            start: "center 75%",
            end: "center center",
            scrub: true,
        },
    }
);

