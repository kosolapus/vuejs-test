import { moneyFormatter } from '@/helpers/formatter';

export const floatValidator = (value) => {
  let clearValue = value.replace(/[^\d,.]/g, '').replace(/[,]/g, '.');

  if (!clearValue.length) {
    return {
      value: undefined,
      strValue: '',
      isValid: false,
    };
  }
  const lastSymbolIsDot = clearValue[clearValue.length - 1] === '.';
  const onlyOneDot = (clearValue.split('.').length - 1 === 1);
  const notFirstDot = clearValue[0] !== '.';
  const isLastDot = lastSymbolIsDot && onlyOneDot && notFirstDot;

  if (!notFirstDot) {
    clearValue = clearValue.replace('.', '');
  }

  const pieces = clearValue.split('.');
  if (pieces.length > 1) {
    clearValue = [pieces[0], pieces[1].slice(0, 2)].join('.');
  }

  return {
    value: parseFloat(clearValue),
    strValue: `${moneyFormatter(clearValue)}${isLastDot ? '.' : ''}`,
    isValid: true,
  };
};
