// Data una lista della spesa, stampare in console gli elementi della lista con ciclo for e while.
let listaDellaSpesa = ["uova", "zucchero", "pane", "acqua", "pasta"];

// Ciclo for
for(let i=0; i<listaDellaSpesa.length; i++){
    console.log(listaDellaSpesa[i]);
}

// Ciclo while
let i = 0
while(i < listaDellaSpesa.length){
    console.log((i+1) + " - " + listaDellaSpesa[i]);
    i++;
}