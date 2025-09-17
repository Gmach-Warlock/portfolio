import type { ProductType } from "../../app/types";
 
// useful functions for a shopping cart component

// Luhn Check
/**
 * this functions check if a credit card number is a valid Luhn number
 * @param cardNumber the credit card number to check in string format
 * @returns true if the card number is valid and false if not
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

// Total items with tax
/**
 * returns the total price with tax of the array provided with the salesTax percentage provided
 * @param products the array of products to total
 * @param salesTaxPercentage the sales tax percentage to use to calculate the tax total
 * @returns a grand total with the provided salesTax percent
 */

export function calculateTotalWithTax(products: ProductType[], salesTaxPercentage: number) {


    const totalBeforeTax = products.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.price;
    }, 0);

    const salesTaxAmount = totalBeforeTax * (salesTaxPercentage / 100);

    const grandTotal = totalBeforeTax + salesTaxAmount;

    return grandTotal.toFixed(2);
};