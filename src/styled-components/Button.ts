import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean
}

export default styled.button<ButtonProps>`
  margin-top: 35px;
  background: ${props => props.primary ? 'var(--color-2)' : 'var(--color-1)'};
  border: 1px solid var(--color-2);
  border-radius: 20px 0px;
  min-width: 240px;
  padding: 0 30px;
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

  color: ${props => props.primary ? 'var(--color-1)' : 'white'};
  font-weight: ${props => props.primary ? '600' : '400'};

  &:hover {
    background: ${props => props.primary ? 'var(--color-1)' : 'var(--color-2)'};
    color: ${props => props.primary ? 'white' : 'var(--color-1)'};
    font-weight: ${props => props.primary ? '400' : '600'};
  }
`