import { Card as CardCore, CardBody as CardBodyCore } from '@material-tailwind/react';

export const Card = ({ children, ...restProps }) => <CardCore {...restProps}>{children}</CardCore>;
export const CardBody = ({ children, ...restProps }) => <CardBodyCore {...restProps}>{children}</CardBodyCore>;

export default Card;
