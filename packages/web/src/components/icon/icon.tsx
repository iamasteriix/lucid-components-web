import type { IconProps } from "./icon.types";



const size_map: Record<NonNullable<IconProps['size']>, string> = {
  xsm: 'var(--typography-textXs)',
  sm: 'var(--typography-textSm)',
  md: 'var(--typography-textLg)',
  lg: 'var(--typography-textXl)',
};



export const Icon = ({
  as,
  size = 'md',
  variant = 'monochrome',
  bold = false,
  'data-testid': testId,
  ...rest
}: IconProps) => {

  const Tag = as;
  const fontSize = size_map[size];
  const fill = variant === 'duotone' ? ['var(--colors-primary)', 'var(--colors-accent)'] : 'var(--colors-primary)'

  return (
    <span
      data-component='icon'
      data-testid={ testId }
      aria-hidden='true'
      role='presentation'
      { ...rest }
    >
      <Tag
        viewBox='0 0 24 24'
        size={ fontSize }
        fill={ fill }
        variant={ variant }
        bold={ bold }
      />
    </span>
  );
}
