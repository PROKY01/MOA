if("serviceWorker" in navigator) {
    window.addEventListener("load", ()=> {
        navigator.serviceWorker.register("sw.js")
        .then(registration => {
            console.log("SW registerd");
        })
        .catch(error => {
            console.log("SW registration failed: ", error);
        });
    });
}
//ulozime si tagy do konstanty
//tohle je ten prepinac/checkbox
const scopeSwitch = document.getElementById("scopeSwitch");
const magazineSwitch = document.getElementById("magazineSwitch");
//jeste se mi hodi obrazek
const ring_img = document.getElementById("strykeImg");

//pridame posluchace udalosti
//pri zmene se spusti funkce zmenObrazek
scopeSwitch.addEventListener("change", zmenScope);
magazineSwitch.addEventListener("change", zmenMagazine);

function zmenScope(event) {
    if(magazineSwitch.checked && scopeSwitch.checked){
        strykeImg.src = "./MotoStrykeWithScopeAndMagazine.png"
    }
    else{
        if(scopeSwitch.checked) {
                //kdyz to spadne sem, muselo to byt z off->on
                strykeImg.src = "./MotoStrykeWithScope.png"
            }
            else if(magazineSwitch.checked) {
                strykeImg.src = "./MotoStrykeWithMagazine.png";
            }
            else {
                //kdyz to spadne sem, muselo to byt z on->off
                strykeImg.src = "./MotoStryke.png"
            }
    }
}

function zmenMagazine(event) {
    if(magazineSwitch.checked && scopeSwitch.checked){
        strykeImg.src = "./MotoStrykeWithScopeAndMagazine.png"
    }
    else{
        if(magazineSwitch.checked) {
            //kdyz to spadne sem, muselo to byt z off->on
            strykeImg.src = "./MotoStrykeWithMagazine.png";
        }
        else if(scopeSwitch.checked) {
            strykeImg.src = "./MotoStrykeWithScope.png";
        }
        else {
            //kdyz to spadne sem, muselo to byt z on->off
            strykeImg.src = "./MotoStryke.png";
        }
    }   
}