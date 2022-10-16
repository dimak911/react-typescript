import { FC, ReactNode } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: ReactNode;
  variant: CardVariant;
}

const Card: FC<CardProps> = ({ width, height, variant, children }) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgrey" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
