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
  selected = false,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = selected ? 'storybook-button--selected' : 'storybook-button';
  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
