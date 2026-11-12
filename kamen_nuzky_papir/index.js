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

function hra() {
    //hracova volba
    //nalezneme vybrany checkbox a stahneme z nej value
    const hrac = document.querySelector("input[name='hrac']:checked").value;
    //kontrolni vypis
    console.log("hrac zvolil" + hrac);
    //volba pocitace - nahodna
    const volby = ["Kamen", "Nuzky", "Papir"];
    //nahodny index
    const index = Math.floor(Math.random() *volby.length);
    //kontrolni vypis
    console.log("pocitac zvolil: " + volby[index]);
    //vypis volby pocitace
    document.getElementById("cpu_label").innerText = volby[index];
}