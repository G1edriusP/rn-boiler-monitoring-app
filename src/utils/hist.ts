import { Hist } from "constants/types/Hist";
import { padString } from "./other";

export const getHistByTime = (hist: any, selectedValue: number) => {
  if (selectedValue === -1) {
    return hist;
  }

  // Get from what time hist should be shown
  const selectedTime = selectedValue * 3600000; // Time in milliseconds
  const fromDate = new Date(Date.now() - selectedTime);

  // Filter all valid hist values
  const newHist = hist.filter(val => {
    const month = +String(val.label).substring(0, 2) - 1;
    const day = +String(val.label).substring(3, 5);
    const hours = +String(val.label).substring(6, 8);
    const mins = +String(val.label).substring(9, 11);

    // Check if hist value date is later than date from which hist should be shown
    if (month >= fromDate.getMonth() && day > fromDate.getDate()) {
      return true;
    } else if (month >= fromDate.getMonth() && day === fromDate.getDate()) {
      if (hours > fromDate.getHours()) {
        return true;
      } else if (hours === fromDate.getHours() && mins >= fromDate.getMinutes()) {
        return true;
      }
    }
    return false;
  });

  return newHist;
};

export const parseHist = body => {
  let data = [];
  let lines = body.split("\n");
  for (let i = 0; i < lines.length; i += 2) {
    let parts = lines[i].split(",");
    if (parts.length != 2) {
      continue;
    }
    // If years are needed, add this "${+parts[0].substr(0, 4)}"
    data.push({
      label: `${padString(+parts[0].substr(5, 2))}-${padString(+parts[0].substr(8, 2))} ${padString(
        +parts[0].substr(11, 2),
      )}:${padString(+parts[0].substr(14, 2))}`,
      value: +parts[1],
    });
  }
  return data;
};
