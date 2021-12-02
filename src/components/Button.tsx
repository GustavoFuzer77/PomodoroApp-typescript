import React from "react";

interface Props {
  onClick?: () => void;
  text: string;
  ClassName?: string
}

export function Button(props: Props): JSX.Element {
  return (
    <button className={props.ClassName} onClick={props.onClick}>{props.text}</button>
  )
}