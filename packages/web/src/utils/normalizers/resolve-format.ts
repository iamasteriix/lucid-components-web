const REM_PX = parseFloat(getComputedStyle(document.documentElement).fontSize);


export const resolveSizeToPx = (value: string | number | undefined): number => {
  if (typeof value === 'undefined') return 0;
  if (typeof value === 'number') return value;
  const num = parseFloat(value);
  return value.trim().endsWith('rem') ? num *REM_PX : num;
}
