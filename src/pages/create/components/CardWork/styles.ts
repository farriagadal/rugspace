import styled from 'styled-components'

type ContainerProps = {
  isActive?: boolean;
  delay: number
}

export const Container = styled.div<ContainerProps>`
  display: block;
  padding: 40px 35px;
  border-top-left-radius: 61px;
  border-bottom-right-radius: 45px;
  border-radius: 24px;
  background: #0d0b20;
  box-shadow: 0px 30px 100px rgb(164 160 171 / 16%);
  animation:  2s move infinite ease-in-out;
  animation-delay: ${(props) => props.delay * 1}s;
  transform: translateY(0px);
  cursor: pointer;

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

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
    color: #7E888D;
  }

  h4 {
    &::after {
      content: '.';
      color: var(--color-2);
    }
  }
`

export const IconContainer = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-height: 100%;
  }

  svg, path{
    fill: var(--color-2);
  }
`


export const Title = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 60px;
    color: var(--color-4);
  }

  h4 {
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 26px;
    line-height: 100%;
    margin: 0;
    margin-left: 40px;
  }
`
