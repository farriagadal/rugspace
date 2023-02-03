import styled from 'styled-components'


type SectionProps = {
  isActive: boolean
}

export const Section = styled.div<SectionProps>`
  height: 940px;
  max-height: ${(props) => (props.isActive ? '940px' : '700px')};
  background: ${(props) => (props.isActive ? 'var(--color-1)' : 'none')};
  transition: max-height 0.2s linear, background 1.5s linear;
  position: relative;
  z-index: 1;
  display: grid;
  margin-top: 80px;


  @media only screen and (max-width: 765px) {
    max-height: initial;
    height: initial;
    background: none;

  }
`

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  color: var(--color-3);
  display: flex;

  @media only screen and (max-width: 765px) {
    display: block;
    padding: 0 20px;
  }
`

type BgImgProps = {
  isActive: boolean
}

export const BgImg = styled.div<BgImgProps>`
  position: relative;
  overflow: hidden;
  width: 540px;
  min-width: 540px;
  height: 500px;
  border-top-left-radius: 110px;
  border-bottom-right-radius: 110px;
  background: var(--color-1);
  box-shadow: 0px 30px 100px rgba(18, 7, 35, 0.1);
  z-index: 1;

  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(-100px)')};
  transition: all 0.8s linear;


  @media only screen and (max-width: 765px) {
    transform: translateY(0px);
    max-width: 100%;
    width: 100%;
    height: 90vw;
    min-width: 100%;
    margin-bottom: 38px;
  }

  img {
    object-fit: cover;
    transform: ${(props) => (props.isActive ? 'scale(1)' : 'scale(1.2)')};
    transition: all 0.8s linear;

    @media only screen and (max-width: 765px) {
      transform: scale(1);
    }
  }
`

type TextProps = {
  isActive: boolean
}

export const Text = styled.div<TextProps>`
  margin-left: 95px;
  align-self: center;

  @media only screen and (max-width: 765px) {
    margin-left: 0px;
  }

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${(props) => (props.isActive ? 'var(--color-1)' : 'var(--color-2)')};

    @media only screen and (max-width: 765px) {
      color: var(--color-2);
      margin-left: 18px;
    }

    &:before {
      content: '';
      left: 0;
      width: 49%;
      border-bottom: solid 1px;
      margin-top: 10px;
      position: absolute;
      opacity: 0.3;

      @media only screen and (max-width: 765px) {
        width: 20px;
      }
    }
  }

  h2 {
    line-height: 100%;
    &::after {
      content: '.';
      color: ${(props) => (props.isActive ? 'var(--color-1)' : 'var(--color-2)')};
    }
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
  }
`