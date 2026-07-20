import type { IconBaseProps, IconParentProps } from "../icons.types";
import { createIcon } from "@/lib";
import { resolveIconColor } from "@/utils";



const HeartBold = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [{
    d: 'M16.44 3.1c-1.81 0-3.43.88-4.44 2.23A5.55 5.55 0 0 0 7.56 3.1C4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59',
    fill: resolveIconColor(fill),
  }],
});



const HeartBoldDuo = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [{
    d: 'M16.44 3.1c-1.81 0-3.43.88-4.44 2.23A5.55 5.55 0 0 0 7.56 3.1C4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59',
    fill: resolveIconColor(fill),
  }],
});



const HeartOutline = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [{
      d: 'M12 21.65c-.31 0-.61-.04-.86-.13-3.82-1.31-9.89-5.96-9.89-12.83 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.2 6.2 0 0 1 4.44-1.84c3.48 0 6.31 2.85 6.31 6.34 0 6.88-6.07 11.52-9.89 12.83-.25.09-.55.13-.86.13M7.56 3.85c-2.65 0-4.81 2.17-4.81 4.84 0 6.83 6.57 10.63 8.88 11.42.18.06.57.06.75 0 2.3-.79 8.88-4.58 8.88-11.42 0-2.67-2.16-4.84-4.81-4.84-1.52 0-2.93.71-3.84 1.94-.28.38-.92.38-1.2 0a4.77 4.77 0 0 0-3.85-1.94',
      fill: resolveIconColor(fill),
    }],
});



const HeartOutlineDuo = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [{
      d: 'M12 21.65c-.31 0-.61-.04-.86-.13-3.82-1.31-9.89-5.96-9.89-12.83 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.2 6.2 0 0 1 4.44-1.84c3.48 0 6.31 2.85 6.31 6.34 0 6.88-6.07 11.52-9.89 12.83-.25.09-.55.13-.86.13M7.56 3.85c-2.65 0-4.81 2.17-4.81 4.84 0 6.83 6.57 10.63 8.88 11.42.18.06.57.06.75 0 2.3-.79 8.88-4.58 8.88-11.42 0-2.67-2.16-4.84-4.81-4.84-1.52 0-2.93.71-3.84 1.94-.28.38-.92.38-1.2 0a4.77 4.77 0 0 0-3.85-1.94',
      fill: resolveIconColor(fill),
    }],
});



export const Heart = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill = '#f0fefe',
  variant = 'monochrome',
  bold = false,
}: IconParentProps) => {

  const isDuotone = variant === 'duotone';
  const selectedIcon = isDuotone && bold ? HeartBoldDuo
    : isDuotone ? HeartOutlineDuo
    : bold ? HeartBold
    : HeartOutline;

  return selectedIcon({ viewBox, size, fill, });
}
