import React from "react";
import { CardContainer } from "./styled";

interface CardProps {
  text: string;
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
