import styled from 'styled-components'


export const Container = styled.div`
 
  .logo {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(1);
    position: fixed;
    width: 50vw;
    height: auto;
    animation: 3s appear-logo infinite;
    z-index: 1;
  }

  .stars {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
  }

  @keyframes appear-logo {
    0% {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) translateY(-50%) scale(1.1);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
`