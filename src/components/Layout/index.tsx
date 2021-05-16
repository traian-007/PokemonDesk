import React from 'react';
import cn from 'classnames';

import s from './Layout.module.scss';

interface ClassNames {
  children: React.ReactNode;
  className: string;
}

const Layout = ({ children, className }: ClassNames) => <div className={cn(s.root, className)}>{children}</div>;

export default Layout;
