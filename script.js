let resultado  = document.getElementById("result");

// NUMEROS INGRESADOS 
const input=(num)=>{
    let number = resultado.value;
    resultado.value = number + num;
}

// BOTON CÁLCULO 
const calcula=()=>{
    if(resultado.value != ""){
        let result2  = resultado.value;
        resultado.value = eval(result2)
    } else{
        alert("Ingrese números válidos")
    }
}

// BOTON RESET
const reset=()=>{
    resultado.value = "";
}

// BOTON BORRAR
const del=()=>{
    let result2  = resultado.value;
    resultado.value = result2.substring(0, result2.length - 1);
}



// RECIBIMOS EL VALOR DEL INPUT RANGE 
const cambioTema= (tem) => {

    document.getElementById('btnTheme').value = tem; 

    // CAMBIO DE TEMA
    if(tem == 1){
        tema.defaul();
    } 
     
    else if(tem == 2){
        tema.light();
    }
    
    else{
        tema.dark();
    } 
  
}


// CAPTURAMOS LAS VARIABLES DE CSS
let root = document.querySelector(':root');


const temaOscuro  = window.matchMedia("(prefers-color-scheme: dark)");
const temaClaro = window.matchMedia("(prefers-color-scheme: light)");



// TEMAS
const tema = {
    defaul(){
        root.style.setProperty('--background'          , '#3a4764');
        root.style.setProperty('--background-dark'     , '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');
        
        root.style.setProperty('--key-color-top'       , '#ffffff');
        root.style.setProperty('--key-color-bottom'    , '#3a4764');
        root.style.setProperty('--key-background'      , '#eae3dc');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#637097');
        root.style.setProperty('--key-blue-shadow'     , '#404e72');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
        root.style.setProperty('--code-color'          , '#ffffff');
        root.style.setProperty('--firma-color'         , '#000000');
    },
    light(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
        root.style.setProperty('--code-color'          , '#030303');
        root.style.setProperty('--firma-color'         , '#ac1717');
    },
    dark(){
        root.style.setProperty('--background'          , '#17062a');
        root.style.setProperty('--background-dark'     , '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');
        
        root.style.setProperty('--key-color-top'       , '#f7de43');
        root.style.setProperty('--key-color-bottom'    , '#f7de43');
        root.style.setProperty('--key-background'      , '#331b4d');
        root.style.setProperty('--key-shadow'          , '#851c9c');

        root.style.setProperty('--key-blue-background' , '#56077c');
        root.style.setProperty('--key-blue-shadow'     , '#851c9c');

        root.style.setProperty('--key-red-background'  , '#00decf');
        root.style.setProperty('--key-red-shadow'      , '#00decf');
        root.style.setProperty('--code-color'          , '#ffffff');
        root.style.setProperty('--firma-color'         , '#24a80d');
    }
}

