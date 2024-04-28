'use client';

import { ReactNode } from 'react';
import { css } from '../styled-system/css';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return <div className={css({ color: 'black.90' })}>버튼 색깔 노란색</div>;
};
