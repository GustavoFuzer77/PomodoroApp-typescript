import React from "react";
import { SpanBar ,FillerStyles, ContainerStyles } from './style';

interface Props {
  complete: string;
  timeBar: string;
}

export function Progress(props: Props): JSX.Element {

  const { complete, timeBar } = props;

  return (
    <ContainerStyles>
      <FillerStyles>
        <SpanBar>{timeBar}</SpanBar>
      </FillerStyles>
    </ContainerStyles>
  )
}