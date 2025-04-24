import { IconType } from 'react-icons';
import { ReactNode } from 'react';

declare module 'react-icons' {
  interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export type IconType = (props: IconBaseProps) => JSX.Element;
} 