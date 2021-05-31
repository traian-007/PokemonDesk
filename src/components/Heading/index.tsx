import React from 'react';
import cn from 'classnames';
// import s from './Heading.module.scss';
const HEADING_LEVEL = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
};
interface HeadingProps {
  children: React.ReactNode;
  size: string;
  className: string;
}

const Heading: React.FC<HeadingProps> = ({ children, size, className }: HeadingProps) => {
  const headingProps = {
    className: cn(className),
  };
  return React.createElement(`h${HEADING_LEVEL[size]}`, headingProps, children);
};
export default Heading;
