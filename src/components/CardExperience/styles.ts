import styled from 'styled-components'

type ContainerProps = {
  show: boolean
}

export const Container = styled.li<ContainerProps>`
  padding: 60px;
  background: var(--color-1);
  box-shadow: 0px 30px 100px rgb(164 160 171 / 16%);
  border-radius: 30px 0px;
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: var(--color-3);
  margin-bottom: 34px;
  padding-left: 100px;
  transition: all 0.4s linear;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transform: ${(props) => (props.show ? 'translateY(0px)' : 'translateY(-150px)')};

  @media only screen and (max-width: 765px) {
    padding-left: 80px;
  }

  &:before {
    content:  url('/icons/check-icon.svg');
    position: absolute;
    left: 50px;
    margin-top: 6px;

    @media only screen and (max-width: 765px) {
      left: 30px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    line-height: 100%;
    color: white;
    opacity: 0.9;
  }
`