import type { Spacing, Spanning } from "@/components";



export const spacingMap: Record<Spacing, string> = {
  'space-1': 'var(--spacing-space1)',
  'space-2': 'var(--spacing-space2)',
  'space-3': 'var(--spacing-space3)',
  'space-4': 'var(--spacing-space4)',
  'space-5': 'var(--spacing-space5)',
  'space-6': 'var(--spacing-space6)',
  'space-8': 'var(--spacing-space8)',
  'space-10': 'var(--spacing-space10)',
  'space-12': 'var(--spacing-space12)',
  'space-16': 'var(--spacing-space16)',
};

export const spanningMap: Record<Spanning, string> = {
  auto: 'auto',
  fill: '100%',
  half: '50%',
  third: '33.333%',
  quarter: '25%',
};
