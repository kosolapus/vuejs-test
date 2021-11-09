import { dateFormatter, moneyFormatter } from '@/helpers/formatter';

export const dataMapper = [
  {
    name: 'id',
    sort: 0,
    label: 'ID',
  },
  {
    name: 'date',
    sort: 1,
    label: 'Date',
    formatter: dateFormatter,
  },
  {
    name: 'name',
    sort: 2,
    label: 'Name',
  },
  {
    name: 'money',
    sort: 3,
    label: 'Money',
    formatter: moneyFormatter,
  },
];
