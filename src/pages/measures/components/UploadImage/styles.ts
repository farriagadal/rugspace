import styled from 'styled-components'

export const Container = styled.div`
  /* border: solid 1px var(--color-2); */
  padding: 40px;
  box-shadow: 0px 30px 100px rgb(164 160 171 / 16%);

  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    border: 3px solid #ffffffc9;
    /* display: inline-block; */
    padding: 6px 12px;
    cursor: pointer;
    border-style: dashed;
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    font-size: 25px;
  }

  button {
    margin: auto;
    margin-top: 30px;

    label {
      display: flex;
      align-items: center;
    }
  }
`

export const Img = styled.div`
  display: flex;
  img {
    max-height: 400px;
    margin: auto;
  }
`