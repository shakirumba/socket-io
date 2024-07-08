export function formatDateTransactions(dateString) {
  const date = new Date(dateString);

  // Months array to convert numeric month to string representation
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get date components
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2);
  let hour = date.getHours();
  const minute = date.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";

  // Convert hour to 12-hour format
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }

  // Zero padding for minute
  const paddedMinute = minute < 10 ? `0${minute}` : minute;

  // Format the output string
  const formattedDate = `${day} ${month}, ${year} - ${hour}:${paddedMinute} ${period}`;

  return formattedDate;
}
