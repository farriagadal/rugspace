import styled from 'styled-components'

export const Container = styled.div`
  /* border: solid 1px var(--color-2); */
  padding: 40px;
  box-shadow: 0px 30px 100px rgb(164 160 171 / 16%);
`

export const Box = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0;
    min-width: 160px;
  }
`

export const Input = styled.input`
  padding: 25px 20px;
  font-size: 18px;
  border-radius: 0;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  width: 100%;
  max-width: 500px;
  height: 58px;
  margin-right: 20px;

  &:focus, &:active {
    outline: none;
  }
`

export const ImageContainer = styled.div`
  display: grid;
  p {
    margin: auto;
    margin-top: 30px;
    padding: 50px 0;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin-top: 40px;

  img {
    object-fit: cover;
    max-height: 230px;
    min-height: 230px;
    width: 100%;
  }
`

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  .MuiPaginationItem-root {
    color: white;
  }
  
  .MuiPaginationItem-root.MuiButtonBase-root {
    color: white;

    &[aria-current="true"] {
      background-color: var(--color-2);
    }
  }
`
