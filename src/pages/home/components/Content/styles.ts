import styled from 'styled-components'

export const Container = styled.div`
  width: var(--content-width);
  margin: auto;
  color: var(--color-3);
  padding-bottom: 72px;


  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
    margin: auto;
  }

  b p {
    color: var(--color-3);
    font-weight: 700;
  }

  p {
    color: white;
    font-weight: 400;
  }

  ul {
    /* background: var(--color-2);
    border-radius: 30px 0px; */
    /* padding: 60px; */
    margin: 70px -60px;
    list-style-type: none;
    position: relative;

    @media only screen and (max-width: 765px) {
      margin: 40px 0;
      padding: 0px;
    }


    /* li {
      padding: 60px;
      background: var(--color-2);
      border-radius: 30px 0px;
      font-family: 'Nunito';
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      letter-spacing: 0.04em;
      color: var(--color-3);
      margin-bottom: 34px;
      padding-left: 80px;

      @media only screen and (max-width: 765px) {
        padding-left: 50px;
      }

      &:before {
        content:  url('/icons/check-icon.svg');
        position: absolute;
        left: 80px;
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

    } */
  }
`
export const BtnContact = styled.div`
  margin-top: 47px;
  background: var(--color-1);
  border: 1px solid var(--color-2);
  border-radius: 20px 0px;
  width: 214px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--color-3);

  &:hover {
    background: var(--color-2);
  }
`

export const Title = styled.div`
  color: var(--color-3);
  margin-top: 100px;

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-2);
    text-align: center;
    display: block;

    @media only screen and (max-width: 765px) {
      text-align: left;
      margin-left: 20px;
    }

    &:after {
      content: '';
      left: calc(50% + 120px);
      width: calc(49vw - 120px);
      border-bottom: solid 1px;
      margin-top: 10px;
      position: absolute;
      opacity: 0.3;

      @media only screen and (max-width: 765px) {
        text-align: left;
        left: initial;
        width: calc(100vw - 170px);
        margin-left: 20px;
      }
    }
  }


  h2  {
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.04em;
    max-width: 600px;
    margin: 34px auto 70px auto;

    @media only screen and (max-width: 765px) {
      text-align: left;
      margin-left: 20px;
    }

    &::after {
      content: '.';
      color: var(--color-2);
    }
  }
`
