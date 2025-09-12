// Helper function to get the ordinal suffix for a day (e.g., 1st, 2nd, 3rd, 4th)
function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function getWorkshopDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const discountDateString = `${day}${getOrdinalSuffix(day)} ${month}`;
  const daysUntilSaturday = dayOfWeek === 6 ? 7 : 6 - dayOfWeek;

  const upcomingSaturday = new Date(today);
  upcomingSaturday.setDate(today.getDate() + daysUntilSaturday);

  const upcomingSunday = new Date(upcomingSaturday);
  upcomingSunday.setDate(upcomingSaturday.getDate() + 1);

  const satDay = upcomingSaturday.getDate();
  const sunDay = upcomingSunday.getDate();
  const satMonth = upcomingSaturday.toLocaleString("default", {
    month: "long",
  });
  const sunMonth = upcomingSunday.toLocaleString("default", { month: "long" });

  let workshopDateString;

  if (satMonth === sunMonth) {
    workshopDateString = `${satDay}${getOrdinalSuffix(
      satDay
    )} & ${sunDay}${getOrdinalSuffix(sunDay)} ${satMonth}`;
  } else {
    workshopDateString = `${satDay}${getOrdinalSuffix(
      satDay
    )} ${satMonth} & ${sunDay}${getOrdinalSuffix(sunDay)} ${sunMonth}`;
  }

  return {
    discountDateString,
    workshopDateString,
  };
}
