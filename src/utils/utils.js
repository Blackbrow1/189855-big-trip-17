import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizeDate = (dateTo) => dayjs(dateTo).format('D MMMM');
const humanizeDateToHours = (dateTo) => dayjs(dateTo).format('HH:mm');

const isTaskExpired = (dueDate) => dueDate && dayjs().isAfter(dueDate, 'D');

const durationBetweenTwoDates = (dateTo, dateFrom) => {
  const millisec = dayjs(dateTo).diff(dateFrom);
  const minutes = millisec / 60 / 1000;
  switch (true) {
    case minutes < 60:
      return dayjs.duration(millisec).format('MM');
    case minutes < 60 * 24: {
      const [hours, durationMinutes] = dayjs.duration(millisec).format('HH:MM').split(':');
      return `${hours}H ${durationMinutes}M`;
    }
    default: {
      const [days, hours, durationMinutes] = dayjs.duration(millisec).format('DD:HH:MM');
      return `${days}D ${hours}H ${durationMinutes}M`;
    }
  }
};

const getRandomArrayValue = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

export {getRandomInteger, humanizeDate, humanizeDateToHours, isTaskExpired, durationBetweenTwoDates, getRandomArrayValue};
