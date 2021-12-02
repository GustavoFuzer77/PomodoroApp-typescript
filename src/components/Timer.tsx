import React from "react";
import {secondToMin} from "../utils/secondToMin";

interface Props {
  mainTimer: number
}

export function Timer(props: Props): JSX.Element {
  return (
    <div className="timer">{secondToMin(props.mainTimer)}</div>
  )
}