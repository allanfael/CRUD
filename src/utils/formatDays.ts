import { formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const formatDistanceDate = (date: string) => {
  const converteDate = new Date(date);

  const formatDate = formatDistance(new Date(), converteDate, {
    locale: pt,
  });

  return formatDate;
};
