export const uniqueId = () => {
  return Math.random().toString(36).slice(2);
};

export const randomTo = (to: number) => {
  return Math.floor(Math.random() * to);
};
