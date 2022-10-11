import { Section } from "./Styles/CardStyle";
export const Card = (props) => {
  return <Section color={props.colorOfCard}>{props.children}</Section>;
};
