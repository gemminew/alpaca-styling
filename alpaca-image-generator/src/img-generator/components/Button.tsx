import { useRef, useState } from 'react';
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

  const [ selectedBtn, setSelectedBtn ] = useState(false);
  const btnSelected = () => setSelectedBtn( !selected );

  const btnRef = useRef(null);

  const mode = selected || selectedBtn ? 'storybook-button--selected' : 'storybook-button';
  
  return (
    <button
      ref={btnRef}
      onClick={btnSelected}
      type="button"
      className={['storybook-button', mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
