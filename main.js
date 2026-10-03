const INVISIBLE_CHARS = {
    0  : "឴", // U+17B4 KHMER VOWEL INHERENT AQ
    1  : "឵", // U+17B5 KHMER VOWEL INHERENT AA
    2  : "᠋", // U+180B MONGOLIAN FREE VARIATION SELECTOR ONE
    3  : "᠌", // U+180C MONGOLIAN FREE VARIATION SELECTOR TWO
    4  : "᠍", // U+180D MONGOLIAN FREE VARIATION SELECTOR THREE
    5  : "᠎", // U+180E MONGOLIAN VOWEL SEPARATOR
    6  : "‌", // U+200C ZERO WIDTH NON-JOINER
    7  : "‍", // U+200D ZERO WIDTH JOINER
    8  : "⁠", // U+2060 WORD JOINER
    9  : "⁡", // U+2061 FUNCTION APPLICATION
    10  : "⁢", // U+2062 INVISIBLE TIMES
    11  : "⁣", // U+2063 INVISIBLE SEPARATOR
    12  : "⁤", // U+2064 INVISIBLE PLUS
    13  : "⁥", // U+2065 Invisible operators - undefined
    14  : "⁪", // U+206A INHIBIT SYMMETRIC SWAPPING
    15  : "⁫", // U+206B ACTIVATE SYMMETRIC SWAPPING
}
const REVERSE_INVISIBLE_CHAR = {}
for (let key in INVISIBLE_CHARS){
    REVERSE_INVISIBLE_CHAR[INVISIBLE_CHARS[key]] = key
}

const HEADER = {
    START : ".",
    END : "."
}

// De carácter a su código numérico
const caracterACodigo = (char) => Number(char.charCodeAt(0));
// De código numérico a carácter
const codigoACaracter = (num) => String.fromCharCode(num);

function setByteBool(bool, pos){
    if (bool){
        return 1 << pos
    }
    return 0
}

function getByteBool(byte, pos){
    return (byte >> pos) & 1
}


function convert_string(text, adicional=""){
    let output = ""
    
    let header_text = "" // EL HEADER DEBE SER DE 8 BYTES SOLAMENTE


    const header = {
        "version" : 0,
        "modo" : 0,
        "bools" : {
            "cifrado" : false,
            "comprimido" : false,
            "2" : false,
            "3" : false,
            "4" : false,
            "5" : false,
            "6" : false,
            "7" : false,
        },
        "integrity" : [0, 0, 0]
    }

    const BOOLS = 
        setByteBool(header["bools"]["cifrado"], 0)    |
        setByteBool(header["bools"]["comprimido"], 1) |
        setByteBool(header["bools"]["2"], 2) |
        setByteBool(header["bools"]["3"], 3) |
        setByteBool(header["bools"]["4"], 4) |
        setByteBool(header["bools"]["5"], 5) |
        setByteBool(header["bools"]["6"], 6) |
        setByteBool(header["bools"]["7"], 7) 

    header_text += codigoACaracter(27) // CARACTER DE INICIO DEL HEADER
    header_text += codigoACaracter(header["version"] & 0b00001111) // VERSION
    header_text += codigoACaracter((header["version"] & 0b11110000 ) >> 4) // VERSION
    header_text += codigoACaracter(header["modo"]) // MODO
    header_text += codigoACaracter(BOOLS) // BOOLS [ CIFRADO ] [ COMPRIMIDO ] [] [] [] [] [] []
    header_text += codigoACaracter(header["integrity"][0]) // VERIFICACION DE INTEGRIDAD
    header_text += codigoACaracter(header["integrity"][1]) // VERIFICACION DE INTEGRIDAD
    header_text += codigoACaracter(header["integrity"][2]) // VERIFICACION DE INTEGRIDAD

    text = header_text + text;

    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);

    for (let i=0; i<bytes.length; i++){
        // const char = text[i];
        // const byte = caracterACodigo(char);
        const byte = bytes[i]
        const part1 = byte & 0b00001111;
        const part2 = (byte & 0b11110000 ) >> 4;
        const invisible1 = INVISIBLE_CHARS[part1];
        const invisible2 = INVISIBLE_CHARS[part2];

        output += invisible1 + invisible2
    }

    return HEADER["START"]+adicional+INVISIBLE_CHARS[15]+output+HEADER["END"];
}

function deconvert_extract_header(header_hide){
    if (typeof header_hide != "string") throw "El parametro #1 debe ser un string";
    if (header_hide.length != 16) throw "El header es incorrecto (Tamaño invalido)";
    const header = {
        "version" : 0,
        "modo" : 0,
        "bools" : {
            "cifrado" : false,
            "comprimido" : false,
            "2" : false,
            "3" : false,
            "4" : false,
            "5" : false,
            "6" : false,
            "7" : false,
        },
        "integrity" : []
    }
    let header_text = ""
    for (let i=0; i<header_hide.length; i+=2){
        const char1 = header_hide[i];
        const char2 = header_hide[i+1];
        const byte1 = REVERSE_INVISIBLE_CHAR[char1];
        const byte2 = REVERSE_INVISIBLE_CHAR[char2];
        const byte8 = byte1 | (byte2 << 4);
        const char = codigoACaracter(byte8);
        if (Math.round(i/2) == 0) console.log(byte8); //TODO: SE DEBERA VERIFICAR QUE EL HEADER ESTA CORRECTO
        if (Math.round(i/2) == 1) header["version"] = byte8;
        if (Math.round(i/2) == 2) header["version"] |= byte8 << 4
        if (Math.round(i/2) == 3) header["modo"] = byte8;
        if (Math.round(i/2) == 4) {
            header["bools"]["cifrado"] = getByteBool(byte8, 0);
            header["bools"]["comprimido"] = getByteBool(byte8, 1);
            header["bools"]["2"] = getByteBool(byte8, 2);
            header["bools"]["3"] = getByteBool(byte8, 3);
            header["bools"]["4"] = getByteBool(byte8, 4);
            header["bools"]["5"] = getByteBool(byte8, 5);
            header["bools"]["6"] = getByteBool(byte8, 6);
            header["bools"]["7"] = getByteBool(byte8, 7);
        };
        if (Math.round(i/2) == 5) header["integrity"].push(byte8);
        if (Math.round(i/2) == 6) header["integrity"].push(byte8);
        if (Math.round(i/2) == 7) header["integrity"].push(byte8);

        header_text += char;
    }
    return header
}

function deconvert_string(text_hide){
    // let output = ""
    if (typeof text_hide != "string") throw "convert_string > El parametro #1 no es un texto";
    if (!text_hide.startsWith(HEADER["START"]) || !text_hide.endsWith(HEADER["END"])) throw "El texto es incorrecto";
    text_hide = text_hide.substring(HEADER["START"].length, text_hide.length-HEADER["END"].length)
    let ok = false;
    for (let i=0; i<text_hide.length-1; i++){
        if (text_hide[i] == INVISIBLE_CHARS[15]){
            text_hide = text_hide.substring(i+1)
            ok = true;
            break;
        }
    }
    if (!ok) throw "El texto es incorrecto";

    const header_hide = text_hide.substring(0, 16);
    text_hide = text_hide.substring(16)

    const header = deconvert_extract_header(header_hide)
    
    //TODO: HACER QUE SE PUEDA ANALIZAR EL HEADER PARA SABER COMO DECIFRAR EL TEXTO CORRECTAMENTE
    const bytes = []
    for (let i=0; i<text_hide.length; i+=2){
        const char1 = text_hide[i];
        const char2 = text_hide[i+1];
        const byte1 = REVERSE_INVISIBLE_CHAR[char1];
        const byte2 = REVERSE_INVISIBLE_CHAR[char2];
        const byte8 = byte1 | (byte2 << 4);
        bytes.push(byte8)
        // const char = codigoACaracter(byte8);
        // output += char;
    }

    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array(bytes));
    // return output
}

function main(){
    // const texto = "Black clover, el besto shonen.";
    // console.log("texto a tratar: \""+texto+"\"  l: ",texto.length)
    // const h = convert_string(texto, "[HIDDEN MESSAGE]")
    // console.log("out: ",h ,"l:" ,h.length)
    // const d = deconvert_string(h)
    // console.log("in: ",d)
}

function btn_encapsular_mensaje(){
    const secret = document.getElementById('secretInput').value.trim();
    const cover = document.getElementById('coverInput').value.trim() || "[Mensaje oculto]";
    const display = document.getElementById('encodedOutputDisplay');
    const copyBtn = document.getElementById('copyBtn');

    if (!secret) {
        showToast("Ingresa un mensaje secreto para ocultar", "fa-triangle-exclamation", "text-amber-400");
        return;
    }

    currentEncodedMessage = convert_string(secret, cover)
    // currentEncodedMessage = hideText(cover, secret);

    display.innerText = currentEncodedMessage;
    display.classList.remove('italic', 'text-slate-400', 'dark:text-slate-500');
    display.classList.add('text-brand-600', 'dark:text-indigo-400', 'font-semibold');

    // Enable copy button
    copyBtn.disabled = false;
    copyBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    showToast("¡Mensaje ocultado con éxito!");
}

function btn_revelar_mensaje(){
    const encodedInput = document.getElementById('revealInput').value;
    const outputText = document.getElementById('decodedOutputText');
    const toggleBtn = document.getElementById('toggleVisibleBtn');

    if (!encodedInput) {
        showToast("Pega un texto para analizar", "fa-triangle-exclamation", "text-amber-400");
        return;
    }

    const revealed = deconvert_string(encodedInput);

    if (revealed) {
        currentDecodedSecret = revealed;
        isSecretVisible = true;
        updateDecodedView();
        toggleBtn.classList.remove('hidden');
        showToast("¡Mensaje secreto encontrado!");
    } else {
        currentDecodedSecret = "";
        isSecretVisible = false;
        outputText.innerText = "No se encontraron mensajes ocultos en este texto.";
        outputText.className = "text-sm font-medium text-red-500 dark:text-red-400 text-center";
        toggleBtn.classList.add('hidden');
    }
}


const input = document.getElementById("input");
const out = document.getElementById("out");

function deconvert(){
    out.innerHTML = deconvert_string(input.value)
}



main()
