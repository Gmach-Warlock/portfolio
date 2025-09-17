/**
 * creates and returns a timestamp in epoch second format
 * @returns a timestamp in epoch second format
 */

export function timestampSecondFormat(): number {

    return Math.floor(Date.now() / 1000);
}

/**
 * displays a string showing how long it's been since a time stamp has occurred. The unit changes as needed.
 * @param epochTimestampInSeconds time in epoch second format
 * @returns the time since the time stamp provided in a string format 
 */

export function getTimeSinceEpochTimestamp(epochTimestampInSeconds: number) { 
    const currentTimeMillis = Date.now(); 
    const givenTimeMillis = epochTimestampInSeconds * 1000; 
    const timeDifferenceMillis = currentTimeMillis - givenTimeMillis; 
    const minutesSinceTimestamp = timeDifferenceMillis / (1000 * 60);
  
    // If less than an hour, return minutes
    if (minutesSinceTimestamp < 60) {
      // Handle pluralization for minutes
      const roundedMinutes = Math.round(minutesSinceTimestamp);
      if (roundedMinutes === 0) {
        return 'less than a minute ago';
      }
      return `${roundedMinutes} minute${roundedMinutes !== 1 ? 's' : ''} ago`;
    }
  
    // Otherwise, return hours (existing logic)
    const hoursSinceTimestamp = timeDifferenceMillis / (1000 * 60 * 60);
    const roundedHours = Math.floor(hoursSinceTimestamp);
    
    // Handle pluralization for hours
    return `${roundedHours} hour${roundedHours !== 1 ? 's' : ''} ago`;
  }