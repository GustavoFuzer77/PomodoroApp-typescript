import React from "react";
import { SpanBar ,FillerStyles, ContainerStyles } from './style';

interface Props {
  complete: boolean;
  timeBar: string;
}

export function Progress(props: Props): JSX.Element {

  const { complete, timeBar } = props;

  return (
    <ContainerStyles>
      <FillerStyles timeBar={timeBar}>
        <SpanBar>{timeBar}</SpanBar>
      </FillerStyles>
    </ContainerStyles>
  )
}