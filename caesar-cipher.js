function caesar(string, shift) {

    let cipherString = '';

    if(!shift) {
        return string;
    }

    for(let i = 0; i < string.length; i++){
        let charCode = (string.charCodeAt(i) - 65);

        if((charCode >= 0 && charCode <= 25)){
            charCode += shift;
            cipherString += String.fromCharCode(((charCode % 26) + 65));
        } else if (charCode >= 32 && charCode <= 57){
            charCode += shift;
            cipherString += String.fromCharCode(((charCode - 32) % 26 + 97));
        } else {
            cipherString += String.fromCharCode(((charCode) + 65));
        }

        
    }

    return cipherString;

}

module.exports = caesar;