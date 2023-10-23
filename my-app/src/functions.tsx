export function formatDate(data: string): string {
  if(!data){return '';}
    const timeSplit = data.split(' ');
    const dateSplit = timeSplit[0].split('-');
    const day = parseInt(dateSplit[2]);
    const month = parseInt(dateSplit[1]);
  
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

export function celciusToFahrenheit(celcius: number): number {
    const fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}