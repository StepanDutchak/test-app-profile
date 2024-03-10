import {monthNames} from '../constants/date/month';

export const formatDate = (date: string) => {
  const formDate = new Date(date);
  const month = monthNames[formDate.getMonth()];
  const day = formDate.getDate();

  const formattedDate = `${month} ${day}`;

  return formattedDate;
};
