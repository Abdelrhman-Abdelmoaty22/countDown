import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const [isSPressed,setIsSPressed] = useState(false);
  const [isMPressed,setIsMPressed] = useState(false);
  const [isHPressed,setIsHPressed] = useState(false);

  useEffect(() => {
    let interval = null;
    // to be ready
    setIsReady(!(seconds === 0 && minutes === 0 && hours === 0));

    //start is the timer is active
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              setIsActive(false);
              setIsReady(false);
            } else {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours]);

  const toggleTimer = useCallback(() => {
    if (!isReady) return;
    setIsActive((prevIsActive) => !prevIsActive);
  }, [isReady]);

  const resetTimer = useCallback(() => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsActive(false);
    setIsReady(true);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const upSeconds = useCallback(() => {
    setSeconds((prevSeconds) => (prevSeconds === 0 ? 59 : prevSeconds - 1));
  }, []);

  const upMinutes = useCallback(() => {
    setMinutes((prevMinutes) => (prevMinutes === 0 ? 59 : prevMinutes - 1));
  }, []);

  const upHours = useCallback(() => {
    setHours((prevHours) => (prevHours === 0 ? 23 : prevHours - 1));
  }, []);

  const downSeconds = useCallback(() => {
    setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
  }, []);

  const downMinutes = useCallback(() => {
    setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
  }, []);

  const downHours = useCallback(() => {
    setHours((prevHours) => (prevHours === 23 ? 0 : prevHours + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 's') {
        setIsSPressed(true);
      }

      if (event.key === 'h') {
        setIsHPressed(true);
      }

      if (event.key === 'm') {
        setIsMPressed(true);
      }
      if(!isActive){
        if (isSPressed && event.key === 'ArrowUp') {
          upSeconds();
        }
        
        if (isMPressed && event.key === 'ArrowUp') {
          upMinutes();
        }

        if (isHPressed && event.key === 'ArrowUp') {
          upHours();
        }

        if (isSPressed && event.key === 'ArrowDown') {
          downSeconds();
        }
        
        if (isMPressed && event.key === 'ArrowDown') {
          downMinutes();
        }
        
        if (isHPressed && event.key === 'ArrowDown') {
          downHours();
        }
      }
      
    };

    const handleKeyUp = (event) => {
      if (event.key === 's') {
        setIsSPressed(false);
      }
      
      if (event.key === 'm') {
        setIsMPressed(false);
      }
      
      if (event.key === 'h') {
        setIsHPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isActive, isSPressed,isMPressed,isHPressed, upSeconds,upMinutes,upHours,downSeconds,downMinutes,downHours]);
  

  return (
    <div className="App">
      <div className='up-arrow'>
        <button onClick={upHours} disabled={isActive}> &#9650;</button>
        <button onClick={upMinutes} disabled={isActive}> &#9650;</button>
        <button onClick={upSeconds} disabled={isActive}> &#9650;</button>
      </div>
      <div className="timer" align="center">
        <span>{formatTime(hours)}</span>:
        <span>{formatTime(minutes)}</span>:
        <span>{formatTime(seconds)}</span>
      </div>
      <div className='down-arrow'>
        <button onClick={downHours} disabled={isActive}>&#9660;</button>
        <button onClick={downMinutes} disabled={isActive}>&#9660;</button>
        <button onClick={downSeconds} disabled={isActive}>&#9660;</button>
      </div>
      <div className="controls">
        <button onClick={toggleTimer} disabled={!isReady}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
