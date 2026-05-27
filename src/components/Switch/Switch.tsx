import { useState } from "react";
import type { ElementType } from "react";
import type { SwitchProps } from "./types";
import "./switch.css";


export function Switch <C extends ElementType = 'button'> ({
  as,
  checked,
  defaultChecked = false,
  label = 'Switch',
  size = 'md',
  disabled = false,
  onChange,
  className,
  'data-testid': testId,
  ...rest
}: SwitchProps<C>) {

  const Tag = (as ?? 'button') as ElementType;

  const [isInternalChecked, setIsInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : isInternalChecked;

  const handleClick = () => {
    if (disabled) return;
    const next = !isOn;
    if (!isControlled) setIsInternalChecked(next);
    onChange?.(next);
  };

  const classes = [
    'switch',
    `switch--${size}`,
    isOn && 'switch--on',
    disabled && 'switch--disabled',
    className,
  ]
  .filter(Boolean)
  .join(' ');  

  return (
    <Tag
      onClick={ handleClick }
      className={ classes }
      role='switch'
      type='button'
      data-component='switch'
      data-testid={ testId }
      aria-checked={ isOn }
      aria-label={ label }
      aria-disabled={ disabled }
      { ...rest }
    >
      <span className='switch__track'>
        <span className='switch__thumb'/>
      </span>
    </Tag>
  );
}