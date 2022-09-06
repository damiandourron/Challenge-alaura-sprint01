
const inputTexto = document.querySelector(".inputtext");

const mensaje =document.querySelector(".mensaje");

function btnEncriptar(){
    const TextoEncriptado = EncriptarTexto(inputTexto.value);
    mensaje.value = TextoEncriptado;
}

function btnDesencriptar(){
    const TextoDesencriptado = DesencriptarTexto(inputTexto.value);
    mensaje.value = TextoDesencriptado;
}

function EncriptarTexto(texto){
    let matrizcodigo =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++)
    {
        if(texto.includes(matrizcodigo[i][0])){
            texto = texto.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
        }
    }
    return texto;
}

function DesencriptarTexto(texto){
    let matrizcodigo =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++)
    {
        if(texto.includes(matrizcodigo[i][1])){
            texto = texto.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
        }
    }
    return texto;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
}