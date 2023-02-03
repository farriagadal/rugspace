import styled from 'styled-components'


export const Container = styled.div`
  position: fixed;
  bottom: -1px;
  left: 0;
  z-index: 1111;
  width: 100%;
  display: flex;
  background: var(--color-1);
  padding: 30px;
  box-shadow: 0px -20px 64px 0px rgb(164 160 171 / 16%);

  button {
    margin: 0;
  }

  button:first-child {
    /* border-top-left-radius: 8px;
    border-bottom-left-radius: 8px; */
    margin-left: auto;
    margin-right: 20px;
  }
`