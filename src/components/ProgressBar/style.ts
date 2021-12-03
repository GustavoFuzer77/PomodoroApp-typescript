import styled from 'styled-components';

interface Props {
  timeBar: string
}

export const ContainerStyles = styled.div`
    height: 17px;
    width: 100%;
    background-color: #fff;
    border-radius: 62px;
    margin: 50;
`;

export const FillerStyles = styled.div<Props>`
    height: 17px;
    width: ${(props) => props.timeBar ? props.timeBar : '0%'};
    background-color: #2aff;
    border-radius: 62px;
    text-align: right;
`;

export const SpanBar = styled.span`
    color: black;
    margin: 0px 5px;
    font-size: 0.8rem;
    font-weight: bold;
`;