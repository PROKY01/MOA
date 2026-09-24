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

//premenna proulozeni hodnoty citace
let counter = 0;
//konstanty pro minimum a maximum
const MAX_COUNSTER_VAL = 10;
const MIN_COUNSTER_VAL = -10;

function add() {
    if(counter < MAX_COUNSTER_VAL){
        //zvys counter
        counter++;
        //vypis aktualnihodnotu dospanu
        document.getElementById("counter_span").innerText = counter;
    }
}

function sub() {
    if(counter > MIN_COUNSTER_VAL){
        //sniz counter
        counter--;
        //vypis aktualnihodnotu dospanu
        document.getElementById("counter_span").innerText = counter;
    }
}

function reset() {
    
    //zvys counter
    counter = 0;
    //vypis aktualnihodnotu dospanu
    document.getElementById("counter_span").innerText = counter;
}