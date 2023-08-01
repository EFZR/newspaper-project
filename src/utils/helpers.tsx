export const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('us-EN', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const createId = (): string => {
  return Math.random().toString(36).substr(2, 9);
}