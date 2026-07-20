import type { IconProps } from "./types";



export const Icon = ({
  as,
  size = 'md',
  variant = 'monochrome',
  bold,
  ...props
}: IconProps) => {

  const Tag = as;
  const fill = variant === 'duotone' ? ['var(--colors-primary)', 'var(--colors-accent'] : 'var(--colors-primary)'

  return (
    <span { ...props }>
      <Tag
        viewBox='0 0 24 24'
        size={ size }
        variant={ variant }
        fill={ fill }
        bold={ bold }
      />
    </span>
  );
}
