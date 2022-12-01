const useMonth = (year, monthIndex) => {
  const convertDays = (shortDayName) => {
    switch (shortDayName) {
      case "pon.":
        return "PN.";
      case "sob.":
        return "SB.";
      case "niedz.":
        return "ND.";
      default:
        return shortDayName.toUpperCase();
    }
  };

  const monthDays = Array.from(
    // Create an array based on array-like object (having length property equal to last day number of provided month).
    { length: new Date(year, monthIndex + 1, 0).getDate() },
    // Each element of created array is an object with day name and day number of next day in the month.
    (_, arrIndex) => {
      const date = new Date(year, monthIndex, arrIndex + 1);
      const day = date.toLocaleDateString("pl-PL", {
        weekday: "short",
      });
      const dayName = convertDays(day);
      return {
        dayName,
        dayNumber: date.getDate(),
        isWeekend: dayName == "SB." || dayName == "ND." ? true : false,
      };
    }
  );

  const previousMonthDays = Array.from(
    {
      0: new Date(year, monthIndex, -1),
      1: new Date(year, monthIndex, 0),
      length: 2,
    },
    (el) => {
      const day = el.toLocaleDateString("pl-PL", {
        weekday: "short",
      });
      return {
        dayName: convertDays(day),
        dayNumber: el.getDate(),
      };
    }
  );

  const monthName = new Date(year, monthIndex)
    .toLocaleString("pl-PL", {
      month: "long",
    })
    .toUpperCase();

  return {
    monthDays,
    previousMonthDays,
    monthName,
    year,
  };
};

export default useMonth;
