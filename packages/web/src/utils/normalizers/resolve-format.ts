const REM_PX = parseFloat(getComputedStyle(document.documentElement).fontSize);


export const resolveSizeToPx = (value: string): number => {
  const num = parseFloat(value);
  return value.trim().endsWith('rem') ? num *REM_PX : num;
}
