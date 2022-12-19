import { useRef, useState } from 'react';
import { useDetectSelectedButton } from '../hooks';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  selected?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  selected,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  const btnRef = useRef(null);
  const [ selectedBtn, setSelectedBtn ] = useDetectSelectedButton(btnRef, false);
  // const btnSelected = () => setSelectedBtn( true );

  console.log(btnRef)
  
  return (
    <button
      ref={btnRef}
      onClick={() => setSelectedBtn( true )}
      type="button"
      className={`storybook-button${selectedBtn || selected? '--selected' : ''}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
