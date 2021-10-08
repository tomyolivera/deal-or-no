export const searchInArray = (toSearch, arr) => {
    let i = 0, found = false;

    while(i < arr.length && !found){
        found = toSearch === arr[i]
        i++
    }

    return found;
}

export const getRandom = (max, min=0) => Math.floor(Math.random() * (max - min)) + min;

export const calcularOferta = (maletines, setOferta, toggle) => {
    let preciosDeMaletinesSinAbrir = [];

    maletines.forEach(({ precio, abierto }) => {
        if(!abierto)
            preciosDeMaletinesSinAbrir.push(precio)
    });

    let suma = 0;
    
    for (let i = 0; i < preciosDeMaletinesSinAbrir.length; i++)
        suma += preciosDeMaletinesSinAbrir[i];
    
    let promedio = suma / preciosDeMaletinesSinAbrir.length;
    let oferta = Math.round(promedio - promedio * 0.15);

    setOferta(oferta);
    toggle();
}