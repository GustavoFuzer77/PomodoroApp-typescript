import React, { useEffect, useState, useCallback } from "react";
import { useInterval } from "../hooks/useInterval";
import { Button } from './Button'
import { Timer } from './Timer'
import { Progress } from './ProgressBar/ProgressBar';
import { secondToTime } from "../utils/secondToTime";

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
  const [resting, setResting] = useState(false);
  const [cycles, setCycles] = useState(new Array(props.cycles - 1).fill(true));
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(() => {
    setMainTimer(mainTimer - 1)
    if(working) setFullWorkingTime(fullWorkingTime + 1)
  }, timeCount ? 1000 : null)

  const configWorker = useCallback(() => {
    setTimeCount(true)
    setWorking(true)
    setResting(false)
    setMainTimer(props.PomoTimer)
  },[props.PomoTimer])

  const configRest = useCallback((long: boolean) => {
    setTimeCount(true)
    setWorking(false)
    setResting(true)

    if(long){
      setMainTimer(props.longRest)
    }else{
      setMainTimer(props.shortTime)
    }
  },[props.longRest, props.shortTime])

  function percentBar(props: number){
    let max = 2100
    let percent = Math.trunc((props / max) * 100)
    return percent;
  }

  useEffect(() => {
    if(working) document.body.classList.add('working')  
    if(resting) document.body.classList.remove('working')
    if(mainTimer > 0) return

    if(working && cycles.length > 0){
      configRest(false)
      cycles.pop()
    }else if(working && cycles.length <= 0){
      configRest(true);
      setCycles(new Array(props.cycles - 1).fill(true))
      setCompletedCycles(completedCycles + 1)
    }

    if(working) setNumberOfPomodoros(numberOfPomodoros + 1)
    if(resting) configWorker()
  },[working, resting, mainTimer, cycles, numberOfPomodoros, configWorker, configRest, props.cycles, completedCycles])


  return (
    <div className="pomodoro">
      <h2><span className="span">Timer</span>: {`${!working ? 'ZzzZZ' : 'Estudando...'}`}</h2>
      <Timer mainTimer={mainTimer} />
      {working ? (<Progress complete={false} timeBar={`${percentBar(mainTimer)}%`} />) : ''}

      <div className="controls">
        <Button text='work' onClick={() => configWorker()} />
        <Button ClassName={!working && !resting ? 'hidden' : ''} text={timeCount ? 'pause' : 'play'} onClick={() => setTimeCount(!timeCount)} />
        <Button text="rest" onClick={() => configRest(false)} />
      </div>

      <div className="details">
        <p>stats: {`${timeCount ? 'Estudando...' : 'Parado'}`}</p>
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas estudadas: {secondToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>

    </div>
  )
}