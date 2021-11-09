export const moneyFormatter = (value) => {
  const formatted = new Intl.NumberFormat('ru-RU').format(value.toString()).replace(',', '.');
  console.log(value, formatted);
  return formatted;
};

export const dateFormatter = (value) => {
  const pieces = value.split('-');
  return `${pieces[2]}.${pieces[1]}.${pieces[0]}`;
};
