import moment from 'moment-timezone';
// This function is to convert timezone to utc.
export const getUTCTime = (timestamp: number): Date => {
  const utcTime = moment.utc(timestamp).format('YYYY-MM-DD HH:mm:ss');
  return new Date(utcTime);
};
// This function is to get UTC time as string.
export const getUTCTimeStringWithFormat = (timestamp: number, format: string) => {
  return moment.utc(timestamp).format(format);
};
