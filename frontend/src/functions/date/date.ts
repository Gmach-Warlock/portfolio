// date functions

/**
 * returns todays date as a string
 */

export const displayTodaysDate = () => {
    const today: Date = new Date();
    console.log(today.toDateString());
}

/**
 * takes an epochTime in second format and returns it in local format. (e.g., "3/15/2023, 12:00:00 PM" (depends on locale))
 * @param timeInEpochSecondes time in epoch second
 * @returns the epoch time provided in local format
 */

export const convertEpochToLocal = (timeInEpochSecondes: number) => {

    const dateObject: Date = new Date(timeInEpochSecondes * 1000);

    const localFormatted: string = dateObject.toLocaleString(); 
    // e.g., "3/15/2023, 12:00:00 PM" (depends on locale)

    return localFormatted
}

/**
 * returns the provided epoch time in a format like this: "March 15, 2023 at 12:00:00 PM PDT"
 * @param timeInEpochSeconds 
 * @returns the provided epoch time in custom local formatted
 */

export const convertEpochToCustomLocal = (timeInEpochSeconds: number) => {

    const dateObject: Date = new Date(timeInEpochSeconds * 1000);

    const customLocalFormatted: string = dateObject.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    }); // e.g., "March 15, 2023 at 12:00:00 PM PDT"

    return customLocalFormatted
}

/**
 * returns a the epoch time provided in this format: "Wed Mar 15 2023"
 * @param timeInEpochSecondes time in epoch second format
 * @returns the provided time in date only
 */

export const convertEpochToDateOnly = (timeInEpochSecondes: number) => {

    const dateObject: Date = new Date(timeInEpochSecondes * 1000);

    const dateOnly: string = dateObject.toDateString(); 
    // e.g., "Wed Mar 15 2023"

    return dateOnly
};  
