import { useId } from "react";
import type { ElementType } from "react";
import type { TextFieldProps } from "./types";
import "./textfield.css";


export function TextField <C extends ElementType = 'div'> ({
  as,
  name,
  value,
  defaultValue,
  placeholder = 'Say something',
  type,
  disabled = false,
  readOnly = false,
  required = false,
  autoComplete = 'on',
  autoFocus = false,
  inputMode = 'text',
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  variant = 'neutral',
  size = 'md',
  appearance = 'outlined',
  leadingNode,
  trailingNode,
  message,
  inputClassname,
  className,
  'data-testid': testId,
  ...rest
}: TextFieldProps<C>) {

  const messageId = useId();

  const Tag = (as ?? 'div') as ElementType;

  const rootClasses = [
    'textfield',
    `textfield--${variant}`,
    `textfield--${size}`,
    `textfield--${appearance}`,
    disabled && `textfield--disabled`,
    readOnly && `textfield--readonly`,
    leadingNode && `textfield--has-leading`,
    trailingNode && `textfield--has-trailing`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = ['textfield__input', inputClassname]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={ rootClasses }
      data-component='textfield'
      data-testid={ testId }
      { ...rest }
    >
      <div className='textfield__row'>
        {
          leadingNode &&
          <span
            className='textfield__leading'
            aria-hidden='true'
          >
            { leadingNode }
          </span>
        }
        <input
          className={ inputClasses }
          name={ name }
          value={ value }
          defaultValue={ defaultValue }
          placeholder={ placeholder }
          type={ type }
          disabled={ disabled }
          readOnly={ readOnly }
          required={ required }
          autoComplete={ autoComplete }
          autoFocus={ autoFocus }
          inputMode={ inputMode }
          aria-invalid={ variant === 'error' ? 'true' : undefined }
          aria-describedby={ message ? messageId : undefined }
          onChange={ onChange }
          onBlur={ onBlur }
          onFocus={ onFocus }
          onKeyDown={ onKeyDown }
        />
        {
          trailingNode &&
          <span
            className='textfield__trailing'
            aria-hidden='true'
          >
            { trailingNode }
          </span>
        }
      </div>
      {
        message &&
        <span
          id={ messageId }
          className='textfield__message'
        >
          { message }
        </span>
      }
    </Tag>
  );
};