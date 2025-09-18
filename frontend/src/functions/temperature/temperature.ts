/**
 * converts a Kelvin temperature to Celcius
 * @param tempInKelvin temperature in Kelvin
 * @returns a string with this form: 'valu degrees Celcius
 */

export function KelvinToCelsius(tempInKelvin: number): string {
    const tempInCelcius = tempInKelvin - 273.15;
    return `${tempInCelcius.toFixed(2)} degrees Celsius`
}

/**
 * converts a Celsius temperature to Kelvin
 * @param tempInCelcius temperature in Celsius
 * @returns a string with this form: 'value degrees Kelvin
 */

export function CelsiusToKelvin(tempInCelcius: number): string {
    const tempInKelvin = tempInCelcius + 273.15;
    return `${tempInKelvin} degrees Kelvin`
}
