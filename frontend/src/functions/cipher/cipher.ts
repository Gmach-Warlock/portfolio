// Encryption and Decryption ciphers

/**
 * Encrypts or decrypts a message using the Caesar cipher.
 *
 * @param text The plaintext or ciphertext to process.
 * @param shift The value of the shift.
 * @param decrypt Set to true to encrypt, false to decrypt.
 * @returns The resulting encrypted or decrypted string.
 */

export function caesarCipher(text: string, shift: number, encrypt: boolean = true): string {
    let result = '';
    const alphabetSize = 26;

    // Normalize shift to be within 0 and 25
    shift = shift % alphabetSize;
    if (shift < 0) {
        shift += alphabetSize; // Ensure positive shift for consistent modulo behavior
    }

    // Adjust shift for decryption
    if (!encrypt) {
        shift = alphabetSize - shift;
    }

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters (A-Z)
            const shiftedCode = ((charCode - 65 + shift) % alphabetSize) + 65;
            result += String.fromCharCode(shiftedCode);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters (a-z)
            const shiftedCode = ((charCode - 97 + shift) % alphabetSize) + 97;
            result += String.fromCharCode(shiftedCode);
        } else {
            // Non-alphabetic characters remain unchanged
            result += char;
        }
    }

    return result;
}

/**
 * Encrypts or decrypts a message using the Vigenère cipher.
 *
 * @param text The plaintext or ciphertext to process.
 * @param keyword The keyword for the cipher.
 * @param decrypt Set to true to decrypt, false to encrypt.
 * @returns The resulting encrypted or decrypted string.
 */

export function vigenereCipher(text: string, keyword: string, decrypt: boolean = false): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const key = keyword.toUpperCase().replace(/[^A-Z]/g, ''); // Sanitize key
    let result = '';
    let keyIndex = 0;

    // A check to ensure the keyword is not empty
    if (key.length === 0) {
        throw new Error('Keyword cannot be empty.');
    }

    // Process each character of the input text
    for (const char of text) {
        const uppercaseChar = char.toUpperCase();
        const charIndex = alphabet.indexOf(uppercaseChar);

        // Only process alphabetic characters
        if (charIndex !== -1) {
            const keyChar = key[keyIndex % key.length];
            const keyCharIndex = alphabet.indexOf(keyChar);

            let shiftedCharIndex: number;
            if (decrypt) {
                // Decryption: (charIndex - keyCharIndex + 26) % 26
                shiftedCharIndex = (charIndex - keyCharIndex + alphabet.length) % alphabet.length;
            } else {
                // Encryption: (charIndex + keyCharIndex) % 26
                shiftedCharIndex = (charIndex + keyCharIndex) % alphabet.length;
            }

            // Restore original case
            const encryptedChar = alphabet[shiftedCharIndex];
            result += (char === uppercaseChar) ? encryptedChar : encryptedChar.toLowerCase();

            keyIndex++;
        } else {
            // Append non-alphabetic characters unchanged
            result += char;
        }
    }

    return result;
}