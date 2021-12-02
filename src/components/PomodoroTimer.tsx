import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { Button } from './Button'
import { Timer } from './Timer'
import { Progress } from './ProgressBar/ProgressBar';

interface Props {
  PomoTimer: number;
  shortTime: number;
  longRest: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTimer, setMainTimer] = useState(props.PomoTimer);
  const [timeCount, setTimeCount] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if(working){
      document.body.classList.add('working')
    }
  },[working])

  useInterval(() => {
    setMainTimer(mainTimer - 1)
  }, timeCount ? 1000 : null)

  const configWorker = () => {
    setTimeCount(true)
    setWorking(true)
  }

  
  return (
    <div className="pomodoro">
      <h2><span className="span">Timer</span>: {`${!working ? 'Stoped' : 'in Working'}`}</h2>
      <Timer mainTimer={mainTimer} />
      <Progress complete="g" timeBar={`${100}%`} />

      <div className="controls">
        <Button text={`${!working ? 'Iniciar' : 'Iniciado'}`} onClick={() => configWorker()} />
        <Button ClassName='pause' text="Pausar" onClick={() => console.log('clicado')} />
        <Button text="teste" onClick={() => console.log('clicado')} />
      </div>

      <div className="details">
        <p>stats: {`${working ? 'Estudando...' : 'Parado'}`}</p>
        <p>teste de details</p>
        <p>teste de details</p>
        <p>teste de details</p>
      </div>


    </div>
  )
}