import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizeTaskDateTo = (dateTo) => dayjs(dateTo).format('D MMMM');
const humanizeTaskDateFrom = (dateFrom) => dayjs(dateFrom).format('D MMMM');

const isTaskExpired = (dueDate) => dueDate && dayjs().isAfter(dueDate, 'D');

export {getRandomInteger, humanizeTaskDateTo, humanizeTaskDateFrom, isTaskExpired};
