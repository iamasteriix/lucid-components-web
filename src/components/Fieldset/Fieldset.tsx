import type { ElementType } from "react";
import type { FieldsetProps } from "./types";
import "./fieldset.css";


export function Fieldset <C extends ElementType = 'div'> ({
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

  const Tag = (as ?? 'div');

  const wrapperClasses = [
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
      className={ wrapperClasses }
      data-component='fieldset'
      data-testid={ testId }
      { ...rest }
    >
      <fieldset
        className={ fieldsetClasses }
        disabled={ disabled }
        aria-labelledby={ `fieldset-legend-${testId}` }
      >
        <p
          id={ `fieldset-legend-${testId}` }
          className='fieldset__legend'
        >
          { legend }
        </p>
        {
          caption && <p className='fieldset__caption'>{ caption }</p>
        }
        <div className='fieldset__fields'>
          { children }
        </div>
      </fieldset>
    </Tag>
  );
}