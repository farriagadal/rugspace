import styled from 'styled-components'

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  color: white;
  background: var(--color-1);
  margin-top: 70px;
`
export const Options = styled.div`
display: flex;
`

type ItemProps = {
  active: boolean
}

export const Item = styled.button<ItemProps>`
  background: ${props => props.active ? 'var(--color-2)' : 'var(--color-1)'};
  border: 1px solid var(--color-2);
  border-top-right-radius: 20px;
  width: 188px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-3);
  cursor: pointer;
`
export const Content = styled.div`
  margin-bottom: 130px;
`