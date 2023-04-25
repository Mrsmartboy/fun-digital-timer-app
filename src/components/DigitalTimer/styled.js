import styled from 'styled-components'

export const DigitalTimerContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(to right,#ffffff,#cffcf1);
`
export const Header = styled.h1`
 color: #1e293b;
 font-size: 30px;
 font-weight: bold;
`
export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:576px){
    flex-direction: column;
  }

`
export const TimerRunningContainer= styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 35%;


`
export const TimerCardContainer= styled.div`
   background-color: #ffffff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   padding: 30px;
   
`

export const Timer= styled.p`
  color: #00d9f5;
  font-size: 20px;
  font-weight: bold;
  margin: 0px;

`
export const Run= styled.span`
  color: #0f172a;
  font-size: 15px;
  font-weight: 600;
`

export const TimerDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`
export const PauseAndResetContainer= styled.div`
display: flex;
flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PauseContainer= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;

`

export const PauseImg= styled.img`
  width: 32px;
  height: 32px;
 

`

export const Pause = styled.p`
  color: #0f172a;
  font-size: 25px;
  font-weight: bold;
`
export const ResetContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
`
export const ResetImg= styled.img`
 width: 32px;
  height: 32px;
`
export const Reset = styled.p`
 color: #0f172a;
  font-size: 25px;
  font-weight: bold;
`
export const TimerLimitText= styled.p`
  color: #0f172a;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 0px;
`
export const TimerControlContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
`
export const DecreaseButton=styled.button`
   border: none;
   outline: none;
   background-color: transparent;
   padding: 10px;
   color: #000000;
   font-size: 20px;
   font-weight: bold;
   text-align: center;
   cursor: pointer;
`
export const DigitText= styled.p`
   background-image: linear-gradient(to right,#defafe,#00d9f5);
   text-align: center;
   color: #0f172a;
   font-size:20px ;
   font-weight: bold;
   width: 50px;
   border-radius: 10px;
   padding: 5px;
`
export const IncreaseButton=styled.button`
   border: none;
   outline: none;
   background-color: transparent;
   padding: 10px;
   color: #000000;
   font-size: 20px;
   font-weight: bold;
   text-align: center;
   cursor: pointer;
`
export const PauseButton= styled.button`
   border: none;
   outline: none;
   background-color: transparent;
   cursor: pointer;
   text-align: center;
`
export const ResetButton = styled.button`
  border: none;
   outline: none;
   background-color: transparent;
   cursor: pointer;
   text-align: center;
   cursor: pointer;
`