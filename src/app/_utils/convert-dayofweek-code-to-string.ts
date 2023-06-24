export const convertDayOfWeekCodeToString = (dayOfWeekCode: string): string => {
  switch (dayOfWeekCode) {
    case '1':
      return '月曜';
      break;
    case '2':
      return '火曜';
      break;
    case '3':
      return '水曜';
      break;
    case '4':
      return '木曜';
      break;
    case '5':
      return '金曜';
      break;
    default:
      return '';
      break;
  }
};
