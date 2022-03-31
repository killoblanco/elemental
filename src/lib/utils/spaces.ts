export const spacing = (all: number, lr?: number, r?: number, b?: number): number | string => {
  const s = [all];
  if (lr) s.push(lr);
  if (r) s.push(r);
  if (b) s.push(b);
  return s.map(n => (n * 8) + 'px').join(' ');
};
