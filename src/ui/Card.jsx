import { Card as CardCore, CardBody as CardBodyCore, CardFooter as CardFooterCore } from '@material-tailwind/react';

export function Card({ children, ...restProps }) {
  return <CardCore {...restProps}>{children}</CardCore>;
}
export function CardBody({ children, ...restProps }) {
  return <CardBodyCore {...restProps}>{children}</CardBodyCore>;
}
export function CardFooter({ children, ...restProps }) {
  return <CardFooterCore {...restProps}>{children}</CardFooterCore>;
}
