import styled from 'styled-components'

export const Container = styled.div`
  width: var(--content-width);
  margin: auto;
  text-align: center;

  h2 {
    font-size: 27px;
    color: white;
  }

  button {
    margin: auto;
  }
`
export const Background = styled.div`
  background: var(--color-1);
  padding: 138px 0px;
  position: relative;
  z-index: 1;
`