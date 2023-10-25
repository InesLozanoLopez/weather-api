export function formatDate(data: string): string {
  if (!data) {
    return '';
  }

  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth();

  function dayLetter(day: number): string {
    if (day === 1 || day === 21 || day === 31) {
      return `${day}st`;
    } else if (day === 2 || day === 22) {
      return `${day}nd`;
    } else if (day === 3 || day === 23) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  }

  const monthLetter: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${dayLetter(day)} ${monthLetter[month]}`;
}

export function formatDayOfWeek(data: string): string {
  if (!data) {
    return '';
  }

  const day = new Date(data);

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const dayOfWeek = dayNames[day.getDay() - 1];

  return dayOfWeek;
}
