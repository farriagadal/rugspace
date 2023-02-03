import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean
}

const getButtonData = ({ primary, secondary, tertiary }: ButtonProps) => {
  if (primary) {
    return {
      background: 'var(--color-2)',
      border: '1px solid var(--color-2)',
      fontWeight: '600',
      color: 'var(--color-1)',
      hover: {
        background: 'var(--color-1)',
        color: 'white',
        fontWeight: '400',
        border: '1px solid var(--color-2)',
      }
    }
  }
  if (secondary) {
    return {
      background: 'transparent',
      border: '1px solid white',
      fontWeight: '400',
      color: 'white',
      hover: {
        background: 'transparent',
        border: '1px solid white',
        fontWeight: '400',
        color: 'white',
      }
    }
  }

  return {
    background: 'var(--color-1)',
    border: '1px solid var(--color-2)',
    fontWeight: '400',
    color: 'white',
    hover: {
      background: 'var(--color-2)',
      color: 'var(--color-1)',
      fontWeight: '600',
      border: '1px solid var(--color-2)',
    }
  }
}

export default styled.button<ButtonProps>`
  margin-top: 35px;
  background: ${props => getButtonData(props)?.background};
  border: ${props => getButtonData(props)?.border};
  border-radius: 20px 0px;
  min-width: 200px;
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
  cursor: pointer;
  text-transform: uppercase;
  color: ${props => getButtonData(props)?.color};
  font-weight: ${props => getButtonData(props)?.fontWeight};

  &:hover {
    background: ${props => getButtonData(props)?.hover.background};
    color: ${props => getButtonData(props)?.hover.color};
    font-weight: ${props => getButtonData(props)?.hover.fontWeight};
  }

  &:active {
    filter: brightness(0.4);
  }

  span:first-child, svg:first-child {
    margin-right: 9px;
  }
`