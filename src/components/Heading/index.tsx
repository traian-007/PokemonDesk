import React from 'react';
// import s from './Heading.module.scss';
import cn from 'classnames';

interface HeadingProps {
  children: React.ReactNode;
  size: number;
  className: string;
}

const Heading = ({ children, size, className }: HeadingProps) => {
  switch (size) {
    case 72:
      return <h1 className={cn(className)}>{children}</h1>;
    case 65:
      return <h2 className={cn(className)}>{children}</h2>;
    case 36:
      return <h3 className={cn(className)}>{children}</h3>;
    case 24:
      return <h4 className={cn(className)}>{children}</h4>;
    case 18:
      return <h5 className={cn(className)}>{children}</h5>;
    case 12:
      return <h6 className={cn(className)}>{children}</h6>;
    case 16:
      return <p className={cn(className)}>{children}</p>;
    default:
      return <p className={cn(className)}>{children}</p>;
  }
};
export default Heading;
