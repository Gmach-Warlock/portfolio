// generate something

/**
 * generates a random string with a length equal to the length provided
 * @param length the length you want the string to be 
 * @returns a string with a length equal to the number provided
 */

export function generateRandomString(length: number) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

/**
 * generate a random number from 0 to the length provided - 1 (useful for array indexes)
 * @param length the amount of possible outcomes
 * @returns a random number from 0 to (length - 1)
 */

export function rnG(length: number) {
  return Math.floor(Math.random() * length);
}