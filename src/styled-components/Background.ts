import styled from 'styled-components'

export const Background1 = styled.div`
  background: url('/icons/stars1.svg');
  /* animation: 4s move infinite ease-in-out; */

  @keyframes move {
    0% {
      background-position-y: 0px;
    }
    50% {
      background-position-y: -5px;
    }
    100% {
      background-position-y: 0px;
    }
  } 
`

export const Background2 = styled.img`
  position: fixed;
  width: 100%;
  animation: 3s move infinite ease-in-out;
  transform: translateY(0px);
  z-index: 1;

  @keyframes move {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  } 
`
export const Content = styled.div`
  position: relative;
  z-index: 1;
`

