export const formatToPersianNumber = (str: string) => {
  return str.replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'.charAt(Number(digit)));
};
