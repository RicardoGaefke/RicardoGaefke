import React from 'react';

export interface IButtonProps {
  children?: React.ReactNode,
  onClick?: (e:any) => void
}

const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps): any => {
  const { onClick, children } = props;

  return (
    <button onClick={onClick} style={styles} type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  onClick: (): void => {},
};

export default Button;
