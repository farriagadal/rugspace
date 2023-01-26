import styled from 'styled-components'

export const Container = styled.div`
  color: var(--color-3);  //
  position: relative;
  /* background: linear-gradient(100.79deg, var(--color-2) 6.96%, var(--color-1) 98.01%); */
  background-image: url('/images/graficos.jpg');
  max-width: var(--container-width);
  margin: auto;
  margin-top: 120px;
  height: 650px;
  padding-top: 92px;
  padding-left: 100px;
  padding-bottom: 80px;
  border-top-left-radius: 125px;
  border-bottom-right-radius: 125px;

  &:before {
    content: '';
    top: -2px;
    left: -2px;
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(127deg,#0d0b20 37.96%,#00000038 119.01%);
    opacity: 0.9;
    border-top-left-radius: 125px;
    border-bottom-right-radius: 125px;

  }

  @media only screen and (max-width: 765px) {
    padding-top: 78px;
    padding-left: 33px;
    padding-bottom: 72px;
    border-top-left-radius: 90px;
    margin-left: 20px;
    margin-top: 76px;
  }

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.04em;
    max-width: 494px;
    opacity: 0.7;
    @media only screen and (max-width: 765px) {
      padding-right: 20px;
    }
  }

  h1 {
    margin-top: 85px;
    margin-bottom: 40px;
    max-width: 565px;
    font-size: 80px;
    line-height: 100%;
    overflow-wrap: anywhere;
    font-size: 57px;

    @media only screen and (max-width: 765px) {
      padding-right: 20px;
    }

    &::after {
      content: '.';
      color: var(--color-1);
    }
  }

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #ffc700;
    display: flex;
    white-space: nowrap;
    z-index: 1;
    position: inherit;

    &::after {
      content: '';
      width: 100%;
      border-bottom: solid 1px #ffc700;
      margin-bottom: 8px;
      margin-left: 32px;
    }
  }

  .splide__track {
    overflow: initial;
  }
`

type BgImgProps = {
  show: boolean;
}

export const BgImg = styled.div<BgImgProps>`
  overflow: hidden;
  position: relative;
  width: 540px;
  height: 537px;
  position: absolute;
  top: -170px;
  right: calc((99vw - var(--container-width)) / 2);
  border-top-left-radius: 110px;
  border-bottom-right-radius: 110px;
  background: var(--color-1);
  box-shadow: 0px 30px 100px rgba(18, 7, 35, 0.3);

  @media only screen and (max-width: 765px) {
    display: none;
  }

  &:after {
    content: '';
    display: ${props => props.show ? 'block' : 'none'};
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    animation: opacityless linear 5s;
    opacity: 0.5;
    background: linear-gradient(44deg,rgb(1 24 34 / 26%) 0%,var(--color-1) 100%);
    z-index: 1;
  }

  img {
    object-fit: cover;
    animation: expand linear 12s;
    display: ${props => props.show ? 'block' : 'none'};
    transform: scale(1.2);
  }

  @keyframes opacityless {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes expand {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`

export const ArrowDown = styled.a`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin: auto;
  margin-top: 45px;
  display: block;

  img {
    filter: brightness(0) invert(1);
    animation: updown infinite 2s ease-in-out;
  }

  @keyframes updown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`