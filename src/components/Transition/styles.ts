import styled from 'styled-components'


export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-4);
  padding: 60px 0;
  position: relative;

  
  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
    display: grid;
    justify-items: center;
    justify-content: center;
    padding-bottom: 80px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: var(--color-5);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media only screen and (max-width: 765px) {
      bottom: 40px;
      text-align: center;
      width: 100%;
    }
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 765px) {
    margin: 20px 0;
  }

  a {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`