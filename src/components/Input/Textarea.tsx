import type { ElementType } from "react";
import type { TextareaProps } from "@/types";
import { useCallback, useEffect, useId, useRef } from "react";
import "./textarea.css";


type GrowParams = {
  el: HTMLTextAreaElement;
  minRows: number;
  maxRows?: number;
};


/**
 * @description `applyGrow` does not need to live inside the render closure since
 * it is a pure function that takes an element and params. Keeps the component
 * body clean and makes the logic independently testable
 */
const applyGrow = ({ el, minRows, maxRows }: GrowParams): void => {
  // const style = getComputedStyle(el);
  // const lineHeight = parseFloat(style.lineHeight);
  // const paddingTop = parseFloat(style.paddingTop);
  // const paddingBottom = parseFloat(style.paddingBottom);

  // /** min height */
  // const minHeight = (lineHeight * minRows) + paddingTop + paddingBottom;

  // /** reset to auto so scrollHeight reflects actual content height */
  // el.style.height = 'auto';
  // const contentHeight = el.scrollHeight;

  // /** max height */
  // if (maxRows !== undefined) {
  //   const maxHeight = (lineHeight * maxRows) + paddingTop + paddingBottom;
  //   if (contentHeight >= maxHeight) {
  //     el.style.height = `${maxHeight}px`;
  //     el.style.overflowY = 'auto';
  //   } else {
  //     el.style.height = `${Math.max(contentHeight, minHeight)}px`;
  //     el.style.overflowY = 'hidden';
  //   }
  // } else {
  //   el.style.height = `${Math.max(contentHeight, minHeight)}px`;
  //   el.style.overflowY = 'hidden';
  // }
}


export function Textarea <C extends ElementType = 'div'> ({
  as,
  name,
  value,
  defaultValue,
  placeholder = 'Say something',
  disabled = false,
  readOnly = false,
  required = false,
  autoComplete = 'off',
  autoFocus = false,
  inputMode = 'text',
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  variant = 'neutral',
  appearance = 'outlined',
  minRows = 1,
  maxRows,
  leadingNode,
  trailingNode,
  message,
  inputClassname,
  className,
  'data-testid': testId,
  ...rest
}: TextareaProps<C>) {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messageId = useId();

  const Tag = (as ?? 'div') as ElementType;

  /** auto-grow */
  const handleGrow = useCallback(() => {
    if (textareaRef.current) {
      applyGrow({
        el: textareaRef.current,
        minRows,
        maxRows,
      });
    }
  }, [minRows, maxRows]);
  
  useEffect(() => {
    handleGrow();
  }, [value, handleGrow]);


  // class composition
  const rootClasses = [
    'textarea',
    `textarea--${variant}`,
    `textarea--${appearance}`,
    disabled && `textarea--disabled`,
    readOnly && `textarea--readonly`,
    leadingNode && `textarea--has-leading`,
    trailingNode && `textarea--has-trailing`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = ['textarea__input', inputClassname]
    .filter(Boolean)
    .join(' ');


  return (
    <Tag
      className={ rootClasses }
      data-component='textarea'
      data-testid={ testId }
      { ...rest }
    >
      <div className='textarea__row'>
        {
          leadingNode &&
          <span
            className='textarea__leading'
            aria-hidden='true'
          >
            { leadingNode }
          </span>
        }
        <textarea
          ref={ textareaRef }
          rows={ 1 }
          className={ inputClasses }
          name={ name }
          value={ value }
          defaultValue={ defaultValue }
          placeholder={ placeholder }
          disabled={ disabled }
          readOnly={ readOnly }
          required={ required }
          autoComplete={ autoComplete }
          autoFocus={ autoFocus }
          inputMode={ inputMode }
          aria-invalid={ variant === 'error' ? 'true' : undefined }
          aria-describedby={ message ? messageId : undefined }
          onChange={ event => {
            handleGrow();
            onChange?.(event);
          }}
          onBlur={ onBlur }
          onFocus={ onFocus }
          onKeyDown={ onKeyDown }
        />
        {
          trailingNode &&
          <span
            className='textarea__trailing'
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
          className='textarea__message'
        >
          { message }
        </span>
      }
    </Tag>
  );
}