export const textoCapitalizado = (texto:string) => {
    return texto
    .toLowerCase()
    .replace(/\b\w/g, function(letra) {
        return letra.toUpperCase(); 
    });
}