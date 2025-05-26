// In ancient Rome, Caesar uses a cipher to secretly tell Brutus the meeting place.

function caesarCipher(message) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        let shiftedValue = 3; // Caesar's childhood game: shift every letter by 3
        if ((letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z')) {
            let isUpperCaseLetter = (letter >= 'A' && letter <= 'Z');
            let baseLetterLoc = isUpperCaseLetter ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let letterIndex = letter.charCodeAt(0) - baseLetterLoc;
            let shiftedIndex = (letterIndex + shiftedValue) % 26;
            let encryptedLetter = String.fromCharCode(baseLetterLoc + shiftedIndex);
            encryptedMessage += encryptedLetter;
        } else {
            encryptedMessage += letter; // Keep non-letters unchanged
        }
    }
    return encryptedMessage;
}

// Caesar wants to meet Brutus in the GARDEN
let secretLocation = "GARDEN";
let codedMessage = caesarCipher(secretLocation);

console.log("Caesar's encrypted message to Brutus:", codedMessage); // Output: JDUGHQ