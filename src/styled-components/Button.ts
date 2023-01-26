import styled from 'styled-components'

export default styled.div`
  margin-top: 35px;
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
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: var(--color-2);
  }
`