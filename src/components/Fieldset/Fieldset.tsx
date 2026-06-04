import type { ElementType } from "react";
import type { FieldsetProps } from "@/types";
import { useId } from "react";
import "./fieldset.css";


export function Fieldset <C extends ElementType = 'div'> ({
  id,
  as,
  legend,
  caption,
  surface = 'default',
  columns = 1,
  bordered = false,
  disabled = false,
  className,
  children,
  'data-testid': testId,
  ...rest
}: FieldsetProps<C>) {
  
  const generatedId = useId();
  const legendId = `fieldset-legend-${id ?? generatedId}`;

  const Tag = (as ?? 'div');

  const rootClasses = [
    'fieldset-wrapper',
    surface !== 'default' && `fieldset-wrapper--surface-${surface}`,
    bordered && 'fieldset-wrapper--bordered',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const fieldsetClasses = [
    'fieldset',
    columns > 1 && `fieldset--cols-${columns}`
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={ rootClasses }
      data-component='fieldset'
      data-testid={ testId }
      { ...rest }
    >
      <fieldset
        className={ fieldsetClasses }
        disabled={ disabled }
        aria-labelledby={ `fieldset-legend-${legendId}` }
      >
        <p
          id={ `fieldset-legend-${legendId}` }
          className='fieldset__legend'
        >
          { legend }
        </p>
        {
          caption &&
          <p className='fieldset__caption'>{ caption }</p>
        }
        <div className='fieldset__fields'>
          { children }
        </div>
      </fieldset>
    </Tag>
  );
}