// Function to encrypt the party location using a Caesar cipher (Java style)
function caesarCipher(str, shiftStr) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
            let isUpper = (c >= 'A' && c <= 'Z');
            //Only two letter possibilities: A-Z or a-z
            // Determine the base letter code based on case
            // 'A' is 65, 'a' is 97 in ASCII
            // Using charCodeAt to get the ASCII value of the character
            // and then subtracting the letter code to get a 0-25 range
            let letter = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let letterNum = c.charCodeAt(0) - letter; // 0-25
            let shiftedLetter = (letterNum + shiftStr) % 26; // shift and wrap
            let newLetter = String.fromCharCode(letter + shiftedLetter);
            result += newLetter;
        } else {
            result += c; // Non-letter characters unchanged
        }
    }
    return result;
}

// Example usage:
let partyLocation = "GARDEN";
const encryptedLocation = caesarCipher(partyLocation, 3); // "JDUGHQ"  // Encrypting "GARDEN" with a shift of 3
console.log(encryptedLocation);