// date functions


export const displayTodaysDate = () => {
    const today: Date = new Date();
    console.log(today.toDateString());
}

export const convertEpochToLocal = (timeInEpochSecondes: number) => {

    const dateObject: Date = new Date(timeInEpochSecondes * 1000);

    const localFormatted: string = dateObject.toLocaleString(); 
    // e.g., "3/15/2023, 12:00:00 PM" (depends on locale)

    return localFormatted
}

export const convertEpochToCustomLocal = (timeInEpochSecondes: number) => {

    const dateObject: Date = new Date(timeInEpochSecondes * 1000);

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

export const convertEpochToDateOnly = (timeInEpochSecondes: number) => {

    const dateObject: Date = new Date(timeInEpochSecondes * 1000);

    const dateOnly: string = dateObject.toDateString(); 
    // e.g., "Wed Mar 15 2023"

    return dateOnly
};  
