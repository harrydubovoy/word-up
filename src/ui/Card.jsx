import { Card as CardCore, CardBody as CardBodyCore, CardFooter as  CardFooterCore } from '@material-tailwind/react';

export const Card = ({ children, ...restProps }) => <CardCore {...restProps}>{children}</CardCore>;
export const CardBody = ({ children, ...restProps }) => <CardBodyCore {...restProps}>{children}</CardBodyCore>;
export const CardFooter = ({ children, ...restProps }) => <CardFooterCore {...restProps}>{children}</CardFooterCore>;

export default Card;
