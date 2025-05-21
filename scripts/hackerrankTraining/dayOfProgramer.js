/*TASK print the 256th day of the year in the format dd.mm.yyyy.
 * From 1700 to 1917, Russia's official calendar was the Julian calendar;
 * since 1919 they used the Gregorian calendar system.
 * The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th.
 * This means that in 1918, February 14th was the 32nd day of the year in Russia.
 * In both calendar systems, February is the only month with a variable amount of days;
 * it has 29 days during a leap year, and 28 days during all other years.
 * In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar.
 * Given a year, find the date of the 256th day of that year according to the official Russian calendar during that year.
 * Then print it in the format dd.mm.yyyy.
 * example: dayOfProgramer(2025);
 */

function dayOfProgramer(year) {
  if (year < 1918) {
    // Julian calendar (before 1918)
    if (year % 4 === 0) {
      return `12.09.${year}`;
    } else {
      return `13.09.${year}`;
    }
  } else if (year === 1918) {
    return `26.09.${year}`;
  } else {
    // Gregorian calendar
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return `12.09.${year}`;
    } else {
      return `13.09.${year}`;
    }
  }
}
