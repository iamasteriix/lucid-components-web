import type { designTokens } from "@/tokens";


/**
 * The full Design Tokens set, inferred directly from designTokens
 * You must confirm to this shape when overriding the theme
 */
export type Tokens = typeof designTokens;