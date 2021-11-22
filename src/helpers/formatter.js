export const moneyFormatter = (value) => {
  if (typeof value !== 'string') {
    value = value ? value.toString() : '';
  }
  const pieces = value.split('.');
  const digits = pieces[0];
  const decimal = pieces.length > 1 ? pieces[1] : null;

  return digits
    .split('')
    .reverse()
    .reduce((p, c, i) => {
      const notNeedDivider = (i + 1) % 3 || digits.length <= 3;
      p += `${c}${notNeedDivider ? '' : ' '}`;
      return p;
    }, '')
    .split('')
    .reverse()
    .join('') + (decimal ? `.${decimal}` : '');
};

export const dateFormatter = (value) => {
  const pieces = value.split('-');
  return `${pieces[2]}.${pieces[1]}.${pieces[0]}`;
};
