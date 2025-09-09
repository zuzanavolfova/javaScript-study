//TASK Hiking Path
//An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

function hikingPath(steps, path) {
  let numberOfValleys = 0;
  let altitude = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      altitude++;
    } else {
      altitude--;
    }

    if (altitude === 0 && path[i] === "U") {
      numberOfValleys++;
    }
  }
  return numberOfValleys;
}
