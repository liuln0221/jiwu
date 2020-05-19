import moment from 'moment';

export const dateStrToFormat = (dataStr, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!dataStr) {
    return '';
  }
  return moment(dataStr).format(format);
};
