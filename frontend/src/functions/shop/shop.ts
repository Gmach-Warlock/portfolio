// functions for shopping apps

/**
 * checks if a credit card number is a valid Luhn number
 * @param cardNumber string of the credit card's numbers
 * @returns true if the number is valid and false if it is invalid
 */

export function isValidLuhn(cardNumber: string): boolean {
    // Remove any non-digit characters (e.g., spaces, hyphens)
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    let sum = 0;
    let isSecondDigit = false;

    // Iterate through the digits from right to left
    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber[i], 10);

    if (isSecondDigit) {
        digit *= 2; // Double every second digit
        if (digit > 9) {
        digit -= 9; // If doubled digit is > 9, subtract 9 (or sum its digits)
        }
    }

    sum += digit; // Add the digit to the sum
    isSecondDigit = !isSecondDigit; // Toggle for the next digit
    }

    // The number is valid if the sum is a multiple of 10
    return sum % 10 === 0;
}

