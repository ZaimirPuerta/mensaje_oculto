CARACTERES = {
    "_a" : 0b000000, 0b000000 : "a"  ,
    "_b" : 0b000001, 0b000001 : "b"  ,
    "_c" : 0b000010, 0b000010 : "c"  ,
    "_d" : 0b000011, 0b000011 : "d"  ,
    "_e" : 0b000100, 0b000100 : "e"  ,
    "_f" : 0b000101, 0b000101 : "f"  ,
    "_g" : 0b000110, 0b000110 : "g"  ,
    "_h" : 0b000111, 0b000111 : "h"  ,
    "_i" : 0b001000, 0b001000 : "i"  ,
    "_j" : 0b001001, 0b001001 : "j"  ,
    "_k" : 0b001010, 0b001010 : "k"  ,
    "_l" : 0b001011, 0b001011 : "l"  ,
    "_m" : 0b001100, 0b001100 : "m"  ,
    "_n" : 0b001101, 0b001101 : "n"  ,
    "_ñ" : 0b001110, 0b001110 : "ñ"  ,
    "_o" : 0b001111, 0b001111 : "o"  ,
    "_p" : 0b010000, 0b010000 : "p"  ,
    "_q" : 0b010001, 0b010001 : "q"  ,
    "_r" : 0b010010, 0b010010 : "r"  ,
    "_s" : 0b010011, 0b010011 : "s"  ,
    "_t" : 0b010100, 0b010100 : "t"  ,
    "_u" : 0b010101, 0b010101 : "u"  ,
    "_v" : 0b010110, 0b010110 : "v"  ,
    "_w" : 0b010111, 0b010111 : "w"  ,
    "_x" : 0b011000, 0b011000 : "x"  ,
    "_y" : 0b011001, 0b011001 : "y"  ,
    "_z" : 0b011010, 0b011010 : "z"  ,
    "_ " : 0b011011, 0b011011 : " "  ,
    "_0" : 0b011100, 0b011100 : "0"  ,
    "_1" : 0b011101, 0b011101 : "1"  ,
    "_2" : 0b011110, 0b011110 : "2"  ,
    "_3" : 0b011111, 0b011111 : "3"  ,
    "_4" : 0b100000, 0b100000 : "4"  ,
    "_5" : 0b100001, 0b100001 : "5"  ,
    "_6" : 0b100010, 0b100010 : "6"  ,
    "_7" : 0b100011, 0b100011 : "7"  ,
    "_8" : 0b100100, 0b100100 : "8"  ,
    "_9" : 0b100101, 0b100101 : "9"  ,
    "_." : 0b100110, 0b100110 : "."  ,
    "_," : 0b100111, 0b100111 : ","  ,
    "_;" : 0b101000, 0b101000 : ";"  ,
    "_:" : 0b101001, 0b101001 : ":"  ,
    "_(" : 0b101010, 0b101010 : "("  ,
    "_)" : 0b101011, 0b101011 : ")"  ,
    "_/" : 0b101100, 0b101100 : "/"  ,
    "_-" : 0b101101, 0b101101 : "-"  ,
    "_+" : 0b101110, 0b101110 : "+"  ,
    "_*" : 0b101111, 0b101111 : "*"  ,
    "_=" : 0b110000, 0b110000 : "="  ,
    "_$" : 0b110001, 0b110001 : "$"  ,
    "_@" : 0b110010, 0b110010 : "@"  ,
    "_#" : 0b110011, 0b110011 : "#"  ,
    "_^" : 0b110100, 0b110100 : "^"  ,
    "_?" : 0b110101, 0b110101 : "?"  ,
    "_!" : 0b110110, 0b110110 : "!"  ,
    "_&" : 0b110111, 0b110111 : "&"  ,
    "__" : 0b111000, 0b111000 : "_"  ,
    '_"' : 0b111001, 0b111001 : '"'  ,
    '_{' : 0b111010, 0b111010 : '{'  ,
    '_}' : 0b111011, 0b111011 : '}'  ,
    '_|' : 0b111100, 0b111100 : '|'  ,
    '_\n' : 0b111101, 0b111101 : '\n'  ,
    '_\t' : 0b111110, 0b111110 : '\t'  ,
    '__MAYUS' : 0b111111, 0b111111 : "__MAYUS",
}

const BOOLS = {
    // true : " ", " " : true, // U+2800 BRAILLE PATTERN BLANK />>/ U+2800 PATRÓN EN BLANCO BRAILLE //
    true : "⁢", "⁢" : true,   // U+2062 INVISIBLE TIMES   />>/ U+2062 TIEMPOS INVISIBLES      //
    false : "‍", "‍" : false, // U+200D ZERO WIDTH JOINER />>/ U+200D Conector de ancho cero  //
}

const INVISIBLE_CHARS = {
    "0"  : "឴", // U+17B4 KHMER VOWEL INHERENT AQ
    "1"  : "឵", // U+17B5 KHMER VOWEL INHERENT AA
    "2"  : "᠋", // U+180B MONGOLIAN FREE VARIATION SELECTOR ONE
    "3"  : "᠌", // U+180C MONGOLIAN FREE VARIATION SELECTOR TWO
    "4"  : "᠍", // U+180D MONGOLIAN FREE VARIATION SELECTOR THREE
    "5"  : "᠎", // U+180E MONGOLIAN VOWEL SEPARATOR
    "6"  : "‌", // U+200C ZERO WIDTH NON-JOINER
    "7"  : "‍", // U+200D ZERO WIDTH JOINER
    "8"  : "⁠", // U+2060 WORD JOINER
    "9"  : "⁡", // U+2061 FUNCTION APPLICATION
    "A"  : "⁢", // U+2062 INVISIBLE TIMES
    "B"  : "⁣", // U+2063 INVISIBLE SEPARATOR
    "C"  : "⁤", // U+2064 INVISIBLE PLUS
    "D"  : "⁥", // U+2065 Invisible operators - undefined
    "E"  : "⁪", // U+206A INHIBIT SYMMETRIC SWAPPING
    "F"  : "⁫", // U+206B ACTIVATE SYMMETRIC SWAPPING
}

const HEADER = {
    START : ".```[Hidden Message]```",
    END : "."
}

function hide_char(char){
    if (typeof char != "string") throw "hide_char > El parametro #1 no es un texto";
    if (char.length != 1) throw "El paramentro #1 no es un caracter";
    if (!("_"+char in CARACTERES)) return ""; // ELIMINA LOS CARACTERES QUE NO COMPRENDA
    const code = CARACTERES["_"+char]
    return code
}

function isUpper(char){
    if (typeof char != "string") throw "hide_char > El parametro #1 no es un texto";
    if (char.length != 1) throw "El paramentro #1 no es un caracter";
    const UP = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for (let i=0; i<UP.length; i++){
        if (char == UP[i]) return true;
    }
    return false
}

function normalizar(char){
    if (char == "á") return "a";
    if (char == "é") return "e";
    if (char == "í") return "i";
    if (char == "ó") return "o";
    if (char == "ú") return "u";
    if (char == "Á") return "A";
    if (char == "É") return "E";
    if (char == "Í") return "I";
    if (char == "Ó") return "O";
    if (char == "Ú") return "U";
    if (char == "¿") return "?";
    if (char == "¡") return "!";
    if (char == "¡") return "!";
    return char;
}

function isShifteable(char){
    if (char == "á") return true;
    if (char == "é") return true;
    if (char == "í") return true;
    if (char == "ó") return true;
    if (char == "ú") return true;
    if (char == "Á") return true;
    if (char == "É") return true;
    if (char == "Í") return true;
    if (char == "Ó") return true;
    if (char == "Ú") return true;
    if (char == "¿") return true;
    if (char == "!") return true;
    return false;
}

function shift(char){
    if (char == "a") char = "0"
    if (char == "e") char = "1"
    if (char == "i") char = "2"
    if (char == "o") char = "3"
    if (char == "u") char = "4"
    if (char == "A") char = "5"
    if (char == "E") char = "6"
    if (char == "I") char = "7"
    if (char == "O") char = "8"
    if (char == "U") char = "9"
    if (char == "?") char = "?";
    if (char == "!") char = "!";
    return char
}

function change_character(byte){
    if (byte >= 0 && byte <= 0b011010){
        return CARACTERES[byte].toUpperCase()
    }
    if (byte == CARACTERES["_0"]) return "á";
    if (byte == CARACTERES["_1"]) return "é";
    if (byte == CARACTERES["_2"]) return "í";
    if (byte == CARACTERES["_3"]) return "ó";
    if (byte == CARACTERES["_4"]) return "ú";
    if (byte == CARACTERES["_5"]) return "Á";
    if (byte == CARACTERES["_6"]) return "É";
    if (byte == CARACTERES["_7"]) return "Í";
    if (byte == CARACTERES["_8"]) return "Ó";
    if (byte == CARACTERES["_9"]) return "Ú";
    if (byte == CARACTERES["_?"]) return "¿";
    if (byte == CARACTERES["_!"]) return "¡";
    
    return CARACTERES[byte]
}

function convert_string(text){
    let output = ""
    let mode = 0; //TODO: HACER QUE FUNCIONES ESTA VARIABLE
    if (typeof text != "string") throw "convert_string > El parametro #1 no es un texto";
    text = String(mode) + text

    for (let i = 0; i<text.length; i++){
        let char = normalizar( text[i] );
        if (isShifteable(text[i])) char = shift(char);
        char = char.toLowerCase()
        let hide = hide_char(char);
        const nm = hide
        let change = ""

        if (isUpper(text[i])) change += BOOLS[true]+BOOLS[true]+BOOLS[true]+BOOLS[true]+BOOLS[true]+BOOLS[true]
        if (isShifteable(text[i])) change += BOOLS[true]+BOOLS[true]+BOOLS[true]+BOOLS[true]+BOOLS[true]+BOOLS[true]

        for (let j=0; j<6; j++){
            change += BOOLS[Boolean(hide & 0b1 == 0x1)]
            hide = hide >> 1;
        }

        output += change
        // console.log(char, ",", nm, " - ", change)
    }
    return HEADER["START"]+output+HEADER["END"];
}



function deconvert_string(text_hide){
    let output = ""
    if (typeof text_hide != "string") throw "convert_string > El parametro #1 no es un texto";
    if (text_hide[0] != "." || text_hide[text_hide.length-1] != ".") throw "El texto es incorrecto";
    
    if (!text_hide.startsWith(HEADER["START"]) || !text_hide.endsWith(HEADER["END"])) throw "El texto es incorrecto";
    
    text_hide = text_hide.substring(HEADER["START"].length, text_hide.length-HEADER["END"].length)
    
    let mayus = false;
    let shift = false
    const cantidad_de_letras = Math.round(text_hide.length / 6)

    let marca = 0;
    for (let i=0; i<cantidad_de_letras; i++){
        let value = 0
        for (let j=0; j<6; j++){
            const char = text_hide[ i * 6 + (5 - j) ]
            if (BOOLS[char] === true){
                value = value | 1;
            }
            value = value << 1;
            marca += 1;
        }
        value = value >> 1;
        if (CARACTERES[value] == "__MAYUS"){
            if (mayus) shift = true;
            mayus = true;
            continue;
        }
        let newChar = String(CARACTERES[value])
        // if (shift){
        //     newChar = change_character(value)
        //     shift = false;
        // }
        if (mayus){
            newChar = change_character(value)
            mayus = false;
        }
        // console.log(value, " : ", newChar)
        output += newChar
    }
    const modo = output[0] //TODO: HACER QUE FUNCIONES ESTA VARIABLE


    return output.substring(1)
}

function main(){
    // const h = convert_string("Hola, ¿Cómo Estás?")
    // const h = convert_string("Black clover, el besto shonen.")
    // console.log("out: ",h)
    // const d = deconvert_string(h)
    // console.log("in: ",d)
}

const input = document.getElementById("input");
const out = document.getElementById("out");

function deconvert(){
    out.innerHTML = deconvert_string(input.value)
}



main()
