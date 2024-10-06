export function formatLocalTimestamp(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'America/Los_Angeles'
  };

  const formattedDate = date.toLocaleString('en-US', options);
  const [datePart, timePart] = formattedDate.split(', ');
  const [month, day, year] = datePart.split('/');

  return `${year}-${month}-${day} ${timePart} PDT`;
}