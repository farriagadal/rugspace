import styled from 'styled-components'

type ContainerProps = {
  heigthSpinner: string
  heigth: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props?.heigth ? `${props.heigth}` : '200px')};
  width: 100%;
  img {
    height: ${(props) =>
    props?.heigthSpinner ? `${props.heigthSpinner}` : 'auto'};
    width: 90px;
    opacity: 0.4;
  }
`
