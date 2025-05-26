// In ancient Rome, Caesar now uses a random shift for each secret message!

function caesarCipher(message, shift) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        if ((letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z')) {
            let isUpperCase = (letter >= 'A' && letter <= 'Z');
            let baseLetterLoc = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let letterIndex = letter.charCodeAt(0) - baseLetterLoc;
            let shiftedIndex = (letterIndex + shift) % 26;
            let encryptedChar = String.fromCharCode(baseLetterLoc + shiftedIndex);
            encryptedMessage += encryptedChar;
        } else {
            encryptedMessage += letter;
        }
    }
    return encryptedMessage;
}

// Generate a random decimal between 0 (inclusive) and 1 (exclusive)
const randomDecimal = Math.random();

// Determine the range (3 to 33 inclusive)
const range = 33 - 3 + 1; // 31

// Scale the random decimal to the range
const randomInRange = randomDecimal * range;

// Round down to get a whole integer
const randomInt = Math.floor(randomInRange);

// Adjust to fit the range 3 to 33
const shiftValue = randomInt + 3;

// Caesar's secret message for Brutus
let secretLocation = "GARDEN";
let codedMessage = caesarCipher(secretLocation, shiftValue);

// The invitation "hides" the shift value as a secret emblem
console.log("Secret emblem (shift value):", shiftValue);
console.log("Encrypted invitation:", codedMessage);