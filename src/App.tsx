import React from 'react';
import { PomodoroTimer } from './components/PomodoroTimer'

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer PomoTimer={2100} shortTime={300} longRest={600} cycles={4}/>
    </div>
  );
}

export default App;
