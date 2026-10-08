if("serviceWorker" in navigator) {
    window.addEventListener("load", ()=> {
        navigator.serviceWorker.register("sw.js")
        .then(registration => {
            console.log("SW registerd");
        })
        .catch(error => {
            console.log("SW registration failed: ", error);
        })
    });
}

//ulozime si tagy do konstanty
//tohle je ten prepinac/checkbox
const vlogisekSwitch = document.getElementById("vlogisekSwitch");
//jeste se mi hodi obrazek
const vlogisekImg = document.getElementById("vlogisekImg");

//pridame posluchace udalosti
//pri zmene se spusti funkce zmenObrazek
vlogisekSwitch.addEventListener("change", zmenObrazek);

function zmenObrazek(event) {
    
}