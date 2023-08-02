function findDates(str) {
    const regex = /(\d{4})-(\d{2})-(\d{2})/g;
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const dates = [];
  
    let match;
    while ((match = regex.exec(str)) !== null) {
      const year = parseInt(match[1]);
      const month = parseInt(match[2]);
      const day = parseInt(match[3]);
      const monthName = months[month - 1];
  
      if (month >= 1 && month <= 12) {
        dates.push({ year, month, day, monthName });
      }
    }
  
    return dates;
  }
  
  const str = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
  console.log(findDates(str));
  
  // В результаті, виклик findDates(str) поверне такий масив об'єктів:
  
  // [
  //   { year: 1976, month: 3, day: 12, monthName: 'March' },
  //   { year: 1983, month: 10, day: 14, monthName: 'October' },
  //   { year: 8765, month: 11, day: 34, monthName: 'November' }
  // ]