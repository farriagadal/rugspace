import styled from 'styled-components'

type ContainerProps = {
  active: boolean
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-1);
  border: solid 4px #535262;
  border-color: ${({ active }) => active ? 'var(--color-2)' : '#535262'};
  display: grid;
  justify-items: center;
  padding-bottom: 40px;
  box-shadow: 0px -20px 64px 0px rgb(164 160 171 / 16%);
  transition: all 0.2s;
  cursor: pointer;

  p {
    color: white;
    font-size: 21px;
    margin-top: 0;
  }

  &:hover {
    border-color: var(--color-2);
  }
`