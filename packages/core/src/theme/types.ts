import { tokens } from "./tokens";


// `tokens` is declared `as const` to narrow its allowed values and provides
// autocomplete. However, this forces its inferred types to be the properties'
// literal values, not `string`, which is what we want.
// The snippet below is shorthand (`colors: Record<keyof typeof tokens.colors, string>;`)
// to map the token property types to `string`
export type ThemeTokensType = {
  [K in keyof typeof tokens]: {
    [P in keyof typeof tokens[K]]: string;
  };
};
