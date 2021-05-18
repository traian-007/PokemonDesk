import React from 'react';
// import PropTypes from 'prop-types'
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: string;
  width: string;
  size: string;
}

const Button = ({ children, onClick, color, width, size }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(s.root, s[size as keyof typeof s])}
      onClick={onClick}
      style={{ backgroundColor: color, width: width }}>
      {children}
    </button>
  );
};

export default Button;
// [s.big]: size === 'big', [s.small]: size === 'small' })
