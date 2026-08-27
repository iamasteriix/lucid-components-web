import type { TextProps } from './text.types';
import { useContext } from 'react';
import { resolveSx, useMediaQuery, } from '@lucid-ui/core';
import { resolveA11y, } from '@/utils';
import { resolveClampStyle, resolveVariantClasses, TextContext } from './text.utils';


export const Text = ({
  lines, sx, style, children, testID, a11y, ref,
  variant = { name: 'body', },
}: TextProps) => {
  const { breakpoint, } = useMediaQuery();

  // determine whether component has nested children with context
  const isNested = useContext(TextContext);
  const Component = isNested ? 'span' : 'p';

  const className = resolveVariantClasses(variant);             // build class name from variant features
  const sxStyles = resolveSx(sx, breakpoint);                   // resolve sx into inline styles
  const clampStyles = resolveClampStyle(lines);                 // truncate text with an ellipsis so we don't exceed line count
  const styleObj = Object.assign(sxStyles, clampStyles, style); // merge style properties
  const accessibility = resolveA11y(a11y);                      // resolve accessibility props

  return (
    <TextContext.Provider value={ true }>
      <Component
        className={ className }
        style={ styleObj }
        data-component='text'
        data-testid={ testID }
        data-variant={ variant.name }
        ref={ ref }
        { ...accessibility }
      >
        { children }
      </Component>
    </TextContext.Provider>
  );
}
