export const resolveIconColor = (
  fill: string | string[] = '#f0fefe',
  index: number = 0,
): string => {
  const isFillArray = Array.isArray(fill);
  const idx = isFillArray && index >= fill.length ? fill.length -1 : index;
  return isFillArray ? fill[idx] : fill;
}