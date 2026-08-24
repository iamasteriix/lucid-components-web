import type { A11yProps } from '@/types';


export const A11yManager = {
  register: <T extends Record<string, A11yProps>> (accessibility: T): T => accessibility,
};
