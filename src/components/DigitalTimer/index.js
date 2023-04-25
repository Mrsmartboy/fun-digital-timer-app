import {useState,useEffect} from 'react'


import {DigitalTimerContainer,Header,TimerContainer,
    TimerRunningContainer,
    TimerDataContainer,PauseContainer,Run,
    ResetContainer,PauseAndResetContainer,TimerLimitText,
    
    TimerControlContainer,
    DecreaseButton,DigitText,IncreaseButton,TimerCardContainer,
    Timer,PauseImg,Pause,ResetImg,Reset,PauseButton,ResetButton} from './styled'

const DigitalTimer= ()=>{
       const [timerRunning,setTimerRunning]= useState(false)
       const [timerInMinutes,setTimerInMinutes]= useState(25)
       const [timerInSeconds,setTimerInSeconds]= useState(0) 
       
     
       useEffect(()=>{
        if (timerRunning){
            const timerId = setInterval(getIncrement,1000)
            return ()=>{
              clearInterval(timerId)
            }
        }

       })

     const  getIncrement=()=>{
          const isTimerCompleted = timerInMinutes*60===timerInSeconds

          if (isTimerCompleted){
                 setTimerRunning(false)
          }else{
            setTimerInSeconds(prevState=>prevState+1)
          }

       }

       const onPausePlayButton=()=>{
        const isTimerCompleted = timerInSeconds===timerInMinutes*60
            if (isTimerCompleted){
               setTimerInSeconds(0)
            }
           setTimerRunning(prevState=>!prevState)
       }

     

       

       const onResetButton =()=>{
          setTimerInMinutes(25)
          setTimerInSeconds(0)
          setTimerRunning(prevState=>!prevState)
       }

       const onDecrement=()=>{
        if (timerInMinutes>1 && !timerRunning){
        setTimerInMinutes(prevState=>prevState-1)
        }

       }

       const onIncrement=()=>{

        if (!timerRunning){
        setTimerInMinutes(prevState=>prevState+1)
        }
       }

       const getStringifiedTimer=()=>{
         const getTotalSeconds= timerInMinutes*60-timerInSeconds
         const minutes = Math.floor(getTotalSeconds/60) 
         const seconds = Math.floor(getTotalSeconds%60)
         const stringifiedMinutes = minutes>9?minutes:`0${minutes}`
         const stringifiedSeconds = seconds > 9?seconds:`0${seconds}`
         return `${stringifiedMinutes}:${stringifiedSeconds}`
       }

       const stringifiedTimer = getStringifiedTimer()
       const imageUrl= timerRunning?"https://assets.ccbp.in/frontend/react-js/pause-icon-img.png":"https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
       const altIcon =timerRunning?"pause icon":"play icon"
       const Text = timerRunning?"Pause":"Start"
       const status = timerRunning?"Running":"Paused"
    return(
        <DigitalTimerContainer>
            <Header>Digital Timer</Header>
            <TimerContainer>
                <TimerRunningContainer>
                     <TimerCardContainer>
                        <Timer>{stringifiedTimer} <br/><Run>{status}</Run></Timer>
                     </TimerCardContainer>
                </TimerRunningContainer>
             <TimerDataContainer>
                <PauseAndResetContainer>
                <PauseContainer>
                    <PauseButton type="button" onClick={onPausePlayButton}>
                    <PauseImg src={imageUrl} alt={altIcon}/>
                    </PauseButton>
                    <Pause>{Text}</Pause>
                </PauseContainer>
                <ResetContainer>
                    <ResetButton type="button" onClick={onResetButton}>
                    <ResetImg src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png " alt="reset"/>
                    </ResetButton>
                    <Reset>Reset</Reset>
                </ResetContainer>
                </PauseAndResetContainer>
              <TimerLimitText>Set Timer limit</TimerLimitText>
              <TimerControlContainer>
                <DecreaseButton type="button" onClick={onDecrement}>-</DecreaseButton>
                <DigitText>{timerInMinutes}</DigitText>
                <IncreaseButton onClick={onIncrement}>+</IncreaseButton>
              </TimerControlContainer>
             </TimerDataContainer>
            </TimerContainer>
        </DigitalTimerContainer>
    )

}


export default DigitalTimer